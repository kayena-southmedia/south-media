import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecifeMap from "@/components/RecifeMap";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { WA_SOLUCOES } from "@/lib/whatsapp";
import EbookModal from "@/components/EbookModal";
import { solucoes as produtos } from "@/data/solucoes";
import { tecnologias } from "@/data/tecnologias";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/solutions-bg-KLYqGKrEjJnx8Zz8cJHVdp.webp";

function SolutionCard({ icon, title, description, id }: { icon: React.ReactNode; title: string; description: string; id?: string }) {
  return (
    <div id={id} className={`glass-card p-6 animate-on-scroll${id ? " scroll-mt-[104px]" : ""}`}>
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7F31B8] to-[#7F31B8] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-['Inter'] font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TechLinks({ ids }: { ids: string[] }) {
  const items = tecnologias.filter((t) => ids.includes(t.id));
  if (items.length === 0) return null;
  return (
    <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)] animate-on-scroll">
      <span className="block text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-2">
        Tecnologias relacionadas
      </span>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <Link
            key={t.id}
            href={`/tecnologias#${t.id}`}
            className="px-3 py-1.5 rounded-lg text-sm font-['Inter'] text-white/80 bg-[rgba(255,255,255,0.04)] border border-[rgba(127,49,184,0.3)] hover:border-[#F45504] hover:text-white transition-colors"
          >
            {t.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}

function StatPill({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#7F31B8] to-[#F45504] text-white text-sm font-semibold">
      {text}
    </span>
  );
}

function FlowStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 animate-on-scroll">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center shrink-0">
        <span className="font-['Inter'] font-bold text-white text-lg">{number}</span>
      </div>
      <div>
        <h4 className="font-['Inter'] font-bold text-white text-base mb-1">{title}</h4>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Card de exemplo de campanha — case real (documentado) ou exemplo de aplicação (cenário + dado de mercado real)
function CampaignExample({
  isReal,
  cliente,
  objetivo,
  estrategia,
  produtoEntra,
  resultado,
}: {
  isReal: boolean;
  cliente: string;
  objetivo: string;
  estrategia: string;
  produtoEntra: string;
  resultado: string;
}) {
  return (
    <div className="glass-card p-6 md:p-8 mt-10 animate-on-scroll border-l-4" style={{ borderLeftColor: isReal ? "#F45504" : "rgba(127,49,184,0.6)" }}>
      <span
        className="inline-block text-[10px] font-['Inter'] font-bold uppercase tracking-widest mb-5 px-2.5 py-1 rounded-full"
        style={isReal ? { background: "#F45504", color: "#fff" } : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
      >
        {isReal ? "Case real" : "Exemplo de aplicação"}
      </span>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Cliente / Contexto</h4>
          <p className="text-white/85 text-sm leading-relaxed">{cliente}</p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Objetivo</h4>
          <p className="text-white/85 text-sm leading-relaxed">{objetivo}</p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Estratégia</h4>
          <p className="text-white/85 text-sm leading-relaxed">{estrategia}</p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Como o produto entra</h4>
          <p className="text-white/85 text-sm leading-relaxed">{produtoEntra}</p>
        </div>
      </div>
      <div className="pt-5 border-t border-[rgba(255,255,255,0.08)]">
        <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Resultado</h4>
        <p className="text-white font-['Inter'] font-semibold text-base leading-relaxed">{resultado}</p>
      </div>
    </div>
  );
}

// Seção de produto — mesmo estilo de card partido do carrossel da home: texto de um lado, visual do outro
function ProductSection({
  id,
  index,
  category,
  title,
  description,
  tags,
  visual,
  children,
}: {
  id: string;
  index: number;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  visual: React.ReactNode;
  children?: React.ReactNode;
}) {
  const reverse = index % 2 === 1;
  return (
    <section id={id} className={`relative py-20 noise-overlay scroll-mt-[104px] overflow-hidden ${index % 2 === 0 ? "section-dark" : "section-alt"}`}>
      <div
        aria-hidden="true"
        className={index % 2 === 0 ? "glow-edge-orange" : "glow-edge-purple"}
        style={{ width: 420, height: 420, top: "5%", [reverse ? "left" : "right"]: "-8%", opacity: 0.5 } as React.CSSProperties}
      />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className={`animate-on-scroll ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <span className="pill-label mb-4 inline-block">{category}</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-5 text-balance">{title}</h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">{description}</p>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            )}
          </div>
          <div className={`animate-on-scroll ${reverse ? "lg:order-1" : "lg:order-2"}`}>{visual}</div>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" width={1920} height={1080} />
    </div>
  );
}

// Espaço reservado para produtos sem mockup de formato ainda disponível
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="glass-card rounded-2xl aspect-video flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[rgba(127,49,184,0.3)] text-center p-8">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
      <p className="text-white/50 text-sm font-['Inter'] font-medium">Mockup de {label}</p>
      <p className="text-white/30 text-xs">Imagem em produção</p>
    </div>
  );
}

// SVG Icons
const IconTV = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
);
const IconLocation = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconData = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconGame = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
);


export default function Solucoes() {
  const scrollRef = useScrollAnimation();
  const publishersRef = useCountUp(40000);
  const ctvRef = useCountUp(1330);
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

  // Chegada vinda de outra página via link com âncora (ex.: Navbar / Home "#ctv")
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div ref={scrollRef}>
      <Helmet>
        <title>Soluções — Display, CTV, DOOH, Áudio e Drive to Store | South Media</title>
        <meta name="description" content="One Stop Shop programático: display, CTV, publishers regionais, drive to store, DOOH, áudio e app marketing operados de ponta a ponta pela South Media." />
        <link rel="canonical" href="https://southmedia.com.br/solucoes" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="South Media" />
        <meta property="og:title" content="Soluções — Display, CTV, DOOH, Áudio e Drive to Store | South Media" />
        <meta property="og:description" content="One Stop Shop programático: display, CTV, publishers regionais, drive to store, DOOH, áudio e app marketing operados de ponta a ponta." />
        <meta property="og:url" content="https://southmedia.com.br/solucoes" />
        <meta property="og:image" content="https://southmedia.com.br/og-southmedia.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soluções — Display, CTV, DOOH, Áudio e Drive to Store | South Media" />
        <meta name="twitter:description" content="One Stop Shop programático: display, CTV, publishers regionais, drive to store, DOOH, áudio e app marketing operados de ponta a ponta." />
        <meta name="twitter:image" content="https://southmedia.com.br/og-southmedia.png" />
      </Helmet>

      <Navbar />

      <main>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={SOLUTIONS_BG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 to-[#000000]" />
        </div>
        <div aria-hidden="true" className="aurora-orb aurora-orb--lg" style={{ top: "-10%", right: "-8%", zIndex: 1 }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="pill-label mb-6 inline-block animate-on-scroll">Nossa AdTech</span>
            <h1 className="font-['Inter'] font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll text-balance">
              One Stop Shop<br />Programático.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed animate-on-scroll">
              Sem fragmentação. Sem intermediários. Conectamos diferentes telas e pontos de contato
              para integrar a jornada do consumidor.
            </p>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="section-dark py-10 noise-overlay border-y border-[rgba(127,49,184,0.2)]">
        <div className="container relative z-10 text-center">
          <p className="font-['Inter'] font-bold text-white text-xl md:text-2xl max-w-3xl mx-auto text-balance animate-on-scroll">
            Com a South Media, cada real investido em mídia entrega performance comprovável.
          </p>
        </div>
      </section>

      {/* Índice de produtos */}
      <section className="section-alt py-10 noise-overlay">
        <div className="container relative z-10">
          <div className="flex flex-wrap justify-center gap-2 animate-on-scroll">
            {produtos.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-4 py-2 rounded-full text-sm font-['Inter'] font-semibold text-white/80 bg-[rgba(255,255,255,0.04)] border border-[rgba(127,49,184,0.3)] hover:border-[#F45504] hover:text-white transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mídia Programática */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Mídia Programática</span>
              <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-6 text-balance">
                Execute campanhas em mais de 40.000 publishers premium
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Otimização contínua de lances, redução de CPA e maximização de conversão.
                Compramos nas principais plataformas do mercado e garantimos que cada
                impressão seja entregue a pessoas reais, em ambientes seguros e com total
                transparência.
              </p>
              <div className="flex flex-wrap gap-3">
                <StatPill text="+193% conversões" />
                <StatPill text="+600% CTR" />
                <StatPill text="+93% taxa de conclusão" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              <div className="glass-card p-6 text-center">
                <span className="font-['Inter'] font-bold text-3xl text-[#F45504]">+<span ref={publishersRef}>0</span></span>
                <p className="text-white/80 text-sm mt-2">Publishers Premium</p>
              </div>
              <div className="glass-card p-6 text-center">
                <span className="font-['Inter'] font-bold text-3xl text-[#7F31B8]">+<span ref={ctvRef}>0</span></span>
                <p className="text-white/80 text-sm mt-2">Publishers CTV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Display */}
      <ProductSection
        id="display"
        index={0}
        category="Display"
        title="Formatos IAB standard nos maiores portais do Brasil."
        description="Display e vídeo programático em publishers premium nacionais e internacionais — billboard, leaderboard, MPU, skin, pushdown, expansível e half page, sempre em conformidade com as especificações técnicas do IAB. Viewability garantida, brand safety e verificação em toda impressão antes de qualquer real ir ao ar."
        tags={["Globo.com", "UOL", "R7", "Terra", "G1", "CNN Brasil", "+40.000 portais"]}
        visual={<ProductImage src="/images/produtos/display-billboard.jpg" alt="Mockup de anúncio Display formato Billboard da South Media em portal premium" />}
      >
        <CampaignExample
          isReal
          cliente="Empresa de tecnologia B2B que precisava escalar geração de leads qualificados além dos canais tradicionais, com expansão planejada para novos mercados da América Latina."
          objetivo="Aumentar conversões mantendo eficiência de CPA, sustentando o crescimento em múltiplos mercados."
          estrategia="Investimento 58% maior diluído entre CTV, Display e Meta, com curadoria de publishers premium e verificação Double Check em toda a entrega."
          produtoEntra="Display programático em formatos IAB standard (billboard, MPU, leaderboard) somado a vídeo pré/mid-roll, com otimização real-time de lances."
          resultado="+193% em conversões, +86% nos cliques e +93% no CTR, com expansão para LATAM em andamento."
        />
        <TechLinks ids={["double-check", "double-verify", "otimizacao-real-time"]} />
      </ProductSection>

      {/* CTV */}
      <ProductSection
        id="ctv"
        index={1}
        category="CTV — TV Conectada"
        title="Vídeo na maior tela da casa, com o maior inventário do Brasil."
        description="Mais de 1.330 publishers de CTV, com anúncios não puláveis, som ligado e 100% viewable em pré-roll, mid-roll e post-roll — além de Pause Ad, Home Screen e L-Banner. Compra via sitelists curadas ou deals exclusivos (PMP/Programmatic Guaranteed), com segmentação por audiência, gênero de conteúdo, geolocalização e daypart, e Netflix operada diretamente pela South Media."
        tags={["Pré/Mid/Post-roll", "Pause Ad", "Home Screen", "L-Banner", "Sitelists / PMP"]}
        visual={<ProductImage src="/images/produtos/ctv-instream.jpg" alt="Mockup de anúncio de vídeo in-stream em CTV da South Media" />}
      >
        <div className="mt-12 animate-on-scroll">
          <div className="glass-card p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center mx-auto mb-4">
                <IconTV />
              </div>
              <h3 className="font-['Inter'] font-bold text-white text-xl">Ecossistema CTV</h3>
              <span className="tech-tag mt-3 inline-block">+1.330 publishers de CTV no Brasil</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Connected TV", items: "Netflix, Globoplay, Disney+" },
                { label: "Over-the-Top", items: "Pluto TV, YouTube, Dailymotion" },
                { label: "Devices", items: "Samsung, Apple TV, Roku, Fire TV" },
                { label: "Console Gaming", items: "Xbox, PlayStation" },
              ].map((cat) => (
                <div key={cat.label} className="p-3 rounded-xl bg-[rgba(127,49,184,0.1)] border border-[rgba(127,49,184,0.2)]">
                  <p className="font-['Inter'] font-bold text-[#7F31B8] text-sm mb-1">{cat.label}</p>
                  <p className="text-white/60 text-xs">{cat.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CampaignExample
          isReal={false}
          cliente="Marca nacional planejando o lançamento de um produto, buscando alcance qualificado em ambiente premium e seguro."
          objetivo="Gerar awareness de lançamento com consideração mensurável, indo além do alcance bruto."
          estrategia="Veiculação de vídeo pré-roll non-skippable em conteúdo premium de CTV (Netflix, Globoplay, Prime Video), segmentado por audiência e localização, com reimpacto posterior via Household Sync."
          produtoEntra="CTV in-stream, com verificação DoubleVerify, Double Check e Anti-VPN Tech em toda a entrega."
          resultado="Dado de mercado: 32% dos espectadores descobrem um novo produto após ver publicidade em CTV, 31% pesquisam online sobre o que viram, e 15% chegam a comprar o produto anunciado (comScore, 2022)."
        />
        <TechLinks ids={["double-verify", "double-check", "anti-vpn-tech"]} />
      </ProductSection>

      {/* DOOH */}
      <ProductSection
        id="dooh"
        index={2}
        category="DOOH"
        title="Telas digitais de alto tráfego, compradas como mídia digital."
        description="Digital Out of Home programático: anúncios em telas digitais de shoppings, aeroportos, estádios e vias urbanas de alto tráfego, com compra em tempo real via OpenRTB e a mesma curadoria de inventário aplicada aos demais canais. Integrado ao Out of Home Sync, reimpacta no mobile todo dispositivo que circulou pela área do painel."
        tags={["Shoppings", "Aeroportos", "Vias urbanas", "Estádios & Arenas", "Compra via OpenRTB"]}
        visual={<ProductImage src="/images/produtos/dooh-horizontal.jpg" alt="Mockup de anúncio DOOH da South Media em painel digital horizontal" />}
      >
        <CampaignExample
          isReal={false}
          cliente="Rede de varejo com lojas físicas em praças de alto tráfego — shoppings e vias urbanas de grande circulação."
          objetivo="Aumentar cobertura em ambientes físicos premium e reforçar a mensagem no mobile de quem passou pelo painel."
          estrategia="Veiculação em telas digitais de alto tráfego com geofence de até 100 metros ao redor de cada ponto, reimpactando no celular todo dispositivo que circulou pela área durante o período da campanha."
          produtoEntra="DOOH programático integrado ao Out of Home Sync para reimpacto mobile."
          resultado="Referência de mercado: campanhas com geotargeting reportam até 60% de melhora no CTR de anúncios mobile em comparação a campanhas sem segmentação de localização."
        />
        <TechLinks ids={["geo-intelligence", "anti-vpn-tech"]} />
      </ProductSection>

      {/* Native */}
      <ProductSection
        id="native"
        index={3}
        category="Native"
        title="O formato que não grita entrega mais atenção."
        description="Native programático é o anúncio pago que assume a forma, a fonte e o ritmo do conteúdo ao redor — sempre identificado como publicidade — em vez de disputar atenção como um banner. Responde à cegueira de banner e vive em ambiente editorial real, com curadoria de inventário e o mesmo selo de verificação dos demais formatos."
        tags={["In-feed", "Patrocinado", "Desktop & Mobile", "Curadoria de inventário"]}
        visual={<ProductImage src="/images/produtos/native-desktop.jpg" alt="Mockup de anúncio Native in-feed da South Media em portal de notícias" />}
      >
        <div className="animate-on-scroll">
          <Link href="/blog/native-programatico-atencao" className="text-white font-['Inter'] font-bold text-sm hover:text-[#F45504] transition-colors">
            Entender o formato &rarr;
          </Link>
        </div>
        <CampaignExample
          isReal={false}
          cliente="Marca que investia só em banners tradicionais e via queda progressiva de CTR por cegueira de banner."
          objetivo="Recuperar atenção e CTR sem parecer um anúncio tradicional, mantendo brand safety no ambiente editorial."
          estrategia="Substituição parcial do mix por formatos nativos que assumem a forma do conteúdo editorial do veículo, sempre identificados como publicidade (selo 'Patrocinado')."
          produtoEntra="Native in-feed em portais premium, com curadoria de inventário e mensuração de CTR comparada ao banner tradicional."
          resultado="Formatos nativos tendem a registrar CTR consistentemente mais alto que banners tradicionais, por se integrarem ao fluxo de leitura em vez de disputar atenção com ele."
        />
      </ProductSection>

      {/* Áudio Programático */}
      <ProductSection
        id="audio"
        index={4}
        category="Áudio Programático"
        title="Muito além do Spotify."
        description="Áudio programático é a compra automatizada de espaço publicitário em streaming de música, podcasts, rádio digital e games. O Spotify segue como porta de entrada natural — mais de 36 milhões de usuários ativos no Brasil —, mas a inserção dinâmica de anúncios já abriu também o inventário de podcasts para compra programática, com segmentação por momento de escuta em vez de só por idade."
        tags={["Spotify", "Podcasts", "Rádio digital", "Games", "Companion banner"]}
        visual={
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#7F31B8] to-[#F45504]" />
              </div>
            </div>
            <p className="text-white/60 text-xs">Spotify · Podcasts · Rádio digital · Games</p>
          </div>
        }
      >
        <div className="animate-on-scroll">
          <Link href="/blog/audio-programatico-alem-spotify-2026" className="text-white font-['Inter'] font-bold text-sm hover:text-[#F45504] transition-colors">
            Entender o canal &rarr;
          </Link>
        </div>
        <CampaignExample
          isReal={false}
          cliente="Marca de bebida que segmentava anúncios de áudio só por idade e gênero musical, com resultado abaixo do esperado."
          objetivo="Capturar a intenção certa no momento certo, em vez de mirar um público fixo o dia inteiro."
          estrategia="Segmentação por momento de escuta — como o momento 'festa' (reggaeton, house, funk) — em vez de só por dados demográficos, já que a mesma pessoa muda de contexto sonoro várias vezes ao dia."
          produtoEntra="Áudio Programático em Spotify, podcasts e streaming de áudio, com Anti-VPN Tech e Double Check protegendo a entrega."
          resultado="Segmentar por momento e intenção de escuta captura audiências que uma segmentação só por idade ou personalidade não alcançaria."
        />
        <TechLinks ids={["anti-vpn-tech", "double-check", "geo-intelligence"]} />
      </ProductSection>

      {/* Drive to Store */}
      <ProductSection
        id="drive-to-store"
        index={5}
        category="Drive to Store"
        title="Atribuição de visita física, do anúncio à loja."
        description="Metodologia de atribuição e incremento de visitas físicas: capturamos o Device ID pelo bid-stream em tempo real, mapeamos usuários próximos de lojas e pontos de interesse, e verificamos se o usuário visitou a loja para contabilizar como visita incremental — com Uplift Factor comparando o grupo exposto contra um grupo de controle pareado."
        tags={["Mobile", "Display", "CTV", "DOOH", "Device ID + Geofence"]}
        visual={
          <div className="glass-card p-6 space-y-4">
            {[
              { n: "01", text: "Usuário recebe o anúncio no mobile, display, CTV ou DOOH" },
              { n: "02", text: "Capturamos o Device ID pelo bid-stream em tempo real" },
              { n: "03", text: "Mapeamos usuários próximos de lojas e pontos de interesse" },
              { n: "04", text: "Verificamos a visita e contabilizamos como incremental" },
            ].map((item) => (
              <div key={item.n} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center font-['Inter'] font-bold text-white text-xs shrink-0">{item.n}</span>
                <p className="text-white/80 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        }
      >
        <CampaignExample
          isReal
          cliente="Toyota — fabricante de veículos buscando manter liderança em um mercado pressionado por elétricas e novas marcas, no quarto trimestre."
          objetivo="Maximizar alcance entre novos públicos, construir consideração com peças criativas e atrair compradores para os showrooms físicos."
          estrategia="Combinação de banners estáticos para alcance amplo com vídeos personalizados por segmento, medindo com dados de localização 100% SDK e LGPD compliant quais táticas convertiam em visitas físicas."
          produtoEntra="Drive to Store — atribuição de visita com Device ID, Geo Intelligence e Anti-VPN Tech."
          resultado="109% da meta de impressões e 150% de visitas ao showroom, com fluxo robusto de leads qualificados confirmado pelo cliente."
        />
        <TechLinks ids={["geo-intelligence", "anti-vpn-tech", "otimizacao-real-time"]} />
      </ProductSection>

      {/* Household Sync */}
      <ProductSection
        id="household-sync"
        index={6}
        category="Household Sync"
        title="Um anúncio na TV. Reimpacto no celular."
        description="Identificamos os dispositivos conectados na mesma rede doméstica da TV impactada e sincronizamos a entrega — o mesmo criativo, adaptado a cada tela, contando uma narrativa sequenciada dentro do lar, numa janela configurável de 30 segundos a 10 dias."
        tags={["Mesma rede doméstica", "Frequência controlada", "Janela de 30s a 10 dias"]}
        visual={
          <div className="glass-card p-8">
            <div className="flex flex-col gap-4">
              {[
                { step: "TARGET CTV", desc: "Anúncio na TV Conectada" },
                { step: "HOUSEHOLD SYNC", desc: "Sincroniza mobile na mesma rede" },
                { step: "REIMPACTO", desc: "Janela de 30s a 10 dias" },
              ].map((item, i) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="flex-1 p-3 rounded-xl bg-[rgba(127,49,184,0.12)] border border-[rgba(127,49,184,0.25)]">
                    <p className="font-['Inter'] font-bold text-[#F45504] text-xs mb-0.5">{item.step}</p>
                    <p className="text-white/70 text-xs">{item.desc}</p>
                  </div>
                  {i < 2 && <span className="text-[#F45504] font-bold text-lg shrink-0">&darr;</span>}
                </div>
              ))}
            </div>
          </div>
        }
      >
        <CampaignExample
          isReal={false}
          cliente="Marca com campanha de lançamento em CTV que queria estender o impacto para além da TV."
          objetivo="Aumentar frequência e reforçar a mensagem nos demais dispositivos da mesma casa, sem repetir a campanha do zero em cada tela."
          estrategia="Identificação dos dispositivos conectados à mesma rede doméstica da TV impactada, com reimpacto sincronizado no celular e tablet dentro de uma janela configurável."
          produtoEntra="Household Sync, ativado a partir de uma campanha de CTV já em veiculação."
          resultado="A mesma família passa a receber uma narrativa sequenciada entre a TV e o mobile, em vez de um único impacto isolado na tela grande."
        />
      </ProductSection>

      {/* Geolocalização */}
      <ProductSection
        id="geolocalizacao"
        index={7}
        category="Geolocalização — Location Intelligence"
        title="Maior precisão de alcance com Location Based Audiences."
        description="Construímos audiências exclusivas a partir de dados de localização reais — Device ID, GPS e comportamento de deslocamento. Mapeamos o Main POI (o ponto de interesse da marca ou de um concorrente) e os Tier 2 Points ao redor — shoppings, praças, estacionamentos e pontos de fluxo — com heatmap de intensidade de tráfego."
        tags={["Main POI", "Tier 2 Points", "Heatmap", "Audience Builder"]}
        visual={
          <div className="glass-card p-4 overflow-hidden rounded-2xl">
            <RecifeMap />
          </div>
        }
      >
        <CampaignExample
          isReal={false}
          cliente="Marca com concorrentes físicos bem definidos, que queria construir audiência a partir de quem frequenta essas lojas."
          objetivo="Alcançar, com precisão geográfica, pessoas que já demonstraram interesse pela categoria via deslocamento real — não apenas segmentação declarada."
          estrategia="Mapeamento do Main POI (loja da marca) e dos Tier 2 Points ao redor (shoppings, estacionamentos, pontos de fluxo), construindo uma audiência baseada em histórico real de deslocamento."
          produtoEntra="Geolocalização / Location Based Audiences, com Geo Intelligence e Anti-VPN Tech garantindo a localização real."
          resultado="Com Geo Intelligence, 100% das impressões são entregues na região correta — sem depender só de segmentação declarada."
        />
        <TechLinks ids={["geo-intelligence", "anti-vpn-tech"]} />
      </ProductSection>

      {/* Audience Insights / Inteligência de Dados */}
      <section id="audience-insights" className="section-dark py-20 noise-overlay scroll-mt-[104px]">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Audience Insights</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl text-balance">
              Dados que transformam campanhas em resultados
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <IconLocation />, title: "LBA", desc: "Location Based Audiences com precisão de alcance geográfico avançado." },
              { icon: <IconData />, title: "DMP", desc: "Data Management Platform para segmentação e ativação de audiências proprietárias." },
              { icon: <IconLocation />, title: "Geofence", desc: "Cercas virtuais ao redor de locais estratégicos para disparo automático de campanhas." },
              { icon: <IconData />, title: "Intenção de Busca", desc: "Segmentação baseada em comportamento de busca e intenção de compra do usuário." },
            ].map((item) => (
              <SolutionCard key={item.title} icon={item.icon} title={item.title} description={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* App Marketing */}
      <ProductSection
        id="app-marketing"
        index={8}
        category="App Marketing"
        title="Marketing de aplicativos, do install à conversão."
        description="Tracking S2S (server-to-server) com 5 eventos pós-download — abertura, cadastro, compra, uso e engajamento — para mensuração completa do funil, com vídeo, nativos e display integrados à mesma operação e re-engajamento de usuários inativos."
        tags={["Vídeo", "Nativos", "Display", "Tracking S2S", "5 eventos pós-download"]}
        visual={<ImagePlaceholder label="App Marketing" />}
      >
        <CampaignExample
          isReal
          cliente="BlaBlaCar — app de caronas compartilhadas buscando escalar aquisição de usuários qualificados."
          objetivo="Aumentar downloads e conversão pós-instalação, com mensuração completa do funil do app."
          estrategia="Mix de vídeo, nativos e display segmentados por perfil e comportamento, com tracking server-to-server de 5 eventos pós-download para medir o funil completo."
          produtoEntra="App Marketing com tracking S2S integrado às principais plataformas de mensuração."
          resultado="+600% de CTR, mais de 4.700 downloads e 107% de taxa de conversão sobre a meta, com 3.200 conversões pós-clique e -40% de CPC."
        />
      </ProductSection>

      {/* Push Notification + Geofence */}
      <ProductSection
        id="push"
        index={9}
        category="Push Notification"
        title="Geofence via triangulação de antenas de celular."
        description="Metodologia South Media de geolocalização por geofence: uma cerca virtual é posicionada ao redor de locais estratégicos da marca — shoppings, eventos, pontos de venda — e a notificação é disparada automaticamente para o dispositivo assim que o usuário entra na área, via triangulação de antenas."
        tags={["Geofence", "SMS", "Push", "E-mail geolocalizado"]}
        visual={
          <div className="flex items-center justify-center">
            <div className="w-[220px] h-[420px] rounded-[32px] border-2 border-[rgba(127,49,184,0.4)] bg-[#000000] relative overflow-hidden">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20" />
              <div className="absolute top-16 left-4 right-4 p-4 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(127,49,184,0.3)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504]" />
                  <span className="text-white text-xs font-bold">South Media</span>
                </div>
                <p className="text-white/80 text-[10px]">Oferta especial! Você está próximo da nossa loja. Aproveite 20% de desconto.</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid md:grid-cols-2 gap-6 mt-10 animate-on-scroll">
          {[
            { n: "01", title: "Geofence como cerca virtual", desc: "Delimitação precisa de áreas geográficas de interesse." },
            { n: "02", title: "Locais estratégicos", desc: "Posicionada ao redor de shoppings, eventos e pontos de interesse." },
            { n: "03", title: "Disparo automático", desc: "Notificação enviada ao entrar na área delimitada." },
            { n: "04", title: "Resultados mensuráveis", desc: "Aumenta visitas, promove eventos, complementa OOH." },
          ].map((item) => (
            <FlowStep key={item.n} number={item.n} title={item.title} description={item.desc} />
          ))}
        </div>
        <CampaignExample
          isReal={false}
          cliente="Rede com pontos físicos que queria aumentar visitas em uma data promocional específica."
          objetivo="Gerar visitas incrementais na loja em uma janela curta de tempo, complementando a campanha de DOOH já no ar."
          estrategia="Geofence posicionado ao redor dos pontos de venda, com disparo automático de notificação para quem entra na área durante o período da promoção."
          produtoEntra="Push Notification via triangulação de antenas, geolocalizado."
          resultado="O formato funciona como reforço tático para aumentar visitas em loja física, promover eventos e complementar campanhas de DOOH no mesmo período."
        />
      </ProductSection>

      {/* Streamings */}
      <ProductSection
        id="streamings"
        index={10}
        category="Streamings"
        title="Anúncios dentro dos apps de streaming mais assistidos do Brasil."
        description="Compra direta e via sitelists em Netflix, Prime Video, Max, Globoplay e Disney+, com pré/mid/post-roll em conteúdo premium e seguro, alta atenção do espectador e a mesma curadoria e verificação do Double Check antes de qualquer real ir ao ar."
        tags={["Netflix", "Prime Video", "Max", "Globoplay", "Disney+"]}
        visual={<ImagePlaceholder label="Streamings" />}
      >
        <CampaignExample
          isReal={false}
          cliente="Marca buscando a maior audiência de streaming do Brasil para uma campanha de awareness nacional."
          objetivo="Alcance qualificado em ambiente premium e seguro, com adjacência aos conteúdos mais assistidos do momento."
          estrategia="Veiculação em pré/mid/post-roll dentro do plano com anúncios da Netflix e de outros apps de streaming, com curadoria de sitelists e verificação em toda a entrega."
          produtoEntra="Streamings — vídeo in-stream com Double Check e DoubleVerify."
          resultado="Referência de mercado: o plano com anúncios da Netflix já reúne mais de 250 milhões de espectadores mensais no mundo, com mais de 80% assistindo toda semana."
        />
      </ProductSection>

      {/* In-Game */}
      <ProductSection
        id="in-game"
        index={11}
        category="In-Game Advertising"
        title="Publicidade em jogos — ambiente nativo e imersivo."
        description="Banners in-game, vídeo recompensado, interstitial e branded virtual objects dentro de jogos mobile. O Brasil é o 5º maior consumidor de apps móveis do mundo, com 150 milhões de jogadores ativos diários somando 10 bilhões de horas de jogo por mês — e gamers são 2,5x mais engajados que a média."
        tags={["Banners in-game", "Vídeo recompensado", "Interstitial", "Branded objects"]}
        visual={
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center mx-auto mb-5">
              <IconGame />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div><p className="font-['Inter'] font-bold text-white text-lg">150M</p><p className="text-white/60 text-[11px]">jogadores/dia</p></div>
              <div><p className="font-['Inter'] font-bold text-white text-lg">10Bi</p><p className="text-white/60 text-[11px]">horas/mês</p></div>
              <div><p className="font-['Inter'] font-bold text-white text-lg">49%</p><p className="text-white/60 text-[11px]">público mulheres</p></div>
            </div>
          </div>
        }
      >
        <CampaignExample
          isReal={false}
          cliente="Marca de bens de consumo buscando alcançar um público jovem e altamente engajado fora dos formatos tradicionais."
          objetivo="Gerar presença de marca em ambiente nativo, sem interromper a experiência do jogador."
          estrategia="Veiculação de banners in-game, vídeo recompensado e branded virtual objects dentro de jogos mobile, aproveitando uma base de 150 milhões de jogadores ativos diários no Brasil."
          produtoEntra="In-Game Advertising."
          resultado="Gamers são um público 2,5x mais engajado que a média, com 49% formado por mulheres — uma audiência mais ampla e diversa do que o estereótipo sugere."
        />
      </ProductSection>

      {/* Rich Media */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Formatos Especiais & Exclusivos - Rich Media</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Experiências interativas e em vídeo que aumentam o tempo de permanência.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
            {/* Carrossel Interativo - PEACHY */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[380px] rounded-[32px] border-2 bg-[#000000] relative overflow-hidden" style={{ borderColor: "#F45504" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
                <div className="absolute inset-0 flex items-center">
                  <div className="flex animate-carousel" style={{ animation: "carousel 6s ease-in-out infinite" }}>
                    {["#7F31B8", "#F45504", "#7F31B8", "#F45504"].map((c, i) => (
                      <div key={i} className="w-[200px] h-[380px] shrink-0 flex flex-col items-center justify-center p-6" style={{ background: `linear-gradient(135deg, ${c}33, ${c}11)` }}>
                        <div className="w-24 h-24 rounded-2xl mb-4" style={{ background: `linear-gradient(135deg, ${c}88, ${c}44)` }} />
                        <div className="w-28 h-2 rounded-full bg-white/20 mb-2" />
                        <div className="w-20 h-2 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {[0,1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" style={{ animation: `dotPulse 6s ease-in-out infinite ${i * 1.5}s` }} />)}
                </div>
                <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Inter'] font-bold text-white/60 text-xs tracking-wider z-10">Carrossel Interativo</span>
              </div>

            </div>

            {/* Fullscreen Imersivo - NATUZZI */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[380px] rounded-[32px] border-2 bg-[#000000] relative overflow-hidden" style={{ borderColor: "#F45504" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
                <div className="absolute inset-0" style={{ animation: "fullscreenPulse 4s ease-in-out infinite" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7F31B8]/40 to-[#F45504]/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="w-full h-32 rounded-xl bg-gradient-to-r from-[#7F31B8]/30 to-[#F45504]/30 mb-4" style={{ animation: "scaleBreath 3s ease-in-out infinite" }} />
                    <div className="w-32 h-3 rounded-full bg-white/30 mb-2" />
                    <div className="w-24 h-3 rounded-full bg-white/15 mb-6" />
                    <div className="px-6 py-2 rounded-full border border-[#F45504]/50 bg-[#F45504]/20">
                      <span className="text-[#F45504] text-xs font-bold">SAIBA MAIS</span>
                    </div>
                  </div>
                </div>
                <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Inter'] font-bold text-white/60 text-xs tracking-wider z-10">Fullscreen Imersivo</span>
              </div>

            </div>

            {/* Galeria Shoppable - H&M */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[380px] rounded-[32px] border-2 bg-[#000000] relative overflow-hidden" style={{ borderColor: "#F45504" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
                <div className="absolute inset-0 p-4 pt-10">
                  <div className="grid grid-cols-2 gap-2 h-full pb-4">
                    {["#7F31B8", "#F45504", "#7F31B8", "#F45504", "#7F31B8", "#F45504"].map((c, i) => (
                      <div key={i} className="rounded-lg relative overflow-hidden group" style={{ background: `linear-gradient(135deg, ${c}44, ${c}22)`, animation: `fadeInItem 0.5s ease-out ${i * 0.3}s both, shimmer 3s ease-in-out ${i * 0.5}s infinite` }}>
                        <div className="absolute inset-0 flex items-end p-1.5">
                          <div className="w-full flex items-center justify-between">
                            <div className="w-8 h-1 rounded bg-white/20" />
                            <div className="w-4 h-4 rounded-full bg-[#F45504]/40 flex items-center justify-center">
                              <span className="text-white text-[6px]">+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Inter'] font-bold text-white/60 text-xs tracking-wider z-10">Galeria Shoppable</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-5xl mb-6 animate-on-scroll text-balance">
            Qual solução é certa para você?
          </h2>
          <a
           href={WA_SOLUCOES}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !text-lg !px-10 !py-5 animate-on-scroll inline-flex"
          >
            Quero ver no meu caso
          </a>
        </div>
      </section>

      <EbookModal open={ebookModalOpen} onOpenChange={setEbookModalOpen} />
      </main>
      <Footer />
    </div>
  );
}
