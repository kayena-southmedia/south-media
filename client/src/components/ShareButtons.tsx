import React, { useState } from "react";

type Props = {
  url: string;
  title: string;
  summary?: string;
};

const BTN =
  "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[rgba(255,255,255,0.15)] " +
  "text-white/80 font-['Inter'] font-semibold text-sm transition-colors " +
  "hover:text-white hover:border-white focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-[#F45504]";

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11.1 22 14.3V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.25 1.53-2.25 3.1V21h-4V9z" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    </svg>
  );
}
function IconWhatsapp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.75 1.45 5.31L2 22l4.98-1.6a9.78 9.78 0 0 0 5.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.42 1.3-1.95 1.35-.5.05-.98.23-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.12-.14-.19-1.12-1.5-1.12-2.85 0-1.36.71-2.02.96-2.3.25-.27.55-.34.73-.34l.52.01c.17 0 .4-.06.62.48.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.09.19-.14.3-.28.47l-.42.48c-.14.14-.28.29-.12.57.16.27.72 1.18 1.54 1.91 1.06.94 1.95 1.23 2.22 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.58.75 1.85.88.27.14.45.2.51.32.07.11.07.65-.17 1.33z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function ShareButtons({ url, title, summary }: Props) {
  const [msg, setMsg] = useState<string>("");

  const shareText = `${title}\n\n${summary ? summary + "\n\n" : ""}${url}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  function flash(text: string) {
    setMsg(text);
    window.setTimeout(() => setMsg(""), 3200);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      flash("Link copiado.");
    } catch {
      flash("Não foi possível copiar. Selecione o endereço na barra do navegador.");
    }
  }

  async function shareInstagram() {
    const nav = navigator as Navigator & {
      share?: (data: { title?: string; text?: string; url?: string }) => Promise<void>;
    };
    if (typeof nav.share === "function") {
      try {
        await nav.share({ title, text: summary, url });
        return;
      } catch {
        // usuário cancelou ou o navegador recusou: cai no copiar link
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      flash("Link copiado. O story do Instagram só aceita link pelo celular — abra este artigo no telefone e toque em Instagram.");
    } catch {
      flash("O story do Instagram só aceita link pelo celular. Abra este artigo no telefone e toque em Instagram.");
    }
  }

  return (
    <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.1)]">
      <p className="font-['Inter'] font-semibold text-white/50 text-xs tracking-[0.08em] uppercase mb-4">
        Compartilhar este artigo
      </p>

      <div className="flex flex-wrap gap-3">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={BTN} aria-label="Compartilhar no LinkedIn">
          <IconLinkedin />
          LinkedIn
        </a>

        <a href={facebook} target="_blank" rel="noopener noreferrer" className={BTN} aria-label="Compartilhar no Facebook">
          <IconFacebook />
          Facebook
        </a>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={BTN} aria-label="Compartilhar no WhatsApp">
          <IconWhatsapp />
          WhatsApp
        </a>

        <button type="button" onClick={shareInstagram} className={BTN} aria-label="Compartilhar no Instagram">
          <IconInstagram />
          Instagram
        </button>

        <button type="button" onClick={copyLink} className={BTN} aria-label="Copiar link do artigo">
          <IconLink />
          Copiar link
        </button>
      </div>

      <p className="text-white/40 text-xs font-['Inter'] mt-4 max-w-xl leading-relaxed">
        No celular, o WhatsApp permite escolher <strong className="text-white/60 font-semibold">Meu status</strong> na
        mesma tela de contatos, e o Instagram abre o compartilhamento do sistema, de onde dá para publicar nos Stories.
      </p>

      {msg ? (
        <p className="text-[#F45504] text-sm font-['Inter'] font-semibold mt-4 max-w-xl leading-relaxed" role="status">
          {msg}
        </p>
      ) : null}
    </div>
  );
}
