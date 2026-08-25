import { useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { whatsappLink, WA_CONTATO } from "@/lib/whatsapp";

const orcamentos = ["Até R$10k", "R$10k–50k", "R$50k–100k", "Acima de R$100k"];
const horarios = ["Manhã", "Tarde", "Tanto faz"];

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export default function ScheduleForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    orcamento: "",
    horario: "",
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openWhatsApp = () => {
    const lines = [`Olá! Quero agendar meus 30 minutos de diagnóstico.`];
    if (formData.nome) lines.push(`Nome: ${formData.nome}`);
    if (formData.empresa) lines.push(`Empresa: ${formData.empresa}`);
    if (formData.telefone) lines.push(`Telefone: ${formData.telefone}`);
    if (formData.orcamento) lines.push(`Verba mensal aproximada: ${formData.orcamento}`);
    if (formData.horario) lines.push(`Melhor horário: ${formData.horario}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !consent) {
      toast.error("Preencha o e-mail e aceite o consentimento.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, source: "home-agendamento" }),
      });
      if (!response.ok) {
        console.error("[agendamento] falha ao enviar lead:", response.status);
      }
    } catch (error) {
      console.error("[agendamento] erro de rede ao enviar lead:", error);
    } finally {
      setIsSubmitting(false);
    }

    // Não bloqueia o usuário mesmo se a API falhar: o agendamento continua pelo WhatsApp.
    openWhatsApp();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-['Inter'] font-bold text-white text-2xl mb-3">Recebemos.</h3>
        <p className="text-white/80 text-base mb-6">Retornamos em até 1 dia útil. Seus dados não são compartilhados.</p>
        <a
          href={WA_CONTATO}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Falar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div>
      {CALENDLY_URL && (
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-full mb-6 !flex"
        >
          Escolher horário na agenda
        </a>
      )}
      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative">
            <input
              type="text"
              id="agendar-nome"
              value={formData.nome}
              onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
              className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] placeholder-transparent"
              placeholder="Nome"
            />
            <label htmlFor="agendar-nome" className="absolute left-4 top-2 text-white/60 text-xs font-['Inter'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7F31B8]">Nome</label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="agendar-email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] placeholder-transparent"
              placeholder="E-mail corporativo"
            />
            <label htmlFor="agendar-email" className="absolute left-4 top-2 text-white/60 text-xs font-['Inter'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7F31B8]">E-mail corporativo</label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="agendar-empresa"
              value={formData.empresa}
              onChange={(e) => setFormData((prev) => ({ ...prev, empresa: e.target.value }))}
              className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] placeholder-transparent"
              placeholder="Empresa"
            />
            <label htmlFor="agendar-empresa" className="absolute left-4 top-2 text-white/60 text-xs font-['Inter'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7F31B8]">Empresa</label>
          </div>
          <div className="relative">
            <input
              type="tel"
              id="agendar-telefone"
              value={formData.telefone}
              onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
              className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] placeholder-transparent"
              placeholder="Telefone / WhatsApp"
            />
            <label htmlFor="agendar-telefone" className="absolute left-4 top-2 text-white/60 text-xs font-['Inter'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#7F31B8]">Telefone / WhatsApp</label>
          </div>
          <div className="relative">
            <select
              value={formData.orcamento}
              onChange={(e) => setFormData((prev) => ({ ...prev, orcamento: e.target.value }))}
              className="w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] appearance-none"
            >
              <option value="" className="bg-[#000000]">Selecione a verba</option>
              {orcamentos.map((o) => (
                <option key={o} value={o} className="bg-[#000000]">{o}</option>
              ))}
            </select>
            <label className="absolute left-4 top-2 text-white/60 text-xs font-['Inter']">Verba mensal aproximada</label>
          </div>
          <div className="relative">
            <select
              value={formData.horario}
              onChange={(e) => setFormData((prev) => ({ ...prev, horario: e.target.value }))}
              className="w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(127,49,184,0.3)] text-white focus:border-[#7F31B8] focus:outline-none transition-colors font-['Inter'] appearance-none"
            >
              <option value="" className="bg-[#000000]">Selecione o horário</option>
              {horarios.map((h) => (
                <option key={h} value={h} className="bg-[#000000]">{h}</option>
              ))}
            </select>
            <label className="absolute left-4 top-2 text-white/60 text-xs font-['Inter']">Melhor horário</label>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="agendar-consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked === true)}
            className="mt-0.5 border-[rgba(127,49,184,0.5)] data-[state=checked]:bg-[#7F31B8] data-[state=checked]:border-[#7F31B8]"
          />
          <label htmlFor="agendar-consent" className="text-white/70 text-xs leading-relaxed cursor-pointer">
            Autorizo a South Media a coletar meus dados para retorno sobre este agendamento. Posso cancelar a qualquer momento.
          </label>
        </div>

        <button
          type="submit"
          disabled={!consent || isSubmitting}
          className="btn-cta w-full !text-lg !py-4 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Agendar meus 30 minutos"}
        </button>
        <p className="text-white/60 text-xs text-center">Retornamos em até 1 dia útil. Seus dados não são compartilhados.</p>
      </form>

      <p className="text-center text-white/50 text-sm mt-4">
        Prefere WhatsApp?{" "}
        <a href={WA_CONTATO} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline">
          Fale com um especialista
        </a>
      </p>
    </div>
  );
}
