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
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";
import { track } from "@/lib/tracking";
import { WA_CONTATO, WA_NETFLIX } from "@/lib/whatsapp";
import { blogPosts } from "@/data/blogPosts";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/hero-bg-PRMUCCmLr5RpUYoHMYGayj.webp";

const clients = [
  "Nestlé", "Volvo", "Bradesco", "Santander", "LATAM Airlines", "Burger King",
  "Nivea", "Banco Pan", "Unimed", "Itaipu Binacional", "Paramount", "Betnacional",
  "Algar Telecom", "O Boticário", "GNT", "Beach Park", "Cielo", "Caoa Chery", "FIEP", "SEBRAE PR",
  "Copacol", "Minhoto", "Sonho", "Bem-Te-Vi", "Moura Dubeux", "Sebrae",
];

const provaNumeros = [
  { value: "+30", label: "marcas líderes" },
  { value: "+40.000", label: "publishers premium" },
  { value: "+1.330", label: "publishers de CTV" },
  { value: "7", label: "praças no Brasil" },
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

const fluxoTecnologia = ["Audiência", "Detecção", "Validação", "Entrega", "Mensuração"];

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

const solucoesPorObjetivo = [
  {
    id: "vendas",
    objetivo: "Quero gerar vendas",
    combo: "Programática + Remarketing + Audience Insights",
    desc: "Ativação orientada a conversão, com remarketing e segmentação por audiência para reduzir o custo por resultado.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  },
  {
    id: "marca",
    objetivo: "Quero construir marca",
    combo: "CTV + Vídeo + DOOH + Áudio",
    desc: "Alcance em telas de alta atenção — streaming, out-of-home digital e áudio — com inventário premium e Complete View.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>,
  },
  {
    id: "regiao",
    objetivo: "Quero alcançar uma região específica",
    combo: "Publishers Regionais + Geo Intelligence + Anti-VPN Tech",
    desc: "Publishers locais e leitura geográfica real, com a Anti-VPN Tech garantindo que a entrega fique na praça contratada.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
  {
    id: "loja",
    objetivo: "Quero levar pessoas para minhas lojas",
    combo: "Drive to Store + Geolocalização + DOOH",
    desc: "Mídia com atribuição de visita física — do anúncio ao deslocamento até a loja.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
  {
    id: "streaming",
    objetivo: "Quero alcançar consumidores em streaming",
    combo: "CTV + Netflix + Spotify",
    desc: "Inventário premium de vídeo e áudio em streaming, com Netflix negociada diretamente desde 2022.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>,
  },
];

const comoTrabalhamos = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos objetivos, público, mercado e desafios." },
  { n: "02", title: "Estratégia", desc: "Definimos canais, audiência, inventário e abordagem." },
  { n: "03", title: "Ativação", desc: "Colocamos a campanha no ar com controle e tecnologia." },
  { n: "04", title: "Mensuração", desc: "Acompanhamos a entrega e os resultados no Forja." },
  { n: "05", title: "Otimização", desc: "Usamos os dados para melhorar a campanha em andamento." },
];

const porQueSouthMedia = [
  { title: "Independência", desc: "Não dependemos de uma DSP única. Compramos nas principais plataformas do mercado (DV360, The Trade Desk, Xandr) e escolhemos a que serve ao objetivo." },
  { title: "Tecnologia própria", desc: "Anti-VPN Tech e o dashboard Forja são nossos, não licenciados. É o que permite dizer com precisão onde e como cada real foi entregue." },
  { title: "Inventário premium", desc: "Mais de 1.330 publishers de CTV e 40.000 publishers premium no Brasil, com Netflix negociada diretamente desde 2022." },
  { title: "Compra direta", desc: "Menos intermediários entre a sua verba e o inventário — mais controle sobre onde e como o anúncio é entregue." },
  { title: "Transparência", desc: "Acompanhamento da campanha no Forja, no ritmo da operação, sem esperar relatório." },
  { title: "Estratégia integrada", desc: "Um único parceiro para display, CTV, DOOH, áudio e drive to store, com leitura cruzada entre canais." },
];

const cases = [
  {
    id: "tecnologia",
    company: "Empresa de Tecnologia",
    metric: "+193%", label: "conversões",
    desafio: "Crescer conversões sustentando a expansão da operação para a América Latina.",
    estrategia: "Investimento 58% maior diluído em CTV, Display e remarketing.",
    resultado: "+86% cliques · +93% CTR · +193% conversões.",
  },
  {
    id: "app",
    company: "BlaBlaCar (App Marketing)",
    metric: "+600%", label: "CTR",
    desafio: "Gerar downloads qualificados e reduzir o custo de aquisição no app.",
    estrategia: "Vídeo, nativos e display, com tracking S2S de 5 eventos pós-download.",
    resultado: "+4.700 downloads · 107% taxa de conversão · 40% redução de CPC.",
  },
  {
    id: "audio",
    company: "Escola de Idiomas (Spotify)",
    metric: "93,7%", label: "taxa de conclusão",
    desafio: "Manter custo por escuta competitivo sem perder volume de entrega.",
    estrategia: "Spotify programático com segmentação avançada por perfil de audiência.",
    resultado: "154k escutas completas · CPE R$0,15 mantido · +23,3% sobre-entrega.",
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
  useScrollDepthTracking();

  const latestPosts = blogPosts.slice(0, 3);

  // Auto-popup: abre o modal do ebook após 15s se não foi exibido nesta sessão
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("ebookPopupShown")) {
        setEbookModalOpen(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // Chegada vinda de outra página via link com âncora (ex.: Navbar "/#agendar")
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
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
        <title>South Media — Mídia Programática, CTV e Dados para Resultado Real</title>
        <meta name="description" content="AdTech brasileira e independente: mídia programática, CTV, DOOH e áudio com tecnologia própria contra tráfego mascarado, compra direta e um dashboard aberto. Agende uma conversa." />
        <link rel="canonical" href="https://southmedia.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="South Media" />
        <meta property="og:title" content="South Media — Mídia Programática, CTV e Dados para Resultado Real" />
        <meta property="og:description" content="AdTech brasileira e independente: mídia programática, CTV, DOOH e áudio com tecnologia própria, compra direta e um dashboard aberto." />
        <meta property="og:url" content="https://southmedia.com.br/" />
        <meta property="og:image" content="https://southmedia.com.br/og-southmedia.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="South Media — Mídia Programática, CTV e Dados para Resultado Real" />
        <meta name="twitter:description" content="AdTech brasileira e independente: mídia programática, CTV, DOOH e áudio com tecnologia própria, compra direta e um dashboard aberto." />
        <meta name="twitter:image" content="https://southmedia.com.br/og-southmedia.png" />
      </Helmet>

      <Navbar />

      <main>
      {/* ===== 1. HERO ===== */}
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
              <h1 data-hero-animate className="font-['Inter'] font-bold text-white text-4xl md:text-6xl lg:text-[60px] leading-[1.08] mb-6 text-balance">
                Pare de pagar por impressão que ninguém vê.
              </h1>
              <p data-hero-animate className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
                Mídia programática, CTV, DOOH e áudio com tecnologia própria contra tráfego mascarado,
                compra direta em inventário premium e um dashboard aberto — para você ver exatamente
                onde cada real foi entregue.
              </p>
              <div data-hero-animate className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="#agendar"
                  onClick={() => track("hero_cta_click", { label: "quero_analisar_minha_midia" })}
                  className="btn-cta !text-lg !px-8 !py-5"
                >
                  Quero analisar minha mídia
                </a>
                <a
                  href="#solucoes"
                  onClick={() => track("solution_click", { placement: "hero_secondary" })}
                  className="btn-outline !text-lg !px-8 !py-5"
                >
                  Conhecer nossas soluções
                </a>
              </div>
              <div data-hero-animate className="flex flex-wrap gap-x-6 gap-y-1 mb-3">
                {provaNumeros.map((n) => (
                  <span key={n.label} className="text-white/70 text-sm">
                    <strong className="text-white font-['Inter'] font-bold">{n.value}</strong> {n.label}
                  </span>
                ))}
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

      {/* ===== 2. PROVA SOCIAL ===== */}
      <section className="section-dark py-16 noise-overlay overflow-hidden">
        <div className="container mb-10">
          <p className="text-center text-white/60 text-base md:text-lg font-['Inter'] tracking-wider uppercase animate-on-scroll">
            Marcas que já confiaram sua mídia à South Media
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

      {/* ===== 3. PROBLEMA ===== */}
      <section className="section-orange-purple py-20 noise-overlay overflow-hidden">
        <div aria-hidden="true" className="glow-edge-orange" style={{ width: "360px", height: "360px", top: "-10%", left: "-8%", opacity: 0.6 }} />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">O problema</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              Quanto da sua verba realmente chega a pessoas reais?
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

      {/* ===== 4. TECNOLOGIA E DIFERENCIAIS ===== */}
      <motion.section
        id="tecnologia"
        className="section-dark py-20 noise-overlay overflow-hidden scroll-mt-[104px]"
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div aria-hidden="true" className="glow-edge-purple" style={{ width: "420px", height: "420px", bottom: "-15%", left: "-10%", opacity: 0.7 }} />
        <div className="container relative z-10">
          <div className="text-center mb-10">
            <span className="pill-label mb-4 inline-block">Tecnologia</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Tecnologia com nome, dono e função.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              A gente separa o que é nosso do que a gente opera. É isso que permite comparar propostas de verdade.
            </p>
          </div>

          {/* Fluxo visual: como a entrega é protegida, ponta a ponta */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-14">
            {fluxoTecnologia.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <div className="px-4 py-3 rounded-xl bg-[rgba(127,49,184,0.15)] border border-[rgba(127,49,184,0.3)] text-center">
                  <p className="font-['Inter'] font-bold text-white text-xs md:text-sm uppercase tracking-wide">{step}</p>
                </div>
                {i < fluxoTecnologia.length - 1 && (
                  <span className="text-[#F45504] font-bold text-xl">&rarr;</span>
                )}
              </div>
            ))}
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
            <p className="text-white text-base md:text-lg font-['Inter'] font-semibold text-balance mb-6">
              Duas tecnologias proprietárias, uma metodologia exclusiva e um parque de tecnologia de
              mercado operado por gente que responde pelo número. Quem promete uma "stack 100% própria"
              está te vendendo o nome errado da coisa.
            </p>
            <a
              href="#agendar"
              onClick={() => track("technology_click", { placement: "closing_card" })}
              className="btn-outline"
            >
              Quero entender como isso funciona no meu caso
            </a>
          </div>
        </div>
      </motion.section>

      {/* ===== 5. SOLUÇÕES POR OBJETIVO ===== */}
      <section id="solucoes" className="relative py-20 overflow-hidden noise-overlay scroll-mt-[104px]">
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,49,184,0.1)_0%,transparent_60%)]" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Soluções</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              O que você precisa alcançar?
            </h2>
            <p className="text-white/80 text-lg animate-on-scroll">Sem fragmentação e sem intermediário a mais entre a sua verba e o inventário.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solucoesPorObjetivo.map((s) => (
              <div key={s.id} className="glass-card p-6 flex flex-col animate-on-scroll">
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-['Inter'] font-bold text-white text-lg mb-2">{s.objetivo}</h3>
                <p className="text-[#F45504] font-['Inter'] font-semibold text-xs uppercase tracking-wide mb-3">{s.combo}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <a
                  href="#agendar"
                  onClick={() => track("solution_click", { objetivo: s.id })}
                  className="text-white font-['Inter'] font-bold text-sm hover:text-[#F45504] transition-colors"
                >
                  Falar sobre isso &rarr;
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link href="/solucoes" className="text-white font-['Inter'] font-bold text-lg hover:text-[#F45504] transition-colors">
              Ver todas as soluções &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. CTV / NETFLIX ===== */}
      <section className="section-orange-purple py-20 noise-overlay overflow-hidden">
        <div aria-hidden="true" className="aurora-orb aurora-orb--md" style={{ top: "-10%", right: "-6%" }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block" style={{ background: "rgba(0,0,0,0.3)" }}>CTV & Streaming</span>
              <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
                O streaming premium ficou mais acessível.
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-4">
                Negociamos a Netflix diretamente desde 2022, quando a plataforma abriu para anúncios —
                inventário premium, com alta atenção e Complete View. E o mercado inteiro está seguindo
                essa direção: a barreira de entrada em CTV vem caindo, com mais formas de comprar
                inventário premium sem os compromissos de escala de antes.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                O que isso muda na prática: testar CTV deixou de exigir o mesmo volume de verba de
                alguns anos atrás. O gargalo, agora, é medir e verificar direito o que você compra —
                é aí que entram nosso Double Check e a curadoria de inventário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_NETFLIX}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("netflix_click", { placement: "section_cta" })}
                  className="btn-cta"
                >
                  Quero conhecer a oportunidade
                </a>
                <Link href="/blog/netflix-sem-minimo-investimento-ctv" className="btn-outline">
                  Entender a mudança
                </Link>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="glass-card p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center mx-auto mb-6">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>
                </div>
                <span className="font-['Inter'] font-bold text-3xl text-white block mb-1">+1.330</span>
                <p className="text-white/70 text-sm mb-6">publishers de CTV no Brasil</p>
                <div className="h-px bg-white/10 mb-6" />
                <span className="font-['Inter'] font-bold text-3xl text-white block mb-1">2022</span>
                <p className="text-white/70 text-sm">negociação direta com a Netflix</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. CASES ===== */}
      <section id="resultados" className="section-dark py-20 noise-overlay scroll-mt-[104px]">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Resultados reais</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              Não é promessa. É resultado.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {cases.map((c) => (
              <Link
                key={c.id}
                href="/resultados"
                onClick={() => track("case_click", { case: c.id })}
                className="block overflow-hidden rounded-2xl animate-on-scroll hover:-translate-y-1 transition-transform"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(127,49,184,0.2)" }}
              >
                <div className="bg-gradient-to-br from-[#7F31B8] to-[#F45504] p-6 text-center">
                  <span className="font-['Inter'] font-bold text-white text-5xl">{c.metric}</span>
                  <p className="text-white/80 text-sm">{c.label}</p>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-['Inter'] font-bold text-white">{c.company}</h3>
                  <p className="text-white/60 text-xs"><strong className="text-white/80">Desafio:</strong> {c.desafio}</p>
                  <p className="text-white/60 text-xs"><strong className="text-white/80">Estratégia:</strong> {c.estrategia}</p>
                  <p className="text-white/60 text-xs"><strong className="text-white/80">Resultado:</strong> {c.resultado}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center animate-on-scroll">
            <Link href="/resultados" className="text-white font-['Inter'] font-bold text-lg hover:text-[#F45504] transition-colors">
              Ver todos os cases &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 8. COMO TRABALHAMOS ===== */}
      <section className="section-orange-purple py-20 noise-overlay overflow-hidden">
        <div aria-hidden="true" className="glow-edge-purple" style={{ width: "440px", height: "440px", bottom: "-15%", right: "-10%", opacity: 0.85 }} />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll" style={{ background: "rgba(0,0,0,0.3)" }}>Como trabalhamos</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              A campanha não termina quando o anúncio vai ao ar.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6 items-start">
            {comoTrabalhamos.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center animate-on-scroll">
                <div className="w-16 h-16 rounded-full bg-black/30 border border-white/20 flex items-center justify-center mb-4">
                  <span className="font-['Inter'] font-bold text-white text-xl">{step.n}</span>
                </div>
                <h3 className="font-['Inter'] font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. POR QUE SOUTH MEDIA ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Diferenciais</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              Por que escolher a South Media?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {porQueSouthMedia.map((item) => (
              <div key={item.title} className="glass-card p-6 animate-on-scroll">
                <h3 className="font-['Inter'] font-bold text-[#F45504] text-base mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. CONTEÚDO / AUTORIDADE ===== */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#F45504] text-xs font-bold uppercase tracking-widest mb-4 inline-block animate-on-scroll">Conteúdo</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              South Media entende o mercado.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card overflow-hidden animate-on-scroll group cursor-pointer block">
                <div className="relative h-40 overflow-hidden">
                  <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-['Inter'] font-bold text-white text-sm mb-2 group-hover:text-[#7F31B8] transition-colors line-clamp-2">{post.title}</h3>
                  <span className="text-[#F45504] font-['Inter'] font-semibold text-xs">Ler mais &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mb-16 animate-on-scroll">
            <Link href="/blog" className="text-white font-['Inter'] font-bold text-lg hover:text-[#F45504] transition-colors">
              Explorar insights &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto glass-card p-8 md:p-10">
            <div className="flex justify-center animate-on-scroll">
              <img
                src="/images/ebooks/ebook-futuro-inteligencia-midia.png"
                alt="Ebook: O Futuro da Inteligência de Mídia — South Media"
                className="w-full max-w-xs rounded-2xl shadow-2xl shadow-purple-900/50"
              />
            </div>
            <div className="animate-on-scroll">
              <span className="text-[#F45504] text-xs font-bold uppercase tracking-widest mb-3 inline-block">Ebook gratuito</span>
              <h3 className="font-['Inter'] font-bold text-white text-xl mb-3 text-balance">
                O Futuro da Inteligência de Mídia
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Dados, atenção e resultado real na nova era da mídia — para onde vai o investimento entre 2026 e 2030.
              </p>
              <button onClick={() => setEbookModalOpen(true)} className="btn-cta">
                Quero o ebook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. FAQ ===== */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="pill-label mb-4 inline-block animate-on-scroll">Perguntas frequentes</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl animate-on-scroll text-balance">
              Suas dúvidas antes de conversar com a gente.
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ===== 12. CTA FINAL / AGENDAMENTO ===== */}
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
              Vamos encontrar onde sua próxima campanha pode gerar mais resultado?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Conte-nos o que você precisa alcançar. Nossa equipe avalia o cenário e indica uma estratégia de mídia adequada ao seu objetivo.
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
              <p className="text-white font-['Inter'] font-bold text-base mb-8">
                Se não fizer sentido para você, a gente diz. É mais barato para os dois.
              </p>
              <a
                href={WA_CONTATO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { placement: "cta_final" })}
                className="btn-outline inline-flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Falar pelo WhatsApp
              </a>
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
