import type { BlogPost } from "../types";

// TODO: completion rate da Netflix nao confirmado em fonte primaria (apenas blogs de agencia citando ~90%). Texto fica sem numero; inserir quando Netflix/Nielsen/Kantar publicarem.
// TODO: alcance incremental sobre TV linear no Brasil nao confirmado (o "44%" circula em blog de terceiros, sem fonte primaria). Texto fica sem numero.
// TODO: CPM atual da Netflix no Brasil nao confirmado (eMarketer retornou 403). Texto remete ao post netflix-sem-minimo-investimento-ctv sem repetir numeros.
// TODO: pauta pedia "assinantes"; fontes primarias (Netflix, Meio & Mensagem) falam em "pessoas ativas mensais" (nao assinantes). Texto usa a definicao correta.
// TODO: estudo de atencao (Amplified/Media Hero) e encomendado pela Netflix, citado via Exame; localizar o estudo original. Pull-quote e FAQ nao dependem dele.
// TODO: Comscore 45% e dado dos EUA (ago/2025); nao ha equivalente Comscore publico para o Brasil.

export const post: BlogPost = {
    id: 43,
    slug: "netflix-um-ano-anuncios-dados-performance",
    category: "CTV",
    title: "Um ano de Netflix com anúncios no Brasil: o que os dados já mostram",
    summary: "Netflix com anúncios soma 35 milhões de pessoas ativas por mês no Brasil. Veja o que o inventário já entregou, o que ainda é hype e como medir antes de comprar.",
    date: "2 Set 2026",
    readTime: "6 min",
    cover: "/blog/netflix-um-ano-anuncios-dados-performance.webp",
    author: "South Media",
    content: `## Um ano de Netflix com anúncios no Brasil: o que os dados já mostram

Em 2 de setembro de 2026, a Netflix apresentou em São Paulo o número que o mercado esperava: mais de **35 milhões de pessoas ativas por mês** no plano com anúncios no Brasil, alta de cerca de 20% sobre 2025, segundo a própria empresa. O Netflix com anúncios deixou de ser novidade e virou inventário com histórico. Esta é a hora de trocar a euforia da estreia por critério de compra: o que já foi comprovado, o que ainda é promessa e como medir.

## O que é o plano com anúncios da Netflix?

O plano com anúncios da Netflix é o nível de assinatura mais barato da plataforma, sustentado por publicidade em vídeo. Segundo a [Netflix](https://about.netflix.com/pt_br/news/netflix-upfront-2026-get-closer), o plano alcança mais de 250 milhões de pessoas ativas mensais no mundo e 35 milhões no Brasil. Para o anunciante, o valor não está no logo, e sim na mensuração: alcance incremental sobre a TV linear e completion rate de formato não-pulável.

## O que o número de 35 milhões diz, e o que não diz

Primeiro cuidado: "pessoas ativas mensais" não é assinantes. A metodologia da Netflix, segundo a [Subscription Insider](https://www.subscriptioninsider.com/article-type/news/netflix-says-ad-supported-tier-reaches-250m-monthly-active-viewers-as-membership-fees-still-drive-revenue), conta membros que assistiram ao menos um minuto de conteúdo com anúncios no mês, multiplicados pelo tamanho médio estimado do domicílio, com base em pesquisa própria. É uma métrica de alcance estimado, não de contas pagantes. Parte da imprensa a tratou como assinantes, e a diferença importa para quem dimensiona frequência.

Segundo: o dado é declarado pela plataforma. A [TVREV](https://www.tvrev.com/news/wir20260130) já apontava, em janeiro, a falta de transparência sobre a média de espectadores por conta e sobre a distribuição geográfica do plano. Escala declarada é ponto de partida; escala auditada é critério de compra.

## O que os dados já mostram

Há sinais consistentes de que o plano virou a porta de entrada principal da plataforma:

- **Adoção:** a Netflix informa que cerca de 60% dos novos assinantes no Brasil escolhem o plano com anúncios, segundo o [Meio & Mensagem](https://www.meioemensagem.com.br/midia/netflix-expande-plano-de-anuncios-e-cria-novos-formatos).
- **Consumo:** segundo a [Exame](https://exame.com/marketing/de-olho-nos-us-3-bilhoes-netflix-ads-eleva-a-aposta-no-brasil-com-ia-e-programatica/), o público do plano no Brasil consome em média 54 horas de conteúdo por mês.
- **Peso no consumo:** nos Estados Unidos, a [Comscore](https://www.adweek.com/convergent-tv/netflix-ad-tier-household-viewing-hours-comscore/) mediu 45% dos lares da Netflix assistindo no plano com anúncios em agosto de 2025, contra 34% um ano antes. É dado americano, mas indica a direção.
- **Retenção:** o Meio & Mensagem registra que o comportamento de churn do plano com anúncios se aproxima do dos planos premium, segundo a empresa.

Esses números sustentam a tese de escala. Não respondem, sozinhos, à pergunta do anunciante: quanto a campanha entregou.

## Alcance incremental e completion rate: promessa ou prova?

Os dois argumentos de venda do inventário são alcance incremental sobre a TV linear e conclusão de formato não-pulável. Ambos são plausíveis pela mecânica: o anúncio não pode ser pulado. Mas, na data desta publicação, não localizamos um número de completion rate ou de alcance incremental para o Brasil em fonte primária, auditada por terceiros. Os percentuais que circulam em blogs de agência não trazem metodologia, e por isso não os repetimos aqui.

Há um indício parcial. Segundo a Exame, estudo conduzido pelas empresas Amplified e Media Hero aponta 84% de atenção dedicada aos anúncios da Netflix. A pesquisa foi divulgada pela própria Netflix, e deve ser lida como indicação, não como benchmark neutro. Como mostramos em [atenção não é métrica de resultado](/blog/atencao-nao-e-metrica-de-resultado-mrc-iab), atenção sem desfecho de negócio é um indicador intermediário.

**Estar na Netflix não é estratégia. Medir o que a Netflix entregou — e comparar com o resto do seu plano de CTV — é.**

## Onde ainda é hype

- **Formatos novos:** podcasts e vídeo vertical estão previstos para 2027, segundo a Netflix. Hoje são promessa, não inventário.
- **Anúncios com IA e interativos:** a Exame os descreve em fase inicial de testes. Não há histórico para planejar verba.
- **"Premium garante resultado":** inventário premium garante contexto, não conversão. Sem medição, é só um logo ao lado do seu comercial.

## Preço: o que mudou desde a estreia

A trajetória de preço e o fim do compromisso mínimo de investimento já foram detalhados em [A Netflix derrubou o mínimo de investimento](/blog/netflix-sem-minimo-investimento-ctv). Para o critério de compra, o ponto é outro: preço menor reduz o custo do teste, mas não substitui a pergunta sobre o que comparar. Para entender a barreira de acesso original, vale ver [por que anunciar na Netflix é mais acessível](/blog/ctv-brasil-netflix-acessivel). E, se o CPM de CTV parece alto enquanto sobra inventário, [esse paradoxo tem explicação](/blog/ctv-cpm-alto-inventario-sobrando).

## Como medir o resultado de uma campanha de CTV na Netflix

A Netflix passou a oferecer APIs de Audience Insights, projeção de Reach Curve e Data Clean Rooms, segundo o Meio & Mensagem, e conta com Nielsen e Kantar entre os parceiros de mensuração. Isso ajuda, mas o plano de CTV do anunciante raramente é só Netflix. Um método simples:

1. **Defina o desfecho antes:** alcance, visita, loja, venda. Cada um pede uma métrica diferente.
2. **Controle frequência entre telas:** a mesma pessoa vê a Netflix, o Globoplay e o celular. Veja como em [medição cross-screen entre CTV e TV linear](/blog/acr-medicao-cross-screen-ctv-linear).
3. **Compare custo por resultado, não CPM:** coloque a Netflix na mesma régua das demais fontes de CTV.
4. **Teste com grupo de controle:** só incrementalidade separa o que a campanha causou do que ia acontecer de qualquer jeito.

## O critério da South Media

Para a South Media, a Netflix é uma fonte de inventário de CTV entre outras, e entra no plano quando os dados mostram que entrega o desfecho combinado. A automação da compra é o piso. O que sustenta o resultado é a curadoria do inventário e a operação humana que lê os números campanha a campanha.

## Perguntas Frequentes

### O que é o plano com anúncios da Netflix?

É o nível de assinatura mais barato da plataforma, financiado por publicidade em vídeo não-pulável. Segundo a Netflix, alcança mais de 250 milhões de pessoas ativas mensais no mundo e mais de 35 milhões no Brasil.

### Vale a pena anunciar na Netflix no Brasil?

Depende do objetivo e da medição. A escala é real e declarada pela Netflix, mas completion rate e alcance incremental no Brasil ainda não têm benchmark independente público. Vale testar com desfecho definido e comparar com o restante do plano de CTV.

### Como medir o resultado de uma campanha de CTV na Netflix?

Combine as métricas da plataforma (Reach Curve, Audience Insights) com mensuração independente, como Nielsen ou Kantar, controle de frequência entre telas e grupo de controle. O indicador final deve ser custo por resultado, não CPM.

## Fontes

- [Netflix - Em evento global, Netflix Ads anuncia expansão de mercados na América Latina e aumento da audiência do plano com anúncios](https://about.netflix.com/pt_br/news/netflix-upfront-2026-get-closer)
- [Meio & Mensagem - Netflix expande plano de anúncios e cria novos formatos](https://www.meioemensagem.com.br/midia/netflix-expande-plano-de-anuncios-e-cria-novos-formatos)
- [Exame - De olho nos US$ 3 bilhões, Netflix Ads eleva a aposta no Brasil com IA e programática](https://exame.com/marketing/de-olho-nos-us-3-bilhoes-netflix-ads-eleva-a-aposta-no-brasil-com-ia-e-programatica/)
- [Adweek - Netflix's Ad Tier Has Almost Half of Its Household Viewing Hours, According to Comscore](https://www.adweek.com/convergent-tv/netflix-ad-tier-household-viewing-hours-comscore/)
- [Subscription Insider - Netflix Says Ad-Supported Tier Reaches 250M Monthly Active Viewers](https://www.subscriptioninsider.com/article-type/news/netflix-says-ad-supported-tier-reaches-250m-monthly-active-viewers-as-membership-fees-still-drive-revenue)
- [TVREV - Netflix's Ad Tier Is Still A Cypher, Linear Takes Another Hit](https://www.tvrev.com/news/wir20260130)
`,
};
