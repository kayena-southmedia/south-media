import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LOGO_URL } from "@/components/Navbar";
import { WA_HOME_HERO, WA_HOME_MID } from "@/lib/whatsapp";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import EbookModal from "@/components/EbookModal";


const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/hero-bg-PRMUCCmLr5RpUYoHMYGayj.webp";

const clients = [
  "Nestlé", "Volvo", "Bradesco", "Santander", "LATAM Airlines", "Burger King",
  "Nivea", "Banco Pan", "Unimed", "Itaipu Binacional", "Paramount", "Betnacional",
  "Algar Telecom", "O Boticário", "GNT", "Beach Park", "Cielo", "Caoa Chery", "FIEP", "SEBRAE PR",
  "Copacol", "Minhoto", "Sonho", "Bem-Te-Vi", "Moura Dubeux", "Sebrae",
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

export default function Home() {
  const scrollRef = useScrollAnimation();
  const [ebookModalOpen, setEbookModalOpen] = useState(false);

// Auto-popup: abre o modal do ebook após 15s se não foi exibido nesta sessão
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("ebookPopupShown")) {
        setEbookModalOpen(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

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
      <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="South Media - Mídia programática com tecnologia proprietária" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050008]/40 via-[#050008]/60 to-[#050008]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(155,0,255,0.15)_0%,transparent_50%)]" />
        </div>
        <HeroParticles />
        <div className="container relative z-10 py-16 flex-1 flex items-center" ref={heroRef}>
          <div className="max-w-4xl">
            <span data-hero-animate className="pill-label mb-6 inline-block">AdTech Brasileira e Independente</span>
            <h1 data-hero-animate className="font-['Poppins'] font-extrabold text-white text-5xl md:text-7xl lg:text-[80px] leading-[1.05] mb-8 text-balance">
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
              <a href={WA_HOME_HERO} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !px-8 !py-5">
                Diagnóstico gratuito
              </a>
              <Link href="/solucoes" className="btn-outline !text-lg !px-8 !py-5">
                Conheça Nossas Soluções
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 pb-10">
          <div className="container mb-4">
            <p className="text-center text-[#888] text-sm font-['Poppins'] tracking-wider uppercase animate-on-scroll">
              Marcas que confiam
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, i) => (
                <span key={`${client}-${i}`} className="client-pill">{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 3 — CENÁRIO PROGRAMÁTICO ===== */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">O Cenário Programático</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              O mercado mudou. A mídia digital evoluiu. Sua estratégia também precisa.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto animate-on-scroll">
              O programático deixou de ser tendência e virou o padrão. Entender esse novo
              cenário é o que separa quem desperdiça de quem cresce.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: "CRESCIMENTO PROGRAMÁTICO", desc: "O mercado de mídia programática cresce cerca de 25% ao ano no Brasil. Mais de 90% do investimento em display digital já é comprado de forma programática." },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>, title: "CTV EM EXPANSÃO ACELERADA", desc: "A Connected TV é o canal que mais cresce no país. Milhões de lares assistem streaming todo dia — e o inventário premium está aqui." },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>, title: "CONSUMIDOR EM MÚLTIPLAS TELAS", desc: "TV, mobile, computador e DOOH usados ao mesmo tempo. Campanhas fragmentadas perdem eficiência — a integração é o diferencial." },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "FRAUDE E DESPERDÍCIO CRESCENTES", desc: "Impressões entregues a bots e usuários de VPN drenam budget sem gerar resultado real. Verificação deixou de ser opcional." },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: "OPACIDADE DA CADEIA TRADICIONAL", desc: "Intermediários em excesso consomem margem e escondem dados. O gestor moderno exige transparência total e relatórios auditáveis." },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, title: "ONE STOP SHOP COMO VANTAGEM", desc: "Consolidar CTV, display, DOOH, áudio e location em um único parceiro reduz custo operacional e abre espaço para otimização cruzada." },
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

      {/* ===== SEÇÃO 4 — ANTI-VPN TECH (tecnologia proprietária) ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Tecnologia Proprietária</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              Anti-VPN Tech: você paga por pessoas reais, não por VPNs.
            </h2>
            <p className="text-white/80 text-base max-w-3xl mx-auto animate-on-scroll">
              É a nossa tag proprietária — desenvolvida internamente, 100% nossa, e uma
              inovação exclusiva no mercado brasileiro. Enquanto boa parte do mercado depende
              só de ferramentas de terceiros, essa nós criamos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: "DETECTA", desc: "Identifica em tempo real quem usa VPN para mascarar a localização real." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>, title: "BLOQUEIA", desc: "Impede que sua verba escorra em impressões fora da área de interesse." },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: "PROTEGE", desc: "Suas campanhas regionais entregam onde importa: pessoas reais, no lugar certo." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#1a0035] flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-['Poppins'] font-bold text-[#FF4500] text-base mb-2">{item.title}</h3>
                <p className="text-[#ccc] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ccc] text-lg italic max-w-2xl mx-auto animate-on-scroll">
            &ldquo;A verificação que o mercado terceiriza, a nossa está no nosso próprio&nbsp;código.&rdquo;
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 — O GUIA ===== */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)" }}>A South Media Entende Sua Necessidade e Te Ajuda com os Resultados</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              Nascemos da insatisfação com um mercado opaco e cheio de intermediários.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto animate-on-scroll">
              Sabemos que investir em mídia digital sem controle real é frustrante.
              Você merece transparência total e performance comprovável.
              Não&nbsp;como&nbsp;promessa&nbsp;—&nbsp;como&nbsp;entrega.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "+30", label: "marcas líderes", sub: "Nestlé, Volvo, Bradesco, Santander, LATAM e mais" },
              { value: "+40.000", label: "publishers premium", sub: "Display, vídeo e nativo em ambientes verificados" },
              { value: "+1.330", label: "publishers CTV no Brasil", sub: "CTV, OTT e streaming premium" },
              { value: "7 praças", label: "presença nacional", sub: "PR · SC · SP · RJ · DF · MG · Recife" },
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
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
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
            <a href={WA_HOME_MID} target="_blank" rel="noopener noreferrer" className="btn-cta">
              Quero ver no meu caso
            </a>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 7 — O PLANO ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Executamos 3 Passos para Garantir Resultado Mensurável</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
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

      {/* ===== SEÇÃO EBOOK GRATUITO ===== */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#FF4500] text-xs font-bold uppercase tracking-widest mb-4 inline-block animate-on-scroll">Ebook Gratuito</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              Material gratuito para gestores B2B
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-on-scroll">
              <img
                src="/images/ebooks/ebook-7-sinais-desperdicio.png"
                alt="Ebook: 7 Sinais de Desperdício no Seu Orçamento de Mídia Programática"
                className="max-w-xs w-full rounded-2xl shadow-2xl shadow-purple-900/50"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="font-['Poppins'] font-bold text-white text-2xl mb-4 text-balance">
                7 Sinais de Desperdício no Seu Orçamento de Mídia Programática
              </h3>
              <p className="text-[#aaa] text-base leading-relaxed mb-6">
                Como identificar os vazamentos invisíveis que estão queimando seu investimento antes que o trimestre acabe.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Identifique os 7 vazamentos invisíveis que consomem até 30% do seu budget",
                  "Aplique o checklist completo de auditoria que usamos em clientes enterprise",
                  "Reduza CAC e aumente ROAS com ajustes que você implementa essa semana",
                  "Material gratuito baseado em 50+ campanhas auditadas pela South Media",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#FF4500] font-bold text-lg leading-tight shrink-0">✓</span>
                    <span className="text-[#ccc] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setEbookModalOpen(true)} className="btn-cta">
                Quero o guia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 8 — ANTES/DEPOIS ===== */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Da Falta de Controle para o Crescimento Previsível</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
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
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
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

      {/* ===== SEÇÃO 11 — CTA FINAL ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0035] to-[#2D0057]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,0,255,0.4)_0%,transparent_60%)]" />
        <div className="container relative z-10 text-center">
          <img src={LOGO_URL} alt="South Media" className="h-20 w-auto mx-auto mb-8 animate-on-scroll" />
          <h2 className="font-['Poppins'] font-extrabold text-white text-3xl md:text-5xl mb-6 animate-on-scroll text-balance">
            Pronto para transformar sua estratégia de mídia?
          </h2>
          <p className="text-[#ccc] text-lg max-w-2xl mx-auto mb-10 animate-on-scroll">
            Descubra como aplicar nossa estratégia nas suas operações.
            Receba um diagnóstico estratégico e identifique oportunidades reais de crescimento.
          </p>
          <div className="flex justify-center animate-on-scroll">
            <a href={WA_HOME_MID} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !px-10 !py-5">
              Quero resultados parecidos
            </a>
          </div>
        </div>
      </section>

      <EbookModal open={ebookModalOpen} onOpenChange={setEbookModalOpen} />

      <Footer />
    </div>
  );
}
