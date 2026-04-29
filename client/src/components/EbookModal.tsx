import { useState } from "react";
import { trpc } from "@/lib/trpc";

interface EbookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EbookModal({ open, onOpenChange }: EbookModalProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!open) return null;

  const handleClose = () => {
    sessionStorage.setItem("ebookPopupShown", "true");
    onOpenChange(false);
  };

  const ebookMutation = trpc.ebook.subscribe.useMutation({
    onSuccess: () => setStatus("success"),
    onError: () => setStatus("error"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setStatus("loading");
    ebookMutation.mutate({ email });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[rgba(155,0,255,0.3)] bg-[#0D0015] text-white shadow-2xl">

        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-[#888] hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Layout desktop: lado a lado | mobile: empilhado */}
        <div className="flex flex-col md:flex-row">

          {/* Esquerda — capa do ebook */}
          <div className="md:w-1/3 flex-shrink-0 bg-[#0a0010] flex items-center justify-center p-4">
            <img
              src="/images/ebooks/ebook-7-sinais-desperdicio.png"
              alt="Ebook: 7 Sinais de Desperdício no Orçamento de Mídia Programática"
             className="w-full object-contain rounded-xl"
              style={{ maxHeight: "480px" }}
            />
          </div>

          {/* Direita — conteúdo */}
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-['Poppins'] font-bold text-white text-xl mb-2">
                  Ebook a caminho!
                </h3>
                <p className="text-[#ccc] text-sm">
                  Confira sua caixa de entrada nos próximos minutos.
                </p>
              </div>
            ) : (
              <>
                {/* Badge */}
                <span className="inline-block text-xs font-['Poppins'] font-semibold text-[#FF6B2B] uppercase tracking-widest mb-3">
                  Guia Gratuito
                </span>

                {/* Título */}
                <h2 className="font-['Poppins'] font-extrabold text-white text-xl md:text-2xl leading-tight mb-3">
                  O guia gratuito para gestores de mídia que querem parar de desperdiçar budget
                </h2>

                {/* Subtítulo */}
                <p className="text-[#aaa] text-sm mb-5">
                  Como identificar os vazamentos invisíveis que estão queimando seu investimento antes que o trimestre acabe.
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {[
                    "Os 7 sinais mais comuns de desperdício em mídia programática",
                    "Como identificar taxas ocultas na sua cadeia de supply",
                    "Por que viewability alta não significa atenção real",
                    "Checklist para auditar seu budget agora",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#ccc]">
                      <span className="text-[#FF6B2B] font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white placeholder:text-[#555] focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] text-sm"
                  />

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="ebook-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 accent-[#9B00FF] cursor-pointer"
                    />
                    <label htmlFor="ebook-consent" className="text-[#888] text-xs leading-relaxed cursor-pointer">
                      Autorizo a South Media a coletar meus dados e enviar novidades por e-mail. Posso cancelar a qualquer momento.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!consent || status === "loading"}
                    className="btn-cta w-full !py-3 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Processando..." : "Quero receber o Ebook grátis"}
                  </button>

                  <p className="text-center text-[#666] text-xs">
                    Sem spam. Você recebe o material direto no seu e-mail.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}