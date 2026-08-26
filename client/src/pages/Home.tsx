import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiquidSphere from "@/components/LiquidSphere";
import ScheduleForm from "@/components/ScheduleForm";
import FaqAccordion from "@/components/FaqAccordion";
import StickyCta from "@/components/StickyCta";
import EbookModal from "@/components/EbookModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/hero-bg-PRMUCCmLr5RpUYoHMYGayj.webp";

const clients = [
  "Nestlé", "Volvo", "Bradesco", "Santander", "LATAM Airlines", "Burger King",
  "Nivea", "Banco Pan", "Unimed", "Itaipu Binacional", "Paramount", "Betnacional",
  "Algar Telecom", "O Boticário", "GNT", "Beach Park", "Cielo", "Caoa Chery", "FIEP", "SEBRAE PR",
  "Copacol", "Minhoto", "Sonho", "Bem-Te-Vi", "Moura Dubeux", "Sebrae",
];

const provaNumeros = [
  { value: "+30", label: "marcas líderes", sub: "Nestlé, Volvo, Bradesco, Santander, LATAM e mais" },
  { value: "+40.000", label: "publishers premium", sub: "Display, vídeo e nativo em ambientes verificados" },
  { value: "+1.330", label: "publishers de CTV no Brasil", sub: "CTV, OTT e streaming premium" },
  { value: "7", label: "praças principais", sub: "PR · SC · SP · RJ · DF · MG · PE" },
];

const problemas = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Verba que não chega em gente.",
    desc: "Impressão entregue a bot ou a usuário mascarado por VPN é verba gasta sem nenhuma chance de resposta. Ela some do resultado, não do relatório.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <line x1="8.5" y1="7.5" x2="10.5" y2="15.5" />
        <line x1="15.5" y1="7.5" x2="13.5" y2="15.5" />
      </svg>
    ),
    title: "Fornecedor demais, leitura de menos.",
    desc: "Um parceiro por canal, um formato de relatório por parceiro, e nenhuma leitura cruzada. A campanha vira seis campanhas que não conversam.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="12" y2="18" />
        <line x1="12" y1="18" x2="15" y2="13" />
      </svg>
    ),
    title: "Número que não defende ninguém.",
    desc: "Relatório que prova entrega mas não prova efeito. Na reunião de diretoria, isso pesa o mesmo que nada.",
  },
];

const tecProprietarias = [
  {
    title: "Anti-VPN Tech",
    desc: "Tag desenvolvida internamente que identifica em tempo real quem navega com a localização mascarada por VPN e impede a entrega para esse tráfego. Campanha regional entrega na praça contratada — não em quem finge estar nela.",
  },
  {
    title: "Forja",
    desc: "Nosso dashboard. Você acompanha entrega, investimento e indicadores da campanha sem pedir relatório para ninguém, no ritmo da operação e não no fim do mês.",
  },
];

const tecMetodologia = [
  {
    title: "Double Check",
    desc: "Nossa metodologia de verificação: cruzamos a nossa camada própria com verificação de mercado antes, durante e depois da entrega. Fraude e inventário fora do padrão saem antes de consumir verba.",
  },
];

const tecOperadas = [
  {
    title: "Instant Play",
    desc: "Converte o vídeo em player embutido no próprio anúncio: carrega na hora e roda sem travar em qualquer conexão. Protege o Complete View e libera formatos mistos, rich media e quiz dentro do banner.",
  },
  {
    title: "Household Sync",
    desc: "Conecta o impacto na TV conectada aos demais dispositivos da mesma casa. A história continua na tela seguinte, em vez de recomeçar.",
  },
  {
    title: "Geo Intelligence",
    desc: "Ativação e leitura por comportamento geográfico real — praça, deslocamento e visita à loja física.",
  },
  {
    title: "DoubleVerify",
    desc: "Camada independente de brand safety, viewability e verificação de fraude, auditável por você.",
  },
];

