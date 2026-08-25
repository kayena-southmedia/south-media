import { useEffect, useRef, useState } from "react";

type LiquidSphereProps = {
  src?: string;
  srcMobile?: string;
  className?: string;
  style?: React.CSSProperties;
  cycleMs?: number;
  intensity?: number;
  alt?: string;
};

const VERTEX_SRC = `
attribute vec2 aPos;
varying vec2 vUv;
void main(){
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform float uTime;
uniform float uAmp;
uniform float uPad;

vec3 hash3(vec3 p){
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}
float noise3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash3(i + vec3(0,0,0)).x;
  float n100 = hash3(i + vec3(1,0,0)).x;
  float n010 = hash3(i + vec3(0,1,0)).x;
  float n110 = hash3(i + vec3(1,1,0)).x;
  float n001 = hash3(i + vec3(0,0,1)).x;
  float n101 = hash3(i + vec3(1,0,1)).x;
  float n011 = hash3(i + vec3(0,1,1)).x;
  float n111 = hash3(i + vec3(1,1,1)).x;
  return mix(mix(mix(n000,n100,u.x), mix(n010,n110,u.x), u.y),
             mix(mix(n001,n101,u.x), mix(n011,n111,u.x), u.y), u.z);
}
float fbm(vec3 p){
  float v = 0.0, a = 0.5;
  for(int i = 0; i < 4; i++){ v += a * noise3(p); p *= 2.02; a *= 0.5; }
  return v;
}

vec4 sampleTex(vec2 uv){
  vec2 t = (uv - uPad) / (1.0 - 2.0 * uPad);
  if (t.x < 0.0 || t.x > 1.0 || t.y < 0.0 || t.y > 1.0) return vec4(0.0);
  return texture2D(uTex, t);
}

void main(){
  vec2 uv = vUv;
  float amp = max(uAmp, 0.0);

  if (amp <= 0.0005) { gl_FragColor = sampleTex(uv); return; }

  float t = uTime;

  vec3 q = vec3(uv * 2.6, t * 0.28);
  float w1 = fbm(q);
  float w2 = fbm(q + vec3(3.7, 1.3, 0.0));
  vec3 q2 = vec3(uv * 3.4 + vec2(w1, w2) * 1.1, t * 0.35 + 11.0);
  float n1 = fbm(q2) - 0.5;
  float n2 = fbm(q2 + vec3(19.1, 7.3, 0.0)) - 0.5;

  vec2 disp = vec2(n1, n2) * 0.085 * amp;

  float sag = smoothstep(0.75, 0.05, uv.y);
  float drip = smoothstep(0.55, 0.95, fbm(vec3(uv.x * 7.0, uv.y * 1.4 - t * 0.22, t * 0.12)));
  disp.y += (0.035 * sag + 0.055 * drip * sag) * amp;

  vec2 rel = uv - 0.5;
  float r = length(rel);
  float wobble = sin(t * 1.9 + r * 16.0) * 0.006 * amp;
  disp += normalize(rel + 1e-5) * wobble;

  vec2 suv = uv + disp;

  float ca = 0.0035 * amp;
  vec2 dir = normalize(rel + 1e-5);
  vec4 sr = sampleTex(suv + dir * ca);
  vec4 sg = sampleTex(suv);
  vec4 sb = sampleTex(suv - dir * ca);
  vec3 col = vec3(sr.r, sg.g, sb.b);
  float a = (sr.a + sg.a + sb.a) / 3.0;

  float aSharp = smoothstep(0.30, 0.70, a);
  a = mix(a, aSharp, amp * 0.85);

  float flowMag = clamp(length(vec2(n1, n2)) * 2.0, 0.0, 1.0);
  col += vec3(0.10, 0.045, 0.14) * flowMag * amp * a;

  gl_FragColor = vec4(col, a);
}
`;

