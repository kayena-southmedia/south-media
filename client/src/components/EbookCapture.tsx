import { useId, useState } from "react";

const beneficios = [
  "84% dos brasileiros já agiram após um anúncio em CTV — e 60% compraram após ouvir um podcast",
  "Por que retail media já ultrapassou a receita global de TV e cresce +37% no Brasil",
  "O fim do Privacy Sandbox: por que dados próprios, contexto e mensuração viram vantagem",
  "O novo mapa da atenção fora dos feeds: CTV, DOOH, áudio, drive to store e nativo",
];

export default function EbookCapture() {
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;

  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cargo || !empresa || !consent) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cargo, empresa }),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }
      console.error("[ebook] falha ao enviar lead:", response.status);
      setStatus("error");
    } catch (err) {
      console.error("[ebook] falha de rede:", err);
      setStatus("error");
    }
  };

  return (
    <div className="grid md:grid-cols-2">
      {/* Esquerda — capa + descrição */}
      <div className="p-6 md:p-8 flex flex-col">
        <img
          src="/images/ebooks/ebook-futuro-inteligencia-midia.png"
          alt="Ebook: O Futuro da Inteligência de Mídia — South Media"
          className="w-full rounded-xl mb-6"
        />

        <span className="inline-block text-xs font-['Inter'] font-semibold text-[#F45504] uppercase tracking-widest mb-3">
          Estudo gratuito
        </span>

        <h3 className="font-['Inter'] font-bold text-white text-xl md:text-2xl leading-tight mb-3">
          O Futuro da Inteligência de Mídia
        </h3>

        <p className="text-white/70 text-sm mb-5">
          Estudo elaborado pelos especialistas da South Media sobre para onde vai o investimento em mídia entre 2026 e 2030 — dados, atenção e resultado real na nova era da mídia.
        </p>

        <ul className="space-y-2">
          {beneficios.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/80">
              <span className="text-[#F45504] font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Direita — formulário */}
      <div className="p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[rgba(127,49,184,0.3)]">
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-['Inter'] font-bold text-white text-xl mb-2">
              Ebook a caminho!
            </h3>
            <p className="text-white/80 text-sm">
              Confira sua caixa de entrada nos próximos minutos.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor={fieldId("email")} className="text-white/70 text-xs font-['Inter'] font-medium">
                E-mail corporativo
              </label>
              <input
                id={fieldId("email")}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@empresa.com"
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white placeholder:text-white/45 focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor={fieldId("cargo")} className="text-white/70 text-xs font-['Inter'] font-medium">
                Cargo
              </label>
              <input
                id={fieldId("cargo")}
                type="text"
                required
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                placeholder="Seu cargo"
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white placeholder:text-white/45 focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor={fieldId("empresa")} className="text-white/70 text-xs font-['Inter'] font-medium">
                Empresa
              </label>
              <input
                id={fieldId("empresa")}
                type="text"
                required
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Nome da empresa"
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white placeholder:text-white/45 focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] text-sm"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id={fieldId("consent")}
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-[#7F31B8] cursor-pointer"
              />
              <label htmlFor={fieldId("consent")} className="text-white/60 text-xs leading-relaxed cursor-pointer">
                Autorizo a South Media a coletar meus dados e enviar novidades por e-mail. Posso cancelar a qualquer momento.
              </label>
            </div>

            {status === "error" && (
              <div className="rounded-xl border border-[#F45504]/50 bg-[#F45504]/10 px-4 py-3">
                <p className="text-white text-sm font-medium">
                  Não conseguimos enviar agora.
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Tente novamente em instantes ou fale com a gente no WhatsApp.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={!email || !cargo || !empresa || !consent || status === "loading"}
              className="btn-cta w-full !py-3 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Processando..." : "Quero receber o Ebook grátis"}
            </button>

            <p className="text-center text-white/50 text-xs">
              Sem spam. Você recebe o material direto no seu e-mail.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