const canais = [
  { name: "Display", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
  { name: "CTV", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg> },
  { name: "Publishers Regionais", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
  { name: "Drive to Store", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> },
  { name: "Audience Insights", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { name: "Household Sync", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
  { name: "App Marketing & SMS", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg> },
  { name: "Push", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg> },
  { name: "DOOH", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="12" rx="1" /><path d="M7 21h10" /><path d="M9 15v6" /><path d="M15 15v6" /></svg> },
  { name: "Áudio (Spotify)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg> },
  { name: "TikTok Remarketing", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg> },
  { name: "In-Games", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="11" x2="10" y2="11" /><line x1="8" y1="9" x2="8" y2="13" /><line x1="15" y1="12" x2="15.01" y2="12" /><line x1="18" y1="10" x2="18.01" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg> },
];

const passos = [
  { n: "01", title: "Diagnóstico", desc: "Olhamos a sua operação atual: onde a verba entra, o que ela entrega e onde vaza. Você recebe a leitura, mesmo que não feche com a gente." },
  { n: "02", title: "Plano sob medida", desc: "Desenhamos a combinação de canais e a verificação adequadas ao objetivo — awareness, tráfego qualificado ou visita à loja." },
  { n: "03", title: "Operação e prova", desc: "Ativação, otimização contínua e acompanhamento no Forja. No fim, um relatório que a sua diretoria entende sem tradução." },
];

const cases = [
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
            opacity: (Math.random() * 0.5 + 0.1) * 0.5,
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
  const reduceMotion = useReducedMotion();
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
      <Helmet>
        <title>South Media — Mídia Programática que Você Consegue Provar</title>
        <meta name="description" content="CTV, display, áudio, DOOH e drive to store operados de ponta a ponta, com tecnologia própria contra tráfego mascarado e um dashboard aberto. Agende 30 minutos com quem opera." />
        <link rel="canonical" href="https://southmedia.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="South Media" />
        <meta property="og:title" content="South Media — Mídia Programática que Você Consegue Provar" />
        <meta property="og:description" content="CTV, display, áudio, DOOH e drive to store operados de ponta a ponta, com tecnologia própria contra tráfego mascarado e um dashboard aberto." />
        <meta property="og:url" content="https://southmedia.com.br/" />
        <meta property="og:image" content="https://southmedia.com.br/og-southmedia.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="South Media — Mídia Programática que Você Consegue Provar" />
        <meta name="twitter:description" content="CTV, display, áudio, DOOH e drive to store operados de ponta a ponta, com tecnologia própria contra tráfego mascarado e um dashboard aberto." />
        <meta name="twitter:image" content="https://southmedia.com.br/og-southmedia.png" />
      </Helmet>

      <Navbar />

      <main>
      {/* ===== SEÇÃO 1 — HERO ===== */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 via-[#000000]/60 to-[#000000]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(127,49,184,0.15)_0%,transparent_50%)]" />
        </div>
        <div aria-hidden="true" className="aurora-orb aurora-orb--lg" style={{ top: "-8%", right: "-6%", zIndex: 1 }} />
        <HeroParticles />
        <div className="container relative z-10" ref={heroRef}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <span data-hero-animate className="pill-label mb-6 inline-block">AdTech Brasileira e Independente</span>
              {/* H1 (A) — recomendada */}
              <h1 data-hero-animate className="font-['Inter'] font-bold text-white text-4xl md:text-6xl lg:text-[64px] leading-[1.08] mb-6 text-balance">
                Mídia programática que você consegue provar.
              </h1>
              {/* H1 (B) — alternativa para comparação
              <h1 data-hero-animate className="font-['Inter'] font-bold text-white text-4xl md:text-6xl lg:text-[64px] leading-[1.08] mb-6 text-balance">
                Cada real da sua mídia, rastreado até uma pessoa real.
              </h1>
              */}
              <p data-hero-animate className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                CTV, display, áudio, DOOH e drive to store operados de ponta a ponta — com tecnologia
                própria contra tráfego mascarado e um dashboard aberto, onde cada real aparece.
                Você leva número para a diretoria, não promessa.
              </p>
              <div data-hero-animate className="flex flex-col sm:flex-row gap-4 mb-4">
                <a href="#agendar" className="btn-cta !text-lg !px-8 !py-5">
                  Agendar 30 minutos
                </a>
                <a href="#resultados" className="btn-outline !text-lg !px-8 !py-5">
                  Ver resultados reais
                </a>
              </div>
              <p data-hero-animate className="text-white/50 text-sm">
                Sem compromisso. Você sai da conversa com um diagnóstico da sua operação atual.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <LiquidSphere
                className="w-[min(70vw,300px)] lg:w-[clamp(320px,32vw,570px)] lg:mr-[-4%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 — PROVA SOCIAL ===== */}
      <section className="section-dark py-16 noise-overlay overflow-hidden">
        <div className="container mb-10">
          <p className="text-center text-white/60 text-base md:text-lg font-['Inter'] tracking-wider uppercase animate-on-scroll">
            Marcas que confiam na nossa operação
          </p>
        </div>
        <div className="relative overflow-hidden mb-14">
          <div className="marquee-track">
            {[...clients, ...clients].map((client, i) => (
              <span key={`${client}-${i}`} className="client-pill">{client}</span>
            ))}
          </div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {provaNumeros.map((item) => (
              <div key={item.label} className="bg-white/95 rounded-2xl p-6 text-center animate-on-scroll">
                <span className="font-['Inter'] font-bold text-3xl text-[#000000]">{item.value}</span>
                <p className="font-['Inter'] font-bold text-[#000000] text-sm mt-1">{item.label}</p>
                <p className="text-black/70 text-xs mt-2">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 3 — O PROBLEMA ===== */}
      <section className="section-orange-purple py-20 noise-overlay overflow-hidden">
        <div aria-hidden="true" className="glow-edge-orange" style={{ width: "360px", height: "360px", top: "-10%", left: "-8%", opacity: 0.6 }} />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">O problema</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              O desperdício não aparece no relatório. Aparece no resultado.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto animate-on-scroll">
              Três coisas drenam orçamento de mídia todo mês — e nenhuma delas dá alarme.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problemas.map((item) => (
              <div key={item.title} className="glass-card p-6 animate-on-scroll">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-['Inter'] font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white text-lg md:text-xl font-['Inter'] font-bold max-w-3xl mx-auto animate-on-scroll text-balance">
            O vilão não é o canal nem a plataforma. É a opacidade — e ela é cara.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 — O GUIA ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Quem opera a sua mídia</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-6 animate-on-scroll text-balance">
              Nascemos incomodados com a mesma coisa que incomoda você.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8 animate-on-scroll">
              A South Media é uma AdTech independente de Curitiba que opera mídia programática para mais
              de 30 marcas líderes — Nestlé, Volvo, Bradesco, Santander, LATAM, entre outras. Não somos
              uma DSP: compramos nas principais do mercado (DV360, The Trade Desk, Xandr) e respondemos
              pelo resultado da compra, não pela ferramenta. Negociamos a Netflix diretamente desde 2022,
              quando a plataforma abriu para anúncios.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-on-scroll">
              {["Independente", "Multi-DSP", "Operação humana, não piloto automático"].map((selo) => (
                <span key={selo} className="tech-tag" style={{ background: "rgba(127,49,184,0.9)" }}>{selo}</span>
              ))}
            </div>
            <p className="text-white/70 text-sm italic animate-on-scroll">
              Automação todo mundo tem. O que muda o resultado é quem decide o que a automação vai fazer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 5 — TECNOLOGIAS E DIFERENCIAIS ===== */}
      <motion.section
        className="section-orange-purple py-20 noise-overlay overflow-hidden"
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div aria-hidden="true" className="glow-edge-purple" style={{ width: "420px", height: "420px", bottom: "-15%", left: "-10%", opacity: 0.7 }} />
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="pill-label mb-4 inline-block">Tecnologia</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Tecnologia com nome, dono e função.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              A gente separa o que é nosso do que a gente opera. É isso que permite comparar propostas de verdade.
            </p>
          </div>

          <div className="space-y-10">
            {/* Grupo 1 — Proprietárias */}
            <div>
              <span className="tech-tag inline-block mb-5">100% nossa</span>
              <div className="grid md:grid-cols-2 gap-6">
                {tecProprietarias.map((item) => (
                  <div key={item.title} className="glass-card p-6">
                    <h3 className="font-['Inter'] font-bold text-[#F45504] text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grupo 2 — Metodologia exclusiva */}
            <div>
              <span className="tech-tag inline-block mb-5" style={{ background: "#7F31B8" }}>Metodologia</span>
              <div className="grid gap-6">
                {tecMetodologia.map((item) => (
                  <div key={item.title} className="glass-card p-6">
                    <h3 className="font-['Inter'] font-bold text-[#7F31B8] text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grupo 3 — Operadas com maestria */}
            <div>
              <span
                className="tech-tag inline-block mb-5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}
              >
                Operadas com maestria
              </span>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tecOperadas.map((item) => (
                  <div key={item.title} className="glass-card p-6">
                    <h3 className="font-['Inter'] font-bold text-white text-base mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 glass-card p-6 md:p-8 text-center">
            <p className="text-white text-base md:text-lg font-['Inter'] font-semibold text-balance">
              Duas tecnologias proprietárias, uma metodologia exclusiva e um parque de tecnologia de
              mercado operado por gente que responde pelo número. Quem promete uma "stack 100% própria"
              está te vendendo o nome errado da coisa.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ===== SEÇÃO 6 — CANAIS ===== */}
      <section className="relative py-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,49,184,0.1)_0%,transparent_60%)]" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">One Stop Shop programático</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              Todos os canais que importam, sob a mesma operação.
            </h2>
            <p className="text-white/80 text-lg animate-on-scroll">Sem fragmentação e sem intermediário a mais entre a sua verba e o inventário.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {canais.map((item) => (
              <div key={item.name} className="glass-card p-4 text-center animate-on-scroll group">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mx-auto mb-2 group-hover:bg-[rgba(127,49,184,0.25)] transition-colors">
                  {item.icon}
                </div>
                <p className="font-['Inter'] font-semibold text-white text-xs uppercase tracking-wide">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <a href="#agendar" className="btn-cta">
              Quero ver no meu caso
            </a>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 7 — O PLANO ===== */}
      <section className="section-dark py-20 noise-overlay overflow-hidden">
        <div aria-hidden="true" className="glow-edge-purple" style={{ width: "440px", height: "440px", bottom: "-15%", right: "-10%", opacity: 0.85 }} />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Como funciona</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              Três passos, e você sabe exatamente o que recebe em cada um.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 items-start">
            {passos.map((step, i) => (
              <div key={step.n} className="flex flex-col items-center text-center animate-on-scroll">
                <div className="flex items-center gap-4 mb-6 w-full justify-center">
                  {i > 0 && <span className="text-[#F45504] font-bold text-3xl hidden md:block">&larr;</span>}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center shrink-0">
                    <span className="font-['Inter'] font-bold text-white text-2xl">{step.n}</span>
                  </div>
                  {i < 2 && <span className="text-[#F45504] font-bold text-3xl hidden md:block">&rarr;</span>}
                </div>
                <h3 className="font-['Inter'] font-bold text-[#F45504] text-lg mb-3">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 8 — RESULTADOS ===== */}
      <section id="resultados" className="section-orange-purple py-20 noise-overlay scroll-mt-[104px]">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)" }}>Resultados reais</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              A estratégia se prova no número, não no adjetivo.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cases.map((c) => (
              <div key={c.company} className="overflow-hidden rounded-2xl animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)" }}>
                <div className="bg-gradient-to-br from-[#7F31B8] to-[#F45504] p-6 text-center">
                  <span className="font-['Inter'] font-bold text-white text-5xl">{c.metric}</span>
                  <p className="text-white/80 text-sm">{c.label}</p>
                </div>
                <div className="p-6">
                  <h3 className="font-['Inter'] font-bold text-white mb-2">{c.company}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden animate-on-scroll">
              <div className="bg-gradient-to-br from-[#7F31B8] to-[#F45504] p-4 text-center">
                <h3 className="font-['Inter'] font-bold text-white text-xl">ANTES DA SOUTH MEDIA</h3>
              </div>
              <div className="bg-[rgba(244,85,4,0.08)] p-6 space-y-3 border border-[rgba(244,85,4,0.2)] border-t-0 rounded-b-2xl">
                {[
                  "Investimento no escuro",
                  "Múltiplos fornecedores fragmentados",
                  "Impressões para bots e VPNs",
                  "CPA elevado e imprevisível",
                  "Dificuldade em provar resultados",
                  "Frustração e insegurança",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden animate-on-scroll">
              <div className="bg-gradient-to-br from-[#7F31B8] to-[#7F31B8] p-4 text-center">
                <h3 className="font-['Inter'] font-bold text-white text-xl">DEPOIS DA SOUTH MEDIA</h3>
              </div>
              <div className="bg-[rgba(127,49,184,0.08)] p-6 space-y-3 border border-[rgba(127,49,184,0.2)] border-t-0 rounded-b-2xl">
                {[
                  "Controle total com dashboards em tempo real",
                  "Um parceiro estratégico centralizado",
                  "Audiências reais com verificação tripla",
                  "Otimização contínua com CPA reduzido comprovadamente",
                  "KPIs claros e relatórios transparentes para a diretoria",
                  "Confiança, previsibilidade e crescimento",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F31B8" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10 animate-on-scroll">
            <Link href="/resultados" className="text-white font-['Inter'] font-bold text-lg hover:text-[#F45504] transition-colors">
              Ver todos os resultados &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 9 — OBJEÇÕES ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Antes de você perguntar</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              As dúvidas que travam essa decisão.
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ===== SEÇÃO 10 — EBOOK ===== */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#F45504] text-xs font-bold uppercase tracking-widest mb-4 inline-block animate-on-scroll">Material gratuito</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              Material gratuito para gestores B2B
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-on-scroll">
              <img
                src="/images/ebooks/ebook-futuro-inteligencia-midia.png"
                alt="Ebook: O Futuro da Inteligência de Mídia — South Media"
                className="w-full max-w-xl md:max-w-2xl rounded-2xl shadow-2xl shadow-purple-900/50"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="font-['Inter'] font-bold text-white text-2xl mb-4 text-balance">
                O Futuro da Inteligência de Mídia
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Dados, atenção e resultado real na nova era da mídia. O estudo South Media sobre a virada da AdTech — e para onde vai o investimento em 2026.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Para onde o investimento migra: CTV, DOOH, áudio e nativo, com dados de WARC, IAB Brasil e Kantar",
                  "84% dos brasileiros já agiram após um anúncio em CTV — a audiência já está pronta",
                  "O que muda com o fim do Privacy Sandbox e por que dados próprios viram vantagem",
                  "As forças que vão definir a mídia e a sua estratégia entre 2026 e 2030",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#F45504] font-bold text-lg leading-tight shrink-0">✓</span>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setEbookModalOpen(true)} className="btn-cta">
                Quero o ebook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 11 — FECHAMENTO / AGENDAMENTO ===== */}
      <motion.section
        id="agendar"
        className="relative py-24 overflow-hidden scroll-mt-[104px]"
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[rgba(127,49,184,0.35)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,49,184,0.4)_0%,transparent_60%)]" />
        <div aria-hidden="true" className="aurora-orb aurora-orb--lg" style={{ bottom: "-15%", left: "-8%", zIndex: 1 }} />
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="pill-label mb-4 inline-block">Diagnóstico gratuito</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-5xl mb-4 text-balance">
              Trinta minutos para descobrir onde sua verba está indo.
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Uma conversa com quem opera — não com vendedor. Você mostra o cenário atual, a gente aponta o que dá para recuperar.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h3 className="font-['Inter'] font-bold text-white text-xl mb-5">O que acontece na reunião:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Você conta o objetivo e o cenário de mídia atual.",
                  "A gente aponta onde há desperdício e qual combinação de canais faz sentido.",
                  "Você recebe uma estimativa de entrega baseada no CPM praticado para o seu caso.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#F45504] font-bold text-lg leading-tight shrink-0">✓</span>
                    <span className="text-white/80 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white font-['Inter'] font-bold text-base">
                Se não fizer sentido para você, a gente diz. É mais barato para os dois.
              </p>
            </div>
            <div>
              <ScheduleForm />
            </div>
          </div>
        </div>
      </motion.section>
      </main>

      <StickyCta />
      <EbookModal open={ebookModalOpen} onOpenChange={setEbookModalOpen} />

      <Footer />
    </div>
  );
}
