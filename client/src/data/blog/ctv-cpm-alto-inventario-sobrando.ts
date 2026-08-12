import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 19,
    slug: "ctv-cpm-alto-inventario-sobrando",
    category: "CTV",
    title: "Por Que CTV Tem CPM Alto Mesmo Com Inventário Sobrando — e Como Negociar Melhor",
    summary: "CTV tem CPM alto mesmo com inventário sobrando: floor pricing, ad pods e deal IDs explicam por quê. Veja como negociar melhor a compra de CTV programática.",
    date: "19 Mai 2026",
    readTime: "7 min",
    cover: "/blog/ctv-cpm-alto-inventario.webp",
    author: "South Media",
    content: `## Por Que CTV Tem CPM Alto Mesmo Com Inventário Sobrando?

CTV (Connected TV) tem CPM estruturalmente alto — muitas vezes na faixa de R$ 50 a R$ 70 — mesmo quando há inventário disponível, porque não opera na lógica de leilão aberto do display. Quatro mecanismos sustentam o preço: floor pricing, ad pods, deal IDs e custo de verificação. Entender cada um é o que abre pontos reais de negociação.

Quem planeja mídia há tempo suficiente desenvolveu intuição sobre o comportamento de CPM em diferentes canais. Em display programático, a lógica é razoavelmente direta: muito inventário disponível, CPM cai; pouco inventário, CPM sobe. Em search, a relação é direta entre demanda por palavra-chave e custo. Em social, é função de competição por audiência específica.

Em CTV, essa intuição falha. Anunciantes que migram orçamento para CTV pela primeira vez frequentemente reportam a mesma surpresa: o CPM permanece alto — em muitos casos, na faixa de R$50 a R$70 — mesmo quando o relatório indica que existe inventário disponível e que a campanha não está conseguindo entregar o volume planejado. A oferta parece suficiente. A demanda do anunciante está clara. Por que o preço não se ajusta?

A resposta passa por entender que CTV não opera com a mesma dinâmica de leilão aberto que define display. Existem quatro mecanismos estruturais que mantêm o CPM elevado, e cada um deles oferece um ponto de negociação possível para quem entende como funcionam.

## Mecanismo 1: Floor Pricing

Floor pricing é o preço mínimo que um publisher aceita por impressão. Em display, floors típicos são baixos — fração de centavo, alguns centavos. Em CTV, são estruturalmente altos. Os principais publishers de streaming brasileiros operam com floor pricing em CTV entre **R$25 e R$45**, dependendo do programa e do horário.

Isso significa que, por mais que a demanda seja baixa em um momento específico, o preço não desce abaixo desse piso. Em display, se ninguém quer comprar, o anunciante consegue impressões a fração de centavo. Em CTV, se ninguém quer comprar, o publisher prefere não vender — a impressão simplesmente não acontece, ou é direcionada para anúncios institucionais.

Por que publishers de CTV operam assim? Por duas razões: **percepção de valor do canal** (CTV é vendido como premium e baixar floor descaracteriza o posicionamento) e **trade-off com TV linear** (muitos publishers vêm do mundo da TV linear, onde CPM é estruturalmente alto, e replicam essa lógica no inventário digital).

**Ponto de negociação:** floor pricing pode ser negociado em deals diretos com publishers, especialmente para volumes maiores. Acessar inventário via PMP (private marketplace) ou via direct deal frequentemente desbloqueia preços abaixo do floor de leilão aberto.

## Mecanismo 2: Ad Pods

Em CTV, anúncios são organizados em pods — blocos comerciais inseridos no conteúdo, geralmente de 60 a 180 segundos cada, contendo de 2 a 8 spots. Diferente de display, onde cada impressão é leiloada individualmente, em CTV o leilão acontece pelo slot dentro do pod.

Isso muda completamente a dinâmica de preço. Em um pod com 4 spots, os quatro anunciantes que ganharam aqueles slots não competiram entre si pela mesma impressão — competiram pelo direito de estar naquele pod. O publisher controla a composição do pod e tipicamente prioriza dois critérios: **diversidade de categoria** (evitar dois anúncios de seguradoras seguidos) e **CPM agregado** (maximizar o valor total do pod, não o valor de cada slot individual).

Para o anunciante, isso significa que ganhar um slot dentro do pod nem sempre depende do lance máximo possível — depende também de se enquadrar bem no mix que o publisher quer construir. Anúncios de categorias subrepresentadas (categorias B2B em horário de varejo, por exemplo) podem conseguir slots por CPM menor porque preenchem necessidade de diversidade do pod.

**Ponto de negociação:** entender o perfil de competição dentro de pods em diferentes contextos. Horários de menor demanda comercial (segunda à tarde, domingo manhã) têm pods com menor pressão de CPM agregado, e anunciantes posicionados nesses horários podem ganhar slots premium por preço significativamente abaixo do que pagariam em prime time.

## Mecanismo 3: Deal IDs

Deal ID é a forma como compradores e publishers estabelecem condições negociadas para inventário específico — preço, audiência, frequência, posicionamento. Em CTV, deals representam parcela majoritária do inventário transacionado, especialmente em publishers premium. O leilão aberto é o residual, não o principal.

A consequência é que o CPM efetivamente pago varia enormemente entre anunciantes para o mesmo inventário, dependendo do tipo de deal que cada um negociou. Anunciantes com deals diretos pagam menos. Anunciantes via open auction pagam mais. Em muitos publishers, a diferença passa de 30%.

Isso explica parte da percepção de "CPM alto" em CTV. Quem compra via leilão aberto está literalmente pagando o resíduo — o inventário que sobrou depois que os deals foram preenchidos. Naturalmente, é mais caro.

**Ponto de negociação:** estabelecer deal IDs com os publishers mais relevantes para a marca, mesmo em volumes médios. Não é necessário ser anunciante de altíssimo orçamento para acessar deal pricing — muitos publishers de CTV têm programas estruturados para deals menores, especialmente quando o anunciante traz consistência de investimento ao longo do tempo.

## Mecanismo 4: Custo de Verificação

Diferente de display, CTV opera com custos adicionais que pressionam o CPM final. Verificação de viewability (impressão na tela), de completion (vídeo assistido até o fim), de brand safety (ambiente seguro), de fraude (tráfego válido) é mais cara em CTV do que em display porque os ambientes são mais fechados e exigem integrações específicas.

Esses custos não aparecem separados na maioria dos relatórios de mídia — vêm embutidos no CPM final entregue ao anunciante. Em alguns casos, somam R$3 a R$8 por mil impressões, ampliando a diferença entre o lance bruto e o custo total.

**Ponto de transparência:** exigir do parceiro o breakdown completo do CPM, separando o custo de mídia (o que vai para o publisher), o custo de verificação (o que vai para ferramentas como DoubleVerify, IAS), o custo de tecnologia (taxa da DSP) e a taxa de gestão. Esse exercício revela onde o orçamento está sendo consumido.

## A Dinâmica Específica do Brasil

Existe um fator adicional que pressiona o CPM brasileiro de CTV: **a oferta de inventário ainda é pequena em comparação com a demanda crescente**. Em 2026, a maior parte dos publishers de streaming no Brasil ainda está expandindo a capacidade de monetização — Netflix com plano com anúncios é relativamente recente, Disney+ começou monetização há pouco tempo, plataformas nacionais como Globoplay têm volume limitado de inventário programaticamente disponível.

Isso cria pressão estrutural sobre o CPM que não existe nos Estados Unidos, onde a maturidade do ecossistema já equilibrou oferta e demanda. No Brasil, a maturidade está em construção. Em alguns anos, a tendência é que a relação oferta/demanda se ajuste e o CPM relativo de CTV se aproxime mais do que se vê em mercados maduros.

Para o planejador de 2026, isso tem implicação direta: comprar CTV agora significa pagar o prêmio de um mercado em formação. Faz sentido para anunciantes que veem o canal estrategicamente, mas precisa ser conscientizado no plano — não tratar como "vai ficar mais barato semana que vem" porque a tendência é o contrário.

## O Que Negociar em 2026

Para anunciantes que vão alocar orçamento relevante em CTV no Brasil, quatro pontos de negociação valem ser explorados antes de fechar o plano:

**Deals com publishers prioritários.** Identificar os 3-5 publishers mais relevantes para o público da marca e negociar deal ID com cada um. Mesmo deals modestos, com volume garantido de 20-50 mil reais por publisher, conseguem CPM melhor que open auction.

**Janelas de menor pressão de pod.** Horários e dias com menor pressão comercial nos pods têm slots premium acessíveis por CPM menor. Não significa abandonar prime time, significa diversificar o investimento entre janelas.

**Transparência de breakdown.** Exigir composição detalhada de custo. Saber exatamente o que está pagando permite identificar onde reduzir e onde investir mais.

**Volume comprometido em troca de preço.** Compromisso de investimento ao longo de meses geralmente desbloqueia CPM mais favorável do que campanhas pontuais. Para publishers, previsibilidade de receita vale desconto.

**CPM alto em CTV não é falha de mercado — é característica estrutural do canal num momento específico de maturidade.**

Entender os mecanismos que sustentam o preço permite negociar dentro da lógica que existe, em vez de tentar barganhar contra ela.

## Perguntas Frequentes

### Por que o CPM de CTV é alto mesmo com inventário sobrando?

Porque CTV não opera na lógica de leilão aberto do display. Floor pricing alto, organização em ad pods, predominância de deal IDs e custo de verificação embutido sustentam o preço mesmo quando há inventário disponível.

### O que é floor pricing em CTV?

É o preço mínimo que o publisher aceita por impressão. Em CTV ele é estruturalmente alto — os principais publishers operam entre R$ 25 e R$ 45 —, então o preço não desce abaixo desse piso mesmo quando a demanda é baixa.

### Como negociar CPM melhor em CTV?

Estabelecendo deal IDs com os publishers prioritários, explorando janelas de menor pressão de pod, exigindo o breakdown completo do CPM e oferecendo volume comprometido em troca de preço. Comprar só via leilão aberto é pagar o resíduo, mais caro.

### O CPM de CTV vai cair no Brasil?

No curto prazo, não. A oferta de inventário ainda é pequena diante da demanda crescente, o que pressiona o preço para cima. Comprar CTV agora é pagar o prêmio de um mercado em formação, não algo que fica mais barato semana que vem.`,
  };
