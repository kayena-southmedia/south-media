import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WHATSAPP_URL } from "@/components/Navbar";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/about-bg-DGhvBv8YMG5wTFu3V2z7Dz.webp";

const clients = [
  "Nestlé", "Volvo", "Bradesco", "Santander", "LATAM Airlines", "Burger King",
  "Nivea", "Banco Pan", "Unimed PR", "Unimed SP", "Unimed BH", "Itaipu Binacional",
  "Paramount", "FIEP", "Betnacional", "Algar Telecom", "GNT", "Caoa Chery",
  "O Boticário", "SEBRAE PR", "Beach Park", "Cielo", "Home Doctor", "Hidrabene", "Cuponomia",
];

// South America map locations with approximate SVG coordinates
const mapLocations = [
  { name: "São Paulo", x: 295, y: 340, color: "#FF6B00", r: 8 },
  { name: "Pernambuco", x: 355, y: 230, color: "#FFB800", r: 7 },
  { name: "Paraná", x: 280, y: 365, color: "#FF4500", r: 7 },
  { name: "Santa Catarina", x: 275, y: 385, color: "#9B00FF", r: 6 },
  { name: "Buenos Aires", x: 230, y: 430, color: "#FF4500", r: 7 },
  { name: "Assunção", x: 255, y: 370, color: "#9B00FF", r: 6 },
  { name: "Santiago", x: 175, y: 420, color: "#FFB800", r: 6 },
  { name: "Lima", x: 155, y: 290, color: "#FF6B00", r: 6 },
];

