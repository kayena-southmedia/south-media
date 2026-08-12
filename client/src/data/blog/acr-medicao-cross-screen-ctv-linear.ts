import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 21,
    slug: "acr-medicao-cross-screen-ctv-linear",
    category: "CTV",
    title: "ACR e Medição Cross-Screen: O Que o Planejador Precisa Entender Antes do Próximo Briefing",
    summary: "ACR (Automatic Content Recognition) mede a exposição cruzada entre TV linear e CTV no nível do domicílio. O que o planejador precisa saber antes do briefing.",
    date: "26 Mai 2026",
    readTime: "7 min",
    cover: "/blog/acr-cross-screen-medicao.webp",
    author: "South Media",
    content: `## O Que É ACR e Como Funciona a Medição Cross-Screen?

ACR (Automatic Content Recognition) é a tecnologia embarcada em Smart TVs que identifica, em tempo real, qual conteúdo está na tela — por impressão digital de áudio ou vídeo, no estilo Shazam. Marcas como Samsung, LG e TCL a trazem de fábrica em modelos recentes. Para mensuração, ela permite saber se um domicílio foi exposto a um comercial, seja ele de TV aberta, TV paga ou streaming, unificando a medição cross-screen.

Quem planeja mídia há mais de cinco anos no Brasil já passou por essa situação: a campanha roda simultaneamente em TV aberta e em CTV programática, com criativos relacionados, e na hora de medir a exposição cruzada vem a pergunta que ninguém consegue responder com precisão — quantas pessoas viram a campanha em ambos os canais? Quantas foram impactadas duas vezes no mesmo dia? A frequência efetiva combinada é qual?

Por anos, a resposta foi versão sofisticada de "não sei direito". Estimava-se por painel, modelava-se por proxy, projetava-se por correlação. Era melhor do que nada, mas longe da precisão que se tem em outros canais digitais. Em 2026, isso mudou. A tecnologia que permite responder essa pergunta tem nome — **ACR, Automatic Content Recognition** — e já está integrada em parte significativa do parque de Smart TVs brasileiras.

## O Que É ACR e Como Funciona

ACR é uma tecnologia embarcada em Smart TVs que identifica, em tempo real, qual conteúdo está sendo exibido na tela. Funciona via reconhecimento de áudio ou vídeo: a TV captura uma amostra do que está passando, compara com uma base de impressões digitais de conteúdo previamente catalogado, e identifica programa, canal, comercial ou conteúdo de streaming sendo consumido.

O ponto que muda tudo: **ACR funciona independentemente de como o conteúdo está chegando à TV**. Não importa se é via TV aberta tradicional, TV por assinatura, CTV de aplicativos de streaming, ou qualquer outra fonte. A TV sabe o que está sendo exibido na tela porque está reconhecendo o sinal visual ou auditivo, não dependendo de metadados do canal.

Para mensuração publicitária, isso significa algo concreto: é possível saber se um determinado dispositivo foi exposto a um comercial específico, independentemente do canal pelo qual o comercial chegou. Se a marca passou na TV aberta às 20h45 e o mesmo dispositivo foi impactado por um anúncio relacionado no streaming às 22h15, ACR pode registrar as duas exposições e atribuí-las ao mesmo domicílio.

## Por Que Isso Não Era Possível Antes

Antes de ACR, mensurar cross-screen entre TV linear e CTV programática era exercício de modelagem. Os dados vinham de fontes diferentes — painéis de audiência de TV de um lado, logs de impressão de DSP do outro — e a integração era feita por aproximação estatística. Estimava-se que um determinado público que viu o comercial na TV linear teve probabilidade X de também ser impactado em CTV no mesmo dia. Essa probabilidade era razoável em base populacional, mas insuficiente para decisões granulares de planejamento.

O resultado prático era subutilização do cross-screen. Planejadores comprehensives buscavam frequência efetiva em cada canal isoladamente, sem conseguir orquestrar exposição combinada. Frequência alta em TV linear coexistia com frequência alta em CTV para o mesmo público, gerando saturação que não era visível no plano porque os silos não conversavam.

**Com ACR, o silo começa a se desfazer.**

Não completamente, mas o suficiente para que decisões de planejamento sejam tomadas com dados de exposição combinada reais — não modelados.

## O Que Muda no Planejamento

Três decisões que dependiam de estimativa agora podem ser tomadas com dado:

**Frequency cap combinado.** Antes, o planejador estabelecia frequency cap em TV linear (digamos, 4 exposições por semana) e separadamente em CTV (digamos, 3 exposições por semana). O usuário poderia ser impactado até 7 vezes na semana combinando os dois canais. Com ACR, é possível estabelecer cap unificado: 5 exposições por semana, independentemente de qual canal entregou.

**Sequência narrativa cross-canal.** O criativo na TV linear apresenta o conceito principal. O criativo em CTV avança a narrativa para audiência que já viu o primeiro contato. Isso só funciona se a operação consegue identificar quem viu o quê — e ACR é o que permite essa identificação no nível do domicílio.

**Atribuição de uplift.** Em campanhas que combinam TV linear e CTV, quanto da elevação de venda ou de busca de marca veio de cada canal? Com ACR, é possível segmentar a audiência em três grupos — só TV linear, só CTV, ambos — e medir comportamento posterior de cada grupo separadamente. Isso permite atribuição com método experimental, não com modelagem.

## A Limitação Que Importa Reconhecer

ACR não cobre 100% do parque de TVs. Em 2026, a penetração no Brasil está em crescimento, mas ainda não é universal. As principais marcas — Samsung, LG, TCL, Roku — têm ACR ativo no padrão de fábrica em modelos recentes, e a base instalada cresce a cada renovação de hardware. Mas existe parcela do mercado, especialmente em TVs mais antigas ou em modelos de marcas com menor adoção da tecnologia, em que ACR não opera.

Existe também a questão do consentimento. ACR funciona quando o usuário aceita as políticas de coleta de dados da Smart TV — algo que a maioria aceita por default ao configurar o aparelho, mas que pode ser desativado nas configurações. Em mercados mais maduros em privacidade, isso reduz cobertura. No Brasil, a adesão default é alta o suficiente para que a amostra seja estatisticamente robusta.

Significa que ACR não substitui completamente os métodos tradicionais de medição de TV linear — pesquisa de audiência por painel, dados de set-top box, surveys de exposição. Funciona como **camada complementar** que adiciona granularidade onde antes só havia estimativa.

## A Implicação Para Brand Lift

Brand lift é uma das métricas mais relevantes em campanhas de awareness, e historicamente foi medida com survey de pesquisa: comparar grupo exposto à campanha com grupo de controle não exposto, em variáveis como recall, intenção de compra, percepção de marca.

Com ACR, a segmentação dos dois grupos fica mais precisa. Antes, o grupo "exposto" era construído por modelo — pessoas que provavelmente viram a campanha com base em hábito de consumo de TV. Agora, é possível construir o grupo exposto com base em quem efetivamente teve a TV ligada no momento do anúncio, identificado por ACR. A precisão da medição aumenta, e o brand lift que sai do estudo passa a refletir o impacto real, não o impacto estimado.

## O Que Perguntar Ao Parceiro de Mídia

Para o planejador que vai estruturar campanha cross-screen em 2026, três perguntas separam quem domina ACR de quem ainda opera no modelo antigo:

**Qual a cobertura de ACR na audiência que vai ser impactada?** Diferentes regiões do Brasil têm penetração diferente de Smart TVs com ACR ativo. O parceiro deve conseguir dimensionar isso para o público específico da campanha.

**Como é feita a integração entre dados de ACR e dados de DSP?** A medição cross-screen funciona quando os dois sistemas — ACR identificando exposição na TV e DSP registrando exposição em CTV — conseguem se conectar via identificador comum. Como isso é feito tecnicamente importa para a qualidade da medição.

**Qual a granularidade do reporting?** É possível ver a exposição combinada em nível de campanha? De criativo? De domicílio? Cada nível de granularidade tem aplicação diferente no planejamento, e nem todo fornecedor entrega todos.

ACR não é tema novo no mercado internacional — está em uso há anos nos Estados Unidos. Mas a maturidade brasileira do tema em 2026 chegou ao ponto em que ignorar é deixar de capturar precisão que outros canais já oferecem há mais tempo. Quem planeja CTV em 2026 sem entender ACR está planejando com dados melhores do que tinha em 2020, mas piores do que poderia ter agora.

## Perguntas Frequentes

### O que é ACR (Automatic Content Recognition)?

É a tecnologia embarcada em Smart TVs que identifica, em tempo real, qual conteúdo está na tela, por impressão digital de áudio ou vídeo. Funciona independentemente de o conteúdo chegar por TV aberta, TV paga ou streaming.

### Para que serve o ACR na mensuração de mídia?

Permite saber se um mesmo domicílio foi exposto a um comercial em canais diferentes, unificando a medição entre TV linear e CTV. Com isso dá para aplicar frequency cap combinado, sequência narrativa cross-canal e atribuição de uplift com método experimental.

### O ACR cobre todas as TVs?

Não. A penetração no Brasil cresce a cada renovação de hardware, mas não é universal, e depende do consentimento do usuário nas configurações da TV. Por isso o ACR funciona como camada complementar, não como substituto dos métodos tradicionais de medição.

### Qual a diferença entre ACR e cookies?

O cookie rastreia navegação em sites; o ACR reconhece o conteúdo exibido na tela da TV. São camadas diferentes de dado — o ACR opera no nível do domicílio e da tela grande, onde o cookie nunca chegou.`,
  };
