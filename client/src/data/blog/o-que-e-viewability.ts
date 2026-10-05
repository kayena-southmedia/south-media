import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 32,
    slug: "o-que-e-viewability",
    category: "Performance",
    title: "O Que É Viewability: Por Que a Taxa Só Vale Quando o Inventário É Verificado",
    summary: "Viewability mede se o anúncio teve condição real de ser visto. Entenda o padrão do MRC, os benchmarks e por que a taxa se lê junto com verificação e curadoria.",
    date: "16 Jul 2026",
    readTime: "6 min",
    cover: "/blog/o-que-e-viewability.webp",
    author: "South Media",
    content: `## O Que É Viewability na Publicidade Digital?

Viewability é a métrica que indica se um anúncio teve condição real de ser visto por uma pessoa — ou seja, se ele chegou a aparecer na área visível da tela, e não abaixo da dobra, atrás de outra janela ou numa aba que ninguém abriu. O padrão do **MRC (Media Rating Council)** define uma impressão como viewable quando **50% dos pixels do anúncio ficam na área visível por pelo menos 1 segundo** em display e **2 segundos** em vídeo. No benchmark global mais recente, a viewability média está em **79,7% em vídeo e 67,9% em display** (IAS, Media Quality Report, 21ª edição, julho de 2026).

Viewability é o piso auditável da compra de mídia: a confirmação, por critério público e verificável, de que o anúncio esteve em condição real de exposição. E, como todo número, ela vale tanto quanto o inventário onde foi obtida.

## Como o MRC Define uma Impressão Viewable

O padrão nasceu para resolver um problema simples e caro: até 2014, o mercado pagava por impressão servida. Se o anúncio fosse carregado no rodapé de uma página que o usuário abandonou no primeiro parágrafo, ele contava igual ao anúncio que ficou meio minuto no meio da tela.

A régua do MRC separou os dois casos. Para display, 50% dos pixels visíveis por 1 segundo. Para vídeo, os mesmos 50% por 2 segundos. Para anúncios grandes — acima de 242.500 pixels — o critério cai para 30% da área, porque um formato gigante raramente cabe inteiro na tela.

O que essa definição faz é estabelecer um mínimo comum, auditável por terceiros. Foi isso que acabou com a cobrança por impressão servida sem critério.

## Qual É uma Taxa de Viewability Boa?

Depende do formato e do ambiente, e é aí que a média engana. Vídeo entrega viewability estruturalmente mais alta que display porque costuma ocupar mais área da tela e exigir mais permanência. Desktop entrega mais que mobile web. Ambiente in-app entrega mais que web aberta.

Como referência prática do benchmark global mais recente: **vídeo em 79,7%** e **display em 67,9%**. Uma campanha de display que entrega 70% está dentro do padrão de mercado; uma que entrega 45% tem um problema de inventário, não de criativo.

Mas o número isolado não conta a história toda. Um site feito só para gerar impressão consegue viewability altíssima — basta empilhar formatos no meio da tela, com rolagem infinita e recarregamento automático. A taxa sobe, o desperdício também.

## Por Que a Taxa Precisa de Inventário Verificado

Viewability mede a condição de exposição, e é por isso que ela precisa de inventário limpo para valer alguma coisa. Uma impressão de bot pode ser viewable. Um site MFA pode ter taxa altíssima. Por isso a métrica se sustenta junto com verificação de tráfego inválido e adequação de marca — e com curadoria na origem da compra.

**Viewability alta em inventário sem verificação é número bonito. Em inventário curado e verificado, é garantia de entrega.**

Essa distinção não é acadêmica. Ela explica por que o mercado passou a exigir verificação independente: a mesma taxa pode vir de inventário premium ou de um site feito para gerar impressão. Quem separa um do outro não é a métrica sozinha — é a leitura combinada.

## Onde a Viewability Alta Esconde Desperdício

O ponto cego mais caro está no mobile web. No benchmark do IAS, o mobile web display concentra **71,9% de todas as impressões classificadas como MFA** — [sites feitos para arbitrar tráfego](/blog/sites-mfa-inventario-desperdicio) e gerar impressão, não para serem lidos — enquanto responde por 45,1% do volume total. A taxa de MFA no mobile web display é de 2,0%, contra 0,5% no desktop.

Some a isso o tráfego inválido. O IVT global fica em 1,1%, mas o mesmo relatório mostra CTV não otimizado em **9,1% contra 0,1% quando há verificação ativa** — uma diferença de quase 91 vezes. Impressão fraudulenta também pode ser viewable: o bot renderiza a página inteira.

Ou seja: viewability alta, MFA alto e IVT alto convivem no mesmo relatório sem se contradizerem. Ler só a primeira métrica é ler um terço da história.

## O Que Fazer com a Métrica na Prática

Viewability funciona como critério de entrada e como garantia de entrega — desde que lida com o resto do quadro. Três usos que se sustentam:

**Como filtro de inventário.** Definir um piso de viewability por formato antes da campanha começar, e excluir o que não alcança — não depois, no relatório, mas na configuração da compra.

**Como leitura combinada.** Viewability lida junto com IVT, MFA e [brand suitability](/blog/brand-safety-vs-brand-suitability). Em inventário sem verificação, ela pode ser inflada por quem quer enganar; combinada com as outras leituras, fica difícil de fabricar.

**Como diagnóstico de formato.** Se um formato entrega viewability muito abaixo do benchmark da categoria, o problema quase sempre é posição na página ou tipo de publisher — e isso se resolve na curadoria, não no criativo.

O que não funciona é apresentar viewability isolada, sem dizer em que inventário ela foi obtida. A taxa se sustenta acompanhada de IVT, MFA e brand suitability.

## O Que Vem a Seguir

A viewability fez o que tinha que fazer: acabou com a era da impressão servida sem critério e virou o piso da compra de mídia. O mercado que cobra transparência já trata viewability como pré-requisito — algo que se verifica e se garante na compra, junto com tráfego válido e ambiente adequado à marca. A discussão sobre atenção, que segue em evolução, entra como contexto complementar, sem substituir a régua auditável — detalhamos isso em [métricas de atenção e viewability](/blog/metricas-de-atencao-viewability).

Na South Media, viewability entra como critério de qualificação do inventário antes da veiculação, junto com verificação de tráfego inválido e adequação de marca, pela metodologia Double Check — verificação em tripla camada com DoubleVerify — e com a curadoria de inventário. É o que o cliente não precisa perguntar, porque já está resolvido na compra.

## Perguntas Frequentes

### O que significa viewability em mídia programática?

Viewability é a métrica que indica se um anúncio ficou visível na tela do usuário em condição de ser visto. Pelo padrão do MRC, uma impressão é viewable quando 50% dos pixels do anúncio permanecem na área visível por pelo menos 1 segundo em display e 2 segundos em vídeo.

### Qual é uma boa taxa de viewability?

O benchmark global mais recente aponta 79,7% em vídeo e 67,9% em display (IAS, julho de 2026). Vídeo entrega naturalmente mais que display, e desktop mais que mobile web, então a taxa só faz sentido comparada dentro do mesmo formato e ambiente.

### Viewability garante qualidade de mídia?

Sozinha, não: bots e sites MFA também geram impressões viewable. Viewability garante qualidade quando é lida junto com verificação de tráfego inválido e adequação de marca, sobre inventário com curadoria.

### Impressão fraudulenta pode ser contada como viewable?

Pode. Bots renderizam páginas por completo, o que faz o anúncio cumprir o critério técnico de viewability mesmo sem nenhum humano na frente da tela. Por isso viewability precisa ser lida junto com verificação de tráfego inválido, e nunca isolada.`,
  };
