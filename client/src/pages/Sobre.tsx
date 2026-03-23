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
            <h1 className="font-['Syne'] font-extrabold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll">
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
            <h2 className="font-['Syne'] font-bold text-white text-3xl md:text-4xl mb-6">
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
                <h3 className="font-['Syne'] font-bold text-white text-2xl mb-4">{item.title}</h3>
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
              <h2 className="font-['Syne'] font-bold text-white text-3xl mb-6">
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
              {/* Chain comparison diagram */}
              <div className="space-y-8">
                <div className="glass-card p-6" style={{ borderColor: "rgba(255, 69, 0, 0.4)" }}>
                  <p className="font-['Syne'] font-bold text-[#FF4500] text-sm mb-4 uppercase tracking-wider">Cadeia Tradicional</p>
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
                  <p className="font-['Syne'] font-bold text-[#9B00FF] text-sm mb-4 uppercase tracking-wider">South Media</p>
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
            <h2 className="font-['Syne'] font-bold text-white text-3xl md:text-4xl">
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
                <h3 className="font-['Syne'] font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-[#ccc] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presença Geográfica */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="pill-label mb-4 inline-block">Presença Geográfica</span>
            <h2 className="font-['Syne'] font-bold text-white text-3xl md:text-4xl">
              6 Estados + Expansão LATAM
            </h2>
          </div>
          <div className="max-w-2xl mx-auto animate-on-scroll">
            {/* Stylized Brazil map SVG */}
            <svg viewBox="0 0 400 450" className="w-full max-w-[400px] mx-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Brazil outline simplified */}
              <path d="M200 20 L280 40 L340 80 L370 140 L380 200 L370 260 L340 320 L300 370 L260 400 L220 420 L180 430 L140 420 L100 390 L70 340 L50 280 L40 220 L50 160 L70 100 L100 60 L140 30 Z"
                fill="none" stroke="rgba(155,0,255,0.3)" strokeWidth="2" />
              {/* State dots with pulse */}
              {/* Paraná */}
              <circle cx="230" cy="340" r="8" fill="#FF4500" opacity="0.8">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="245" y="345" fill="#ccc" fontSize="11" fontFamily="DM Sans">Paraná</text>
              {/* Santa Catarina */}
              <circle cx="220" cy="370" r="7" fill="#9B00FF" opacity="0.8">
                <animate attributeName="r" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <text x="235" y="375" fill="#ccc" fontSize="11" fontFamily="DM Sans">Santa Catarina</text>
              {/* São Paulo */}
              <circle cx="240" cy="300" r="9" fill="#FF6B00" opacity="0.8">
                <animate attributeName="r" values="7;11;7" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <text x="255" y="305" fill="#ccc" fontSize="11" fontFamily="DM Sans">São Paulo</text>
              {/* Pernambuco */}
              <circle cx="330" cy="180" r="7" fill="#FFB800" opacity="0.8">
                <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <text x="345" y="185" fill="#ccc" fontSize="11" fontFamily="DM Sans">Pernambuco</text>
              {/* LATAM arrow */}
              <line x1="100" y1="390" x2="60" y2="420" stroke="#FF4500" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#FF4500" />
                </marker>
              </defs>
              <text x="20" y="435" fill="#FF4500" fontSize="13" fontFamily="Syne" fontWeight="bold">+ LATAM</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-['Syne'] font-bold text-white text-3xl md:text-4xl mb-4">
              +30 Marcas Líderes Já Confiam na Nossa Tecnologia
            </h2>
            <p className="text-[#ccc] text-base max-w-2xl mx-auto">
              Atuamos em todo o Brasil e seguimos em expansão para a América Latina,
              com presença estratégica no Paraná, Santa Catarina, São Paulo e Pernambuco.
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
          <h2 className="font-['Syne'] font-extrabold text-white text-3xl md:text-5xl mb-6 animate-on-scroll">
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
