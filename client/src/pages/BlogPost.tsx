import React from "react";
import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WHATSAPP_URL } from "@/components/Navbar";

export default function BlogPost() {
  const scrollRef = useScrollAnimation();
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div>
        <Navbar />
        <section className="min-h-[80vh] flex items-center justify-center pt-20">
          <div className="text-center">
            <span className="font-['Poppins'] font-extrabold text-[120px] leading-none bg-gradient-to-r from-[#9B00FF] via-[#6B00B6] to-[#FF4500] bg-clip-text text-transparent">
              404
            </span>
            <h1 className="font-['Poppins'] font-bold text-white text-2xl mb-4 -mt-4">
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
                    <th key={i} className="text-left px-4 py-3 bg-[rgba(155,0,255,0.15)] text-white font-['Poppins'] font-bold text-sm border-b border-[rgba(155,0,255,0.3)]">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-[rgba(255,255,255,0.05)]">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-[#ccc] text-sm">
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
          <h2 key={i} className="font-['Poppins'] font-bold text-white text-2xl md:text-3xl mt-12 mb-6">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-['Poppins'] font-bold text-[#FF4500] text-xl mt-8 mb-4">
            {line.replace("### ", "")}
          </h3>
        );
      }
      // Bold paragraph
      else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="font-['Poppins'] font-bold text-white text-base mb-4">
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
              <span className="text-[#FF4500] mt-1.5 shrink-0">&#8226;</span>
              <p className="text-[#ccc] text-base leading-relaxed">
                <strong className="text-white">{match[1]}</strong>{match[2]}
              </p>
            </div>
          );
        }
      } else if (line.startsWith("- ")) {
        elements.push(
          <div key={i} className="flex gap-3 mb-3 ml-4">
            <span className="text-[#FF4500] mt-1.5 shrink-0">&#8226;</span>
            <p className="text-[#ccc] text-base leading-relaxed">{line.replace("- ", "")}</p>
          </div>
        );
      }
      // Numbered list
      else if (/^\d+\.\s/.test(line)) {
        const match = line.match(/^(\d+)\.\s\*\*(.+?)\*\*(.*)$/);
        if (match) {
          elements.push(
            <div key={i} className="flex gap-3 mb-3 ml-4">
              <span className="text-[#9B00FF] font-['Poppins'] font-bold shrink-0">{match[1]}.</span>
              <p className="text-[#ccc] text-base leading-relaxed">
                <strong className="text-white">{match[2]}</strong>{match[3]}
              </p>
            </div>
          );
        } else {
          const simpleMatch = line.match(/^(\d+)\.\s(.+)$/);
          if (simpleMatch) {
            elements.push(
              <div key={i} className="flex gap-3 mb-3 ml-4">
                <span className="text-[#9B00FF] font-['Poppins'] font-bold shrink-0">{simpleMatch[1]}.</span>
                <p className="text-[#ccc] text-base leading-relaxed">{simpleMatch[2]}</p>
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
          <p key={i} className="text-[#ccc] text-base leading-relaxed mb-4">
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
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.cover} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050008]/60 via-[#050008]/80 to-[#050008]" />
        </div>
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9B00FF] font-['Poppins'] font-medium text-sm mb-8 hover:text-[#FF4500] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Voltar para o Blog
          </Link>
          <span className="tech-tag mb-4 inline-block">{post.category}</span>
          <h1 className="font-['Poppins'] font-extrabold text-white text-3xl md:text-5xl lg:text-6xl mb-6 max-w-4xl leading-tight text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#888] text-sm font-['Poppins']">
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
          <h2 className="font-['Poppins'] font-bold text-white text-2xl md:text-3xl mb-4 animate-on-scroll">
            Quer aplicar essas estratégias na sua empresa?
          </h2>
          <p className="text-white/80 text-base mb-8 animate-on-scroll">
            Receba um diagnóstico estratégico gratuito e descubra como otimizar seus investimentos em mídia.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta !text-lg !px-10 !py-5 animate-on-scroll inline-flex">
            Solicitar Diagnóstico Gratuito
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
