import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 32,
    slug: "o-que-e-viewability",
    category: "Performance",
    title: "O Que É Viewability: A Métrica Que Diz Que o Anúncio Teve Chance de Ser Visto — Não Que Foi Visto",
    summary: "Viewability mede se o anúncio teve condição real de ser visto. Entenda o padrão do MRC, os benchmarks atuais e por que ela é piso de compra, não prova.",
    date: "16 Jul 2026",
    readTime: "6 min",
    cover: "/blog/o-que-e-viewability.webp",
    author: "South Media",
    content: `## O Que É Viewability na Publicidade Digital?

Viewability é a métrica que indica se um anúncio teve condição real de ser visto por uma pessoa — ou seja, se ele chegou a aparecer na área visível da tela, e não abaixo da dobra, atrás de outra janela ou numa aba que ninguém abriu. O padrão do **MRC (Media Rating Council)** define uma impressão como viewable quando **50% dos pixels do anúncio ficam na área visível por pelo menos 1 segundo** em display e **2 segundos** em vídeo. No benchmark global mais recente, a viewability média está em **79,7% em vídeo e 67,9% em display** (IAS, Media Quality Report, 21ª edição, julho de 2026).

A confusão começa no nome. Viewability soa como "visualização", e visualização soa como alguém olhando. Não é isso que a métrica mede. Ela mede oportunidade de exposição, não exposição de fato.

## Como o MRC Define uma Impressão Viewable

O padrão nasceu para resolver um problema simples e caro: até 2014, o mercado pagava por impressão servida. Se o anúncio fosse carregado no rodapé de uma página que o usuário abandonou no primeiro parágrafo, ele contava igual ao anúncio que ficou meio minuto no meio da tela.

A régua do MRC separou os dois casos. Para display, 50% dos pixels visíveis por 1 segundo. Para vídeo, os mesmos 50% por 2 segundos. Para anúncios grandes — acima de 242.500 pixels — o critério cai para 30% da área, porque um formato gigante raramente cabe inteiro na tela.

O que essa definição faz é estabelecer um mínimo. O que ela não faz é dizer se alguém prestou atenção.

## Qual É uma Taxa de Viewability Boa?

Depende do formato e do ambiente, e é aí que a média engana. Vídeo entrega viewability estruturalmente mais alta que display porque costuma ocupar mais área da tela e exigir mais permanência. Desktop entrega mais que mobile web. Ambiente in-app entrega mais que web aberta.

Como referência prática do benchmark global mais recente: **vídeo em 79,7%** e **display em 67,9%**. Uma campanha de display que entrega 70% está dentro do padrão de mercado; uma que entrega 45% tem um problema de inventário, não de criativo.

Mas o número isolado não diz nada sobre qualidade. Um site feito só para gerar impressão consegue viewability altíssima — basta empilhar formatos no meio da tela, com rolagem infinita e recarregamento automático. A métrica sobe, o desperdício também.

## Por Que Viewability Não É Prova de Atenção

Aqui está o dado que reposiciona a discussão inteira: entre os anúncios digitais que passam no critério de viewable, **apenas cerca de 30% são de fato olhados**, segundo medições de eye-tracking da Lumen. Os outros 70% estiveram na tela, cumpriram o padrão do MRC, foram cobrados — e não receberam olhar humano.

**Viewable quer dizer que o anúncio teve chance de ser visto. Não quer dizer que alguém viu.**

Essa distinção não é acadêmica. Ela explica por que campanhas com viewability excelente às vezes não movem nenhum indicador de marca, e por que o mercado passou a medir atenção como camada separada — sem que atenção substitua resultado, que é outra conversa.

## Onde a Viewability Alta Esconde Desperdício

O ponto cego mais caro está no mobile web. No benchmark do IAS, o mobile web display concentra **71,9% de todas as impressões classificadas como MFA** — sites feitos para arbitrar tráfego e gerar impressão, não para serem lidos — enquanto responde por 45,1% do volume total. A taxa de MFA no mobile web display é de 2,0%, contra 0,5% no desktop.

Some a isso o tráfego inválido. O IVT global fica em 1,1%, mas o mesmo relatório mostra CTV não otimizado em **9,1% contra 0,1% quando há verificação ativa** — uma diferença de quase 91 vezes. Impressão fraudulenta também pode ser viewable: o bot renderiza a página inteira.

Ou seja: viewability alta, MFA alto e IVT alto convivem no mesmo relatório sem se contradizerem. Ler só a primeira métrica é ler um terço da história.

## O Que Fazer com a Métrica na Prática

Viewability funciona bem como critério de entrada e mal como argumento de resultado. Três usos que se sustentam:

**Como filtro de inventário.** Definir um piso de viewability por formato antes da campanha começar, e excluir o que não alcança — não depois, no relatório, mas na configuração da compra.

**Como leitura combinada.** Viewability lida junto com IVT, MFA e brand suitability. Sozinha, ela é otimizável por quem quer enganar; combinada, fica difícil de fabricar.

**Como diagnóstico de formato.** Se um formato entrega viewability muito abaixo do benchmark da categoria, o problema quase sempre é posição na página ou tipo de publisher — e isso se resolve na curadoria, não no criativo.

O que não funciona é apresentar viewability de 78% ao cliente como prova de que a campanha deu certo. Ela prova que a mídia foi entregue em condição de ser vista. O resultado é outra medição.

## O Que Vem a Seguir

A viewability fez o que tinha que fazer: acabou com a era da impressão servida sem critério. Mas ela virou piso, não teto. O mercado que cobra prova de resultado já trata viewability como pré-requisito — algo que se verifica e se garante — e leva a discussão de eficiência para atenção, incrementalidade e resultado de negócio.

Na South Media, viewability entra como critério de qualificação do inventário antes da veiculação, junto com verificação de tráfego inválido e adequação de marca. É o que o cliente não precisa perguntar, porque já está resolvido na compra.

## Perguntas Frequentes

### O que significa viewability em mídia programática?

Viewability é a métrica que indica se um anúncio ficou visível na tela do usuário em condição de ser visto. Pelo padrão do MRC, uma impressão é viewable quando 50% dos pixels do anúncio permanecem na área visível por pelo menos 1 segundo em display e 2 segundos em vídeo.

### Qual é uma boa taxa de viewability?

O benchmark global mais recente aponta 79,7% em vídeo e 67,9% em display (IAS, julho de 2026). Vídeo entrega naturalmente mais que display, e desktop mais que mobile web, então a taxa só faz sentido comparada dentro do mesmo formato e ambiente.

### Viewability é o mesmo que atenção?

Não. Viewability mede oportunidade de exposição; atenção mede se a pessoa de fato olhou. Medições de eye-tracking indicam que apenas cerca de 30% dos anúncios viewable são efetivamente olhados — o que mostra que uma métrica não substitui a outra.

### Impressão fraudulenta pode ser contada como viewable?

Pode. Bots renderizam páginas por completo, o que faz o anúncio cumprir o critério técnico de viewability mesmo sem nenhum humano na frente da tela. Por isso viewability precisa ser lida junto com verificação de tráfego inválido, e nunca isolada.`,
  };
