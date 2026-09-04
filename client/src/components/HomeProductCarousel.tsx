import { useEffect, useState } from "react";
import { Link } from "wouter";
import { track } from "@/lib/tracking";
import { showcase } from "@/data/showcase";

const AUTO_ADVANCE_MS = 8000;

const ICONS: Record<string, React.ReactNode> = {
  tv: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>,
  pin: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  billboard: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="18" height="12" rx="1" /><line x1="7" y1="19" x2="17" y2="19" /><line x1="12" y1="15" x2="12" y2="19" /><line x1="5" y1="22" x2="19" y2="22" /></svg>,
  play: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><polygon points="10 8 16 12 10 16 10 8" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>,
  audio: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>,
};

export default function HomeProductCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % showcase.length), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = showcase[active];

  return (
    <div
      className="relative glass-card overflow-hidden animate-on-scroll"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-2">
        {/* Conteúdo */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="font-['Inter'] font-bold text-white text-2xl md:text-3xl mb-4 text-balance">
            {slide.nome}
          </h3>
          <p className="text-white/80 text-base leading-relaxed mb-6">{slide.frase}</p>

          <div className="space-y-4 mb-8">
            <div>
              <span className="block text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1">Quando usar</span>
              <p className="text-white/80 text-sm leading-relaxed">{slide.quandoUsar}</p>
            </div>
            <div>
              <span className="block text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1">Objetivo principal</span>
              <p className="text-white/90 text-sm font-semibold">{slide.objetivoPrincipal}</p>
            </div>
            <div>
              <span className="block text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1">
                {slide.isCaseReal ? "Case real" : "Aplicação prática"}
              </span>
              <p className="text-white/80 text-sm leading-relaxed">{slide.aplicacaoPratica}</p>
            </div>
          </div>

          <Link
            href={`/solucoes#${slide.solucaoId}`}
            onClick={() => track("solution_click", { placement: "home_showcase_carousel", solucao: slide.solucaoId })}
            className="btn-cta self-start"
          >
            Conhecer solução
          </Link>
        </div>

        {/* Visual */}
        <div className="relative min-h-[260px] lg:min-h-0 flex items-center justify-center bg-gradient-to-br from-[rgba(127,49,184,0.25)] to-[rgba(244,85,4,0.2)] p-10">
          <div aria-hidden="true" className="glow-edge-orange" style={{ width: 260, height: 260, top: "-10%", right: "-10%" }} />
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-black/40 border border-white/15 backdrop-blur-sm flex items-center justify-center relative z-10">
            {ICONS[slide.icon]}
          </div>
        </div>
      </div>

      {showcase.length > 1 && (
        <div className="absolute bottom-5 left-8 md:left-12 z-20 flex items-center gap-2">
          {showcase.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Ver ${s.nome}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-[#F45504]" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
