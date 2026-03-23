import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
  {
    id: 1,
    category: "CTV",
    title: "CTV no Brasil: Por que Anunciar na Netflix é Mais Acessível do Que Você Pensa",
    summary: "Descubra como a TV Conectada democratizou o acesso à publicidade em plataformas premium de streaming e por que sua marca deveria estar lá.",
    date: "15 Mar 2025",
    readTime: "6 min",
    gradient: "from-[#6B00B6] to-[#9B00FF]",
  },
  {
    id: 2,
    category: "Dados",
    title: "LBA vs Geofence: Qual Tecnologia Funciona Melhor para o Seu Negócio?",
    summary: "Entenda as diferenças entre Location Based Audiences e Geofencing, e saiba qual estratégia de geolocalização é ideal para seus objetivos.",
    date: "10 Mar 2025",
    readTime: "8 min",
    gradient: "from-[#FF4500] to-[#FF6B00]",
  },
  {
    id: 3,
    category: "Performance",
    title: "O Que é CPM, CPC, CPE e CPA? Guia Completo para Gestores",
    summary: "Um guia prático e direto sobre as principais métricas de mídia programática que todo gestor de marketing precisa dominar.",
    date: "5 Mar 2025",
    readTime: "10 min",
    gradient: "from-[#FF6B00] to-[#FFB800]",
  },
  {
    id: 4,
    category: "Programática",
    title: "Fraude Publicitária: Como Identificar e Eliminar Desperdício em Mídia",
    summary: "Saiba como a fraude publicitária consome orçamentos e conheça as tecnologias que protegem seu investimento de impressões para bots.",
    date: "28 Fev 2025",
    readTime: "7 min",
    gradient: "from-[#9B00FF] to-[#6B00B6]",
  },
  {
    id: 5,
    category: "Performance",
    title: "Drive to Store: Como Medir o Impacto do Digital nas Suas Lojas Físicas",
    summary: "Aprenda a atribuir visitas em lojas físicas às suas campanhas digitais com metodologias de mensuração comprovadas.",
    date: "20 Fev 2025",
    readTime: "5 min",
    gradient: "from-[#FF4500] to-[#CC0066]",
  },
  {
    id: 6,
    category: "Áudio",
    title: "Spotify Ads e Áudio Programático: O Canal que Sua Marca Ainda Não Explorou",
    summary: "O áudio programático oferece engajamento único. Descubra por que o Spotify é uma oportunidade que sua marca não pode ignorar.",
    date: "15 Fev 2025",
    readTime: "6 min",
    gradient: "from-[#1DB954] to-[#6B00B6]",
  },
];

const categories = ["Todos", "Programática", "CTV", "Dados", "Performance", "Áudio"];

export default function Blog() {
  const scrollRef = useScrollAnimation();
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const featured = blogPosts[0];

  return (
    <div ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="section-hero py-32 pt-28 noise-overlay">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="pill-label mb-6 inline-block animate-on-scroll">Inteligência em Mídia Programática</span>
            <h1 className="font-['Syne'] font-extrabold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll">
              Conteúdo para quem<br />precisa provar resultado.
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-dark py-12 noise-overlay">
        <div className="container relative z-10">
          <div className="glass-card overflow-hidden animate-on-scroll">
            <div className="grid md:grid-cols-2">
              <div className={`bg-gradient-to-br ${featured.gradient} p-8 flex items-center justify-center min-h-[250px]`}>
                <span className="font-['Syne'] font-extrabold text-white/20 text-6xl">DESTAQUE</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="tech-tag mb-4 inline-block w-fit">{featured.category}</span>
                <h2 className="font-['Syne'] font-bold text-white text-2xl md:text-3xl mb-4">
                  {featured.title}
                </h2>
                <p className="text-[#ccc] text-base mb-6 leading-relaxed">{featured.summary}</p>
                <span className="text-[#FF4500] font-['Syne'] font-bold text-sm hover:text-[#FF6B00] transition-colors cursor-pointer">
                  Ler artigo &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-dark py-8">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-['DM_Sans'] font-medium transition-all ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#FF4500] to-[#9B00FF] text-white"
                    : "bg-[rgba(255,255,255,0.04)] text-[#ccc] border border-[rgba(155,0,255,0.3)] hover:border-[rgba(155,0,255,0.6)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-dark py-12 pb-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article key={post.id} className="glass-card overflow-hidden animate-on-scroll group cursor-pointer">
                <div className={`bg-gradient-to-br ${post.gradient} p-6 min-h-[140px] flex items-end`}>
                  <span className="tech-tag">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-['Syne'] font-bold text-white text-lg mb-3 group-hover:text-[#9B00FF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#ccc] text-sm leading-relaxed mb-4">{post.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#888] text-xs">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime} de leitura</span>
                    </div>
                    <span className="text-[#FF4500] font-['DM_Sans'] font-medium text-sm group-hover:text-[#FF6B00] transition-colors">
                      Ler mais &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Syne'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll">
            Receba inteligência de mídia no seu e-mail.
          </h2>
          <p className="text-[#ccc] text-base mb-8 animate-on-scroll">
            Conteúdo exclusivo sobre mídia programática, cases e tendências do mercado.
          </p>
          <div className="max-w-md mx-auto flex gap-3 animate-on-scroll">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-5 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white placeholder:text-[#666] focus:border-[#9B00FF] focus:outline-none transition-colors font-['DM_Sans']"
            />
            <button className="btn-cta !py-3 !px-6 shrink-0">
              Quero Receber
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