export default function Sobre() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050008]/50 to-[#050008]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="pill-label mb-6 inline-block animate-on-scroll">Quem Somos</span>
            <h1 className="font-['Poppins'] font-extrabold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll">
              AdTech Brasileira<br />e Independente.
            </h1>
            <p className="text-[#ccc] text-lg md:text-xl max-w-2xl leading-relaxed animate-on-scroll">
              Nascemos da insatisfação com um mercado opaco e cheio de intermediários.
              Existimos para provar que é possível fazer mídia programática com transparência total,
              tecnologia própria e resultados comprováveis.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-6">
              Nascemos da insatisfação com um mercado opaco.
            </h2>
            <p className="text-[#ccc] text-lg leading-relaxed">
              A South Media nasceu da frustração com um ecossistema programático
              cheio de intermediários, sem transparência e com orçamentos sendo consumidos
              por impressões que nunca chegam a humanos reais. Criamos nossa própria tecnologia
              para mudar essa realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                ),
                text: "Conectar marcas a audiências reais com tecnologia proprietária, transparência total e performance comprovável.",
              },
              {
                title: "Visão",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9B00FF" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                ),
                text: "Ser a referência em mídia programática no Brasil e LATAM, provando que tecnologia independente gera resultados superiores.",
              },
              {
                title: "Valores",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFB800" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ),
                text: "Transparência, Inovação, Performance, Responsabilidade, Parceria Estratégica.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-8 text-center animate-on-scroll">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-['Poppins'] font-bold text-white text-2xl mb-4">{item.title}</h3>
                <p className="text-[#ccc] text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Independente */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Por Que Independente?</span>
              <h2 className="font-['Poppins'] font-bold text-white text-3xl mb-6">
                Sem dependência de ad networks ou intermediários
              </h2>
              <p className="text-[#ccc] text-base leading-relaxed">
                Ser independente significa que não temos conflito de interesse. Nossa tecnologia
                é 100% proprietária — não dependemos de DSPs de terceiros, ad networks ou
                intermediários que consomem margem do seu investimento. Isso se traduz em
                mais controle, mais transparência e mais resultado para você.
              </p>
            </div>
            <div className="animate-on-scroll">
              <div className="space-y-8">
                <div className="glass-card p-6" style={{ borderColor: "rgba(255, 69, 0, 0.4)" }}>
                  <p className="font-['Poppins'] font-bold text-[#FF4500] text-sm mb-4 uppercase tracking-wider">Cadeia Tradicional</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {["Anunciante", "Agência", "Trading Desk", "DSP", "SSP", "Publisher"].map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-[rgba(255,69,0,0.15)] border border-[rgba(255,69,0,0.3)] text-[#FF4500] font-medium">{step}</span>
                        {i < 5 && <span className="text-[#FF4500]">&rarr;</span>}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#888] text-xs mt-3">Múltiplos intermediários = menos controle, mais custo</p>
                </div>
                <div className="glass-card p-6" style={{ borderColor: "rgba(155, 0, 255, 0.5)" }}>
                  <p className="font-['Poppins'] font-bold text-[#9B00FF] text-sm mb-4 uppercase tracking-wider">South Media</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {["Anunciante", "South Media DSP", "Publisher"].map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-[rgba(155,0,255,0.15)] border border-[rgba(155,0,255,0.3)] text-[#9B00FF] font-medium">{step}</span>
                        {i < 2 && <span className="text-[#9B00FF]">&rarr;</span>}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#888] text-xs mt-3">Menos camadas = mais controle, mais resultado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia Proprietária */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Nossa Tecnologia Proprietária</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl">
              Criamos nossas próprias ferramentas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "DOUBLE VERIFY", desc: "Verificação de viewability, brand safety e tráfego inválido." },
              { title: "ANTI-VPN TECH", desc: "Identifica e bloqueia impressões de VPNs e proxies." },
              { title: "DOUBLE CHECK", desc: "Auditoria prévia de inventário antes das campanhas." },
              { title: "OTIMIZAÇÃO REAL-TIME", desc: "Algoritmos que otimizam lances em tempo real." },
              { title: "AD TECH CORE", desc: "DSP 100% brasileira e independente." },
              { title: "GEO INTELLIGENCE", desc: "Inteligência geográfica para campanhas regionais." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 animate-on-scroll">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B00B6] to-[#9B00FF] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="font-['Poppins'] font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-[#ccc] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presença Geográfica - Mapa da América do Sul */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Presença Geográfica</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl">
              Presença nacional estratégica com expansão<br className="hidden md:block" /> para toda a América Latina
            </h2>
          </div>
          <div className="max-w-2xl mx-auto animate-on-scroll">
            {/* South America Map SVG */}
            <svg viewBox="0 0 500 600" className="w-full max-w-[500px] mx-auto" xmlns="http://www.w3.org/2000/svg">
              {/* South America outline */}
              <path d="M280 30 L310 35 L340 50 L360 70 L375 95 L385 120 L390 145 L388 170 L380 195 L370 215 L365 235 L360 250 L355 265 L350 275 L348 290 L350 305 L355 320 L358 335 L355 350 L345 365 L330 380 L315 395 L305 410 L298 425 L290 440 L280 455 L268 468 L255 478 L242 485 L230 490 L220 492 L210 490 L200 485 L192 478 L188 468 L185 455 L182 440 L180 425 L178 410 L175 395 L170 380 L162 365 L155 350 L148 335 L142 320 L138 305 L135 290 L133 275 L132 260 L130 245 L128 230 L125 215 L120 200 L115 185 L110 170 L108 155 L110 140 L115 125 L122 110 L130 95 L140 82 L152 70 L165 60 L180 52 L195 46 L210 42 L225 38 L240 35 L258 32 Z"
                fill="rgba(155,0,255,0.08)" stroke="rgba(155,0,255,0.35)" strokeWidth="1.5" />

              {/* Country borders (simplified) */}
              {/* Colombia/Venezuela border area */}
              <path d="M165 60 L195 80 L220 85 L250 75 L280 70 L310 75 L340 85" fill="none" stroke="rgba(155,0,255,0.15)" strokeWidth="0.8" strokeDasharray="4 3" />
              {/* Peru/Bolivia border */}
              <path d="M128 230 L160 250 L185 260 L210 270 L235 280 L260 290" fill="none" stroke="rgba(155,0,255,0.15)" strokeWidth="0.8" strokeDasharray="4 3" />
              {/* Chile/Argentina border */}
              <path d="M175 300 L178 340 L180 380 L182 420 L185 455 L188 468" fill="none" stroke="rgba(155,0,255,0.15)" strokeWidth="0.8" strokeDasharray="4 3" />
              {/* Brazil western border */}
              <path d="M260 90 L250 130 L240 170 L235 210 L240 250 L250 290 L260 330 L270 360 L280 390" fill="none" stroke="rgba(155,0,255,0.15)" strokeWidth="0.8" strokeDasharray="4 3" />
              {/* Paraguay area */}
              <path d="M250 330 L270 340 L280 360 L270 375 L250 370 Z" fill="rgba(155,0,255,0.05)" stroke="rgba(155,0,255,0.15)" strokeWidth="0.8" strokeDasharray="4 3" />

              {/* Glow filter */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glowSmall" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines between locations */}
              <line x1="295" y1="340" x2="355" y2="230" stroke="rgba(155,0,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="295" y1="340" x2="280" y2="365" stroke="rgba(155,0,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="295" y1="340" x2="275" y2="385" stroke="rgba(155,0,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="295" y1="340" x2="230" y2="430" stroke="rgba(155,0,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="295" y1="340" x2="255" y2="370" stroke="rgba(155,0,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="230" y1="430" x2="175" y2="420" stroke="rgba(155,0,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="175" y1="420" x2="155" y2="290" stroke="rgba(155,0,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Location dots with pulse animation and labels */}
              {mapLocations.map((loc) => (
                <g key={loc.name}>
                  {/* Outer pulse ring */}
                  <circle cx={loc.x} cy={loc.y} r={loc.r + 6} fill="none" stroke={loc.color} strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values={`${loc.r};${loc.r + 14};${loc.r}`} dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  {/* Inner glow */}
                  <circle cx={loc.x} cy={loc.y} r={loc.r} fill={loc.color} filter="url(#glow)" opacity="0.9">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* Core dot */}
                  <circle cx={loc.x} cy={loc.y} r={loc.r * 0.5} fill="white" opacity="0.9" />
                  {/* Label */}
                  <text
                    x={loc.x + loc.r + 8}
                    y={loc.y + 4}
                    fill="#ccc"
                    fontSize="11"
                    fontFamily="Poppins"
                    fontWeight="500"
                  >
                    {loc.name}
                  </text>
                </g>
              ))}

              {/* Legend */}
              <g transform="translate(20, 530)">
                <circle cx="8" cy="0" r="4" fill="#FF4500" />
                <text x="18" y="4" fill="#888" fontSize="10" fontFamily="Poppins">Brasil</text>
                <circle cx="80" cy="0" r="4" fill="#9B00FF" />
                <text x="90" y="4" fill="#888" fontSize="10" fontFamily="Poppins">LATAM</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4">
              +30 Marcas Líderes Já Confiam na Nossa Tecnologia
            </h2>
            <p className="text-[#ccc] text-base max-w-2xl mx-auto">
              Presença nacional estratégica com expansão para toda a América Latina,
              atendendo marcas em São Paulo, Pernambuco, Paraná, Santa Catarina,
              Buenos Aires, Assunção, Santiago e Lima.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
            {clients.map((client) => (
              <span key={client} className="client-pill">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Poppins'] font-extrabold text-white text-3xl md:text-5xl mb-6 animate-on-scroll">
            Conheça nossa tecnologia de perto.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !text-lg !px-10 !py-5 animate-on-scroll inline-flex"
          >
            Quero um Diagnóstico Estratégico
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
