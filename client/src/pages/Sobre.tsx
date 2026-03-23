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

const SOUTH_AMERICA_MAP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/south-america-map-7iGC4KyKx4moHCV8mvhDxC.webp";

// Map locations with percentage positions on the image (without Assunção)
const mapLocations = [
  { name: "São Paulo", top: "55%", left: "62%", color: "#FF6B00", type: "brasil" },
  { name: "Pernambuco", top: "32%", left: "78%", color: "#FF6B00", type: "brasil" },
  { name: "Paraná", top: "60%", left: "56%", color: "#FF6B00", type: "brasil" },
  { name: "Santa Catarina", top: "64%", left: "55%", color: "#FF6B00", type: "brasil" },
  { name: "Buenos Aires", top: "72%", left: "48%", color: "#9B00FF", type: "latam" },
  { name: "Santiago", top: "68%", left: "32%", color: "#9B00FF", type: "latam" },
  { name: "Lima", top: "42%", left: "28%", color: "#9B00FF", type: "latam" },
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
          <div className="max-w-3xl mx-auto animate-on-scroll">
            {/* Realistic South America Map with overlaid labels */}
            <div className="relative w-full max-w-[600px] mx-auto">
              <img
                src={SOUTH_AMERICA_MAP}
                alt="Mapa da América do Sul com presença South Media"
                className="w-full h-auto rounded-2xl"
              />
              {/* Location labels overlay */}
              {mapLocations.map((loc) => (
                <div
                  key={loc.name}
                  className="absolute flex items-center gap-1.5"
                  style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: loc.color }} />
                    <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: loc.color }} />
                  </span>
                  <span className="text-white text-[10px] md:text-xs font-['Poppins'] font-semibold whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {loc.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF6B00]" />
                <span className="text-[#888] text-sm font-['Poppins']">Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#9B00FF]" />
                <span className="text-[#888] text-sm font-['Poppins']">LATAM</span>
              </div>
            </div>
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
              Buenos Aires, Santiago e Lima.
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
