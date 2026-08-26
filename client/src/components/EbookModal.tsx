import EbookCapture from "@/components/EbookCapture";

interface EbookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EbookModal({ open, onOpenChange }: EbookModalProps) {
  if (!open) return null;

  const handleClose = () => {
    sessionStorage.setItem("ebookPopupShown", "true");
    onOpenChange(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[rgba(127,49,184,0.3)] bg-black text-white shadow-2xl">

        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <EbookCapture />
      </div>
    </div>
  );
}
