import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { WA_SOLUCOES } from "@/lib/whatsapp";
import EbookModal from "@/components/EbookModal";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/solutions-bg-KLYqGKrEjJnx8Zz8cJHVdp.webp";

function SolutionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card p-6 animate-on-scroll">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B00B6] to-[#9B00FF] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-['Poppins'] font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-[#ccc] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatPill({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#6B00B6] to-[#FF4500] text-white text-sm font-medium">
      {text}
    </span>
  );
}

function FlowStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 animate-on-scroll">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B00B6] to-[#FF4500] flex items-center justify-center shrink-0">
        <span className="font-['Poppins'] font-extrabold text-white text-lg">{number}</span>
      </div>
      <div>
        <h4 className="font-['Poppins'] font-bold text-white text-base mb-1">{title}</h4>
        <p className="text-[#ccc] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// SVG Icons
const IconDisplay = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
);
const IconTV = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
);
const IconLocation = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconApp = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
);
const IconAudio = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
);
const IconPush = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
);
const IconData = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconGame = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
);
const IconStore = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconDOOH = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="3" width="18" height="12" rx="1"/><line x1="7" y1="19" x2="17" y2="19"/><line x1="12" y1="15" x2="12" y2="19"/><line x1="5" y1="22" x2="19" y2="22"/></svg>
);
const IconTikTok = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);
const IconRich = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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

  return (
    <div ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={SOLUTIONS_BG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050008]/60 to-[#050008]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="pill-label mb-6 inline-block animate-on-scroll">Nossa AdTech</span>
            <h1 className="font-['Poppins'] font-extrabold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll text-balance">
              One Stop Shop<br />Programático.
            </h1>
            <p className="text-[#ccc] text-lg md:text-xl max-w-2xl leading-relaxed animate-on-scroll">
              Sem fragmentação. Sem intermediários. Conectamos diferentes telas e pontos de contato
              para integrar a jornada do consumidor.
            </p>
          </div>
        </div>
      </section>

      {/* Mídia Programática */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Mídia Programática</span>
              <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-6 text-balance">
                Execute campanhas em mais de 40.000 publishers premium
              </h2>
              <p className="text-[#ccc] text-base leading-relaxed mb-6">
                Otimização contínua de lances, redução de CPA e maximização de conversão.
                Nossa DSP proprietária garante que cada impressão seja entregue a pessoas reais,
                em ambientes seguros e com total transparência.
              </p>
              <div className="flex flex-wrap gap-3">
                <StatPill text="+193% conversões" />
                <StatPill text="+600% CTR" />
                <StatPill text="+93% taxa de conclusão" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              <div className="glass-card p-6 text-center">
                <span className="font-['Poppins'] font-extrabold text-3xl text-[#FF4500]">+<span ref={publishersRef}>0</span></span>
                <p className="text-[#ccc] text-sm mt-2">Publishers Premium</p>
              </div>
              <div className="glass-card p-6 text-center">
                <span className="font-['Poppins'] font-extrabold text-3xl text-[#9B00FF]">+<span ref={ctvRef}>0</span></span>
                <p className="text-[#ccc] text-sm mt-2">Publishers CTV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTV */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Inventário Connected TV</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Conecte-se com sua audiência pela maior tela da casa.
            </h2>
            <p className="text-[#FF4500] font-['Poppins'] font-bold text-xl">Anuncie conosco diretamente na Netflix</p>
            <span className="tech-tag mt-4 inline-block">+1.330 Publishers de CTV no Brasil</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Vídeo Streaming Content", desc: "Anúncios em conteúdo premium de streaming com alta atenção do espectador." },
              { title: "Pré-roll, Mid-roll & Post-roll", desc: "Formatos de vídeo integrados à experiência de assistir, com alto completion rate." },
              { title: "Sitelists ou Deals", desc: "Compre através de sitelists curadas ou deals exclusivos com publishers premium." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 animate-on-scroll">
                <IconTV />
                <h3 className="font-['Poppins'] font-bold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-[#ccc] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTV Ecosystem Diagram */}
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <div className="glass-card p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6B00B6] to-[#FF4500] flex items-center justify-center mx-auto mb-4">
                  <IconTV />
                </div>
                <h3 className="font-['Poppins'] font-bold text-white text-xl">Ecossistema CTV</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { label: "Connected TV", items: "Netflix, Globoplay, Disney+" },
                  { label: "Over-the-Top", items: "Pluto TV, YouTube, Dailymotion" },
                  { label: "Devices", items: "Samsung, Apple TV, Roku, Fire TV" },
                  { label: "Console Gaming", items: "Xbox, PlayStation" },
                ].map((cat) => (
                  <div key={cat.label} className="p-3 rounded-xl bg-[rgba(155,0,255,0.1)] border border-[rgba(155,0,255,0.2)]">
                    <p className="font-['Poppins'] font-bold text-[#9B00FF] text-sm mb-1">{cat.label}</p>
                    <p className="text-[#888] text-xs">{cat.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Household Sync */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Household Sync</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Impacte, mensure e crie engajamento com Household Sync.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 animate-on-scroll">
            {[
              { step: "TARGET CTV", desc: "Anúncio na TV Conectada" },
              { step: "HOUSEHOLD SYNC", desc: "Sincroniza mobile na mesma rede" },
              { step: "REIMPACTO", desc: "Janela de 30s a 10 dias" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="glass-card p-6 text-center min-w-[180px]">
                  <p className="font-['Poppins'] font-bold text-[#FF4500] text-sm mb-1">{item.step}</p>
                  <p className="text-[#ccc] text-xs">{item.desc}</p>
                </div>
                {i < 2 && <span className="text-[#FF4500] font-bold text-2xl hidden md:block">&rarr;</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Intelligence */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Location Intelligence - LBA</span>
              <p className="text-[#ccc] text-base leading-relaxed mb-6">
                Obtenha maior precisão de alcance com a estratégia Location Based Audiences.
                Mapeamos toda a jornada do usuário até o destino, incluindo shoppings, praças,
                estacionamentos e pontos de ônibus.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tech-tag">MAIN POI</span>
                <span className="tech-tag">TIER 2 INTEREST POINTS</span>
              </div>
            </div>
            <div className="glass-card p-4 animate-on-scroll overflow-hidden rounded-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/lba-heatmap_9a16906d.png"
                alt="Mapa de calor de distribuição geográfica com marcadores de localização em Recife e região metropolitana"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inteligência de Dados */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Inteligência de Dados</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl text-balance">
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

      {/* TikTok Remarketing */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">TikTok Remarketing</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              A ponte entre TikTok Ads e mídia programática
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 animate-on-scroll">
            {["TikTok Ad", "Clique", "Site do Cliente", "Clusterização", "Remarketing"].map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-4 py-3 rounded-xl bg-[rgba(155,0,255,0.15)] border border-[rgba(155,0,255,0.3)] text-center">
                  <p className="font-['Poppins'] font-bold text-white text-sm">{step}</p>
                </div>
                {i < 4 && <span className="text-[#FF4500] font-bold text-xl hidden md:block">&rarr;</span>}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <StatPill text="Apenas 2-3% convertem na primeira visita" />
            <StatPill text="97% precisam ser reimpactados" />
            <StatPill text="Sem reimpacto, o investimento se perde" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6 animate-on-scroll">
            {["Display", "Vídeo", "Native", "CTV"].map((f) => (
              <span key={f} className="tech-tag">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Todas as Soluções</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Programática orientada por dados, feita para gerar resultados reais.
            </h2>
            <p className="text-[#ccc] text-lg">One Stop Shop Programático — Sem fragmentação. Sem intermediários.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <IconDisplay />, title: "Display" },
              { icon: <IconTV />, title: "CTV" },
              { icon: <IconLocation />, title: "Publishers Regionais" },
              { icon: <IconStore />, title: "Drive to Store" },
              { icon: <IconData />, title: "Audience Insights" },
              { icon: <IconTV />, title: "Household Sync" },
              { icon: <IconApp />, title: "App Marketing & SMS" },
              { icon: <IconPush />, title: "Push Notification" },
              { icon: <IconDOOH />, title: "DOOH" },
              { icon: <IconAudio />, title: "Spotify & Áudio" },
              { icon: <IconTikTok />, title: "TikTok Remarketing" },
              { icon: <IconGame />, title: "In-Games" },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center animate-on-scroll group">
                <div className="w-16 h-16 rounded-full bg-[#1a0035] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#2D0057] transition-colors">
                  {item.icon}
                </div>
                <p className="font-['Poppins'] font-medium text-white text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich Media */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Formatos Especiais & Exclusivos - Rich Media</span>
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 text-balance">
              Experiências interativas e em vídeo que aumentam o tempo de permanência.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
            {/* Carrossel Interativo - PEACHY */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[380px] rounded-[32px] border-2 bg-[#0d0015] relative overflow-hidden" style={{ borderColor: "#FF4500" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
                <div className="absolute inset-0 flex items-center">
                  <div className="flex animate-carousel" style={{ animation: "carousel 6s ease-in-out infinite" }}>
                    {["#6B00B6", "#FF4500", "#9B00FF", "#D4500A"].map((c, i) => (
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
                <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Poppins'] font-bold text-white/60 text-xs tracking-wider z-10">Carrossel Interativo</span>
              </div>

            </div>

            {/* Fullscreen Imersivo - NATUZZI */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[380px] rounded-[32px] border-2 bg-[#0d0015] relative overflow-hidden" style={{ borderColor: "#FF4500" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
                <div className="absolute inset-0" style={{ animation: "fullscreenPulse 4s ease-in-out infinite" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6B00B6]/40 to-[#FF4500]/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="w-full h-32 rounded-xl bg-gradient-to-r from-[#9B00FF]/30 to-[#FF4500]/30 mb-4" style={{ animation: "scaleBreath 3s ease-in-out infinite" }} />
                    <div className="w-32 h-3 rounded-full bg-white/30 mb-2" />
                    <div className="w-24 h-3 rounded-full bg-white/15 mb-6" />
                    <div className="px-6 py-2 rounded-full border border-[#FF4500]/50 bg-[#FF4500]/20">
                      <span className="text-[#FF4500] text-xs font-bold">SAIBA MAIS</span>
                    </div>
                  </div>
                </div>
                <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Poppins'] font-bold text-white/60 text-xs tracking-wider z-10">Fullscreen Imersivo</span>
              </div>

            </div>

            {/* Galeria Shoppable - H&M */}
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[380px] rounded-[32px] border-2 bg-[#0d0015] relative overflow-hidden" style={{ borderColor: "#FF4500" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20 z-10" />
                <div className="absolute inset-0 p-4 pt-10">
                  <div className="grid grid-cols-2 gap-2 h-full pb-4">
                    {["#9B00FF", "#FF4500", "#6B00B6", "#D4500A", "#7B2FBE", "#FF6B00"].map((c, i) => (
                      <div key={i} className="rounded-lg relative overflow-hidden group" style={{ background: `linear-gradient(135deg, ${c}44, ${c}22)`, animation: `fadeInItem 0.5s ease-out ${i * 0.3}s both, shimmer 3s ease-in-out ${i * 0.5}s infinite` }}>
                        <div className="absolute inset-0 flex items-end p-1.5">
                          <div className="w-full flex items-center justify-between">
                            <div className="w-8 h-1 rounded bg-white/20" />
                            <div className="w-4 h-4 rounded-full bg-[#FF4500]/40 flex items-center justify-center">
                              <span className="text-white text-[6px]">+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="absolute top-12 left-1/2 -translate-x-1/2 font-['Poppins'] font-bold text-white/60 text-xs tracking-wider z-10">Galeria Shoppable</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Inventário Display & Video */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Inventário Display & Video</span>
              <h2 className="font-['Poppins'] font-bold text-white text-3xl mb-6">
                A South Media pode rodar formatos em diferentes portais de grande relevância.
              </h2>
              <p className="text-[#ccc] text-base leading-relaxed mb-6">
                Display e vídeo programático em publishers premium nacionais e internacionais.
                Formatos de alto impacto com viewability garantida e brand safety.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Globo.com", "UOL", "R7", "Terra", "iG", "Folha"].map((pub) => (
                  <span key={pub} className="tech-tag">{pub}</span>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              {/* Browser mockup */}
              <div className="glass-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(255,255,255,0.06)] border-b border-[rgba(155,0,255,0.2)]">
                  <div className="w-3 h-3 rounded-full bg-[#FF4500]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
                  <div className="w-3 h-3 rounded-full bg-[#6EAA5E]" />
                  <div className="flex-1 mx-4 h-6 rounded-md bg-[rgba(255,255,255,0.06)] flex items-center px-3">
                    <span className="text-[#666] text-xs">www.publisher-premium.com.br</span>
                  </div>
                </div>
                <div className="p-6 min-h-[200px] flex items-center justify-center">
                  <div className="w-full h-[160px] rounded-xl bg-gradient-to-br from-[#FF4500]/20 to-[#FF6B00]/20 border-2 border-dashed border-[#FF4500]/40 flex items-center justify-center">
                    <span className="font-['Poppins'] font-bold text-[#FF4500] text-lg">Seu anúncio aqui</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Push Notification + Geofence */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Push Notification</span>
              <h2 className="font-['Poppins'] font-bold text-white text-3xl mb-6">
                Metodologia South Media Geolocation Geofence
              </h2>
              <p className="text-[#ccc] text-base mb-8">Via triangulação de antenas com 230 milhões de celulares conectados.</p>
              <div className="space-y-6">
                {[
                  { n: "01", title: "Geofence como cerca virtual", desc: "Delimitação precisa de áreas geográficas de interesse." },
                  { n: "02", title: "Locais estratégicos", desc: "Posicionada ao redor de shoppings, eventos e pontos de interesse." },
                  { n: "03", title: "Disparo automático", desc: "Notificação enviada ao entrar na área delimitada." },
                  { n: "04", title: "Resultados mensuráveis", desc: "Aumenta visitas, promove eventos, complementa OOH." },
                ].map((item) => (
                  <FlowStep key={item.n} number={item.n} title={item.title} description={item.desc} />
                ))}
              </div>
            </div>
            <div className="animate-on-scroll flex items-center justify-center">
              <div className="w-[220px] h-[420px] rounded-[32px] border-2 border-[rgba(155,0,255,0.4)] bg-[#0d0015] relative overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20" />
                <div className="absolute top-16 left-4 right-4 p-4 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(155,0,255,0.3)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6B00B6] to-[#FF4500]" />
                    <span className="text-white text-xs font-bold">South Media</span>
                  </div>
                  <p className="text-[#ccc] text-[10px]">Oferta especial! Você está próximo da nossa loja. Aproveite 20% de desconto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Marketing & Drive to Store */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">App Marketing</span>
              <h2 className="font-['Poppins'] font-bold text-white text-2xl mb-4">Marketing de Aplicativos</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {["VÍDEO", "NATIVOS", "DISPLAY"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <p className="text-[#ccc] text-sm leading-relaxed mb-4">
                Tracking S2S com 5 eventos pós-download para mensuração completa do funil de conversão.
              </p>
            </div>
            <div className="animate-on-scroll">
              <span className="pill-label mb-4 inline-block">Drive to Store</span>
              <h2 className="font-['Poppins'] font-bold text-white text-2xl mb-4">Atribuição de Visitas</h2>
              <div className="space-y-4">
                {[
                  { n: "01", text: "Usuário recebe anúncio mobile/CTV" },
                  { n: "02", text: "Recebemos o Device ID pelo bid-stream" },
                  { n: "03", text: "Verificamos se passou perto da loja" },
                  { n: "04", text: "Mapeamos usuários próximos de lojas e POIs" },
                ].map((item) => (
                  <div key={item.n} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B00B6] to-[#FF4500] flex items-center justify-center font-['Poppins'] font-bold text-white text-xs shrink-0">{item.n}</span>
                    <p className="text-[#ccc] text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Game, DOOH, Spotify */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            <SolutionCard
              icon={<IconGame />}
              title="In-Game Advertising"
              description="A publicidade em jogos permite que as marcas se conectem em ambiente nativo. Brasil é o 5o maior consumidor de apps móveis. Gamers são 2,5x mais engajados que a média."
            />
            <SolutionCard
              icon={<IconDOOH />}
              title="DOOH"
              description="Digital Out of Home programático. Anúncios em telas digitais de shoppings, aeroportos e pontos de alto tráfego com compra automatizada."
            />
            <SolutionCard
              icon={<IconAudio />}
              title="Spotify & Áudio"
              description="Áudio programático no Spotify e outras plataformas. Segmentação avançada por perfil, momento e contexto de escuta."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Poppins'] font-extrabold text-white text-3xl md:text-5xl mb-6 animate-on-scroll text-balance">
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
      <Footer />
    </div>
  );
}
