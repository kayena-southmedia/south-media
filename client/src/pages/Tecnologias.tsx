import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { track } from "@/lib/tracking";
import { WA_TECNOLOGIAS } from "@/lib/whatsapp";
import { tecnologias } from "@/data/tecnologias";
import { solucoes } from "@/data/solucoes";

const TIPO_STYLES: Record<string, string> = {
  "Tecnologia proprietária": "text-[#F45504] border-[rgba(244,85,4,0.4)] bg-[rgba(244,85,4,0.08)]",
  "Metodologia exclusiva": "text-[#7F31B8] border-[rgba(127,49,184,0.4)] bg-[rgba(127,49,184,0.08)]",
  "Parceria de verificação": "text-white/70 border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.04)]",
  "De terceiro, exclusiva nossa": "text-white/70 border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.04)]",
};

function FlowDiagram({ steps, reverse }: { steps: string[]; reverse?: boolean }) {
  return (
    <div className={`glass-card p-6 md:p-8 animate-on-scroll ${reverse ? "lg:order-1" : "lg:order-2"}`}>
      <span className="text-white/50 text-xs font-['Inter'] font-semibold uppercase tracking-widest mb-5 inline-block">
        Como funciona na prática
      </span>
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7F31B8] to-[#F45504] flex items-center justify-center shrink-0 font-['Inter'] font-bold text-white text-sm">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-[rgba(127,49,184,0.5)] to-[rgba(244,85,4,0.5)]" />}
            </div>
            <p className="text-white/85 text-sm md:text-base font-['Inter'] font-medium pb-7 pt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TecnologiaSection({ tech, index }: { tech: (typeof tecnologias)[number]; index: number }) {
  const reverse = index % 2 === 1;
  const produtosLink = solucoes.filter((s) => tech.produtosRelacionados.includes(s.id));

  return (
    <section
      id={tech.id}
      className={`relative py-20 noise-overlay scroll-mt-[104px] overflow-hidden ${index % 2 === 0 ? "section-dark" : "section-alt"}`}
    >
      <div
        aria-hidden="true"
        className={index % 2 === 0 ? "glow-edge-orange" : "glow-edge-purple"}
        style={{ width: 420, height: 420, top: "10%", [reverse ? "left" : "right"]: "-8%" } as React.CSSProperties}
      />
      <div className="container relative z-10">
        <div className="flex items-center gap-3 mb-4 animate-on-scroll">
          <div className="w-11 h-11 rounded-xl bg-black/40 border border-[rgba(127,49,184,0.3)] flex items-center justify-center shrink-0">
            {tech.icon}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-widest border ${TIPO_STYLES[tech.tipo]}`}>
            {tech.tipo}
          </span>
        </div>

        <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-3 max-w-2xl text-balance animate-on-scroll">
          {tech.label}
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-on-scroll">
          {tech.headline}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          <div className={`space-y-8 animate-on-scroll ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <div>
              <h3 className="font-['Inter'] font-bold text-white text-base mb-2 uppercase tracking-wide text-sm text-white/50">O que é</h3>
              <p className="text-white/85 text-base leading-relaxed">{tech.oQueE}</p>
            </div>
            <div>
              <h3 className="font-['Inter'] font-bold text-white text-base mb-2 uppercase tracking-wide text-sm text-white/50">Por que essa tecnologia existe</h3>
              <p className="text-white/85 text-base leading-relaxed">{tech.porQueExiste}</p>
            </div>
            <div className="glass-card p-5 border-l-4 border-l-[#F45504]">
              <p className="text-white/90 text-base italic leading-relaxed">{tech.problema}</p>
            </div>
            <div>
              <h3 className="font-['Inter'] font-bold text-white text-base mb-2 uppercase tracking-wide text-sm text-white/50">Como a South resolve</h3>
              <p className="text-white/85 text-base leading-relaxed">{tech.comoResolve}</p>
            </div>
          </div>

          <FlowDiagram steps={tech.fluxo} reverse={reverse} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card p-6 animate-on-scroll">
            <h3 className="font-['Inter'] font-bold text-white text-base mb-4">O que muda para o cliente</h3>
            <ul className="space-y-2.5">
              {tech.clienteBeneficios.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed">
                  <span className="text-[#F45504] font-bold mt-0.5 shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 animate-on-scroll">
            <h3 className="font-['Inter'] font-bold text-white text-base mb-4">O que muda para a equipe de mídia</h3>
            <ul className="space-y-2.5">
              {tech.equipeBeneficios.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed">
                  <span className="text-[#7F31B8] font-bold mt-0.5 shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <h3 className="font-['Inter'] font-bold text-white text-base mb-3">Aplicações</h3>
            <div className="flex flex-wrap gap-2">
              {tech.aplicacoes.map((a) => (
                <span key={a} className="tech-tag">{a}</span>
              ))}
            </div>
          </div>
          {produtosLink.length > 0 && (
            <div className="animate-on-scroll">
              <h3 className="font-['Inter'] font-bold text-white text-base mb-3">Produtos compatíveis</h3>
              <div className="flex flex-wrap gap-2">
                {produtosLink.map((p) => (
                  <Link
                    key={p.id}
                    href={`/solucoes#${p.id}`}
                    onClick={() => track("technology_click", { placement: "related_product", tecnologia: tech.id, solucao: p.id })}
                    className="px-3 py-1.5 rounded-lg text-sm font-['Inter'] text-white/80 bg-[rgba(255,255,255,0.04)] border border-[rgba(127,49,184,0.3)] hover:border-[#F45504] hover:text-white transition-colors"
                  >
                    {p.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Tecnologias() {
  const scrollRef = useScrollAnimation();

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
        <title>Tecnologias — Anti-VPN Tech, Double Check, Geo Intelligence | South Media</title>
        <meta name="description" content="As tecnologias proprietárias e metodologias exclusivas da South Media: por que existem, que problema resolvem e como funcionam na prática." />
        <link rel="canonical" href="https://southmedia.com.br/tecnologias" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="South Media" />
        <meta property="og:title" content="Tecnologias — Anti-VPN Tech, Double Check, Geo Intelligence | South Media" />
        <meta property="og:description" content="As tecnologias proprietárias e metodologias exclusivas da South Media: por que existem, que problema resolvem e como funcionam na prática." />
        <meta property="og:url" content="https://southmedia.com.br/tecnologias" />
        <meta property="og:image" content="https://southmedia.com.br/og-southmedia.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tecnologias — Anti-VPN Tech, Double Check, Geo Intelligence | South Media" />
        <meta name="twitter:description" content="As tecnologias proprietárias e metodologias exclusivas da South Media." />
        <meta name="twitter:image" content="https://southmedia.com.br/og-southmedia.png" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="section-hero py-32 pt-28 noise-overlay">
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <span className="pill-label mb-6 inline-block animate-on-scroll">Tecnologia Proprietária</span>
              <h1 className="font-['Inter'] font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll text-balance">
                Por que confiar no que a South Media entrega.
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed animate-on-scroll">
                Não dependemos só de terceiros. Seis camadas de tecnologia própria e verificação
                independente — cada uma resolvendo um problema real de quem investe em mídia
                programática.
              </p>
            </div>
          </div>
        </section>

        {/* Índice */}
        <section className="section-alt py-10 noise-overlay">
          <div className="container relative z-10">
            <div className="flex flex-wrap justify-center gap-2 animate-on-scroll">
              {tecnologias.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="px-4 py-2 rounded-full text-sm font-['Inter'] font-semibold text-white/80 bg-[rgba(255,255,255,0.04)] border border-[rgba(127,49,184,0.3)] hover:border-[#F45504] hover:text-white transition-colors"
                >
                  {t.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {tecnologias.map((tech, i) => (
          <TecnologiaSection key={tech.id} tech={tech} index={i} />
        ))}

        {/* CTA final */}
        <section className="section-orange-purple py-20 noise-overlay overflow-hidden">
          <div className="container relative z-10 text-center">
            <h2 className="font-['Inter'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll text-balance">
              Quer ver qual tecnologia se aplica à sua campanha?
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-2xl mx-auto animate-on-scroll">
              Conte o que você precisa resolver e mostramos, na prática, qual combinação de
              tecnologia e produto faz sentido para o seu objetivo.
            </p>
            <a
              href={WA_TECNOLOGIAS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("technology_click", { placement: "cta_final" })}
              className="btn-cta !text-lg !px-10 !py-5 animate-on-scroll inline-flex"
            >
              Falar com a South Media
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
