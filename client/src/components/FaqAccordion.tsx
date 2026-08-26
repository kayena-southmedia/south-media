import * as Accordion from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "O que é mídia programática?",
    a: "É a compra e venda automatizada de mídia digital em leilão, em tempo real, usando dados para decidir qual anúncio entregar, para quem e em que momento — em vez de negociar inserção por inserção com cada veículo.",
  },
  {
    q: "Quais formatos vocês trabalham?",
    a: "Display, CTV, DOOH, áudio, drive to store, publishers regionais, in-game, app marketing e push — todos sob a mesma operação, com a curadoria e a verificação de tráfego aplicadas em qualquer canal.",
  },
  {
    q: "Vocês trabalham com CTV?",
    a: "Sim. Mais de 1.330 publishers de CTV no Brasil, com pré-roll, mid-roll, post-roll e sitelists ou deals com inventário premium.",
  },
  {
    q: "É possível anunciar na Netflix?",
    a: "Sim. Negociamos a Netflix diretamente desde 2022, quando a plataforma abriu para anúncios — e o mercado vem reduzindo a barreira de entrada desde então.",
  },
  {
    q: "Existe investimento mínimo?",
    a: "Não existe investimento mínimo fixo. O valor ideal depende dos seus objetivos, canais desejados e abrangência geográfica — no diagnóstico gratuito, dimensionamos o investimento adequado ao seu caso.",
  },
  {
    q: "Como a South Media garante a entrega regional?",
    a: "Com a Anti-VPN Tech, que identifica e bloqueia tráfego com localização mascarada, e a Geo Intelligence, que ativa e lê a entrega por comportamento geográfico real.",
  },
  {
    q: "Como acompanho os resultados?",
    a: "Pelo Forja, nosso dashboard. Você vê entrega, investimento e indicadores no ritmo da operação, sem pedir relatório e sem esperar o fim do mês.",
  },
  {
    q: "Vocês trabalham com agências?",
    a: "Sim. Operamos a mídia programática ao lado de quem já cuida da marca — criação e planejamento seguem onde estão. Boa parte da nossa operação hoje roda dentro de projetos de agências.",
  },
  {
    q: "Vocês atendem anunciantes diretamente?",
    a: "Sim. Atendemos agências e anunciantes diretamente, sempre com a mesma tecnologia, curadoria de inventário e nível de transparência.",
  },
  {
    q: "Como eu começo uma campanha?",
    a: "Começa por um diagnóstico da sua operação atual. Depois desenhamos a estratégia e ativamos com acompanhamento contínuo — do diagnóstico à campanha no ar, o processo leva de 5 a 10 dias úteis.",
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
