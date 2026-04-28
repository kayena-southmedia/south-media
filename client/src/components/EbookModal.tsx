import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";

interface EbookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EbookModal({ open, onOpenChange }: EbookModalProps) {
  const [ebookEmail, setEbookEmail] = useState("");
  const [ebookConsent, setEbookConsent] = useState(false);

  const ebookMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "7 Sinais de Desperdicio no Orcamento de Midia Programatica",
          content_category: "Ebook Download",
        });
      }
      toast.success("✅ Ebook enviado para seu email! Confira sua caixa de entrada nos próximos minutos.");
      onOpenChange(false);
      setEbookEmail("");
      setEbookConsent(false);
    },
    onError: () => {
      toast.error("Erro ao processar. Tente novamente.");
    },
  });

  const handleEbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ebookEmail || !ebookConsent) return;

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: ebookEmail }),
      });

      if (response.ok) {
        toast.success("✅ Ebook enviado para seu email! Confira sua caixa de entrada nos próximos minutos.");
        setEbookEmail("");
        setEbookConsent(false);
        onOpenChange(false);
      } else {
        toast.error("Erro ao enviar. Tente novamente.");
      }
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) sessionStorage.setItem("ebookPopupShown", "true");
        onOpenChange(isOpen);
      }}
    >
      <DialogContent className="bg-[#0D0015] border border-[rgba(155,0,255,0.3)] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="font-['Poppins'] font-bold text-white text-xl text-balance">
            7 Sinais de Desperdício no Seu Orçamento de Mídia Programática
          </DialogTitle>
        </DialogHeader>
        <img
          src="/images/ebooks/ebook-7-sinais-desperdicio.png"
          alt="Ebook: 7 Sinais de Desperdício no Seu Orçamento de Mídia Programática"
          className="w-full rounded-xl mb-2"
        />
        <p className="text-[#ccc] text-sm mb-4">
          Como identificar os vazamentos invisíveis que estão queimando seu investimento antes que o trimestre acabe.
        </p>
        <form onSubmit={handleEbookSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={ebookEmail}
            onChange={(e) => setEbookEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white placeholder:text-[#666] focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins']"
          />
          <div className="flex items-start gap-3">
            <Checkbox
              id="ebook-consent"
              checked={ebookConsent}
              onCheckedChange={(checked) => setEbookConsent(checked === true)}
              className="mt-0.5 border-[rgba(155,0,255,0.5)] data-[state=checked]:bg-[#9B00FF] data-[state=checked]:border-[#9B00FF]"
            />
            <label htmlFor="ebook-consent" className="text-[#aaa] text-xs leading-relaxed cursor-pointer">
              Autorizo a South Media a coletar meus dados e concordo em receber novidades, promoções e ofertas por e-mail. Posso cancelar a qualquer momento.
            </label>
          </div>
          <button
            type="submit"
            disabled={!ebookConsent || ebookMutation.isPending}
            className="btn-cta w-full !py-3 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {ebookMutation.isPending ? "Processando..." : "Receber Ebook Gratuito"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