const U_PAD = 0.16;
// Canvas precisa ser maior que a área visual da esfera: o shader mapeia a textura
// para o retângulo central (1 - 2*uPad) do canvas, então para a esfera aparecer
// no tamanho pretendido, o canvas é escalado por 1/(1-2*uPad).
const CANVAS_SCALE = 1 / (1 - 2 * U_PAD);

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function ampAt(p: number): number {
  if (p < 0.18) return 0;
  if (p < 0.42) return easeInOutCubic((p - 0.18) / (0.42 - 0.18));
  if (p < 0.62) return 1;
  if (p < 0.86) return 1 - easeInOutCubic((p - 0.62) / (0.86 - 0.62));
  return 0;
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("[LiquidSphere] shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function LiquidSphere({
  src = "/esfera-southmedia.png",
  srcMobile = "/esfera-southmedia-512.png",
  className,
  style,
  cycleMs = 11000,
  intensity = 1,
  alt = "",
}: LiquidSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [webglReady, setWebglReady] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  const activeSrc = isMobile ? srcMobile : src;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let destroyed = false;
    let raf = 0;
    let idleHandle: number | null = null;
    let idleTimeout: ReturnType<typeof setTimeout> | null = null;

    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let posBuffer: WebGLBuffer | null = null;
    let texture: WebGLTexture | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let uAmpLoc: WebGLUniformLocation | null = null;
    let uPadLoc: WebGLUniformLocation | null = null;

    let paused = false;
    let lastFrameTime = 0;
    let elapsedSeconds = 0;
    let dpr = Math.min(2, window.devicePixelRatio || 1);
    if (window.innerWidth < 768) dpr = Math.min(1.5, dpr);

    function resizeCanvas() {
      if (!gl || !canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const cssSize = Math.max(rect.width, rect.height) * CANVAS_SCALE;
      canvas.style.width = `${cssSize}px`;
      canvas.style.height = `${cssSize}px`;
      const backingSize = Math.max(1, Math.round(cssSize * dpr));
      if (canvas.width !== backingSize || canvas.height !== backingSize) {
        canvas.width = backingSize;
        canvas.height = backingSize;
        gl.viewport(0, 0, backingSize, backingSize);
      }
    }

    function setupTexture(image: HTMLImageElement) {
      if (!gl) return;
      if (!texture) texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }

    function drawFrame(now: number) {
      if (destroyed || paused) return;
      if (!lastFrameTime) lastFrameTime = now;
      const delta = (now - lastFrameTime) / 1000;
      lastFrameTime = now;
      elapsedSeconds += delta;

      if (gl && program) {
        const p = (elapsedSeconds % (cycleMs / 1000)) / (cycleMs / 1000);
        const amp = Math.max(0, ampAt(p)) * intensity;

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.uniform1f(uTimeLoc, elapsedSeconds);
        gl.uniform1f(uAmpLoc, amp);
        gl.uniform1f(uPadLoc, U_PAD);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        if (!webglReady) setWebglReady(true);
      }

      raf = requestAnimationFrame(drawFrame);
    }

    function startLoop() {
      if (paused || destroyed) return;
      lastFrameTime = 0;
      raf = requestAnimationFrame(drawFrame);
    }

    function stopLoop() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }

    function initGL() {
      if (destroyed || !canvas) return;
      gl = canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
        powerPreference: "low-power",
      });
      if (!gl) return;

      const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
      const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
      if (!vs || !fs) return;

      program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("[LiquidSphere] program link error:", gl.getProgramInfoLog(program));
        program = null;
        return;
      }
      gl.deleteShader(vs);
      gl.deleteShader(fs);

      posBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(program, "aPos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      uTimeLoc = gl.getUniformLocation(program, "uTime");
      uAmpLoc = gl.getUniformLocation(program, "uAmp");
      uPadLoc = gl.getUniformLocation(program, "uPad");

      const image = imgRef.current;
      if (image) {
        if (image.complete && image.naturalWidth > 0) {
          setupTexture(image);
        } else {
          image.addEventListener("load", () => setupTexture(image), { once: true });
        }
      }

      resizeCanvas();
      startLoop();
    }

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(container);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        paused = !visible || document.hidden;
        if (paused) stopLoop();
        else startLoop();
      },
      { threshold: 0.01 }
    );
    io.observe(container);

    const onVisibilityChange = () => {
      paused = document.hidden || paused;
      if (document.hidden) {
        paused = true;
        stopLoop();
      } else {
        paused = false;
        startLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onContextLost = (e: Event) => {
      e.preventDefault();
      stopLoop();
      setWebglReady(false);
    };
    const onContextRestored = () => {
      initGL();
    };
    canvas.addEventListener("webglcontextlost", onContextLost, false);
    canvas.addEventListener("webglcontextrestored", onContextRestored, false);

    idleHandle = null;
    if ("requestIdleCallback" in window) {
      idleHandle = (window as any).requestIdleCallback(initGL);
    } else {
      idleTimeout = setTimeout(initGL, 200);
    }

    return () => {
      destroyed = true;
      stopLoop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("webglcontextlost", onContextLost, false);
      canvas.removeEventListener("webglcontextrestored", onContextRestored, false);
      if (idleHandle !== null && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleHandle);
      }
      if (idleTimeout) clearTimeout(idleTimeout);

      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (posBuffer) gl.deleteBuffer(posBuffer);
        if (program) gl.deleteProgram(program);
        const loseCtx = gl.getExtension("WEBGL_lose_context");
        if (loseCtx) loseCtx.loseContext();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSrc, cycleMs, intensity]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", aspectRatio: "1", ...style }}
    >
      {/* Same-origin: sem crossOrigin. Se a imagem migrar para CDN, adicionar crossOrigin="anonymous". */}
      <img
        ref={imgRef}
        src={activeSrc}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: webglReady ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${CANVAS_SCALE * 100}%`,
          height: `${CANVAS_SCALE * 100}%`,
          pointerEvents: "none",
          opacity: webglReady ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      />
    </div>
  );
}
