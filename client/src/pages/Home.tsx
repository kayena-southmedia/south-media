import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_URL, LOGO_URL } from "@/components/Navbar";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/hero-bg-PRMUCCmLr5RpUYoHMYGayj.webp";

const clients = [
  "Nestlé", "Volvo", "Bradesco", "Santander", "LATAM Airlines", "Burger King",
  "Nivea", "Banco Pan", "Unimed", "Itaipu Binacional", "Paramount", "Betnacional",
  "Algar Telecom", "O Boticário", "GNT", "Beach Park", "Cielo", "Caoa Chery", "FIEP", "SEBRAE PR",
];

// Particle component for hero
function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `particle-float ${Math.random() * 8 + 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// SVG Icons
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconEye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconTrend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const IconPuzzle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z"/></svg>
);
const IconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);

export default function Home() {
  const scrollRef = useScrollAnimation();

  // Hero staggered animation
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-hero-animate]");
    children.forEach((child, i) => {
      const htmlChild = child as HTMLElement;
      htmlChild.style.opacity = "0";
      htmlChild.style.transform = "translateY(20px)";
      setTimeout(() => {
        htmlChild.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        htmlChild.style.opacity = "1";
        htmlChild.style.transform = "translateY(0)";
      }, i * 200);
    });
  }, []);

  return (
    <div ref={scrollRef}>
      <Navbar />

      {/* ===== SEÇÃO 1 — HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050008]/40 via-[#050008]/60 to-[#050008]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(155,0,255,0.15)_0%,transparent_50%)]" />
        </div>
        <HeroParticles />
        <div className="container relative z-10 py-16" ref={heroRef}>
          <div className="max-w-4xl">
            <span data-hero-animate className="pill-label mb-6 inline-block">AdTech Brasileira e Independente</span>
            <h1 data-hero-animate className="font-['Poppins'] font-extrabold text-white text-5xl md:text-7xl lg:text-[80px] leading-[1.05] mb-8">
              Mídia Programática.<br />
              <span className="bg-gradient-to-r from-[#9B00FF] via-[#FF4500] to-[#FFB800] bg-clip-text text-transparent">Resultados Reais.</span><br />
              Sem Desperdício.
            </h1>
            <p data-hero-animate className="text-[#ccc] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Conectamos sua marca a audiências reais com tecnologia proprietária,
              transparência total e otimização focada em performance.
              Pare de desperdiçar seu orçamento com impressões para bots e VPNs.
            </p>
            <div data-hero-animate className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !px-8 !py-5">
                Quero um Diagnóstico Estratégico
              </a>
              <Link href="/solucoes" className="btn-outline !text-lg !px-8 !py-5">
                Conheça Nossas Soluções
              </Link>
            </div>
            <div data-hero-animate className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "+30", label: "marcas líderes" },
                { value: "Nacional", label: "+ América Latina" },
                { value: "100%", label: "Tecnologia Proprietária" },
              ].map((seal) => (
                <div key={seal.label} className="glass-card px-5 py-4 text-center">
                  <span className="font-['Poppins'] font-extrabold text-white text-xl">{seal.value}</span>
                  <p className="text-[#888] text-sm">{seal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 — LOGOS DE CLIENTES ===== */}
      <section className="section-deep py-12 overflow-hidden">
        <div className="container mb-6">
          <p className="text-center text-[#888] text-sm font-['Poppins'] tracking-wider uppercase animate-on-scroll">
            Marcas líderes que confiam na nossa tecnologia
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...clients, ...clients].map((client, i) => (
              <span key={`${client}-${i}`} className="client-pill">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 3 — O PROBLEMA ===== */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">O Que Pode Estar Impedindo Seu Crescimento</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll">
              Muito investimento em mídia com pouca visibilidade sobre o que realmente funciona.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto animate-on-scroll">
              Sabemos que investir em mídia digital sem controle real é frustrante.
              Você merece transparência total. Não como promessa — como entrega.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <IconShield />, title: "FRAUDE PUBLICITÁRIA", desc: "Impressões para bots e VPNs. Dinheiro evaporado sem atingir pessoas reais." },
              { icon: <IconEye />, title: "CADEIA PROGRAMÁTICA OPACA", desc: "Intermediários excessivos sem rastreabilidade consumindo sua margem." },
              { icon: <IconTarget />, title: "GEO-TARGETING IMPRECISO", desc: "Campanhas regionais fora da área de interesse, desperdiçando alcance." },
              { icon: <IconTrend />, title: "CPA ELEVADO E IMPREVISÍVEL", desc: "Sem otimização inteligente, impossível escalar com previsibilidade." },
              { icon: <IconPuzzle />, title: "FRAGMENTAÇÃO DE FORNECEDORES", desc: "CTV, display, DOOH, áudio sem integração entre plataformas." },
              { icon: <IconChart />, title: "DIFICULDADE DE MENSURAÇÃO", desc: "Impossível atribuir conversões offline ao investimento digital." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-['Poppins'] font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 4 — O QUE O GESTOR SENTE ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">O Que o Gestor Sente Por Dentro</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 max-w-3xl mx-auto animate-on-scroll">
              &ldquo;O desafio não está em investir em mídia — está em provar, com clareza, o que ela realmente entrega de resultado.&rdquo;
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { emoji: "😤", title: "FRUSTRAÇÃO", desc: "Por investir orçamentos significativos sem comprovar retorno.", color: "#FF4500" },
              { emoji: "😰", title: "INSEGURANÇA", desc: "Por não saber se os números dos fornecedores são reais.", color: "#FF6B00" },
              { emoji: "😵", title: "SOBRECARGA", desc: "Por gerenciar múltiplos fornecedores e relatórios fragmentados.", color: "#9B00FF" },
              { emoji: "😓", title: "PRESSÃO", desc: "Por precisar justificar cada real investido perante a diretoria.", color: "#FFB800" },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center animate-on-scroll">
                <span className="text-4xl block mb-3">{item.emoji}</span>
                <h3 className="font-['Poppins'] font-bold text-base mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-[#ccc] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ccc] text-lg italic max-w-2xl mx-auto animate-on-scroll">
            &ldquo;Nenhuma empresa deve queimar orçamento com impressões que podem nunca ser vistas por humanos reais.&rdquo;
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 — O GUIA ===== */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)" }}>A South Media Entende Sua Necessidade e Te Ajuda com os Resultados</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll">
              Nascemos da insatisfação com um mercado opaco e cheio de intermediários.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto animate-on-scroll">
              Sabemos que investir em mídia digital sem controle real é frustrante.
              Você merece transparência total e performance comprovável.
              Não como promessa — como entrega.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "+30", label: "marcas líderes", sub: "Nestlé, Volvo, Bradesco, Santander, LATAM e mais" },
              { value: "+193%", label: "de aumento em conversões", sub: "Resultado médio em campanhas" },
              { value: "+1.330", label: "publishers CTV no Brasil", sub: "Maior inventário de TV Conectada" },
              { value: "3X", label: "camada de verificação", sub: "Double Verify + Anti-VPN + Double Check" },
            ].map((item) => (
              <div key={item.label} className="bg-white/95 rounded-2xl p-6 text-center animate-on-scroll">
                <span className="font-['Poppins'] font-extrabold text-3xl text-[#050008]">{item.value}</span>
                <p className="font-['Poppins'] font-bold text-[#050008] text-sm mt-1">{item.label}</p>
                <p className="text-[#666] text-xs mt-2">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 6 — SOLUÇÕES ===== */}
      <section className="relative py-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-[#0d0015]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,0,255,0.1)_0%,transparent_60%)]" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Nossa AdTech é a Solução Perfeita para o Sucesso das Suas Campanhas</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll">
              Programática orientada por dados, feita para gerar resultados reais.
            </h2>
            <p className="text-[#ccc] text-lg animate-on-scroll">One Stop Shop Programático — Sem fragmentação. Sem intermediários.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Display", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
              { name: "CTV", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg> },
              { name: "Publishers Regionais", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
              { name: "Drive to Store", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
              { name: "Audience Insights", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { name: "Household Sync", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { name: "App Marketing & SMS", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
              { name: "Push", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
              { name: "DOOH", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="12" rx="1"/><path d="M7 21h10"/><path d="M9 15v6"/><path d="M15 15v6"/></svg> },
              { name: "Spotify", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
              { name: "TikTok Remarketing", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg> },
              { name: "In-Games", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg> },
            ].map((item) => (
              <div key={item.name} className="glass-card p-4 text-center animate-on-scroll group">
                <div className="w-12 h-12 rounded-full bg-[#1a0035] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#2D0057] transition-colors">
                  {item.icon}
                </div>
                <p className="font-['Poppins'] font-medium text-white text-xs uppercase tracking-wide">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta">
              Solicitar Proposta Personalizada
            </a>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 7 — O PLANO ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Executamos 3 Passos para Garantir Resultado Mensurável</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll">
              Três passos para transformar seu investimento em crescimento real.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 items-start">
            {[
              { n: "01", title: "DIAGNÓSTICO ESTRATÉGICO", desc: "Auditamos suas campanhas atuais. Identificamos desperdícios e mapeamos oportunidades de crescimento com dados reais." },
              { n: "02", title: "ESTRATÉGIA SOB MEDIDA", desc: "Desenhamos um plano com as soluções certas para seus objetivos — CTV, display, áudio, app marketing ou a combinação ideal." },
              { n: "03", title: "EXECUÇÃO E RESULTADO", desc: "Ativamos com tecnologia proprietária, otimização contínua e relatórios transparentes. Você acompanha cada centavo em tempo real." },
            ].map((step, i) => (
              <div key={step.n} className="flex flex-col items-center text-center animate-on-scroll">
                <div className="flex items-center gap-4 mb-6 w-full justify-center">
                  {i > 0 && <span className="text-[#FF4500] font-bold text-3xl hidden md:block">&larr;</span>}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6B00B6] to-[#FF4500] flex items-center justify-center shrink-0">
                    <span className="font-['Poppins'] font-extrabold text-white text-2xl">{step.n}</span>
                  </div>
                  {i < 2 && <span className="text-[#FF4500] font-bold text-3xl hidden md:block">&rarr;</span>}
                </div>
                <h3 className="font-['Poppins'] font-bold text-[#FF4500] text-lg mb-3">{step.title}</h3>
                <p className="text-[#ccc] text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 8 — ANTES/DEPOIS ===== */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Da Falta de Controle para o Crescimento Previsível</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll">
              Compare os resultados antes e depois das estratégias South Media.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ANTES */}
            <div className="rounded-2xl overflow-hidden animate-on-scroll">
              <div className="bg-gradient-to-br from-[#6B00B6] to-[#FF4500] p-4 text-center">
                <h3 className="font-['Poppins'] font-extrabold text-white text-xl">ANTES DA SOUTH MEDIA</h3>
              </div>
              <div className="bg-[rgba(255,69,0,0.08)] p-6 space-y-3 border border-[rgba(255,69,0,0.2)] border-t-0 rounded-b-2xl">
                {[
                  "Investimento no escuro",
                  "Múltiplos fornecedores fragmentados",
                  "Impressões para bots e VPNs",
                  "CPA elevado e imprevisível",
                  "Dificuldade em provar resultados",
                  "Frustração e insegurança",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    <span className="text-[#ccc] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* DEPOIS */}
            <div className="rounded-2xl overflow-hidden animate-on-scroll">
              <div className="bg-gradient-to-br from-[#6B00B6] to-[#9B00FF] p-4 text-center">
                <h3 className="font-['Poppins'] font-extrabold text-white text-xl">DEPOIS DA SOUTH MEDIA</h3>
              </div>
              <div className="bg-[rgba(155,0,255,0.08)] p-6 space-y-3 border border-[rgba(155,0,255,0.2)] border-t-0 rounded-b-2xl">
                {[
                  "Controle total com dashboards em tempo real",
                  "Um parceiro estratégico centralizado",
                  "Audiências reais com verificação tripla",
                  "Otimização contínua com CPA reduzido comprovadamente",
                  "KPIs claros e relatórios transparentes para a diretoria",
                  "Confiança, previsibilidade e crescimento",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B00FF" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[#ccc] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 9 — CASES/RESULTADOS ===== */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)" }}>Cases e Resultados Reais</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll">
              Resultados que comprovam a estratégia.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "+193%", label: "conversões", company: "Empresa de Tecnologia",
                detail: "Investimento 58% maior diluído em CTV, Display e remarketing. +86% cliques, +93% CTR, +193% conversões. Expansão América Latina.",
              },
              {
                metric: "+600%", label: "CTR", company: "App Marketing",
                detail: "BlaBlaCar — +4.700 downloads, 107% taxa de conversão, 3.2K post click events, 40% redução CPC.",
              },
              {
                metric: "93,7%", label: "Taxa de Conclusão", company: "Escola de Idiomas",
                detail: "Spotify — CPE R$0,15 mantido, 154k escutas completas, +23,3% sobre-entrega.",
              },
            ].map((c) => (
              <div key={c.company} className="overflow-hidden rounded-2xl animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="bg-gradient-to-br from-[#6B00B6] to-[#FF4500] p-6 text-center">
                  <span className="font-['Poppins'] font-extrabold text-white text-5xl">{c.metric}</span>
                  <p className="text-white/80 text-sm">{c.label}</p>
                </div>
                <div className="p-6">
                  <h3 className="font-['Poppins'] font-bold text-white mb-2">{c.company}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link href="/resultados" className="text-white font-['Poppins'] font-bold text-lg hover:text-[#FFB800] transition-colors">
              Ver todos os resultados &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 10 — RISCO DE NÃO AGIR ===== */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)" }}>O Risco de Não Agir</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll">
              Sem uma estratégia adequada, o cenário é este:
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto animate-on-scroll">
              Cada dia sem transparência e controle real é um dia de orçamento desperdiçado e oportunidades perdidas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "QUEIMA DE ORÇAMENTO",
                desc: "Investimento consumido por impressões fraudulentas e intermediários sem valor.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              },
              {
                title: "PERDA DE COMPETITIVIDADE",
                desc: "Concorrentes com tecnologia avançada capturam sua audiência.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/><path d="M3 21h18"/><path d="M17 16l4 5M7 16l-4 5"/></svg>
              },
              {
                title: "FRAGMENTAÇÃO DA OPERAÇÃO",
                desc: "Múltiplos fornecedores sem integração geram ineficiência.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><path d="M10 6h4M6 10v4M18 10v4M10 18h4" strokeDasharray="2 2"/></svg>
              },
              {
                title: "FALHA NA COMPROVAÇÃO DE ROI",
                desc: "Impossibilidade de justificar investimentos perante a diretoria.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/><line x1="2" y1="2" x2="22" y2="22" strokeDasharray="3 3" opacity="0.4"/></svg>
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/95 rounded-2xl p-6 animate-on-scroll">
                <div className="mb-3">
                  {item.icon}
                </div>
                <h3 className="font-['Poppins'] font-bold text-[#FF4500] text-base mb-2">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 11 — CTA FINAL ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0035] to-[#2D0057]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,0,255,0.4)_0%,transparent_60%)]" />
        <div className="container relative z-10 text-center">
          <img src={LOGO_URL} alt="South Media" className="h-20 w-auto mx-auto mb-8 animate-on-scroll" />
          <h2 className="font-['Poppins'] font-extrabold text-white text-3xl md:text-5xl mb-6 animate-on-scroll">
            Pronto para transformar sua estratégia de mídia?
          </h2>
          <p className="text-[#ccc] text-lg max-w-2xl mx-auto mb-10 animate-on-scroll">
            Descubra como aplicar nossa estratégia nas suas operações.
            Receba um diagnóstico estratégico e identifique oportunidades reais de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !px-10 !py-5">
              Quero Minha Proposta Estratégica
            </a>
            <button className="btn-outline !text-lg !px-8 !py-5">
              Baixe Nossa Apresentação
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
