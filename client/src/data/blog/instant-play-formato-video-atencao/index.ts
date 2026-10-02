// TODO: CONFIRMAR definicao de Instant Play. Fonte interna usada: client/src/pages/Home.tsx ("converte o video em player embutido no proprio anuncio, carregando na hora e protegendo o Complete View"; tag "De terceiro, exclusiva nossa"). Nao ha especificacao tecnica nem resultado proprio de completion publicados; o texto descreve o formato em termos gerais e NAO cita numeros de performance do Instant Play. Validar com o time de produto/operacao: mecanica exata, se ha autoplay, e dados proprios de Complete View.
// TODO: se houver benchmark proprio de Complete View do Instant Play vs. pre-roll padrao, incluir no corpo com fonte interna.
// TODO: o estudo "The Need for Mobile Speed" (Google, 2016) foi confirmado via ARF/MediaPost (PDF original nao legivel na ferramenta). Re-checar o PDF do Think with Google antes de publicar.
import type { BlogPost } from "../types";

export const post: BlogPost = {
    id: 48,
    slug: "instant-play-formato-video-atencao",
    category: "Programática",
    title: "Instant Play: Por Que o Vídeo Que Carrega na Hora Muda a Conta da Atenção",
    summary: "Instant Play é o formato de vídeo que carrega na hora. Viewers abandonam após 2 segundos de espera, e cada segundo extra pesa. Veja o impacto na atenção.",
    date: "19 Set 2026",
    readTime: "6 min",
    cover: "/blog/instant-play-formato-video-atencao.webp",
    author: "South Media",
    content: `## Instant Play: Por Que o Vídeo Que Carrega na Hora Muda a Conta da Atenção

Em um estudo com 23 milhões de visualizações e 6,7 milhões de espectadores da rede da Akamai, pesquisadores constataram que as pessoas começam a abandonar um vídeo quando ele leva mais de 2 segundos para iniciar, e que cada segundo adicional de espera eleva a taxa de abandono em 5,8%. Para quem compra mídia, a leitura é direta: antes de discutir atenção, criativo ou audiência, existe uma pergunta mais básica. O vídeo chegou a tocar? O Instant Play nasce dessa pergunta, e este artigo explica por que a latência de carregamento deveria entrar na conta de qualquer plano de vídeo.

## O Que É Instant Play?

Instant Play é um formato de vídeo programático em que o anúncio é entregue como um player embutido no próprio criativo, carregando na hora para que a reprodução comece sem espera perceptível. O objetivo é reduzir o abandono que acontece nos primeiros segundos e proteger a visualização completa. A lógica se apoia em evidência acadêmica: segundo Krishnan e Sitaraman (ACM IMC, 2012), o abandono cresce 5,8% a cada segundo de atraso na partida do vídeo.

## Latência é a primeira barreira da atenção

Atenção costuma ser discutida como uma propriedade do criativo: duração, narrativa, som, formato. Mas existe uma etapa anterior, silenciosa, que decide se o criativo terá chance de ser visto. É o tempo entre o anúncio ser servido e o primeiro quadro aparecer.

Os números do ambiente web mostram o tamanho do problema. Em estudo de 2016 sobre mobile, o Google apurou que 53% das visitas a sites móveis são abandonadas quando a página leva mais de 3 segundos para carregar. No mesmo levantamento, sites que carregam em 5 segundos, na comparação com os que levam 19 segundos, registraram 25% mais viewability de anúncios, sessões 70% mais longas e taxas de rejeição 35% menores. Anúncio de vídeo vive sob a mesma impaciência, com um agravante: o espectador não pediu para vê-lo.

**Cada segundo de carregamento é um pedaço da sua verba que o usuário nunca chega a ver.**

O raciocínio financeiro é simples. A impressão foi servida, o CPM foi cobrado, e o usuário saiu antes do primeiro quadro. Esse volume aparece no relatório como entrega, não como perda. É por isso que a latência é um dos desperdícios mais difíceis de enxergar em campanhas de vídeo.

## Quanto custa esperar: o que a pesquisa mostra

O estudo de Krishnan e Sitaraman, publicado na ACM Internet Measurement Conference e depois na IEEE/ACM Transactions on Networking, é referência porque estabeleceu uma relação causal, e não apenas correlação, entre qualidade de transmissão e comportamento do espectador. Os três achados mais relevantes para o planejamento de mídia:

- **Limite de 2 segundos:** o abandono começa quando a partida do vídeo passa de 2 segundos.
- **5,8% por segundo:** cada segundo extra de atraso aumenta a taxa de abandono nessa proporção.
- **Interrupções também cobram:** quem sofre rebuffer equivalente a 1% da duração do vídeo assiste, em média, a 5% menos do conteúdo.

## Instant Play versus pré-roll: onde está a diferença

A comparação com o pré-roll tradicional ajuda a deixar o formato mais claro. O pré-roll depende de uma cadeia de chamadas: o player da página pede o anúncio, o ad server responde, o arquivo de vídeo é baixado e só então a reprodução começa. Cada elo adiciona latência e cada latência abre uma janela de abandono.

No Instant Play, o vídeo é empacotado como player dentro do próprio anúncio. Há menos dependências externas entre a entrega e o primeiro quadro, e o formato foi desenhado para que o vídeo esteja pronto quando o anúncio aparece. A South Media o opera como uma tecnologia de terceiros, de uso exclusivo da casa, integrada ao planejamento de vídeo.

| Etapa | Pré-roll tradicional | Instant Play |
|---|---|---|
| Início da reprodução | Depende de player da página, chamada ao ad server e download do arquivo | Player embutido no próprio anúncio |
| Risco de espera | Cada etapa soma latência | Carregamento pensado para ser imediato |
| Ponto de falha | Vários, fora do controle do anunciante | Concentrado e monitorável |
| Métrica protegida | Impressão servida | Visualização completa |

## Viewability e atenção: o que o padrão MRC realmente mede

Para o vídeo, o padrão do Media Rating Council (MRC), adotado também pelo IAB, define impressão visível como aquela em que pelo menos 50% dos pixels estão em tela por no mínimo 2 segundos contínuos de reprodução. A definição foi publicada em 2014 e reafirmada na versão 2.0, de 2015.

Repare na condição: o padrão exige que o vídeo esteja tocando. Um anúncio que demora a carregar consome justamente esses 2 segundos antes de começar, e pode nunca cumprir a regra. Latência, portanto, é um problema de viewability de vídeo, e não apenas de experiência. Como discutimos em [métricas de atenção e viewability](/blog/metricas-de-atencao-viewability), viewability prova a oportunidade de ver, e não que alguém prestou atenção. O Instant Play ataca a etapa anterior: garantir que a oportunidade exista.

## Da impressão servida ao resultado

Existe um erro comum em planos de vídeo: tratar atenção como destino. Ela é apenas uma etapa. Como argumentamos em [atenção não é métrica de resultado](/blog/atencao-nao-e-metrica-de-resultado-mrc-iab), o que importa para o negócio é a cadeia completa, da impressão ao efeito medido em marca ou venda. Um formato que elimina o atrito de carregamento melhora o primeiro elo dessa cadeia: mais impressões que de fato começam, mais visualizações completas e menos verba diluída em entregas que nunca foram vistas.

Isso vale especialmente em canais onde o inventário é caro. Em CTV, por exemplo, o CPM elevado torna cada impressão perdida mais custosa, tema que detalhamos em [CTV com CPM alto e inventário sobrando](/blog/ctv-cpm-alto-inventario-sobrando). A lógica de proteger a entrega antes de otimizar o resto vale para qualquer formato de vídeo de alto impacto.

Na prática, vale cobrar de qualquer fornecedor a taxa de visualização completa sobre as impressões que começaram, e não sobre as servidas.

## Como a South Media trata o tema

Na South Media, o Instant Play faz parte do conjunto de formatos que operamos em campanhas de vídeo. A automação cuida da entrega, mas o diferencial está no critério: decidir quando o formato faz sentido, medir o que ele protege e mostrar o resultado em termos que o anunciante consiga auditar.

## Perguntas Frequentes

### O que é Instant Play?

Instant Play é um formato de vídeo programático em que o anúncio chega como player embutido no próprio criativo e carrega na hora, sem espera perceptível. O objetivo é reduzir o abandono dos primeiros segundos e proteger a visualização completa. O problema que ele ataca é documentado: o abandono começa após 2 segundos de atraso na partida do vídeo (Krishnan e Sitaraman, ACM IMC, 2012).

### Qual a diferença entre Instant Play e pré-roll?

O pré-roll depende de uma sequência de chamadas, do player da página ao ad server e ao download do arquivo, e cada etapa soma latência antes do primeiro quadro. No Instant Play o vídeo já vem dentro do anúncio, com menos dependências até o início da reprodução. A diferença está na proteção do começo da exibição, e não no criativo em si.

### Como o tempo de carregamento afeta a atenção em vídeo?

Quanto maior a espera, maior o abandono antes de qualquer exposição. Segundo Krishnan e Sitaraman, cada segundo extra de atraso na partida eleva o abandono em 5,8%, e o Google apurou que 53% das visitas móveis são abandonadas após 3 segundos de carregamento. Sem exposição não há atenção, e sem atenção não há resultado a otimizar.

## Fontes

- [Krishnan e Sitaraman (ACM IMC 2012; IEEE/ACM Transactions on Networking, 2013) - Video Stream Quality Impacts Viewer Behavior: Inferring Causality Using Quasi-Experimental Designs](https://dl.acm.org/doi/10.1145/2398776.2398799)
- [Google - The Need for Mobile Speed: Better user experiences, greater publisher revenue (2016)](https://www.thinkwithgoogle.com/_qs/documents/2340/bc22e_The_Need_for_Mobile_Speed_-_FINAL_1.pdf)
- [The ARF - Many Visitors Abandon Mobile Sites If Load Time Tops 3 Seconds (fonte: Google)](https://thearf.org/category/news-you-can-use/many-visitors-abandon-mobile-sites-if-load-time-tops-3-seconds-via-mediapost-source-google/)
- [MRC e IAB - Viewable Ad Impression Measurement Guidelines](https://www.iab.com/wp-content/uploads/2015/06/MRC-Viewable-Ad-Impression-Measurement-Guideline.pdf)
- [PR Newswire - Media Rating Council Updates Viewable Ad Impression Measurement Guidelines (2015)](https://www.prnewswire.com/news-releases/media-rating-council-updates-viewable-ad-impression-measurement-guidelines-300130219.html)
`,
};
