import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WHATSAPP_URL } from "@/components/Navbar";

const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/contact-bg-TZ8XdUHdAHVDsjjWJkFaGK.webp";

const faqs = [
  {
    q: "Qual o investimento mínimo para começar?",
    a: "Trabalhamos com projetos a partir de R$10.000/mês em mídia. O valor ideal depende dos seus objetivos, canais desejados e abrangência geográfica. No diagnóstico estratégico gratuito, dimensionamos o investimento ideal para o seu caso.",
  },
  {
    q: "Vocês atendem empresas de qualquer segmento?",
    a: "Sim. Atendemos marcas de diversos segmentos — tecnologia, varejo, educação, saúde, financeiro, turismo, alimentação, mobilidade e mais. Nossa tecnologia se adapta a diferentes verticais e objetivos de negócio.",
  },
  {
    q: "Como funciona o processo de onboarding?",
    a: "O onboarding começa com um diagnóstico estratégico das suas campanhas atuais. Em seguida, desenhamos uma estratégia sob medida e iniciamos a ativação com acompanhamento contínuo. Todo o processo leva de 5 a 10 dias úteis.",
  },
  {
    q: "Em quanto tempo começo a ver resultados?",
    a: "Os primeiros indicadores de performance aparecem já na primeira semana de campanha. Resultados consistentes e otimizados se consolidam entre 30 e 60 dias, com otimização contínua ao longo de toda a parceria.",
  },
  {
    q: "O que é o Double Check antes das campanhas irem ao ar?",
    a: "O Double Check é nossa camada proprietária de verificação prévia. Antes de qualquer campanha ir ao ar, auditamos o inventário, validamos a segurança da marca e verificamos a qualidade do tráfego. Isso garante que seu investimento não seja desperdiçado com impressões fraudulentas.",
  },
];

const segmentos = ["Tecnologia", "Varejo", "Educação", "Saúde", "Financeiro", "Turismo", "Alimentação & Bebidas", "Mobilidade", "Outro"];
const orcamentos = ["Até R$10k", "R$10k–50k", "R$50k–100k", "Acima de R$100k"];
const objetivos = ["Gerar leads", "Branding & awareness", "App downloads", "Drive to store", "Reconhecimento regional", "Expansão LATAM"];

