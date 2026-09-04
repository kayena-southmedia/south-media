import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecifeMap from "@/components/RecifeMap";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { WA_SOLUCOES } from "@/lib/whatsapp";
import EbookModal from "@/components/EbookModal";
import { solucoes, GRUPOS, type Solucao } from "@/data/solucoes";
import { tecnologias } from "@/data/tecnologias";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/solutions-bg-KLYqGKrEjJnx8Zz8cJHVdp.webp";

const GRUPO_INTRO: Record<string, string> = {
  "Conteúdo & Entretenimento": "Presença em ambientes de alta atenção: streaming, áudio e games.",
  "Mobile & Experiência": "O dispositivo que não larga a mão do seu público.",
  "Localização & Mundo Físico": "Da mídia digital ao comportamento no mundo real.",
  "Programática Core": "A base técnica que sustenta qualquer estratégia de mídia.",
  "Inteligência & Mensuração": "A campanha não termina na impressão.",
  "Novos Ambientes": "Onde a atenção está indo, antes do resto do mercado chegar.",
};

function StatPill({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#7F31B8] to-[#F45504] text-white text-sm font-semibold">
      {text}
    </span>
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

// Card de exemplo prático — case real (documentado) ou cenário fictício com dado de mercado real
function ExemploPratica({ exemplo }: { exemplo: Solucao["exemplo"] }) {
  const isReal = Boolean(exemplo.isReal);
  return (
    <div className="glass-card p-6 md:p-8 mt-10 animate-on-scroll border-l-4" style={{ borderLeftColor: isReal ? "#F45504" : "rgba(127,49,184,0.6)" }}>
      <span
        className="inline-block text-[10px] font-['Inter'] font-bold uppercase tracking-widest mb-5 px-2.5 py-1 rounded-full"
        style={isReal ? { background: "#F45504", color: "#fff" } : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
      >
        {isReal ? "Case real" : "Exemplo na prática"}
      </span>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Objetivo</h4>
          <p className="text-white/85 text-sm leading-relaxed">{exemplo.objetivo}</p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Estratégia</h4>
          <p className="text-white/85 text-sm leading-relaxed">{exemplo.estrategia}</p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Ativação</h4>
          <p className="text-white/85 text-sm leading-relaxed">{exemplo.ativacao}</p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-['Inter'] font-bold uppercase tracking-wide mb-1.5">Mensuração</h4>
          <p className="text-white/85 text-sm leading-relaxed">{exemplo.mensuracao}</p>
        </div>
      </div>
    </div>
  );
}

// Fluxo "Como funciona" — 3 a 4 etapas visuais
function ComoFunciona({ steps }: { steps: string[] }) {
  return (
    <div className="glass-card p-6 md:p-8 animate-on-scroll">
      <span className="text-white/50 text-xs font-['Inter'] font-semibold uppercase tracking-widest mb-5 inline-block">
        Como funciona
      </span>
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center shrink-0 font-['Inter'] font-bold text-white text-sm">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 min-h-[24px] bg-gradient-to-b from-[rgba(127,49,184,0.5)] to-[rgba(244,85,4,0.5)]" />}
            </div>
            <p className="text-white/85 text-sm md:text-base font-['Inter'] font-medium pb-6 pt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// "Tecnologia por trás desta solução" — liga produto às tecnologias proprietárias reais
function TechLinks({ ids }: { ids: string[] }) {
  const items = tecnologias.filter((t) => ids.includes(t.id));
  if (items.length === 0) return null;
  return (
    <div className="animate-on-scroll">
      <h3 className="font-['Inter'] font-bold text-white text-base mb-3">Tecnologia por trás desta solução</h3>
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

// "Combina com" — outras soluções South Media complementares
function CombinaCom({ ids }: { ids?: string[] }) {
  if (!ids || ids.length === 0) return null;
  const items = solucoes.filter((s) => ids.includes(s.id));
  if (items.length === 0) return null;
  return (
    <div className="animate-on-scroll">
      <h3 className="font-['Inter'] font-bold text-white text-base mb-3">Combina com</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <Link
            key={s.id}
            href={`/solucoes#${s.id}`}
            className="px-3 py-1.5 rounded-lg text-sm font-['Inter'] text-white/80 bg-[rgba(255,255,255,0.04)] border border-[rgba(127,49,184,0.3)] hover:border-[#F45504] hover:text-white transition-colors"
          >
            {s.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}

// Visual customizado por produto quando não há foto real de formato disponível
function CustomVisual({ id }: { id: string }) {
  switch (id) {
    case "audio":
      return (
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
      );
    case "push":
      return (
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
      );
    case "drive-to-store":
      return (
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
      );
    case "household-sync":
      return (
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
      );
    case "geolocalizacao":
      return (
        <div className="glass-card p-4 overflow-hidden rounded-2xl">
          <RecifeMap />
        </div>
      );
    case "in-game":
      return (
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div><p className="font-['Inter'] font-bold text-white text-lg">150M</p><p className="text-white/60 text-[11px]">jogadores/dia</p></div>
            <div><p className="font-['Inter'] font-bold text-white text-lg">10Bi</p><p className="text-white/60 text-[11px]">horas/mês</p></div>
            <div><p className="font-['Inter'] font-bold text-white text-lg">49%</p><p className="text-white/60 text-[11px]">público mulheres</p></div>
          </div>
        </div>
      );
    case "pesquisa-brand-lift":
      return (
        <div className="glass-card p-6 grid grid-cols-2 gap-4 items-center">
          <div className="text-center p-4 rounded-xl bg-[rgba(127,49,184,0.1)] border border-[rgba(127,49,184,0.25)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7F31B8" strokeWidth="1.5" className="mx-auto mb-2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            <p className="text-white/80 text-xs font-['Inter'] font-semibold">Pesquisa</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-[rgba(244,85,4,0.1)] border border-[rgba(244,85,4,0.25)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F45504" strokeWidth="1.5" className="mx-auto mb-2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            <p className="text-white/80 text-xs font-['Inter'] font-semibold">Dashboard / Forja</p>
          </div>
        </div>
      );
    case "dooh":
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card overflow-hidden rounded-2xl col-span-2">
            <img src="/images/produtos/dooh-horizontal.jpg" alt="Mockup DOOH horizontal South Media" className="w-full h-auto" loading="lazy" />
          </div>
          <div className="glass-card overflow-hidden rounded-2xl col-span-2 md:col-span-1 md:col-start-1">
            <img src="/images/produtos/dooh-vertical.jpg" alt="Mockup DOOH vertical South Media" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      );
    case "in-app":
      return (
        <div className="space-y-3">
          <div className="glass-card overflow-hidden rounded-2xl">
            <img src="/images/produtos/in-app-native.jpg" alt="Mockup de anúncio native in-feed dentro de app da South Media" className="w-full h-auto" loading="lazy" />
          </div>
          <div className="glass-card overflow-hidden rounded-2xl">
            <img src="/images/produtos/in-app-interstitial.jpg" alt="Mockup de anúncio interstitial dentro de app da South Media" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      );
    case "chatgpt-ads":
      return (
        <div className="flex justify-center gap-4">
          <div className="w-[180px] md:w-[200px] rounded-[28px] border-2 border-[rgba(127,49,184,0.4)] overflow-hidden shadow-2xl shadow-black/50">
            <img src="/images/produtos/chatgpt-recomendacao.png" alt="Mockup de anúncio patrocinado dentro de uma recomendação do ChatGPT" className="w-full h-auto block" loading="lazy" />
          </div>
          <div className="w-[180px] md:w-[200px] rounded-[28px] border-2 border-[rgba(127,49,184,0.4)] overflow-hidden shadow-2xl shadow-black/50 mt-8">
            <img src="/images/produtos/chatgpt-descoberta.png" alt="Mockup de anúncio patrocinado dentro de uma resposta de descoberta do ChatGPT" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      );
    default:
      return null;
  }
}

// Rich Media — três formatos interativos de verdade: clique para navegar/expandir/escolher
function RichMediaDemo() {
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const slides = ["#7F31B8", "#F45504", "#7F31B8", "#F45504"];
  const items = ["#7F31B8", "#F45504", "#7F31B8", "#F45504", "#7F31B8", "#F45504"];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Carrossel Interativo — clique para navegar */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[200px] h-[380px] rounded-[32px] border-2 bg-[#000000] relative overflow-hidden" style={{ borderColor: "#F45504" }}>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
          <div
            className="absolute inset-0 flex items-center transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slide * 200}px)` }}
          >
            {slides.map((c, i) => (
              <div key={i} className="w-[200px] h-[380px] shrink-0 flex flex-col items-center justify-center p-6" style={{ background: `linear-gradient(135deg, ${c}33, ${c}11)` }}>
                <div className="w-24 h-24 rounded-2xl mb-4" style={{ background: `linear-gradient(135deg, ${c}88, ${c}44)` }} />
                <div className="w-28 h-2 rounded-full bg-white/20 mb-2" />
                <div className="w-20 h-2 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Próximo produto"
            onClick={() => setSlide((s) => (s + 1) % slides.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center"
          >
            ›
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {slides.map((_, i) => <div key={i} className={`h-1.5 rounded-full transition-all ${i === slide ? "w-5 bg-[#F45504]" : "w-1.5 bg-white/30"}`} />)}
          </div>
          <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Inter'] font-bold text-white/60 text-xs tracking-wider z-10">Carrossel Interativo</span>
        </div>
        <p className="text-white/50 text-xs mt-3 text-center">Clique na seta para navegar pelos produtos</p>
      </div>

      {/* Fullscreen Imersivo — clique para expandir */}
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="w-full max-w-[200px] h-[380px] rounded-[32px] border-2 bg-[#000000] relative overflow-hidden text-left"
          style={{ borderColor: "#F45504" }}
        >
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7F31B8]/40 to-[#F45504]/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div
              className="w-full rounded-xl bg-gradient-to-r from-[#7F31B8]/40 to-[#F45504]/40 mb-4 transition-all duration-500"
              style={{ height: expanded ? "220px" : "128px" }}
            />
            <div className="w-32 h-3 rounded-full bg-white/30 mb-2" />
            <div className="w-24 h-3 rounded-full bg-white/15 mb-6" />
            <div className="px-6 py-2 rounded-full border border-[#F45504]/50 bg-[#F45504]/20">
              <span className="text-[#F45504] text-xs font-bold">{expanded ? "EXPANDIDO" : "TOQUE PARA EXPANDIR"}</span>
            </div>
          </div>
          <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Inter'] font-bold text-white/60 text-xs tracking-wider z-10">Fullscreen Imersivo</span>
        </button>
        <p className="text-white/50 text-xs mt-3 text-center">Clique no anúncio para expandir</p>
      </div>

      {/* Galeria Shoppable — clique para escolher */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[200px] h-[380px] rounded-[32px] border-2 bg-[#000000] relative overflow-hidden" style={{ borderColor: "#F45504" }}>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
          <div className="absolute inset-0 p-4 pt-10">
            <div className="grid grid-cols-2 gap-2 h-full pb-4">
              {items.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPicked(i)}
                  className="rounded-lg relative overflow-hidden transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${c}44, ${c}22)`,
                    outline: picked === i ? "2px solid #F45504" : "none",
                    transform: picked === i ? "scale(0.96)" : "scale(1)",
                  }}
                >
                  <div className="absolute inset-0 flex items-end p-1.5">
                    <div className="w-full flex items-center justify-between">
                      <div className="w-8 h-1 rounded bg-white/20" />
                      <div className="w-4 h-4 rounded-full bg-[#F45504]/40 flex items-center justify-center">
                        <span className="text-white text-[6px]">{picked === i ? "✓" : "+"}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Inter'] font-bold text-white/60 text-xs tracking-wider z-10">Galeria Shoppable</span>
        </div>
        <p className="text-white/50 text-xs mt-3 text-center">Clique em um produto para selecionar</p>
      </div>
    </div>
  );
}

function getVisual(s: Solucao): React.ReactNode {
  if (s.id === "rich-media") return null; // renderizado à parte, full width
  const custom = <CustomVisual id={s.id} />;
  if (custom) return custom;
  if (s.heroImage) return <ProductImage src={s.heroImage} alt={`Mockup de ${s.label} da South Media`} />;
  return <ImagePlaceholder label={s.label} />;
}

function ProductSection({ solucao, index }: { solucao: Solucao; index: number }) {
  const reverse = index % 2 === 1;
  const isRichMedia = solucao.id === "rich-media";

  return (
    <section id={solucao.id} className={`relative py-16 noise-overlay scroll-mt-[104px] overflow-hidden ${index % 2 === 0 ? "section-dark" : "section-alt"}`}>
      <div
        aria-hidden="true"
        className={index % 2 === 0 ? "glow-edge-orange" : "glow-edge-purple"}
        style={{ width: 420, height: 420, top: "5%", [reverse ? "left" : "right"]: "-8%", opacity: 0.5 } as React.CSSProperties}
      />
      <div className="container relative z-10">
        <div className={`grid ${isRichMedia ? "" : "lg:grid-cols-2"} gap-10 lg:gap-14 items-center mb-10`}>
          <div className={`animate-on-scroll ${!isRichMedia && reverse ? "lg:order-2" : "lg:order-1"}`}>
            <span className="pill-label mb-4 inline-block">{solucao.grupo}</span>
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">{solucao.headline}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">{solucao.subheadline}</p>
            {!isRichMedia && (
              <a
                href={WA_SOLUCOES}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                {solucao.cta}
              </a>
            )}
          </div>
          {!isRichMedia && (
            <div className={`animate-on-scroll ${reverse ? "lg:order-1" : "lg:order-2"}`}>{getVisual(solucao)}</div>
          )}
        </div>

        {isRichMedia && (
          <div className="mb-10 animate-on-scroll">
            <RichMediaDemo />
          </div>
        )}

        <div className="mb-10 animate-on-scroll">
          <h3 className="font-['Inter'] font-bold text-white text-base mb-2 uppercase tracking-wide text-sm text-white/50">O que é</h3>
          <p className="text-white/85 text-base leading-relaxed max-w-3xl">{solucao.oQueE}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <ComoFunciona steps={solucao.comoFunciona} />
          <div className="glass-card p-6 md:p-8 animate-on-scroll">
            <span className="text-white/50 text-xs font-['Inter'] font-semibold uppercase tracking-widest mb-5 inline-block">
              Ideal para
            </span>
            <div className="flex flex-wrap gap-2">
              {solucao.idealPara.map((it) => (
                <span key={it} className="tech-tag">{it}</span>
              ))}
            </div>
          </div>
        </div>

        <ExemploPratica exemplo={solucao.exemplo} />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="animate-on-scroll">
            <h3 className="font-['Inter'] font-bold text-white text-base mb-3">Formatos & devices</h3>
            <div className="flex flex-wrap gap-2">
              {solucao.formatos.map((f) => (
                <span key={f} className="tech-tag">{f}</span>
              ))}
            </div>
          </div>
          <CombinaCom ids={solucao.produtosRelacionados} />
        </div>

        <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <TechLinks ids={solucao.tecnologiasRelacionadas} />
        </div>

        {isRichMedia && (
          <div className="text-center mt-10 animate-on-scroll">
            <a href={WA_SOLUCOES} target="_blank" rel="noopener noreferrer" className="btn-cta">
              {solucao.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Solucoes() {
  const scrollRef = useScrollAnimation();
  const publishersRef = useCountUp(40000);
  const ctvRef = useCountUp(1330);
  const [ebookModalOpen, setEbookModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("ebookPopupShown")) {
        setEbookModalOpen(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  let sectionIndex = 0;

  return (
    <div ref={scrollRef}>
      <Helmet>
        <title>Soluções — Ecossistema de Mídia, Dados e Tecnologia | South Media</title>
        <meta name="description" content="O ecossistema de soluções da South Media: CTV, streaming, áudio, DOOH, drive to store, ChatGPT Ads e mais — mídia, dados e tecnologia operados de ponta a ponta." />
        <link rel="canonical" href="https://southmedia.com.br/solucoes" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="South Media" />
        <meta property="og:title" content="Soluções — Ecossistema de Mídia, Dados e Tecnologia | South Media" />
        <meta property="og:description" content="O ecossistema de soluções da South Media: CTV, streaming, áudio, DOOH, drive to store, ChatGPT Ads e mais." />
        <meta property="og:url" content="https://southmedia.com.br/solucoes" />
        <meta property="og:image" content="https://southmedia.com.br/og-southmedia.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soluções — Ecossistema de Mídia, Dados e Tecnologia | South Media" />
        <meta name="twitter:description" content="O ecossistema de soluções da South Media: CTV, streaming, áudio, DOOH, drive to store, ChatGPT Ads e mais." />
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
              Um ecossistema.<br />Não um catálogo.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed animate-on-scroll">
              Mídia, dados, tecnologia e mensuração operados pelo mesmo parceiro. Cada solução
              existe para um objetivo específico — e conversa com as demais.
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

      {/* Índice de produtos, agrupado */}
      <section className="section-alt py-10 noise-overlay">
        <div className="container relative z-10 space-y-4">
          {GRUPOS.map((grupo) => (
            <div key={grupo} className="flex flex-wrap items-center justify-center gap-2 animate-on-scroll">
              <span className="text-white/40 text-xs font-['Inter'] font-bold uppercase tracking-widest mr-2 w-full text-center md:w-auto md:text-left">
                {grupo}
              </span>
              {solucoes.filter((s) => s.grupo === grupo).map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-4 py-2 rounded-full text-sm font-['Inter'] font-semibold text-white/80 bg-[rgba(255,255,255,0.04)] border border-[rgba(127,49,184,0.3)] hover:border-[#F45504] hover:text-white transition-colors"
                >
                  {p.label}
                </a>
              ))}
            </div>
          ))}
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

      {/* Grupos de soluções */}
      {GRUPOS.map((grupo) => {
        const items = solucoes.filter((s) => s.grupo === grupo);
        if (items.length === 0) return null;
        return (
          <div key={grupo}>
            <section className={sectionIndex % 2 === 0 ? "section-dark py-10 noise-overlay" : "section-alt py-10 noise-overlay"}>
              <div className="container relative z-10 text-center">
                <h2 className="font-['Inter'] font-bold text-white text-2xl md:text-3xl mb-2 animate-on-scroll">{grupo}</h2>
                <p className="text-white/60 text-base animate-on-scroll">{GRUPO_INTRO[grupo]}</p>
              </div>
            </section>
            {items.map((s) => {
              const el = <ProductSection key={s.id} solucao={s} index={sectionIndex} />;
              sectionIndex += 1;
              return el;
            })}
          </div>
        );
      })}

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
              { title: "LBA", desc: "Location Based Audiences com precisão de alcance geográfico avançado." },
              { title: "DMP", desc: "Data Management Platform para segmentação e ativação de audiências proprietárias." },
              { title: "Geofence", desc: "Cercas virtuais ao redor de locais estratégicos para disparo automático de campanhas." },
              { title: "Intenção de Busca", desc: "Segmentação baseada em comportamento de busca e intenção de compra do usuário." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 animate-on-scroll">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7F31B8] to-[#7F31B8] flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="font-['Inter'] font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
            Monte uma estratégia com a South Media
          </a>
        </div>
      </section>

      <EbookModal open={ebookModalOpen} onOpenChange={setEbookModalOpen} />
      </main>
      <Footer />
    </div>
  );
}
