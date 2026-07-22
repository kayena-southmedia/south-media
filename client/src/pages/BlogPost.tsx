import React from "react";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WA_BLOG } from "@/lib/whatsapp";

const SITE = "https://southmedia.com.br";
const SITE_NAME = "South Media";

const MONTHS: Record<string, string> = {
  jan: "01", fev: "02", mar: "03", abr: "04", mai: "05", jun: "06",
  jul: "07", ago: "08", set: "09", out: "10", nov: "11", dez: "12",
  feb: "02", apr: "04", may: "05", aug: "08", sep: "09", oct: "10", dec: "12",
};

/** "22 Jul 2026" -> "2026-07-22" (null se não reconhecer). */
function toISODate(display: string): string | null {
  const m = display.trim().match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]{3,})\.?\s+(\d{4})$/);
  if (!m) return null;
  const mon = MONTHS[m[2].slice(0, 3).toLowerCase()];
  if (!mon) return null;
  return `${m[3]}-${mon}-${m[1].padStart(2, "0")}`;
}

const absCover = (cover: string) => `${SITE}${cover.startsWith("/") ? "" : "/"}${cover}`;

export default function BlogPost() {
  const scrollRef = useScrollAnimation();
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div>
        <Helmet>
          <title>Artigo não encontrado | {SITE_NAME}</title>
          <meta name="description" content="O artigo que você procura não existe ou foi movido. Veja os conteúdos mais recentes da South Media sobre mídia programática." />
          <meta name="robots" content="noindex, follow" />
          <link rel="canonical" href={`${SITE}/blog`} />
        </Helmet>
        <Navbar />
        <section className="min-h-[80vh] flex items-center justify-center pt-20">
          <div className="text-center">
            <span className="font-['Inter'] font-bold text-[120px] leading-none bg-gradient-to-r from-[#7F31B8] via-[#7F31B8] to-[#F45504] bg-clip-text text-transparent">
              404
            </span>
            <h1 className="font-['Inter'] font-bold text-white text-2xl mb-4 -mt-4">
              Artigo não encontrado
            </h1>
            <Link href="/blog" className="btn-cta">
              Voltar para o Blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const canonical = `${SITE}/blog/${post.slug}`;
  const pageTitle = `${post.title} | ${SITE_NAME}`;
  const image = absCover(post.cover);
  const iso = toISODate(post.date);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    image: [image],
    author: { "@type": "Organization", name: post.author, url: SITE },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon-esfera.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    ...(post.category ? { articleSection: post.category } : {}),
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
  };

  // Parse markdown-like content into HTML
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushTable = () => {
      if (tableHeaders.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="text-left px-4 py-3 bg-[rgba(127,49,184,0.15)] text-white font-['Inter'] font-bold text-sm border-b border-[rgba(127,49,184,0.3)]">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-[rgba(255,255,255,0.05)]">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-white/80 text-sm">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Table detection
      if (line.startsWith("|")) {
        const cells = line.split("|").filter((c) => c.trim() !== "");
        if (!inTable) {
          inTable = true;
          tableHeaders = cells;
          // Skip separator line
          if (i + 1 < lines.length && lines[i + 1].includes("---")) {
            i++;
          }
          continue;
        }
        if (line.includes("---")) continue;
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="font-['Inter'] font-bold text-white text-2xl md:text-3xl mt-12 mb-6">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-['Inter'] font-bold text-[#F45504] text-xl mt-8 mb-4">
            {line.replace("### ", "")}
          </h3>
        );
      }
      // Bold paragraph
      else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="font-['Inter'] font-bold text-white text-base mb-4">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      // List items
      else if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
        if (match) {
          elements.push(
            <div key={i} className="flex gap-3 mb-3 ml-4">
              <span className="text-[#F45504] mt-1.5 shrink-0">&#8226;</span>
              <p className="text-white/80 text-base leading-relaxed">
                <strong className="text-white">{match[1]}</strong>{match[2]}
              </p>
            </div>
          );
        }
      } else if (line.startsWith("- ")) {
        elements.push(
          <div key={i} className="flex gap-3 mb-3 ml-4">
            <span className="text-[#F45504] mt-1.5 shrink-0">&#8226;</span>
            <p className="text-white/80 text-base leading-relaxed">{line.replace("- ", "")}</p>
          </div>
        );
      }
      // Numbered list
      else if (/^\d+\.\s/.test(line)) {
        const match = line.match(/^(\d+)\.\s\*\*(.+?)\*\*(.*)$/);
        if (match) {
          elements.push(
            <div key={i} className="flex gap-3 mb-3 ml-4">
              <span className="text-[#7F31B8] font-['Inter'] font-bold shrink-0">{match[1]}.</span>
              <p className="text-white/80 text-base leading-relaxed">
                <strong className="text-white">{match[2]}</strong>{match[3]}
              </p>
            </div>
          );
        } else {
          const simpleMatch = line.match(/^(\d+)\.\s(.+)$/);
          if (simpleMatch) {
            elements.push(
              <div key={i} className="flex gap-3 mb-3 ml-4">
                <span className="text-[#7F31B8] font-['Inter'] font-bold shrink-0">{simpleMatch[1]}.</span>
                <p className="text-white/80 text-base leading-relaxed">{simpleMatch[2]}</p>
              </div>
            );
          }
        }
      }
      // Regular paragraph
      else if (line.trim() !== "") {
        // Handle inline bold
        const parts = line.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <p key={i} className="text-white/80 text-base leading-relaxed mb-4">
            {parts.map((part, pi) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={pi} className="text-white">{part.replace(/\*\*/g, "")}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
    }

    if (inTable) flushTable();

    return elements;
  };

  return (
    <div ref={scrollRef}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={image} />

        {/* JSON-LD Article (SEO/GEO) */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd).replace(/</g, "\\u003c")}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.cover} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/80 to-[#000000]" />
        </div>
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#7F31B8] font-['Inter'] font-semibold text-sm mb-8 hover:text-[#F45504] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Voltar para o Blog
          </Link>
          <h1 className="font-['Inter'] font-bold text-white text-3xl md:text-5xl lg:text-6xl mb-6 max-w-4xl leading-tight text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/60 text-sm font-['Inter']">
            <span>{post.author}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-dark py-16 noise-overlay">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            {renderContent(post.content)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-orange-purple py-16 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Inter'] font-bold text-white text-2xl md:text-3xl mb-4 animate-on-scroll">
            Quer aplicar essas estratégias na sua empresa?
          </h2>
          <p className="text-white/80 text-base mb-8 animate-on-scroll">
            Receba um diagnóstico estratégico gratuito e descubra como otimizar seus investimentos em mídia.
          </p>
          <a href={WA_BLOG} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !px-10 !py-5 animate-on-scroll inline-flex">
            Solicitar Diagnóstico Gratuito
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
