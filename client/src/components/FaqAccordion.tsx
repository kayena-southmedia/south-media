import * as Accordion from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "Vocês substituem a minha agência?",
    a: "Não. A gente opera a mídia programática ao lado de quem já cuida da sua marca — criação e planejamento seguem onde estão. Boa parte da nossa operação hoje roda dentro de projetos de agências.",
  },
  {
    q: "Vocês são uma DSP?",
    a: "Não. Compramos nas principais plataformas do mercado — DV360, The Trade Desk, Xandr — e escolhemos a que faz sentido para cada objetivo. Nossa responsabilidade é o resultado da compra, não a venda de uma ferramenta.",
  },
  {
    q: "Como eu sei que a entrega aconteceu de verdade?",
    a: "Três camadas: nossa Anti-VPN Tech, a metodologia Double Check e a verificação independente do DoubleVerify. Tudo visível no Forja durante a campanha, não depois dela.",
  },
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Os primeiros indicadores aparecem na primeira semana de veiculação. Resultado consistente e otimizado se consolida entre 30 e 60 dias.",
  },
  {
    q: "Vocês atendem fora do Sul?",
    a: "Sim. Operamos nacionalmente, com sete praças principais: PR, SC, SP, RJ, DF, MG e PE.",
  },
  {
    q: "O que eu preciso levar para a primeira conversa?",
    a: "O objetivo da campanha e, se tiver, o histórico da mídia atual. Nada além disso — o diagnóstico é nosso trabalho.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqAccordion() {
  return (
    <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")}</script>
    </Helmet>
    <Accordion.Root type="single" collapsible className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={faq.q}
          value={`faq-${i}`}
          className="glass-card overflow-hidden animate-on-scroll"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group w-full flex items-center justify-between p-6 text-left">
              <span className="font-['Inter'] font-bold text-white text-base pr-4">{faq.q}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7F31B8"
                strokeWidth="2"
                className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fadeInUp_0.2s_ease-out] px-6 pb-6">
            <p className="text-white/80 text-sm leading-relaxed">{faq.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
    </>
  );
}