export default function Contato() {
  const scrollRef = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedObjetivos, setSelectedObjetivos] = useState<string[]>([]);

  const toggleObjetivo = (obj: string) => {
    setSelectedObjetivos((prev) =>
      prev.includes(obj) ? prev.filter((o) => o !== obj) : [...prev, obj]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={CONTACT_BG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050008]/50 to-[#050008]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="pill-label mb-6 inline-block animate-on-scroll">Vamos Conversar</span>
            <h1 className="font-['Poppins'] font-extrabold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-on-scroll">
              Pronto para transformar<br />sua estratégia de mídia?
            </h1>
            <p className="text-[#ccc] text-lg md:text-xl max-w-2xl leading-relaxed animate-on-scroll">
              Receba um diagnóstico estratégico gratuito e identifique oportunidades reais
              de crescimento que sua empresa pode estar deixando passar.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-dark py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 animate-on-scroll">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <h2 className="font-['Poppins'] font-bold text-white text-2xl mb-2">Solicite sua Proposta</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input type="text" id="nome" required className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] placeholder-transparent" placeholder="Nome completo" />
                    <label htmlFor="nome" className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9B00FF]">Nome completo</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" required className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] placeholder-transparent" placeholder="E-mail corporativo" />
                    <label htmlFor="email" className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9B00FF]">E-mail corporativo</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="empresa" required className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] placeholder-transparent" placeholder="Empresa" />
                    <label htmlFor="empresa" className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9B00FF]">Empresa</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="cargo" className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] placeholder-transparent" placeholder="Cargo" />
                    <label htmlFor="cargo" className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9B00FF]">Cargo</label>
                  </div>
                  <div className="relative">
                    <input type="tel" id="telefone" className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] placeholder-transparent" placeholder="Telefone / WhatsApp" />
                    <label htmlFor="telefone" className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9B00FF]">Telefone / WhatsApp</label>
                  </div>
                  <div className="relative">
                    <select className="w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] appearance-none">
                      <option value="" className="bg-[#0d0015]">Selecione o segmento</option>
                      {segmentos.map((s) => (
                        <option key={s} value={s} className="bg-[#0d0015]">{s}</option>
                      ))}
                    </select>
                    <label className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins']">Segmento</label>
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] appearance-none">
                    <option value="" className="bg-[#0d0015]">Selecione o orçamento</option>
                    {orcamentos.map((o) => (
                      <option key={o} value={o} className="bg-[#0d0015]">{o}</option>
                    ))}
                  </select>
                  <label className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins']">Orçamento mensal estimado</label>
                </div>

                <div>
                  <p className="text-[#888] text-sm mb-3 font-['Poppins']">Objetivo principal</p>
                  <div className="flex flex-wrap gap-3">
                    {objetivos.map((obj) => (
                      <button
                        key={obj}
                        type="button"
                        onClick={() => toggleObjetivo(obj)}
                        className={`px-4 py-2 rounded-full text-sm font-['Poppins'] transition-all ${
                          selectedObjetivos.includes(obj)
                            ? "bg-gradient-to-r from-[#6B00B6] to-[#FF4500] text-white"
                            : "bg-[rgba(255,255,255,0.04)] text-[#ccc] border border-[rgba(155,0,255,0.3)] hover:border-[rgba(155,0,255,0.6)]"
                        }`}
                      >
                        {obj}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <textarea id="mensagem" rows={4} className="peer w-full px-4 py-3 pt-6 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(155,0,255,0.3)] text-white focus:border-[#9B00FF] focus:outline-none transition-colors font-['Poppins'] placeholder-transparent resize-none" placeholder="Mensagem" />
                  <label htmlFor="mensagem" className="absolute left-4 top-2 text-[#888] text-xs font-['Poppins'] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9B00FF]">Mensagem (opcional)</label>
                </div>

                <button type="submit" className="btn-cta w-full !text-lg !py-4">
                  Solicitar Diagnóstico Gratuito
                </button>
                <p className="text-[#888] text-xs text-center">Entraremos em contato em até 24 horas úteis</p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-on-scroll">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="font-['Poppins'] font-bold text-white text-sm">WhatsApp</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#ccc] text-sm hover:text-white transition-colors">(41) 99691-7857</a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B00B6] to-[#9B00FF] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="font-['Poppins'] font-bold text-white text-sm">E-mail</p>
                    <a href="mailto:comercial@southmedia.com.br" className="text-[#ccc] text-sm hover:text-white transition-colors">comercial@southmedia.com.br</a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <p className="font-['Poppins'] font-bold text-white text-sm">LinkedIn</p>
                    <a href="https://linkedin.com/company/southmedia" target="_blank" rel="noopener noreferrer" className="text-[#ccc] text-sm hover:text-white transition-colors">/company/southmedia</a>
                  </div>
                </div>
              </div>

              {/* Presença Geográfica */}
              <div className="glass-card p-6">
                <p className="font-['Poppins'] font-bold text-white text-sm mb-4">Presença Nacional + América Latina</p>
                <div className="flex flex-wrap gap-2">
                  {["São Paulo", "Pernambuco", "Paraná", "Santa Catarina"].map((state) => (
                    <span key={state} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                      <span className="text-[#ccc] text-sm">{state}</span>
                    </span>
                  ))}
                  {["Buenos Aires", "Santiago", "Lima"].map((city) => (
                    <span key={city} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#9B00FF] animate-pulse" />
                      <span className="text-[#ccc] text-sm">{city}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt py-20 noise-overlay">
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-['Poppins'] font-bold text-white text-3xl md:text-4xl">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden animate-on-scroll">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-['Poppins'] font-bold text-white text-base pr-4">{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9B00FF"
                    strokeWidth="2"
                    className={`shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[300px]" : "max-h-0"}`}>
                  <p className="px-6 pb-6 text-[#ccc] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-orange-purple py-20 noise-overlay">
        <div className="container relative z-10 text-center">
          <h2 className="font-['Poppins'] font-extrabold text-white text-3xl md:text-4xl mb-6 animate-on-scroll">
            Ou fale diretamente com um especialista agora:
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !text-lg !px-10 !py-5 animate-on-scroll inline-flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
