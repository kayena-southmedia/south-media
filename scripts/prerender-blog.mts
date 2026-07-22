/**
 * Prerender do <head> dos artigos do blog (SEO/GEO/SMO).
 * Roda DEPOIS do `vite build`. Para cada post, grava dist/public/blog/<slug>/index.html
 * com <title> + description + canonical + Open Graph + Twitter + JSON-LD já no HTML,
 * para que scrapers (LinkedIn/WhatsApp/Facebook) que não rodam JS leiam as tags corretas.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../client/src/data/blogPosts.ts";

const SITE = "https://southmedia.com.br";
const SITE_NAME = "South Media";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.resolve(REPO_ROOT, "dist/public");
const BASE_HTML_PATH = path.join(OUT_DIR, "index.html");

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escAttr(s: string): string {
  return escHtml(s).replace(/"/g, "&quot;");
}
function jsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

const MONTHS: Record<string, string> = {
  jan: "01", fev: "02", mar: "03", abr: "04", mai: "05", jun: "06",
  jul: "07", ago: "08", set: "09", out: "10", nov: "11", dez: "12",
  feb: "02", apr: "04", may: "05", aug: "08", sep: "09", oct: "10", dec: "12",
};
function toISODate(display: string): string | null {
  const m = display.trim().match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]{3,})\.?\s+(\d{4})$/);
  if (!m) return null;
  const mon = MONTHS[m[2].slice(0, 3).toLowerCase()];
  if (!mon) return null;
  return `${m[3]}-${mon}-${m[1].padStart(2, "0")}`;
}
function absCover(cover: string): string {
  return `${SITE}${cover.startsWith("/") ? "" : "/"}${cover}`;
}

function buildHead(post: (typeof blogPosts)[number]): string {
  const url = `${SITE}/blog/${post.slug}`;
  const title = `${post.title} | ${SITE_NAME}`;
  const desc = post.summary;
  const image = absCover(post.cover);
  const iso = toISODate(post.date);

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: desc,
    image: [image],
    author: { "@type": "Organization", name: post.author, url: SITE },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon-esfera.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(post.category ? { articleSection: post.category } : {}),
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
  };

  return [
    `    <link rel="canonical" href="${escAttr(url)}" />`,
    `    <meta property="og:type" content="article" />`,
    `    <meta property="og:site_name" content="${escAttr(SITE_NAME)}" />`,
    `    <meta property="og:title" content="${escAttr(title)}" />`,
    `    <meta property="og:description" content="${escAttr(desc)}" />`,
    `    <meta property="og:url" content="${escAttr(url)}" />`,
    `    <meta property="og:image" content="${escAttr(image)}" />`,
    `    <meta property="og:locale" content="pt_BR" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escAttr(title)}" />`,
    `    <meta name="twitter:description" content="${escAttr(desc)}" />`,
    `    <meta name="twitter:image" content="${escAttr(image)}" />`,
    `    <script type="application/ld+json">${jsonLd(article)}</script>`,
  ].join("\n");
}

function renderPage(baseHtml: string, post: (typeof blogPosts)[number]): string {
  const title = `${post.title} | ${SITE_NAME}`;
  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escHtml(title)}</title>`);
  const descTag = `<meta name="description" content="${escAttr(post.summary)}" />`;
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, descTag);
  } else {
    html = html.replace(/<\/head>/i, `    ${descTag}\n  </head>`);
  }
  html = html.replace(/<\/head>/i, `${buildHead(post)}\n  </head>`);
  return html;
}

function main() {
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.error(`[prerender-blog] index.html não encontrado em ${BASE_HTML_PATH}. Rode "vite build" antes.`);
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(BASE_HTML_PATH, "utf-8");
  let count = 0;
  for (const post of blogPosts) {
    if (!post.slug) continue;
    const dir = path.join(OUT_DIR, "blog", post.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), renderPage(baseHtml, post), "utf-8");
    count++;
  }
  console.log(`[prerender-blog] ${count} artigos prerenderizados em dist/public/blog/<slug>/index.html`);
}

main();
