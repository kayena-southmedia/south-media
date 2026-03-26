import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogPosts, categories } from "@/data/blogPosts";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Blog() {
  const scrollRef = useScrollAnimation();
  const [filter, setFilter] = useState("Todos");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const newsletterMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("Inscrito com sucesso! Você receberá nosso conteúdo exclusivo.");
      setNewsletterEmail("");
    },
    onError: () => {
      toast.error("Erro ao se inscrever. Verifique o e-mail e tente novamente.");
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    newsletterMutation.mutate({ email: newsletterEmail });
  };

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
            <h1 className="font-['Poppins'] font-extrabold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll">
              Conteúdo para quem<br />precisa provar resultado.
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-dark py-12 noise-overlay">
        <div className="container relative z-10">
          <Link href={`/blog/${featured.slug}`} className="block">
            <div className="glass-card overflow-hidden animate-on-scroll group cursor-pointer">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[250px] overflow-hidden">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(5,0,8,0.6)]" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="tech-tag mb-4 inline-block w-fit">{featured.category}</span>
                  <h2 className="font-['Poppins'] font-bold text-white text-2xl md:text-3xl mb-4 group-hover:text-[#9B00FF] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#ccc] text-base mb-6 leading-relaxed">{featured.summary}</p>
                  <span className="text-[#FF4500] font-['Poppins'] font-bold text-sm group-hover:text-[#FF6B00] transition-colors">
                    Ler artigo &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>
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
                className={`px-5 py-2 rounded-full text-sm font-['Poppins'] font-medium transition-all ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#6B00B6] to-[#FF4500] text-white"
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
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="glass-card overflow-hidden animate-on-scroll group cursor-pointer h-full">
                  <div className="relative min-h-[180px] overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,0,8,0.8)] to-transparent" />
                    <span className="tech-tag absolute bottom-4 left-4">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Poppins'] font-bold text-white text-lg mb-3 group-hover:text-[#9B00FF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#ccc] text-sm leading-relaxed mb-4">{post.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[#888] text-xs">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime} de leitura</span>
                      </div>
                      <span className="text-[#FF4500] font-['Poppins'] font-medium text-sm group-hover:text-[#FF6B00] transition-colors">
                        Ler mais &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl mb-4 animate-on-scroll">
            Receba inteligência de mídia no seu e-mail.
          </h2>
          <p className="text-[#ccc] text-base mb-8 animate-on-scroll">
            Conteúdo exclusivo sobre mídia programática, cases e tendências do mercado.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3 animate-on-scroll">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-5 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white placeholder:text-[#666] focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins']"
            />
            <button type="submit" disabled={newsletterMutation.isPending} className="btn-cta !py-3 !px-6 shrink-0 disabled:opacity-60">
              {newsletterMutation.isPending ? "..." : "Quero Receber"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
