import { Link } from "wouter";
import type { BlogPost } from "@/data/blog/types";

export default function RecommendedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section-dark py-16 noise-overlay">
      <div className="container relative z-10">
        <span className="text-[#F45504] text-xs font-['Inter'] font-bold uppercase tracking-widest mb-3 inline-block">
          Baseado no que você leu
        </span>
        <h2 className="font-['Inter'] font-bold text-white text-2xl md:text-3xl mb-8">
          Recomendado para você
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="glass-card overflow-hidden animate-on-scroll group block h-full">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <span className="absolute top-3 left-3 text-[#F45504] text-[10px] font-bold font-['Inter'] uppercase tracking-wide bg-black/50 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-['Inter'] font-bold text-white text-sm leading-snug group-hover:text-[#7F31B8] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
