export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  cover: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 32,
    slug: "curadoria-de-inventario",
    category: "Programática",
    title: "Curadoria de Inventário: A Camada Que Está Enterrando o 'Compra 44 Mil Sites e Otimiza Depois'",
    summary: "Curadoria de inventário define antes onde a marca pode aparecer, em vez de comprar 44 mil sites (ANA) e otimizar depois. Menos dispersão, mais controle.",
    date: "22 Jul 2026",
    readTime: "6 min",
    cover: "/blog/curadoria-de-inventario.webp",
    author: "South Media",
    content: `## O Que É Curadoria de Inventário na Mídia Programática?

Curadoria de inventário é a prática de definir antes, e não depois, um universo qualificado e verificado de sites e apps onde a marca pode aparecer — invertendo o modelo de "comprar tudo e otimizar depois". A urgência do tema tem número: segundo o estudo de transparência da ANA (Association of National Advertisers), a campanha programática média rodava em **44 mil sites diferentes**, dispersão em que é impossível saber onde a marca está. Curar inventário troca a lista infinita de exclusão pela lista finita de inclusão.

O modelo padrão da mídia programática, por muito tempo, foi o "compra tudo e otimiza depois": abrir o funil para o inventário máximo possível, deixar o algoritmo comprar onde encontrasse resultado e ir bloqueando o lixo à medida que ele aparecesse. Em teoria, eficiente. Na prática, uma corrida atrás do prejuízo.

O número que denuncia o problema veio do estudo de transparência da ANA: a campanha programática média rodava em **44 mil sites diferentes**. É impossível, para qualquer equipe humana, saber o que está acontecendo em 44 mil ambientes ao mesmo tempo. É nessa dispersão que se escondem MFA, tráfego inválido e impressões sem atenção.

## O Que a Curadoria de Inventário Muda?

Curadoria de inventário inverte a ordem das operações. Em vez de comprar o universo inteiro e tentar limpar depois, define-se **antes** um conjunto qualificado e verificado de inventário — os ambientes onde a marca pode aparecer — e a compra acontece dentro dessa fronteira.

É a diferença entre lista de inclusão e lista de exclusão.

**Lista de exclusão é uma promessa infinita: você nunca termina de bloquear o ruim, porque todo dia nasce um domínio novo. Lista de inclusão é finita e controlável — você diz onde quer estar, e pronto.**

## Menos Sellers, Mais Controle

A própria ANA aponta o caminho: trabalhar com um grupo enxuto de sellers confiáveis — algo como 75 a 100 — capazes de dar acesso a milhares de sites de qualidade sem exigir que o anunciante lide com dezenas de milhares de conexões soltas. Menos intermediários, mais transparência, e uma cadeia que dá para auditar de verdade.

O ganho não é só de qualidade; é de eficiência. Quando a verba para de vazar para inventário sem valor, a mesma quantia compra mais mídia que efetivamente importa. As medições recentes da ANA mostram o efeito: entre quem adotou práticas mais higiênicas, a fatia de investimento que chega ao consumidor subiu de forma consistente.

## Curadoria Não é Voltar à Compra Direta

Vale desfazer um mal-entendido: curar inventário não é abrir mão da escala e da automação da programática. É aplicar a inteligência de compra sobre um universo qualificado, em vez de sobre o caos. Você mantém a segmentação, a otimização e o volume — só que dentro de fronteiras que fazem sentido para a marca.

## O Que Vem a Seguir

Curadoria é, provavelmente, a mudança mais silenciosa e mais importante da mídia programática nos últimos anos. Ela troca o "otimizar o desperdício" por "não gerar o desperdício". Num mercado que cobra prova de resultado, essa inversão deixou de ser refinamento e virou padrão de operação.

Na South Media, curadoria de inventário é ponto de partida, não etapa de ajuste: a verba opera dentro de um universo qualificado e verificado desde o início da campanha — porque limpar depois sempre custa mais do que não sujar.

## Perguntas Frequentes

### O que é curadoria de inventário na mídia programática?

É a prática de definir previamente um conjunto qualificado e verificado de sites e apps onde os anúncios da marca podem aparecer, em vez de comprar o inventário inteiro e bloquear o ruim depois. A compra passa a acontecer dentro dessa fronteira controlada.

### Qual a diferença entre lista de inclusão e lista de exclusão?

A lista de exclusão bloqueia ambientes ruins um a um — um trabalho que nunca termina, porque novos domínios surgem todo dia. A lista de inclusão faz o contrário: especifica onde a marca quer estar, formando um universo finito e auditável.

### Curadoria de inventário reduz o alcance da campanha?

Não necessariamente. Curar inventário não elimina escala nem automação — mantém a segmentação e o volume, mas dentro de ambientes qualificados. O que diminui é o desperdício em inventário sem valor, não o alcance útil.

### Curadoria de inventário é o mesmo que brand safety?

São coisas complementares. Brand safety bloqueia conteúdo perigoso ou impróprio; curadoria de inventário vai além e define positivamente o universo de mídia de qualidade onde a verba pode circular, cobrindo também eficiência e transparência da cadeia.`,
  },
  {
    id: 31,
    slug: "native-programatico-atencao",
    category: "Programática",
    title: "Native Programático: Por Que o Formato Que Não Grita Entrega Mais Atenção Que o Que Interrompe",
    summary: "Native programático se integra ao conteúdo e sustenta atenção onde o formato que interrompe já perdeu para a cegueira de banner — e sem abrir mão de escala.",
    date: "15 Jul 2026",
    readTime: "6 min",
    cover: "/blog/native-programatico.webp",
    author: "South Media",
    content: `## Por Que o Native Programático Entrega Mais Atenção Que o Banner?

Native programático é o anúncio pago que assume a forma, a fonte e o ritmo do conteúdo ao redor — sempre identificado como publicidade — em vez de disputar atenção como um banner. Ele responde à "cegueira de banner", a tendência quase automática do usuário de ignorar tudo com cara de anúncio. E vive em ambiente editorial real, o oposto das fazendas de anúncio (MFA) que, segundo o estudo de transparência da ANA, chegaram a consumir 15% do investimento programático.

O usuário aprendeu a ignorar publicidade que interrompe. Décadas de banners piscantes, pop-ups e pré-rolls forçados criaram a cegueira de banner — a capacidade quase automática de desviar o olhar de qualquer coisa com cara de anúncio. É por isso que aumentar o volume de formato intrusivo, muitas vezes, só aumenta o volume de gente que não olha.

O native programático parte de outra premissa. Em vez de disputar atenção contra o conteúdo, ele se integra a ele: assume o formato, a fonte e o ritmo do ambiente onde aparece, sinalizado como publicidade, mas sem quebrar a experiência. O resultado é um anúncio que é lido no fluxo, não apesar dele.

## Integração Não é Disfarce

Vale a distinção, porque ela define a linha ética do formato: native bem feito é **identificado** como conteúdo patrocinado. A integração é de forma e contexto, não de engano. O ganho vem de respeitar a experiência do usuário — não de fingir que o anúncio não é anúncio.

É aí que mora a diferença de atenção. Um formato que respeita o contexto é processado com menos resistência. Enquanto o intrusivo trabalha contra a expectativa do usuário, o native trabalha a favor dela.

## O Elo Com Atenção e Qualidade

Native conversa diretamente com duas tendências que estão redefinindo a compra de mídia. Primeiro, a migração de viewability para métricas de atenção: não basta o anúncio ter chance de aparecer, ele precisa ser notado — e native costuma sustentar melhor esse tempo de foco. Segundo, a fuga do inventário MFA: native de qualidade vive em ambiente editorial real, não em fazendas de anúncio construídas para capturar verba.

**Gritar mais alto parou de funcionar faz tempo: aumentar o volume de formato intrusivo, na maioria das vezes, só aumenta o volume de gente que desvia o olhar.**

Comprado de forma programática, o formato ganha o que faltava historicamente: escala e controle. Dá para ativar native em milhares de ambientes premium com a mesma segmentação e a mesma verificação de brand safety aplicadas ao resto do plano.

## Onde o Native Rende Mais

O formato brilha em etapas que exigem consideração — quando a mensagem precisa de mais que um segundo de exposição para fazer sentido. Lançamentos que contam uma história, categorias de maior envolvimento, conteúdos que educam antes de vender. Onde o banner entrega lembrança rasa, o native entrega leitura.

## O Que Vem a Seguir

Num mercado que caminha para comprar atenção, e não só impressão, o formato que respeita o usuário deixa de ser "alternativa suave" e vira decisão de eficiência.

Na South Media, native entra no plano como formato de atenção e qualidade — operado com a mesma verificação independente e a mesma curadoria de inventário que o restante da estratégia, para que integração nunca signifique abrir mão de controle.

## Perguntas Frequentes

### O que é native programático?

É a compra automatizada de anúncios nativos — formatos que assumem a aparência e o comportamento do conteúdo ao redor, sempre identificados como publicidade. A operação programática dá ao native a escala, a segmentação e a verificação que antes só existiam em display e vídeo.

### Qual a diferença entre native e display?

O display é visualmente disruptivo: ocupa um espaço fixo e se destaca como banner. O native segue o fluxo de leitura e se integra ao conteúdo editorial. Por isso o native contorna melhor a cegueira de banner, enquanto o display depende do contraste para ser notado.

### Publicidade nativa engana o usuário?

Native bem feito não engana: ele é sinalizado como conteúdo patrocinado. A integração é de forma e contexto, não de identidade. O ganho vem de respeitar a experiência de leitura, não de disfarçar que o anúncio é um anúncio.

### Native funciona em ambiente sem cookie?

Sim. Como o native se apoia no contexto do conteúdo onde aparece, ele não depende de identificador individual para fazer sentido. Isso o torna especialmente resiliente num cenário de restrição a cookies de terceiros.`,
  },
  {
    id: 30,
    slug: "supply-path-optimization-caminho-impressao",
    category: "Programática",
    title: "Supply Path Optimization: Por Que o Caminho Que a Sua Impressão Percorre Decide Quanto Você Paga a Mais",
    summary: "Supply Path Optimization (SPO) escolhe a rota mais curta até a mesma impressão. A ANA aponta que a intermediação chega a consumir ~29% do investimento.",
    date: "9 Jul 2026",
    readTime: "6 min",
    cover: "/blog/supply-path-optimization.webp",
    author: "South Media",
    content: `## O Que É Supply Path Optimization (SPO)?

Supply Path Optimization (SPO) é a disciplina de mapear todos os caminhos pelos quais uma mesma impressão pode chegar até o comprador e escolher deliberadamente a rota mais curta, transparente e barata. Uma única impressão pode ser oferecida por vários caminhos ao mesmo tempo — e cada intermediário leva um pedaço da verba. O tamanho do problema tem número: o estudo de transparência da ANA quantificou custos de transação da cadeia consumindo por volta de **29%** do investimento programático.

Uma única impressão de um único site pode ser oferecida ao seu comprador por vários caminhos ao mesmo tempo — direto do publisher, via SSP A, via SSP B, via revendedor, via revendedor do revendedor. Todos vendem o mesmo espaço. E cada intermediário no caminho leva um pedaço da sua verba.

Parece detalhe técnico. É, na verdade, uma das maiores alavancas de eficiência da mídia programática.

## O Tamanho do Problema

O estudo de transparência da ANA quantificou o que o mercado preferia não olhar: custos de transação da cadeia programática consumindo por volta de **29%** do investimento, com apenas cerca de 36 centavos de cada dólar chegando ao consumidor em mídia de qualidade. Parte relevante dessa perda está justamente nos caminhos redundantes — a mesma impressão comprada por uma rota cheia de pedágios em vez de uma rota direta.

O detalhe mais revelador do estudo: enquanto a maioria das SSPs ficava com menos de 5% do investimento, uma única SSP chegou a absorver perto de 45% do gasto de mídia num dos casos. Sem SPO, o comprador não enxerga isso. Só vê a impressão entregue.

## Caminho Mais Curto Não é Só Mais Barato

SPO não é uma corrida pelo menor custo. Rota direta com publisher costuma significar também menos oportunidade de fraude, menos discrepância de mensuração e mais controle sobre onde a marca aparece.

**O caminho curto é, ao mesmo tempo, mais barato e mais seguro — é raro que eficiência e qualidade apontem tão claramente para a mesma direção.**

## Como Isso Se Traduz em Decisão

Na prática, SPO envolve consolidar sellers, priorizar conexões diretas e supply autorizado, ler os arquivos de transparência (ads.txt, sellers.json) e cortar rotas que só adicionam taxa sem adicionar acesso. É trabalho contínuo, não um ajuste único: a cadeia muda o tempo todo, e a rota que era limpa no mês passado pode ter ganhado um pedágio novo.

O resultado é direto no bolso: a mesma verba, comprando a mesma audiência, com uma fatia maior chegando de fato à mídia — e não aos intermediários.

## O Que Vem a Seguir

À medida que o anunciante brasileiro ganha acesso a dados de log e passa a auditar a própria cadeia, SPO deixa de ser tema de especialista e vira exigência básica. A pergunta que todo gestor deveria fazer ao parceiro de mídia é simples: por quantas mãos passa a minha impressão antes de chegar na tela?

Na South Media, otimização de caminho de compra é parte de operar com transparência — encurtar a distância entre a verba e a mídia é, no fim, o que faz a conta fechar para o anunciante.

## Perguntas Frequentes

### O que é supply path optimization (SPO)?

É a estratégia de identificar todos os caminhos pelos quais uma impressão pode ser comprada e priorizar as rotas mais curtas, diretas e transparentes até o publisher. O objetivo é eliminar intermediários redundantes que só adicionam taxa, sem adicionar acesso.

### Por que a mesma impressão tem vários caminhos e preços?

Um mesmo espaço pode ser ofertado simultaneamente direto pelo publisher e por várias SSPs e revendedores. Cada rota carrega sua própria camada de taxas, então o mesmo inventário chega ao comprador por preços diferentes conforme o caminho.

### SPO só serve para reduzir custo?

Não. Além de reduzir taxas de intermediação, a rota mais direta costuma trazer menos risco de fraude, menos discrepância de mensuração e mais controle sobre onde a marca aparece. Eficiência e qualidade tendem a andar juntas no SPO.

### Como começar a aplicar SPO?

Os primeiros passos são consolidar o número de sellers, priorizar conexões diretas e supply autorizado, e ler os arquivos ads.txt e sellers.json para cortar rotas sem valor. Como a cadeia muda o tempo todo, o trabalho é contínuo, não um ajuste único.`,
  },
  {
    id: 29,
    slug: "incrementalidade-midia-que-vende",
    category: "Performance",
    title: "Incrementalidade: A Métrica Que Separa Mídia Que Gera Venda de Mídia Que Só Aparece Onde a Venda Já Ia Acontecer",
    summary: "Incrementalidade mede quantas vendas só aconteceram por causa da mídia. Sem grupo de controle, ROAS alto pode ser crédito por vendas que já iam acontecer.",
    date: "3 Jul 2026",
    readTime: "7 min",
    cover: "/blog/incrementalidade.webp",
    author: "South Media",
    content: `## O Que É Incrementalidade em Marketing?

Incrementalidade é a métrica que mede quantas conversões só aconteceram **por causa** da mídia — o resultado que não teria existido sem a campanha. Diferente do ROAS por atribuição, ela isola causa de coincidência comparando um grupo exposto a um grupo de controle não exposto, o mesmo princípio de um ensaio clínico randomizado. Plataformas como Google (Conversion Lift) e Meta (Conversion/Brand Lift) já oferecem esse tipo de teste de forma nativa.

Existe um erro de leitura que custa caro e passa despercebido em quase todo relatório de campanha: confundir correlação com causa. A campanha rodou, as vendas aconteceram, o ROAS veio alto — logo, a campanha gerou as vendas. Nem sempre. Muitas vezes, a mídia apenas apareceu no caminho de quem já ia comprar de qualquer jeito.

Retargeting é o exemplo clássico. Você mostra um anúncio para alguém que colocou o produto no carrinho ontem. A pessoa compra. O sistema de atribuição credita a venda ao anúncio. Mas essa pessoa provavelmente compraria mesmo sem ver nada. O anúncio não causou a venda — apenas se posicionou para levar o crédito por ela.

## O Que Incrementalidade Realmente Mede

Incrementalidade responde a uma pergunta diferente e muito mais dura: quantas conversões só aconteceram **por causa** da mídia? Ou seja, quanto do resultado é incremental — não teria existido sem a campanha?

A forma mais confiável de medir isso é por teste controlado: um grupo é exposto à campanha (grupo de teste) e um grupo estatisticamente equivalente não é exposto (grupo de controle). A diferença de conversão entre os dois é o lift incremental.

**Sem grupo de controle, você não tem prova, tem coincidência: é a versão de mídia do velho princípio científico.**

## Por Que Tantas Campanhas 'Boas' Desabam Nesse Teste

Quando anunciantes começam a medir incrementalidade, é comum descobrir que boa parte do ROAS reportado era crédito indevido. Táticas de fundo de funil, que miram quem está prestes a comprar, inflam a atribuição e escondem o fato de que a mídia de topo — a que realmente traz gente nova — vinha sendo subvalorizada.

Isso reorganiza o orçamento. Em vez de despejar verba onde a atribuição parece mais alta, o anunciante passa a investir onde o lift é maior. Nem sempre é o mesmo lugar. Quase nunca é.

## O Elo Com Transparência

Incrementalidade também expõe desperdício de inventário. Se uma fatia da campanha roda em ambiente de baixa qualidade — MFA, tráfego inválido, impressões sem atenção —, o teste de lift tende a mostrar contribuição incremental próxima de zero. É a métrica que não se deixa enganar por relatório bonito: ou a mídia moveu o ponteiro, ou não moveu.

## Como Começar Sem Virar um Projeto de Dois Anos

Não é preciso montar um laboratório. Dá para começar com testes de geo (praças expostas versus praças de controle), testes de audiência (holdout) ou estudos de conversão lift oferecidos pelas próprias plataformas. O essencial é institucionalizar a pergunta: antes de escalar qualquer tática, provar que ela é incremental.

## O Que Vem a Seguir

Num mercado que cobra cada vez mais prova de resultado, a atribuição de último clique vai perdendo espaço para o desenho de teste. A pergunta que separa quem investe de quem torra verba é simples e desconfortável: se eu desligar isso amanhã, a venda cai?

Na South Media, medir o que é incremental — e não só o que é atribuível — faz parte de entregar conteúdo, e mídia, para quem precisa provar resultado.

## Perguntas Frequentes

### O que é incrementalidade em marketing?

É a medida de quantas conversões só aconteceram por causa da campanha — ou seja, o resultado que não teria existido sem a mídia. Ela separa o que a mídia efetivamente causou do que apenas se correlacionou com a venda.

### Qual a diferença entre incrementalidade e ROAS?

O ROAS por atribuição credita à mídia toda venda que passou por ela, mesmo que a pessoa já fosse comprar. A incrementalidade mede só o efeito adicional, comparando expostos e não expostos. Por isso um ROAS alto pode esconder pouca ou nenhuma incrementalidade.

### Como medir incrementalidade?

O método mais confiável é o teste controlado: um grupo exposto e um grupo de controle equivalente que não vê a campanha. A diferença de conversão entre eles é o lift incremental. Dá para começar por testes de geo, holdouts de audiência ou os lift tests das próprias plataformas.

### O que é lift incremental?

É a diferença de conversão entre o grupo exposto à campanha e o grupo de controle, geralmente expressa em percentual. Um lift positivo indica que a mídia gerou resultado; um lift próximo de zero indica que a campanha levou crédito por vendas que já iam acontecer.`,
  },
  {
    id: 28,
    slug: "segmentacao-contextual-2-0-ia",
    category: "Programática",
    title: "Segmentação Contextual 2.0: Como a IA Colocou o Targeting Sem Cookie no Mesmo Nível do Comportamental",
    summary: "Segmentação contextual deixou de ser plano B: com IA, a leitura semântica de conteúdo em tempo real rivaliza com o cookie — sem depender dele. Entenda.",
    date: "27 Jun 2026",
    readTime: "6 min",
    cover: "/blog/segmentacao-contextual.webp",
    author: "South Media",
    content: `## O Que É Segmentação Contextual 2.0?

Segmentação contextual é a técnica de entregar o anúncio com base no significado da página — tema, tom, entidades, adequação para a marca — em vez do histórico do usuário. Na versão 2.0, processamento de linguagem natural e visão computacional leem o contexto em tempo real, sem depender de cookie. E isso importa agora: Safari, Firefox e Brave já bloqueiam cookies de terceiros por padrão, tornando parte relevante do tráfego global cookieless.

Colocar um anúncio de carro num artigo sobre carros é uma das ideias mais antigas da publicidade. Por isso, durante toda a era do cookie de terceiros, o contextual foi rebaixado a coadjuvante: útil, seguro, mas "pouco preciso" perto da segmentação por comportamento individual.

Essa hierarquia se inverteu. Não porque o cookie acabou — ele não acabou, e voltaremos a isso —, mas porque a segmentação contextual mudou de patamar tecnológico. O que hoje se chama de contextual 2.0 usa processamento de linguagem natural e visão computacional para entender o **significado** de uma página em tempo real: tema, tom, sentimento, entidades, adequação para a marca. Não a palavra-chave solta — o contexto inteiro.

## O Que a IA Acrescentou

O contextual antigo lia palavras-chave e errava feio: colocava anúncio de viagem ao lado de notícia de acidente aéreo porque as duas continham a palavra "voo". O contextual 2.0 entende que uma é sobre férias e a outra é sobre tragédia — e trata cada uma de forma diferente para alcance e para brand safety.

Isso resolve dois problemas de uma vez. Do lado da performance, entrega o anúncio no momento de real interesse temático, quando a atenção do usuário já está no assunto. Do lado da segurança, evita ambientes tóxicos com uma precisão que listas de bloqueio por palavra nunca tiveram.

## Por Que Isso Importa Justamente Agora

Em 2026, o alicerce de dados comportamentais está mais frágil do que o discurso oficial sugere. Safari, Firefox e Brave bloqueiam cookies de terceiros por padrão — algo entre 17% e 20% do tráfego global já é, na prática, cookieless. E mesmo no Chrome, que manteve o cookie, o substituto prometido não veio: em 17 de outubro de 2025, o Google anunciou o encerramento do Privacy Sandbox, aposentando as APIs restantes da iniciativa — entre elas Topics, Protected Audience e Attribution Reporting — no Chrome e no Android. Os cookies de terceiros seguem no navegador, sem prazo de remoção.

**A grande vantagem estrutural do contextual: ele não precisa saber quem é a pessoa. Ele lê onde ela está e o que está consumindo naquele instante — targeting sem dependência de identidade.**

Nesse cenário, o contextual carrega menos risco regulatório e técnico do que o dado comportamental, porque não se apoia em identificar o indivíduo.

## Onde Ele Não Substitui Tudo

Seria exagero vender contextual como bala de prata. Ele não faz retargeting individual e não constrói frequência por pessoa ao longo do tempo. A estratégia madura combina contextual 2.0 para alcance qualificado e brand safety com dados próprios (first-party) do anunciante para as etapas que exigem identidade.

## O Que Vem a Seguir

A leitura semântica por IA tende a virar a camada padrão de qualificação de inventário — não um recurso à parte. Quem tratava contextual como plano B está descobrindo que ele virou a base mais estável sobre a qual o resto do plano se apoia.

Na South Media, segmentação contextual entra como ferramenta de precisão e proteção ao mesmo tempo, operada com verificação independente para que alcance qualificado e brand safety andem juntos, não em trade-off.

## Perguntas Frequentes

### O que é segmentação contextual?

É a estratégia de exibir anúncios com base no conteúdo da página onde eles aparecem — tema, tom e significado — em vez do histórico de navegação do usuário. O anúncio é combinado ao interesse imediato do leitor naquele momento.

### Segmentação contextual funciona sem cookies?

Sim. Como se apoia no conteúdo da página, e não em identificadores individuais, o contextual opera normalmente em tráfego sem cookies de terceiros. É justamente por isso que ganhou força num cenário em que Safari, Firefox e Brave bloqueiam esses cookies por padrão.

### Qual a diferença entre segmentação contextual e comportamental?

A comportamental mira a pessoa a partir do seu histórico e exige dado de identidade. A contextual mira o ambiente — o significado do conteúdo que a pessoa está consumindo naquele instante. Uma depende de rastreio individual; a outra, não.

### Segmentação contextual substitui o retargeting?

Não completamente. O contextual não faz retargeting individual nem controla frequência por pessoa ao longo do tempo. A estratégia madura combina contextual para alcance qualificado e brand safety com dados próprios do anunciante nas etapas que exigem identidade.`,
  },
  {
    id: 27,
    slug: "sites-mfa-inventario-desperdicio",
    category: "Programática",
    title: "Sites MFA: O Inventário Que Infla Relatório, Consome Verba e Não Entrega Atenção Nenhuma",
    summary: "Sites MFA (Made for Advertising) já chegaram a 21% das impressões e 15% do investimento programático, segundo a ANA. Saiba identificá-los antes de pagar.",
    date: "21 Jun 2026",
    readTime: "7 min",
    cover: "/blog/sites-mfa.webp",
    author: "South Media",
    content: `## O Que São Sites MFA (Made for Advertising)?

Sites MFA (Made for Advertising) são páginas construídas com um único objetivo: capturar verba de publicidade programática, e não serem lidas por alguém. São lotadas de anúncios, com conteúdo raso ou reciclado, autoplay, pop-ups e rolagem infinita, desenhadas para maximizar impressões. O problema é a escala: o estudo de transparência da ANA encontrou que sites MFA chegaram a representar **21% das impressões** e **15% do investimento** programático analisado.

O problema é a escala. Bilhões de dólares escoam para inventário que o anunciante, na maioria das vezes, nem sabia que estava comprando.

## Por Que a Verba Vai Parar Ali Sem Ninguém Decidir

MFA prospera porque oferece exatamente o que a compra mal calibrada procura: CPM baixo e volume alto. Um algoritmo otimizando por custo por impressão, sem trava de qualidade, vai naturalmente derramar orçamento nesse inventário — ele é barato, abundante e passa nos testes básicos de viewability.

O mesmo estudo da ANA revelou que uma campanha programática rodava, em média, em **44 mil sites diferentes**. Nesse nível de dispersão, é humanamente impossível o anunciante saber onde sua marca está aparecendo. O MFA se esconde na cauda longa.

## O Sinal de Que Você Está Pagando Por MFA

Alguns indícios recorrentes: CTR anormalmente alto combinado com conversão baixíssima; enorme quantidade de domínios desconhecidos no relatório; taxa de viewability excelente com tempo de permanência ridículo; e resultados de mídia que parecem ótimos no dashboard mas não se refletem em nenhum indicador de negócio.

**É o retrato do desperdício silencioso: o relatório fica bonito, a marca "alcança milhões", e a venda não se move.**

## A Boa Notícia: Dá Para Controlar

Os dados mais recentes da ANA mostram que o problema é gerenciável quando há intenção. Entre os anunciantes que passaram a monitorar ativamente, a fatia de investimento em MFA despencou de 15% (2023) para faixas de um dígito baixo nas medições seguintes. O que muda o jogo não é uma tecnologia mágica — é governança de inventário.

Na prática, isso significa trabalhar com listas de inclusão (dizer onde a marca pode aparecer) em vez de só listas de exclusão (correr atrás de bloquear o lixo depois), reduzir drasticamente o número de sellers, exigir verificação independente e revisar os relatórios de domínios com olho crítico, não só o CPM.

## O Que Vem a Seguir

MFA é a prova mais concreta de que "alcance" sem qualidade é um número que engana. À medida que anunciantes brasileiros ganham acesso a dados de log e cobram transparência da cadeia, a pergunta deixa de ser "quantas impressões?" e passa a ser "quantas impressões que valem alguma coisa?".

Na South Media, o combate a MFA não é um extra: curadoria de inventário, verificação independente e a metodologia Double Check operam para garantir que a verba vá para ambiente onde existe público de verdade — não para páginas construídas só para consumir orçamento.

## Perguntas Frequentes

### O que são sites MFA?

Sites MFA (Made for Advertising) são páginas criadas para maximizar impressões e receita de anúncios, não para entregar conteúdo de valor. Costumam ter conteúdo raso, densidade excessiva de anúncios, autoplay e rolagem infinita, e existem para arbitrar tráfego barato em impressões pagas.

### Como identificar tráfego MFA em uma campanha?

Os sinais mais comuns são CTR muito alto com conversão baixíssima, muitos domínios desconhecidos no relatório, viewability excelente com tempo de permanência mínimo, e resultados que impressionam no dashboard mas não movem nenhum indicador de negócio.

### Sites MFA são fraude?

Não exatamente. Diferente de tráfego inválido puro, o MFA costuma entregar impressões "reais" que passam nos testes básicos de qualidade — o problema é que ninguém presta atenção nelas. É desperdício de baixa qualidade, mais do que fraude no sentido estrito.

### Como evitar sites MFA?

Com governança de inventário: listas de inclusão em vez de só exclusão, redução do número de sellers, curadoria de inventário, verificação independente e leitura crítica dos relatórios de domínios — olhando além do CPM baixo.`,
  },
  {
    id: 26,
    slug: "metricas-de-atencao-viewability",
    category: "Performance",
    title: "Métricas de Atenção: Por Que Viewability Não Prova Que Alguém Viu o Seu Anúncio",
    summary: "Métricas de atenção medem se o anúncio foi notado — não só se apareceu. Viewability prova oportunidade de ver, não atenção. Veja o que muda no seu plano.",
    date: "15 Jun 2026",
    readTime: "6 min",
    cover: "/blog/metricas-de-atencao.webp",
    author: "South Media",
    content: `## Métricas de Atenção vs. Viewability: Qual a Diferença?

Métricas de atenção medem se um anúncio foi de fato notado — quanto tempo ficou em foco, quanto do criativo esteve visível, se houve interação —, indo além da viewability. Viewability, pelo padrão do Media Rating Council (MRC), conta uma impressão como visível com apenas 50% dos pixels na tela por 1 segundo (display) ou 2 (vídeo): ela mede a **oportunidade de ver**, não a atenção. Um anúncio pode ser 100% viewable e nunca ter sido olhado por ninguém.

Viewability foi, por anos, o selo de qualidade da mídia programática. Se o anúncio ocupou pelo menos 50% da tela pelo tempo mínimo, a impressão era "viewable" — e o gestor respirava aliviado. O problema é que essa régua responde a uma pergunta muito menor do que a que importa.

Viewability mede oportunidade de ver. Não mede se alguém **viu**. Um anúncio pode cumprir 100% dos critérios de viewability num canto da tela, enquanto o usuário rola o feed, olha para outro dispositivo ou simplesmente não registra nada. A impressão foi entregue. A atenção, não.

## A Diferença Entre Aparecer e Ser Visto

Métricas de atenção tentam medir o que viewability ignora: quanto tempo o anúncio permaneceu em foco, qual proporção do criativo esteve visível, se houve interação, em que ambiente a exposição aconteceu. Em vez de um "sim/não" binário, produzem uma escala de qualidade da exposição.

O impacto prático é direto. Dois formatos com a mesma viewability podem ter valores de atenção completamente diferentes. Um vídeo em ambiente premium, com som ativo e tela cheia, entrega atenção que um banner viewable no rodapé de um site de baixa qualidade jamais entrega — mesmo que os dois apareçam "iguais" no relatório tradicional.

## Por Que Isso Vira Dinheiro

O estudo de transparência da ANA mostrou que, de cada dólar que entra numa plataforma de compra, historicamente apenas cerca de 36 centavos chegavam ao consumidor em mídia de qualidade — o resto se perdia em custos de intermediação e em inventário sem valor real. Boa parte desse desperdício mora exatamente em impressões que passam no teste de viewability mas não capturam atenção nenhuma.

**A impressão barata que ninguém vê é a mais cara que existe.**

Comprar por atenção, e não só por viewability, é uma forma de reconectar preço a qualidade num mercado onde, segundo o mesmo estudo, quase não existe correlação entre os dois.

## Como Aplicar Sem Virar Refém de um Único Fornecedor

Não existe uma métrica de atenção universal — há vários modelos, cada um com sua metodologia. O caminho responsável é usar atenção como **camada de qualificação** do inventário, cruzando o sinal de atenção com verificação independente de fraude e brand safety, e não como um número mágico isolado.

Na prática: priorizar formatos e ambientes que comprovadamente sustentam atenção, cortar o inventário que só entrega viewability vazia e medir o efeito disso no resultado de negócio — não só no dashboard de mídia.

## O Que Vem a Seguir

Atenção não substitui viewability; a torna insuficiente sozinha. À medida que o mercado brasileiro amadurece e cobra prova de resultado, a impressão "válida" deixa de ser a que apareceu e passa a ser a que foi, de fato, notada.

Na South Media, qualidade de exposição é tratada como filtro, não como enfeite de relatório: verificação independente e curadoria de inventário operam juntas para que a verba pague atenção real, não impressão fantasma.

## Perguntas Frequentes

### O que são métricas de atenção?

São indicadores que medem se um anúncio foi efetivamente notado: tempo em foco, proporção do criativo visível, interação e qualidade do ambiente de exposição. Em vez de um "sim/não", produzem uma escala de qualidade da impressão.

### Qual a diferença entre atenção e viewability?

Viewability mede se o anúncio teve a oportunidade de ser visto — segundo o MRC, 50% dos pixels por 1 segundo (display) ou 2 (vídeo). Atenção mede se ele foi de fato notado e por quanto tempo. Um anúncio pode ser 100% viewable e ter atenção próxima de zero.

### Métricas de atenção substituem a viewability?

Não substituem — a complementam. Viewability continua útil como piso para confirmar que o anúncio teve chance de aparecer. Atenção adiciona a camada que faltava: se a exposição valeu alguma coisa. Sozinha, a viewability se tornou insuficiente.

### Como medir a atenção de um anúncio?

Por sinais como tempo em foco, percentual do criativo visível, interação e o tipo de ambiente. Como não há métrica única de mercado, o mais seguro é usar atenção como camada de qualificação de inventário, cruzada com verificação independente de fraude e brand safety.`,
  },
  {
    id: 25,
    slug: "dooh-programatico-performance",
    category: "Programática",
    title: "DOOH Programático: Por Que a Tela de Rua Deixou de Ser Mídia de Branding e Virou Canal de Performance",
    summary: "DOOH programático ativa a tela de rua por audiência e contexto e atribui visita e conversão à exposição. O out-of-home deixou de ser apenas mídia de branding.",
    date: "9 Jun 2026",
    readTime: "7 min",
    cover: "/blog/dooh-programatico.webp",
    author: "South Media",
    content: `## O Que É DOOH Programático?

DOOH programático é a compra automatizada de telas digitais de rua, shopping, elevador, academia e ponto de venda, com segmentação por audiência e contexto e — o ponto que redefine a categoria — atribuição de resultado à exposição. É a mesma régua do digital aplicada ao out-of-home. O meio ganha força num país onde, segundo o Kantar Ibope Media (estudo Inside OOH), o out-of-home alcança 89% da população brasileira.

Durante décadas, o out-of-home foi comprado no escuro. A marca fechava um circuito de painéis, media alcance estimado e torcia para que a mensagem certa chegasse na pessoa certa. Funcionava para construir lembrança — mas não respondia à pergunta que todo diretor de marketing faz hoje: isso vendeu?

O DOOH (Digital Out-of-Home) programático quebrou essa lógica. Ao conectar telas digitais a uma infraestrutura de compra automatizada, o meio passou a operar com a mesma régua do digital: audiência, contexto, frequência controlada e mensuração de impacto real.

## O Que 'Programático' Muda Numa Tela de Rua

Comprar DOOH de forma programática não é simplesmente digitalizar o painel. É poder disparar (ou pausar) uma tela com base em condições: horário, clima, movimento de público, estoque de loja próxima, um jogo em andamento. A tela de um corredor de shopping pode exibir uma oferta diferente às 12h e às 19h, para perfis de fluxo distintos, sem renegociar contrato.

Mais importante: a exposição em tela agora entra no mesmo plano de dados das outras mídias. O celular que passou pela zona de cobertura daquele painel pode ser reconhecido, de forma anônima e agregada, na mensuração de visitas e conversões posteriores.

**A tela de rua não vai substituir nenhum canal — mas quem ainda a compra sem dado está pagando preço de performance por entrega de branding.**

## O Contexto Brasileiro Empurra o Meio Para Frente

Em 2026, o digital superou a TV aberta em investimento publicitário no Brasil pela primeira vez, segundo o Cenp: 38,3% da verba contra 31,3% da TV, num mercado que cresceu 18,3% só no primeiro trimestre. Essa migração não é um movimento de canal — é uma migração de **expectativa**. Quem move budget para o digital quer mensuração granular, e passa a cobrar o mesmo dos meios tradicionais.

O DOOH é o OOH que consegue responder a essa cobrança. Por isso é o segmento que mais cresce dentro do out-of-home e o que melhor se encaixa numa estratégia integrada com CTV, mobile e drive to store.

## Onde as Marcas Ainda Erram

O erro mais comum é tratar DOOH como "mídia de topo" isolada, sem plano de mensuração desenhado antes da campanha ir ao ar. Sem definir o que será medido — footfall incremental, alcance por audiência qualificada, sincronização com mobile —, a tela volta a ser comprada por alcance estimado, e todo o ganho do programático se perde.

O segundo erro é confundir cobertura com atenção. Uma tela vista de longe, por três segundos, no meio de uma avenida, não entrega o mesmo que uma tela em ambiente de espera, onde o público está parado e disponível. Planejar DOOH por qualidade de contexto — e não só por número de faces — é o que separa investimento de desperdício.

## O Que Vem a Seguir

A convergência entre DOOH, CTV e mobile aponta para um único plano de audiência atravessando telas de casa, de bolso e de rua, medido pela mesma régua de impacto.

Na South Media, DOOH entra no plano como canal mensurável desde o briefing: definição de audiência, sincronização com os demais meios e atribuição de resultado tratadas como parte do padrão de operação, não como relatório de fim de campanha.

## Perguntas Frequentes

### O que é DOOH programático?

É a compra automatizada de mídia em telas digitais fora de casa — rua, shopping, elevador, academia, ponto de venda — com segmentação por audiência, contexto e horário, além de mensuração de impacto. Aplica ao out-of-home a mesma lógica de dados do digital online.

### Qual a diferença entre DOOH e OOH tradicional?

O OOH tradicional usa mídia estática (outdoors, painéis) comprada por alcance estimado. O DOOH usa telas digitais com conteúdo dinâmico, que podem mudar por horário, clima ou fluxo. Quando comprado de forma programática, ganha ainda segmentação e mensuração.

### DOOH programático é mensurável?

Sim. Além do alcance por audiência qualificada, é possível medir footfall (visita ao ponto), sincronizar a exposição com o mobile e atribuir visitas e conversões de forma anônima e agregada. Por isso o DOOH passou a conversar com performance, e não só com branding.

### DOOH serve para performance ou para branding?

Para os dois. Ele mantém a força de lembrança do out-of-home e adiciona a camada de mensuração que permite tratá-lo como canal de performance — desde que o plano de medição seja definido antes da campanha ir ao ar, não depois.`,
  },
  {
    id: 24,
    slug: "trading-desk-adtech-manifesto-south-media",
    category: "Programática",
    title: "De Trading Desk a AdTech: O Que Muda Quando uma Empresa Para de Operar Plataformas e Começa a Construir Tecnologia",
    summary: "Trading desk opera plataformas de terceiros; AdTech desenvolve tecnologia própria. Entenda a diferença técnica e o que muda na escolha do parceiro de mídia.",
    date: "4 Jun 2026",
    readTime: "8 min",
    cover: "/blog/trading-desk-adtech-manifesto.webp",
    author: "South Media",
    content: `## Qual a Diferença Entre Trading Desk e AdTech?

Trading desk e AdTech são categorias diferentes do ecossistema programático. A trading desk presta serviço de operação de plataformas de terceiros (como The Trade Desk, DV360 e Xandr) e ganha na taxa de gestão; a AdTech desenvolve software próprio — como fazem, cada uma em seu nicho, DoubleVerify, IAS ou LiveRamp — e ganha com a propriedade da tecnologia. Para quem compra mídia, essa diferença muda o critério de seleção de parceiro.

No vocabulário do mercado brasileiro de mídia programática, "trading desk" e "AdTech" são tratados como sinônimos com frequência preocupante. Aparecem em apresentações comerciais como se fossem variações da mesma coisa, em propostas como se a diferença fosse semântica. Não é. São categorias estruturalmente diferentes no ecossistema programático, com modelos de negócio, fontes de margem e propostas de valor distintas. Para quem compra mídia, entender essa diferença não é purismo terminológico — é informação que muda critério de seleção de parceiro.

## O Que é Uma Trading Desk

Trading desk é uma empresa que presta serviço de planejamento e operação de campanhas programáticas em nome de anunciantes e agências. O insumo primário do trabalho é capital humano: profissionais que dominam a operação de DSPs de mercado — The Trade Desk, DV360, Xandr, MediaMath e outras — e otimizam campanhas dentro dessas plataformas.

A trading desk não desenvolve tecnologia. Ela opera tecnologia de terceiros com expertise. Sua margem vem da diferença entre o custo de mídia operado nas DSPs e o valor cobrado do cliente — geralmente como taxa de gestão sobre o investimento ou como markup sobre o CPM final. O valor agregado está na competência operacional: saber configurar leilões, escolher inventário, ajustar lances, montar audiências, ler relatórios e otimizar campanhas em tempo real.

Esse modelo democratizou o acesso à programática no Brasil. Antes das trading desks, comprar mídia em DSPs como The Trade Desk exigia contratos de seis dígitos e equipe interna capacitada — barreira intransponível para a maioria dos anunciantes. As trading desks resolveram isso ao agregar demanda de múltiplos clientes em contratos com as DSPs e diluir o custo de operação entre eles.

## O Que é Uma AdTech

AdTech é uma empresa de tecnologia aplicada a publicidade. Diferente da trading desk, a AdTech desenvolve software próprio — algoritmos, plataformas, ferramentas, APIs — que entregam funcionalidade específica no ecossistema programático. A fonte primária de valor é a propriedade intelectual da tecnologia, não a operação dela.

Existem AdTechs em vários nichos: verificação de viewability (Integral Ad Science, DoubleVerify), atribuição (LiveRamp, Neustar), identidade (The Trade Desk com Unified ID 2.0), brand safety (Moat), cleanrooms (InfoSum, Habu). Cada uma resolve um problema específico com tecnologia desenvolvida internamente. A margem vem de licenciamento, taxa por uso, integração via API ou prestação de serviço com a tecnologia própria embutida.

Uma AdTech pode operar como camada embarcada em DSPs, como ferramenta independente contratada pelo anunciante, ou como parte de uma operação integrada que combina tecnologia proprietária com operação de plataformas de mercado. O critério que define a categoria não é o modelo de distribuição, é a existência de tecnologia desenvolvida pela própria empresa.

## A Zona Cinzenta — e Por Que Ela Importa

Na prática brasileira, muitas empresas operam em zona cinzenta. Trading desks que desenvolveram algumas ferramentas internas começam a se chamar AdTech. AdTechs que prestam serviço operacional além de licenciar a tecnologia confundem o discurso. Esse cinza não seria problema se fosse comunicado com honestidade. O problema é que costuma vir embalado em alegações de "stack proprietária", "tecnologia 100% proprietária" ou "DSP própria" que não correspondem à realidade técnica.

Para o anunciante, a confusão tem custo. Pagar por uma trading desk pensando que está contratando uma AdTech significa esperar diferenciais tecnológicos que não existem. Pagar por uma AdTech como se fosse trading desk significa subutilizar a tecnologia que está embutida no serviço. Em ambos os casos, a decisão de compra fica distorcida.

## A Posição da South Media

A South Media nasceu como trading desk. Por anos, prestou serviço de operação de DSPs de mercado para anunciantes brasileiros, agregando expertise em planejamento, compra e otimização programática. Esse continua sendo parte do trabalho — operar com competência as melhores plataformas disponíveis no mercado é diferencial real, especialmente num cenário em que a maioria dos anunciantes brasileiros ainda não tem equipe interna capacitada para usar essas ferramentas.

O que mudou foi o desenvolvimento de **Anti-VPN Tech** — tecnologia proprietária da South Media para identificação e bloqueio em tempo real de tráfego originado de VPNs, proxies e data centers. Essa tecnologia não existe em DSPs de mercado de forma nativa. Ela foi construída internamente, é mantida internamente, e opera como camada adicional sobre as plataformas operadas pela empresa.

Anti-VPN Tech sozinha não faz da South Media uma AdTech no sentido pleno do termo — uma AdTech tipicamente tem múltiplas tecnologias proprietárias formando um portfólio. Mas marca uma diferença estrutural relevante: a South Media passou de operadora pura de tecnologia de terceiros para operadora que combina tecnologia de terceiros com camada proprietária própria. Essa é a transição de categoria que justifica chamar a empresa de AdTech híbrida — não trading desk pura, não AdTech no sentido pleno, mas operação que combina os dois modelos.

## Por Que Anti-VPN Tech É a Tecnologia Que Marca Essa Transição

A escolha por desenvolver Anti-VPN Tech em vez de outras tecnologias possíveis tem lógica de mercado. Tráfego de VPN é um problema estrutural da mídia programática brasileira que as DSPs de mercado não resolvem bem. Usuários conectados via VPN distorcem dados de geolocalização — uma campanha segmentada para São Paulo pode entregar impressões para dispositivos fisicamente em outros estados ou países. Em campanhas regionais ou em ações de drive to store, esse tráfego é desperdício direto de orçamento.

Existem ferramentas de mercado que tentam mitigar esse problema, mas operam principalmente pós-bid, depois que a impressão já foi paga. Anti-VPN Tech opera pré-bid: identifica e bloqueia o tráfego antes que ele entre no leilão. A diferença econômica é direta — investimento que não é desperdiçado em tráfego contaminado é investimento que fica disponível para impressões legítimas.

Essa é a lógica de uma tecnologia proprietária bem posicionada: resolve um problema real que não está sendo resolvido bem pelo ecossistema, opera em ponto da cadeia onde gera economia mensurável, e diferencia a operação da empresa em relação a competidores que dependem 100% de ferramentas de mercado.

## O Que Muda Para o Anunciante

A transição de trading desk para AdTech híbrida muda três coisas concretas para quem compra mídia:

**Composição da entrega.** Em vez de receber apenas a operação da DSP, o anunciante recebe a operação da DSP combinada com a camada Anti-VPN Tech. Isso significa que a precisão geográfica das campanhas é estruturalmente melhor — especialmente relevante em campanhas regionais, drive to store, e qualquer ação onde a geolocalização do impacto importa.

**Estrutura de custos.** Uma trading desk pura cobra geralmente sobre o investimento operado, com margem na taxa de gestão ou no markup. Uma AdTech híbrida pode estruturar precificação diferente porque parte do valor agregado não é serviço, é tecnologia. Isso permite modelos mais transparentes — separar o que é serviço operacional do que é uso de tecnologia proprietária.

**Critério de comparação.** Comparar trading desks entre si é comparar serviço — equipe, expertise, processo, atendimento. Comparar AdTech com trading desk é comparar serviço versus serviço-mais-tecnologia. São categorias diferentes, com propostas de valor diferentes, e o critério de seleção precisa reconhecer isso.

## A Honestidade Que o Mercado Precisa

Esse texto poderia ter sido escrito como peça de marketing celebrando uma transição comercial. Foi escrito como explicação técnica porque é isso que o mercado brasileiro de mídia programática precisa mais: clareza sobre o que cada empresa é, faz, e cobra.

**AdTech virou termo aspiracional que muita empresa usa sem corresponder.**

Trading desk virou rótulo que algumas empresas evitam como se fosse menor. Nenhuma das duas distorções ajuda quem está do outro lado da mesa decidindo onde colocar verba de mídia.

A South Media opera hoje como AdTech híbrida: combina operação especializada de tecnologias de mercado com a tecnologia proprietária Anti-VPN Tech. Chamar a coisa pelo nome correto é o primeiro passo para qualquer conversa séria sobre o que cada parceiro entrega no ecossistema.

## Perguntas Frequentes

### O que é uma trading desk?

É uma empresa que presta serviço de planejamento e operação de campanhas programáticas em plataformas de terceiros, como The Trade Desk, DV360 e Xandr. O valor está na competência operacional; a margem vem da taxa de gestão ou do markup sobre o investimento.

### O que é uma AdTech?

É uma empresa de tecnologia aplicada a publicidade, que desenvolve software próprio — algoritmos, plataformas, APIs — para resolver um problema específico do ecossistema. Diferente da trading desk, a fonte primária de valor é a propriedade intelectual da tecnologia, não a operação dela.

### Qual a diferença entre trading desk e AdTech?

A trading desk opera tecnologia de terceiros com expertise; a AdTech constrói tecnologia própria. Comparar as duas é comparar serviço com serviço-mais-tecnologia — categorias diferentes, com propostas de valor diferentes, que exigem critérios de seleção distintos.

### A South Media é trading desk ou AdTech?

A South Media opera hoje como AdTech híbrida: combina a operação especializada de plataformas de mercado com a tecnologia proprietária Anti-VPN Tech, desenvolvida e mantida internamente. Não é trading desk pura nem AdTech no sentido pleno — é a combinação honesta dos dois modelos.`,
  },
  {
    id: 23,
    slug: "retail-media-regional-vs-top-5",
    category: "Performance",
    title: "Retail Media Regional: Por Que Campanhas em Redes Médias Entregam ROAS Melhor que nas Top 5",
    summary: "Retail media regional costuma entregar ROAS melhor que as top 5: menos concorrência, dados mais limpos e audiência mais engajada. A matemática explica.",
    date: "2 Jun 2026",
    readTime: "7 min",
    cover: "/blog/retail-media-regional.webp",
    author: "South Media",
    content: `## Por Que Retail Media Regional Entrega ROAS Melhor Que as Top 5?

Retail media regional é a compra de mídia dentro de redes varejistas médias ou setoriais — supermercados regionais, marketplaces verticais, varejos especializados — em vez das cinco maiores plataformas nacionais. Em muitos cenários entrega ROAS superior ao das top 5 por três fatores estruturais: menos concorrência por inventário, audiência mais qualificada e dados mais limpos. Com retail media projetado para crescer mais de 14%, ignorar essa opção é deixar performance na mesa.

Existe uma suposição quase automática no planejamento de retail media brasileiro: se for investir, vai nas grandes. Mercado Livre, Amazon, Magalu, Americanas, Carrefour. As cinco maiores plataformas concentram a maior parte do investimento porque oferecem maior escala, dados mais robustos e ferramentas mais maduras. A lógica parece sólida. Os números, em campanhas bem desenhadas, costumam contar outra história.

Em verticais específicos, principalmente em ações regionais ou em categorias com forte presença de redes médias, **o ROAS em retail media de redes regionais ou setoriais frequentemente supera o das top 5 em margem significativa**. Não é casualidade nem outlier estatístico. É resultado de três fatores estruturais que vale entender antes do próximo plano de mídia.

## Fator 1: Concorrência por Espaço Publicitário

O leilão de inventário em uma plataforma como Mercado Livre é disputado por milhares de anunciantes simultaneamente. Cada slot premium — busca de cabeçalho, página de categoria, posicionamento de produto — tem dezenas de marcas competindo. O efeito é direto sobre o CPM: quanto maior a concorrência, maior o preço. CPCs em categorias quentes nas top 5 facilmente passam de R$3, R$5, R$8 em momentos de pico.

Numa rede regional ou setorial — uma rede de supermercados com forte presença em estado específico, um marketplace vertical de construção, um varejo especializado em eletrônicos — a concorrência por inventário é estruturalmente menor. Menos anunciantes disputam o mesmo slot, e o CPC consegue ficar significativamente abaixo do das top 5. Em alguns casos, a metade. Em verticais de nicho, pode ser ainda menos.

Para o anunciante, isso muda a aritmética do ROAS. Com o mesmo investimento, é possível obter mais cliques qualificados, mais impressões em posições premium, e maior frequência sobre a audiência relevante.

## Fator 2: Qualidade da Audiência

Audiência em rede regional ou setorial tem duas características que audiência de marketplace generalista não tem: **especificidade contextual** e **intenção concentrada**.

Um usuário navegando em um marketplace de construção está, com altíssima probabilidade, em modo de pesquisa de compra para essa categoria. Não está procurando entretenimento, não está em modo descoberta, não está clicando aleatoriamente. Está comparando, avaliando, decidindo. Anunciar produtos relacionados a construção para essa audiência tem taxa de conversão estruturalmente superior à mesma campanha rodada em um marketplace generalista, onde a mesma palavra-chave atrai tanto quem quer comprar quanto quem está apenas pesquisando preço por curiosidade.

A mesma lógica se aplica a redes regionais. Um consumidor que compra recorrentemente em uma rede de supermercados específica de Curitiba tem padrão de comportamento, ticket médio e categoria de produto razoavelmente previsíveis. Anunciar para essa audiência, especialmente em categorias afins, gera conversão em taxa superior à mesma audiência espalhada por uma rede nacional onde o sinal é diluído por variações regionais enormes.

## Fator 3: Dados Mais Limpos

A escala dos dados nas top 5 é massiva, mas isso não significa dados melhores. Significa dados mais. Quanto maior a base, mais ruído ela carrega: usuários inativos, contas duplicadas, comportamentos fragmentados, atribuição complicada por sessões em múltiplos dispositivos.

Redes regionais e setoriais tendem a ter bases proporcionalmente mais ativas — usuários que voltam, compram com frequência, e cujos padrões de comportamento estão claramente registrados. A audiência é menor em volume absoluto, mas mais densa em sinal. Para algoritmos de otimização programática, isso significa convergência mais rápida e ROAS mais estável.

Existe ainda um fator adicional: redes menores costumam ter políticas de compartilhamento de dados mais flexíveis e relacionamento comercial mais próximo com anunciantes médios. É possível construir audiências customizadas, integrar com sistemas próprios do anunciante e ativar campanhas com nível de personalização que as top 5 só oferecem para clientes de altíssimo investimento.

## Quando As Top 5 Continuam Sendo a Escolha Certa

Esse texto não defende que retail media regional substitui retail media nas top 5. Defende que **a alocação default — todo o investimento concentrado nas cinco maiores — não é a alocação ótima** para boa parte das verticais e dos objetivos comerciais.

Existem cenários onde as top 5 continuam sendo a escolha óbvia: marcas com distribuição nacional sem foco regional específico, categorias de altíssima recorrência onde a frequência sobre audiência massiva paga a conta, lançamentos que dependem de escala bruta para gerar awareness. Para esses cenários, a soma de inventário, dados e ferramentas das grandes plataformas justifica o investimento.

O ponto é que existem outros cenários — campanhas regionais, categorias verticais específicas, ações com objetivo de conversão direta em audiência qualificada — onde redes médias entregam mais ROAS pelo mesmo orçamento, e onde ignorar essa opção significa deixar performance na mesa.

## O Que Olhar Antes de Migrar Verba

Quem está considerando reorganizar a alocação entre top 5 e regional precisa avaliar quatro variáveis antes de decidir:

**Penetração da rede no público-alvo.** Uma rede regional só faz sentido se cobrir geograficamente a audiência relevante para o negócio. Anunciante com público concentrado em São Paulo capital pode encontrar redes regionais paulistas com penetração comparável às top 5 dentro daquela mesma geografia.

**Maturidade da plataforma de mídia da rede.** Nem toda rede média tem operação programática estruturada. Algumas oferecem apenas mídia editorial, outras oferecem programática mas com tecnologia limitada. É importante avaliar formatos disponíveis, granularidade de segmentação, qualidade dos relatórios e integração com DSPs de mercado.

**Possibilidade de orquestração com top 5.** A estratégia que melhor performa, em muitos casos, não é substituir as top 5 por regionais, é orquestrar as duas. Top 5 para alcance e descoberta, regionais para frequência e conversão em audiência qualificada. Para fazer isso, é necessário que a operação consiga sincronizar campanhas entre plataformas diferentes.

**Capacidade de mensuração unificada.** Comparar ROAS entre top 5 e regional só faz sentido se a mensuração for consistente. Métricas precisam ser calculadas com a mesma metodologia, atribuição precisa ser uniforme, e a leitura precisa considerar incrementalidade — quanto cada plataforma entregou de conversão que não teria acontecido sem ela.

## A Mudança de Mentalidade

O maior obstáculo para a adoção mais intensa de retail media regional não é técnico, é cultural. Existe a percepção de que anunciar nas top 5 é "default seguro" e anunciar em regional é "risco" ou "experimento".

**Os números, em muitos casos, mostram o oposto: o default seguro é onde a concorrência é máxima e a margem de retorno é menor; o experimento é onde o ROAS estrutural é melhor.**

Esse texto não pede que ninguém abandone as top 5. Pede que a alocação seja informada por matemática de retorno, não por hábito de mercado. Em 2026, com retail media projetado para crescer mais de 14% e ultrapassar a busca paga em poucos anos, deixar parte do orçamento em redes regionais e setoriais não é decisão arriscada. É decisão sofisticada.

## Perguntas Frequentes

### O que é retail media regional?

É a compra de mídia dentro de redes varejistas médias ou setoriais — supermercados regionais, marketplaces verticais, varejos especializados — em vez das cinco maiores plataformas nacionais. A proposta é aproveitar menos concorrência e audiência mais qualificada.

### Retail media regional tem ROAS melhor que as top 5?

Em muitos cenários, sim. Menos anunciantes disputando o mesmo inventário reduz o CPC, e a audiência costuma ter intenção mais concentrada, o que eleva a conversão. Não é regra universal, mas é comum em campanhas regionais e categorias de nicho.

### Quando as top 5 ainda são a melhor escolha?

Para marcas com distribuição nacional sem foco regional, categorias de altíssima recorrência que pagam a conta na frequência, e lançamentos que dependem de escala bruta para gerar awareness. Nesses casos, a soma de inventário e dados das grandes plataformas justifica o investimento.

### Como comparar ROAS entre top 5 e regional?

A comparação só é válida com mensuração consistente: mesma metodologia de métrica, atribuição uniforme e leitura que considere incrementalidade — quanto cada plataforma entregou de conversão que não teria acontecido sem ela.`,
  },
  {
    id: 22,
    slug: "in-game-ads-brasil-formato-em-ascensao",
    category: "Programática",
    title: "In-Game Ads: O Formato que Mais Cresce em CAGR no Brasil — e Que a Maioria dos Planos Ainda Ignora",
    summary: "In-game ads é o formato que mais cresce em CAGR no Brasil (14,6%), com 82,8% dos brasileiros jogando. Por que a maioria dos planos ainda ignora o canal.",
    date: "28 Mai 2026",
    readTime: "7 min",
    cover: "/blog/in-game-ads-brasil.webp",
    author: "South Media",
    content: `## O Que É In-Game Advertising e Por Que Cresce Tanto no Brasil?

In-game advertising é a veiculação de anúncios dentro de jogos digitais — nos formatos intrinsic, rewarded, interstitial e patrocínio de esports. No Brasil, é o formato que mais cresce: avaliado em US$ 285,4 milhões em 2026 e projetado para US$ 973 milhões em 2035, um CAGR de 14,6%. E a audiência é massiva: 82,8% da população joga jogos digitais, segundo a Pesquisa Game Brasil.

Quando o assunto é alocação de orçamento entre canais digitais em 2026, as conversas seguem um roteiro previsível: search, social, programática display, vídeo, CTV, retail media. A ordem varia, mas a lista é quase sempre essa. Um canal raramente entra no quadro, mesmo quando os dados sugerem que ele deveria estar em destaque: **in-game advertising**.

Os números do Brasil são contundentes. O mercado nacional de in-game advertising foi avaliado em **US$ 285,4 milhões em 2026** e projetado para chegar a **US$ 973 milhões em 2035** — um CAGR de 14,6%, taxa de crescimento acima da maioria dos outros canais publicitários. **82,8% dos brasileiros afirmam jogar jogos digitais**, com 51,7% preferindo o smartphone como plataforma principal. A audiência é massiva, está crescendo, e tem perfil demográfico que muitos anunciantes valorizariam em qualquer outro canal — mas que ainda subestimam quando o canal é jogo.

A pergunta que cabe é por que.

**E a resposta diz mais sobre o histórico do plano de mídia brasileiro do que sobre a qualidade do canal.**

## Por Que In-Game Continua Subestimado

Três percepções desatualizadas explicam parte da resistência:

**Percepção 1: "Audiência gamer é nichada e jovem demais."** Era verdade há quinze anos. Hoje, dados da Pesquisa Game Brasil mostram que **mulheres representam 53,2% dos jogadores** e a maior parte da audiência está na faixa entre 30 e 44 anos — exatamente o público de classe média com poder de compra que a maioria dos planos B2C tenta atingir. O estereótipo do adolescente do sexo masculino jogando no quarto não corresponde ao gamer médio brasileiro de 2026.

**Percepção 2: "Não é mensurável como outros canais."** Era parcialmente verdade até alguns anos atrás. Hoje, plataformas como Anzu, Frameplay, Bidstack e outras oferecem mensuração com indicadores comparáveis aos de display e vídeo programático — viewability, completion rate, frequency, brand lift. Ferramentas de verificação como IAS e DoubleVerify já operam dentro de jogos. A mensurabilidade deixou de ser problema estrutural; virou questão de seleção correta de fornecedor.

**Percepção 3: "Não tem inventário relevante no Brasil."** Era verdade quando o mercado dependia exclusivamente de inventário internacional. Hoje, os principais publishers de jogos mobile do Brasil — incluindo desenvolvedores nacionais e estúdios globais com forte penetração local — oferecem inventário programático integrado a DSPs de mercado, com segmentação geográfica e demográfica funcional.

As três percepções foram verdade em algum momento. Nenhuma corresponde à realidade do mercado em 2026.

## Os Formatos Que Importam

In-game advertising não é uma coisa só. Existem quatro categorias de formato, cada uma com lógica e aplicação distintas:

**Intrinsic in-game ads.** Anúncios nativos integrados ao ambiente do jogo — outdoors em estádios virtuais, banners em cenários urbanos, painéis dentro de simuladores. Não interrompem a jogabilidade, são percebidos como parte do mundo do jogo, e funcionam principalmente para branding e construção de marca. Têm completion rate altíssimo porque não dependem de atenção forçada — estão simplesmente lá enquanto o jogador joga.

**Rewarded video ads.** Vídeos opcionais que o jogador escolhe assistir em troca de recompensa no jogo — vida extra, moeda virtual, item desbloqueado. Performance excepcional em CTR e atenção porque o jogador opta ativamente por assistir. Em mobile, é o formato dominante em jogos free-to-play.

**Interstitial ads.** Anúncios full-screen que aparecem em pontos de transição do jogo — entre níveis, após uma derrota, em momentos de pausa. Combinam alto impacto visual com tempo de exposição relevante. Funcionam para conversão e branding.

**Esports e streaming sponsorships.** Não é exatamente in-game no sentido estrito, mas pertence ao ecossistema. Patrocínio de equipes, eventos, streamers e canais de gaming. Tem lógica diferente da compra programática — é mais próximo de mídia de conteúdo do que de inventário. Mas é parte do cálculo total quando se discute como anunciar para audiência gamer.

## Por Que A Aritmética de Atenção Favorece In-Game

Existe um argumento técnico que costuma surpreender quem nunca rodou campanha em jogo: **a atenção em ambiente de gaming é estruturalmente maior do que em outros ambientes digitais**.

Em um portal de notícias, o usuário scrolla rápido, divide atenção entre múltiplas abas, e o anúncio compete com o conteúdo. Em redes sociais, o feed é infinito e a próxima coisa interessante está sempre a um swipe de distância. Em vídeo programático fora do CTV, o skip button está sempre presente.

Em um jogo, especialmente em mobile, a atenção do usuário está concentrada em uma única tela, em uma única tarefa, por períodos prolongados. Não existe scroll, não existe aba ao lado, não existe distração imediata. Quando um anúncio aparece — seja intrinsic, rewarded ou interstitial — ele entra num campo de atenção pré-construído pelo próprio formato do meio.

Os dados de brand lift confirmam isso. Estudos comparativos entre canais mostram que campanhas em ambiente gaming geram **recall de marca consistentemente superior** a campanhas equivalentes em display ou social — frequentemente em margem de 30% a 50%.

## O Que Muda no Briefing Quando In-Game Entra

Incluir in-game advertising no plano de mídia não é apenas adicionar um canal a mais. Muda elementos do briefing que normalmente são fixados antes da seleção de canais:

**Criativo.** Anúncio que funciona bem em display ou vídeo padrão raramente funciona em in-game. Intrinsic ads precisam respeitar a estética do jogo. Rewarded ads precisam ter mensagem entregue rápido e gancho claro. Interstitials precisam de impacto visual imediato. É necessário produção criativa específica para o formato.

**Mensuração.** O KPI principal muda. Em in-game intrinsic, a métrica relevante não é CTR — é viewability e atenção. Em rewarded video, é completion rate e ação pós-anúncio. Tentar avaliar in-game pelo mesmo KPI que se avalia display de portal leva a leitura distorcida.

**Compra.** A operação programática em in-game é tecnicamente diferente da operação em outros canais. Inventário é mais fragmentado, as integrações com DSPs variam por publisher, e a segmentação tem particularidades de mobile que não se aplicam a desktop ou CTV. É necessário que o operador conheça as especificidades.

## A Janela de Oportunidade

Existe um argumento de timing que reforça a tese: **o mercado brasileiro de in-game advertising está num momento estrutural específico** — grande o suficiente para ter inventário, ferramentas e mensuração maduras, mas ainda pequeno o suficiente para que a concorrência por inventário premium seja baixa em comparação com outros canais.

Esse é o ponto em que CPMs ficam estruturalmente abaixo do que estariam num cenário maduro. Anunciantes que entram agora pagam menos por impressão e desenvolvem expertise interna enquanto o canal cresce. Anunciantes que entrarem em 2028 ou 2029, quando o mercado tiver triplicado conforme as projeções, vão pagar CPMs proporcionalmente maiores e competir com base instalada já estabelecida.

Não significa que todo anunciante precisa colocar 20% do orçamento em in-game amanhã. Significa que avaliar a inclusão do canal — testar, mensurar, calibrar — é decisão que deve estar na pauta do planejamento de 2026, não adiada para quando o canal "amadurecer". Ele já amadureceu o suficiente para entrar no plano. Continuar tratando como tendência é, na prática, deixar de capturar uma janela competitiva que está claramente aberta agora e que vai fechar.

## Perguntas Frequentes

### O que é in-game advertising?

É a veiculação de anúncios dentro de jogos digitais. Inclui formatos intrinsic (integrados ao cenário), rewarded video (opcionais, com recompensa), interstitial (em transições) e patrocínios de esports e streaming.

### In-game ads é mensurável?

Sim. Plataformas de in-game oferecem indicadores comparáveis aos de display e vídeo — viewability, completion rate, frequência e brand lift — e ferramentas de verificação já operam dentro dos jogos. A mensurabilidade deixou de ser barreira estrutural.

### Quem é o público de jogos no Brasil?

Bem mais amplo que o estereótipo. Segundo a Pesquisa Game Brasil, mulheres representam 53,2% dos jogadores e boa parte da audiência está na faixa de 30 a 44 anos — justamente o público de classe média com poder de compra que a maioria dos planos B2C busca.

### Vale a pena investir em in-game ads agora?

O mercado já é grande o suficiente para ter inventário e mensuração maduros, mas ainda pequeno o bastante para que a concorrência por inventário premium seja baixa. Isso mantém o CPM estruturalmente abaixo do que será quando o canal crescer conforme as projeções para 2035.`,
  },
  {
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
  },
  {
    id: 20,
    slug: "geofencing-inteligente-vs-generico",
    category: "Dados",
    title: "Geofencing Inteligente vs. Geofencing Genérico: Como Configurar Raio, Dwell Time e Exclusão",
    summary: "Geofencing inteligente depende de três decisões: raio, dwell time e exclusão. No padrão genérico, viram desperdício. Guia operacional para configurar bem.",
    date: "21 Mai 2026",
    readTime: "6 min",
    cover: "/blog/geofencing-inteligente.webp",
    author: "South Media",
    content: `## Geofencing Inteligente vs. Genérico: Qual a Diferença?

Geofencing é a técnica de impactar dispositivos com base na localização em relação a um ponto de interesse — uma loja, um concorrente, um evento. A diferença entre o geofencing que gera ROAS e o que queima verba está em três decisões técnicas: raio, dwell time e exclusão. Configuradas por padrão genérico, elas transformam uma ferramenta de precisão em desperdício.

Geofencing virou commodity. A maioria das DSPs de mercado oferece a funcionalidade, a maioria das plataformas de mídia regional anuncia que faz, a maioria dos briefings menciona como se fosse simples. Configurar um raio em volta de uma loja, exibir anúncio para quem entrar, medir visitas. Parece resolvido. Não é.

A diferença entre uma campanha de geofencing que entrega ROAS e uma campanha de geofencing que queima orçamento está em três decisões técnicas que poucos parceiros explicam com clareza ao briefar com cliente. Raio, dwell time, exclusão. Cada uma dessas variáveis, configurada por padrão genérico, transforma uma ferramenta de precisão em uma ferramenta de desperdício. Configuradas com critério, fazem geofencing ser o que ele se propõe a ser: a forma mais precisa de impactar audiência fisicamente próxima de um ponto de interesse.

## Decisão 1: Raio

O parâmetro mais discutido e o pior compreendido. A pergunta padrão no briefing é "quantos metros de raio?", e a resposta padrão é algum número entre 100 e 500. Quase sempre errada por dois motivos: ignora o contexto físico do ponto e ignora a categoria do anunciante.

**Contexto físico importa porque raio não é circunferência ideal**. Um raio de 200m em torno de uma loja em rua comercial movimentada pode incluir três quadras inteiras, um shopping vizinho, e dezenas de outros pontos de interesse não relacionados. O dispositivo entra no raio porque está no Mc Donald's ao lado, não porque está vindo para a loja. O sistema marca como "entrada no geofence" e o anúncio é entregue. Desperdício.

O mesmo raio de 200m em torno de um ponto isolado — uma concessionária em via expressa, uma loja em condomínio fechado — captura quase exclusivamente quem está se aproximando da loja propositalmente. Mesmo parâmetro, dois resultados completamente diferentes.

**Categoria do anunciante também muda o cálculo**. Para varejo de conveniência (farmácia, supermercado, fast food), raio menor (50-150m) funciona porque a decisão de compra acontece em circulação próxima. Para varejo de consideração (eletrônicos, vestuário, móveis), raio maior (300-1.000m) funciona porque o consumidor planeja a visita e se desloca propositalmente. Para drive to store de longa distância (concessionárias, hipermercados regionais), raio pode passar de 2km, capturando o trajeto de aproximação, não apenas a chegada.

**A configuração inteligente não é "qual raio ideal" — é "qual raio para essa loja, nesse contexto, nessa categoria, nesse momento da jornada do consumidor".**

## Decisão 2: Dwell Time

Variável menos discutida e mais crítica. Dwell time é o tempo mínimo que o dispositivo precisa permanecer dentro do raio para ser considerado uma "entrada qualificada" — alguém que efetivamente foi até o ponto, não alguém que apenas passou pela frente.

Sem dwell time configurado, ou configurado em zero, o sistema marca como entrada qualquer dispositivo que cruzou o raio, mesmo por dois segundos enquanto passava de carro. O resultado é uma audiência inflada com pessoas que nunca tiveram intenção real de visitar — e quando essa audiência recebe anúncio de drive to store, o ROAS despenca porque a base é em grande parte irrelevante.

Configurações funcionais variam por categoria:

**Conveniência (drive to store curto):** dwell time de 60 a 120 segundos. Tempo suficiente para entrar na loja, escolher item, sair. Filtra quem só passou pela frente.

**Consideração (varejo médio):** dwell time de 5 a 10 minutos. Tempo necessário para uma visita real de pesquisa, comparação, conversa com vendedor.

**Alta consideração (concessionária, imobiliária, eletrônicos de alto valor):** dwell time de 15 minutos ou mais. Visita real para essas categorias dificilmente dura menos que isso.

**Excluindo deslocamentos:** quando o ponto está próximo de via de tráfego intenso, faz sentido configurar dwell time mais alto mesmo para conveniência, para filtrar carros que passam no semáforo em frente à loja.

## Decisão 3: Exclusão

A decisão menos óbvia e a mais impactante em qualidade de campanha. Sem listas de exclusão configuradas, o geofencing captura audiências contaminadas que distorcem todos os resultados subsequentes.

**Exclusão de funcionários.** Quem trabalha na loja entra no geofence todos os dias, várias horas por dia. Sem exclusão, esses dispositivos aparecem como "visitas" recorrentes, inflando métricas de footfall e desperdiçando impressões em pessoas que já são consumidoras forçadas do ponto. Resolver isso exige excluir dispositivos com padrão de presença diária prolongada.

**Exclusão de residentes adjacentes.** Vizinhos do estabelecimento aparecem no geofence apenas por morarem ao lado, não por terem interesse no negócio. Em geofences urbanos pequenos, essa contaminação pode chegar a 20% ou mais da audiência identificada. Filtros baseados em padrão de presença noturna prolongada (dispositivo no local entre 22h e 6h regularmente) ajudam a identificar e excluir essa contaminação.

**Exclusão de pontos vizinhos.** Quando há outro estabelecimento dentro ou próximo do raio do geofence — um restaurante ao lado da loja, um banco em frente — o sistema pode estar capturando entradas no vizinho como se fossem entradas no ponto correto. Em campanhas críticas, vale segmentar o geofence por entrada específica do estabelecimento, não por circunferência genérica em torno do endereço.

## A Integração Com Tecnologia Proprietária

Geofencing precisa de dois tipos de input para funcionar: dados de localização (de onde os dispositivos estão) e qualidade de identificação (que dispositivos esses dados representam de fato). O primeiro tipo é oferecido por diversas fontes de dados de localização. O segundo depende de filtros adicionais para garantir que o sinal não está sendo contaminado por tráfego sintético.

A tecnologia proprietária **Anti-VPN Tech** da South Media opera como filtro adicional nesse segundo ponto: identifica e bloqueia, em tempo real, dispositivos conectados via VPN, proxy ou data center — fontes comuns de localização forjada que distorcem geofencing especialmente em campanhas regionais. Sem essa camada, um geofence em Curitiba pode estar entregando impressões para dispositivos cuja localização registrada é Curitiba mas que estão fisicamente em outro estado, mascarados por VPN. Com a camada, esse tráfego é eliminado antes de entrar no leilão, e o geofence opera com dados mais limpos.

## A Lógica Operacional Que Separa

A diferença entre geofencing inteligente e geofencing genérico não está em ferramentas exóticas ou em tecnologia inacessível. Está em três decisões de configuração que demandam conhecimento do contexto físico, da categoria comercial, e dos padrões de uso da audiência.

Geofencing genérico configura raio default, dwell time zero, sem listas de exclusão. Roda. Entrega impressões. Mostra números no relatório. ROAS fica abaixo do esperado e ninguém entende por quê.

Geofencing inteligente configura raio calibrado por contexto, dwell time apropriado à categoria, exclusões aplicadas antes do início da campanha. Roda. Entrega menos impressões em volume bruto. Entrega ROAS estruturalmente superior porque a audiência impactada é qualificada de verdade.

Para o anunciante avaliando proposta de campanha baseada em localização, o teste é simples: pergunte ao fornecedor como ele vai configurar cada uma dessas três variáveis para sua campanha específica. Se a resposta for "raio padrão de 200m e pronto", a campanha já começou perdida. Se a resposta envolver análise do contexto físico de cada ponto, decisão fundamentada de dwell time por categoria, e listas de exclusão ativas, está conversando com quem sabe operar a ferramenta.

## Perguntas Frequentes

### O que é geofencing?

É a técnica de impactar dispositivos com base na sua localização em relação a um ponto de interesse — uma loja, um concorrente, um evento. Quando alguém entra no perímetro definido, pode receber o anúncio; depois, mede-se a visita.

### Qual raio usar no geofencing?

Não existe raio único: depende do contexto físico do ponto e da categoria. Conveniência pede raio menor (50–150m); consideração pede maior (300–1.000m); drive to store de longa distância pode passar de 2km. O erro é aplicar um número padrão para tudo.

### O que é dwell time no geofencing?

É o tempo mínimo que o dispositivo precisa permanecer no perímetro para contar como visita qualificada. Sem dwell time, o sistema conta quem só passou pela frente, inflando a audiência com gente sem intenção real de visitar.

### Por que usar listas de exclusão no geofencing?

Para tirar da base quem contamina o dado: funcionários que entram todo dia, vizinhos que só moram ao lado e pontos comerciais próximos capturados por engano. Sem exclusão, as métricas de footfall vêm infladas por presença que não é cliente.`,
  },
  {
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
  },
  {
    id: 18,
    slug: "o-que-footfall-nao-mede",
    category: "Dados",
    title: "O Que Footfall NÃO Mede — e Por Que Isso Importa Pro Próximo Relatório de Campanha",
    summary: "Footfall mede presença — não intenção nem compra — e depende de amostra. Saiba o que a métrica NÃO capta antes do próximo relatório de drive to store.",
    date: "14 Mai 2026",
    readTime: "6 min",
    cover: "/blog/footfall-limitacoes.webp",
    author: "South Media",
    content: `## O Que Footfall Mede — e o Que Não Mede?

Footfall é a métrica que atribui visitas a um ponto de venda físico a uma campanha digital, reconhecendo de forma anônima e agregada dispositivos que foram expostos ao anúncio e depois entraram na loja. Mas ela mede presença — não intenção, não compra — e trabalha sobre uma amostra de dispositivos, projetada estatisticamente. Ler o número sem entender o que ele não capta é confundir indicador com prova.

Quando mensuração de footfall ganhou maturidade no Brasil, mudou a forma como anunciantes com lojas físicas pensam mídia digital. Pela primeira vez, era possível atribuir visitas ao ponto de venda a uma campanha programática — fechar o loop entre investimento digital e resultado físico, algo que durante décadas dependeu de inferência ou de pesquisa pós-campanha.

A consequência é que footfall virou número estrela em relatórios de drive to store. Aparece em capas de apresentação, em manchetes de case, em peças de marketing institucional. O problema é que, na maioria das vezes, vem sem o contexto de o que a métrica efetivamente mede e o que ela não mede. E nas zonas de "não mede" estão decisões de plano de mídia que ficam distorcidas quando se acredita que footfall é mais preciso do que é.

Esse texto não tem objetivo de desmerecer footfall como métrica. É ferramenta legítima e útil. O objetivo é mapear as limitações estruturais para que quem lê o relatório possa interpretar o número pelo que ele significa — não pelo que ele aparenta significar.

## Limitação 1: Footfall Mede Presença, Não Intenção

A métrica registra quando um dispositivo móvel entra no perímetro do ponto de venda após ter sido exposto à campanha. Não registra por quê. E essa distinção tem peso.

Quem foi à loja porque viu o anúncio? Quem foi à loja porque já ia, e o anúncio só aconteceu de ser exibido antes? Quem foi à loja porque é vizinho e passa por lá todo dia? Footfall agrupa os três grupos no mesmo número, e o resultado é uma métrica que inclui muito ruído de visitas que aconteceriam sem a campanha.

A correção para isso existe — chama-se análise de **incrementalidade**, com grupo de controle. Compara-se a taxa de visita do grupo exposto com a taxa de visita de um grupo de controle não exposto, e a diferença estatisticamente significativa é o que pode ser atribuído à campanha. Mas essa análise é mais complexa do que reportar footfall bruto, e muitos relatórios apresentam apenas o número total sem o filtro de incrementalidade.

**Implicação para leitura:** quando o relatório mostra "12.000 visitas atribuídas à campanha", a pergunta seguinte deveria ser "quantas dessas visitas seriam visitas mesmo sem a campanha?" Sem grupo de controle, a resposta é não-respondida — e o número bruto, sozinho, superestima o impacto real.

## Limitação 2: Footfall Depende de Cobertura de Dados de Localização

A medição funciona quando o dispositivo do consumidor está fornecendo dados de localização para algum dos sistemas que alimentam a base de footfall — apps com permissão de localização ativa, redes de coleta de dados, integrações específicas. Quando não está, a visita não é detectada.

Significa que footfall captura uma **amostra**, não a totalidade das visitas. Em metrópoles brasileiras, a cobertura é razoável — algo entre 30% e 60% dos dispositivos da audiência total. Em cidades médias ou pequenas, a cobertura é menor. Em áreas rurais ou em públicos demográficos com menor uso de apps com localização, a cobertura cai mais ainda.

O número reportado é então uma **projeção estatística** baseada na amostra detectada — não a contagem real de visitas. Em muitos casos, é projeção bem-feita. Em alguns casos, é projeção sobre amostra pequena demais para ser estatisticamente robusta.

**Implicação para leitura:** o relatório de footfall deveria indicar o tamanho da amostra detectada e a metodologia de projeção. Sem essas informações, "12.000 visitas" pode significar "detectamos 4.500 visitas reais e projetamos 12.000" ou "detectamos 11.800 visitas reais e projetamos 12.000". Os dois cenários têm credibilidade muito diferente.

## Limitação 3: Footfall Não Reconhece Compra

Visita à loja não é compra. Em alguns negócios, a correlação é altíssima — para fast food, drogaria, padaria, a maioria das visitas se converte em compra. Em outros negócios, a correlação é baixa — para concessionária, móveis, eletrônicos, alta proporção das visitas é apenas pesquisa, comparação ou consulta, sem conversão imediata.

**Footfall trata os dois casos da mesma forma.**

Conta a visita, sem qualificar o resultado da visita.

Para campanhas em categorias de alta consideração, isso cria distância entre o KPI reportado (footfall) e o KPI de interesse real (vendas). Uma campanha pode entregar footfall excelente e vendas medianas porque o consumidor visitou, comparou e foi comprar em outro lugar — algo que footfall, sozinho, não detecta.

**Implicação para leitura:** em categorias de consideração, footfall precisa estar conectado a dados de venda do anunciante para fechar a leitura. Sem essa integração, o número fica solto, indicando atividade mas não resultado.

## Limitação 4: Footfall Pode Ser Contaminado por Tráfego Não-Cliente

Em pontos de venda em áreas de alto fluxo — shopping center, rua comercial movimentada, esquina movimentada — o footfall captura todos os dispositivos que entram no perímetro do ponto. Mas "entrar no perímetro" não significa necessariamente "entrar na loja". Em um ponto dentro de shopping, alguém passando no corredor a 5 metros da porta pode ser registrado como visita. Em um ponto em rua, alguém esperando o ônibus na porta pode ser registrado como visita.

Há filtros que mitigam isso — configuração de dwell time (tempo mínimo dentro do perímetro), refinamento de perímetro para incluir só a área da loja efetivamente, exclusão de dispositivos com padrão de presença incompatível com cliente. Mas esses filtros precisam ser explicitamente configurados. Quando não são, o footfall vem inflado por presença que não é cliente.

**Implicação para leitura:** a precisão geográfica do perímetro definido na campanha importa tanto quanto o algoritmo de detecção. Perímetro mal configurado gera footfall inflado, que parece sucesso mas é ruído.

## A Camada Que Anti-VPN Tech Adiciona

Existe ainda uma camada de contaminação que poucos relatórios discutem: tráfego de VPN. Dispositivos conectados via VPN registram localização baseada no servidor de saída, não na localização física real. Em algumas análises de footfall, isso aparece como "visitas fantasma" — dispositivos cuja localização registrada coincide com o perímetro do ponto, mas que estão fisicamente em outro lugar.

A tecnologia proprietária Anti-VPN Tech filtra esse tráfego pré-bid, antes que ele entre na base de impressões da campanha. O efeito é duplo: reduz desperdício de impressão para dispositivos com localização forjada e, na mensuração subsequente de footfall, elimina o ruído de visitas fantasma que distorceria o número. Em campanhas regionais, esse filtro pode mudar materialmente o footfall reportado — para menos, em volume bruto, mas para mais, em precisão.

## Como Ler Um Relatório de Footfall

Quatro perguntas separam relatório honesto de relatório que vende ilusão:

**Existe grupo de controle?** Se não, o número é footfall bruto, sem incrementalidade. Útil como indicador de atividade, insuficiente como medida de efetividade da campanha.

**Qual o tamanho da amostra detectada?** Se a amostra é pequena, a projeção carrega incerteza estatística que precisa ser comunicada. Footfall sobre amostra de 5% da audiência impactada tem margem de erro grande.

**Como o perímetro foi configurado?** Perímetro genérico em torno do endereço pode estar capturando tráfego que nada tem a ver com a loja. Perímetro refinado, com dwell time apropriado, gera número mais limpo.

**Tráfego contaminado por VPN foi filtrado?** Em campanhas regionais especialmente, esse filtro muda significativamente a precisão do dado.

Footfall continua sendo a melhor ferramenta disponível para medir impacto de mídia digital em ponto físico. Não é perfeita, e nunca foi apresentada como perfeita por quem entende a métrica. O problema é que entrou no vocabulário corporativo como se fosse perfeita, e relatórios passaram a ser apresentados como prova quando deveriam ser apresentados como indicador. Reconhecer as limitações não enfraquece o uso — fortalece, porque permite que a métrica seja interpretada pelo que ela efetivamente significa.

## Perguntas Frequentes

### O que é footfall?

É a métrica que atribui visitas a um ponto de venda físico a uma campanha digital, reconhecendo de forma anônima e agregada dispositivos que foram expostos ao anúncio e depois entraram na loja. Fecha o loop entre investimento digital e resultado físico.

### O que o footfall não mede?

Não mede intenção (quem já ia à loja aparece igual), não mede compra (visita não é conversão) e não capta quem está fora da amostra de localização. O número é uma projeção estatística, não a contagem real de todas as visitas.

### Footfall prova que a campanha funcionou?

Sozinho, não. Sem grupo de controle não há incrementalidade — parte das visitas aconteceria mesmo sem a campanha. Footfall é um bom indicador de atividade, mas vira prova de efetividade só quando comparado a um grupo não exposto.

### Como ler um relatório de footfall com criticidade?

Perguntando se há grupo de controle, qual o tamanho da amostra detectada, como o perímetro foi configurado e se o tráfego contaminado por VPN foi filtrado. Sem essas respostas, o número aparenta mais precisão do que tem.`,
  },
  {
    id: 17,
    slug: "retail-media-passar-busca-paga-2028",
    category: "Programática",
    title: "Retail Media Vai Passar Busca Paga Até 2028 — O Anunciante Brasileiro Está Pronto?",
    summary: "Retail media deve ultrapassar a busca paga até 2028, com alta de 14,1% em 2026. O Brasil ainda opera com gap entre on-site maduro e off-site incipiente.",
    date: "12 Mai 2026",
    readTime: "7 min",
    cover: "/blog/retail-media-busca-paga.webp",
    author: "South Media",
    content: `## Retail Media Vai Ultrapassar a Busca Paga?

Retail media é a mídia comprada dentro dos ambientes de varejistas — busca patrocinada, display e audiências construídas a partir de dados reais de compra. Com crescimento projetado de 14,1% em 2026, deve ultrapassar a busca paga até 2028 e se firmar como a terceira via dominante do digital, ao lado de social e search. No Brasil, o on-site já é maduro, mas o off-site ainda é incipiente.

Por mais de uma década, a hierarquia do investimento publicitário digital seguiu padrão estável: search no topo (Google dominante), social em segundo (Meta e mais recentemente TikTok), display programático em terceiro. Essa ordem definiu como anunciantes pensavam alocação, como agências estruturavam equipes, como plataformas competiam por orçamento.

Em 2026, essa hierarquia está sendo reorganizada. **Retail media projeta crescimento de 14,1% no ano** — taxa significativamente acima da maioria dos outros canais — e relatórios de mercado convergem para a mesma projeção: até 2028, retail media deve ultrapassar busca paga em volume de investimento, consolidando-se como **a terceira via dominante do digital**, ao lado de social e search.

Para o anunciante brasileiro, essa não é projeção distante. É movimento estrutural que já está acontecendo, e a pergunta operacional não é "se" retail media vai ser linha relevante do orçamento, mas "quando" e "em qual estágio de maturidade". A resposta varia muito por anunciante, e o gap entre o que está acessível e o que está sendo aproveitado define quem vai colher resultado em 2026 e quem vai entrar correndo em 2027 ou 2028.

## O Que Explica o Crescimento Acelerado

Três fatores estruturais sustentam o crescimento de retail media globalmente, e cada um tem expressão específica no Brasil:

**O fim da soberania do cookie de terceiros pressiona migração para dados de primeira parte.** Embora o Google tenha decidido manter cookies de terceiros no Chrome, a tendência geral do mercado é redução de dependência desse mecanismo. Dados de primeira parte de varejistas — quem comprou o quê, quando, com que recorrência — são fonte estruturalmente mais confiável e privacy-friendly. Anunciantes que valorizam targeting baseado em comportamento real de compra encontram em retail media a alternativa mais direta.

**Convergência entre awareness e conversão.** Plataformas de retail media não vendem só posicionamento no momento da compra (busca dentro do site). Vendem também display em portais do varejista, audiências para extensão off-site, integração com CTV. Isso transformou o canal de "ferramenta de fundo de funil" em "rede integrada que cobre da consideração à conversão" — algo que poucos canais oferecem com a mesma fluidez.

**Maturidade tecnológica das plataformas.** Em 2020, comprar mídia em Mercado Livre era operação rústica. Em 2026, é programática madura, com self-service, leilão em tempo real, criativos dinâmicos, mensuração granular. Os principais varejistas brasileiros — Mercado Livre, Amazon Brasil, Magalu, Americanas, Carrefour — investiram pesado em capacidade tecnológica, e o resultado é experiência operacional comparável às DSPs de mercado mainstream.

## O Gap Brasileiro: On-Site Maduro, Off-Site Incipiente

A diferença mais relevante entre o estado de retail media no Brasil e em mercados mais maduros — Estados Unidos, Reino Unido — está na proporção entre **on-site** (anunciar dentro do site/app do varejista) e **off-site** (usar dados do varejista para anunciar fora dele).

No Brasil, on-site é dominante. Anunciantes que investem em retail media o fazem majoritariamente em busca patrocinada dentro de marketplaces, em display em páginas de categoria, em destaques em página de produto. Esse uso é maduro, escala bem, e gera ROAS competitivo. É o que a maior parte dos planos brasileiros entende como "retail media".

Off-site é onde está o gap. A possibilidade de usar dados de quem comprou no Mercado Livre para anunciar em portais de notícias, em CTV, em programática display — explorando audiências baseadas em comportamento real de compra — é tecnicamente possível, é oferecida pelas principais plataformas, mas é subutilizada pela maioria dos anunciantes brasileiros.

A razão é mais cultural do que técnica. Off-site exige integração entre dois mundos que historicamente operavam separados: o time que cuida do varejista (e-commerce, marketplace) e o time que cuida da programática (mídia digital, agências). Sem essa integração, oportunidades estruturais ficam paradas — o anunciante paga por busca no Google para alcançar gente que já comprou produto dele no Mercado Livre, em vez de usar essa audiência diretamente.

## In-Store: O Terceiro Sabor Ainda Mais Subexplorado

Existe um terceiro estágio do ecossistema de retail media — **in-store** — que mal aparece no vocabulário brasileiro: mídia no ponto físico do varejista. Telas dentro de loja, áudio nos corredores, dados de comportamento de quem efetivamente comprou (em vez de só clicou ou visualizou).

Nos Estados Unidos, in-store retail media é segmento em crescimento acelerado, com Walmart, Target e Kroger construindo redes de mídia integradas que vendem tanto o digital quanto o presencial. No Brasil, a discussão ainda é embrionária. Algumas redes começaram a estruturar oferta de mídia em loja, mas a integração com a operação digital de retail media é parcial, e a possibilidade de fechar o loop completo — anúncio digital que leva à loja física que mensura comportamento na compra — ainda está em construção.

Para o anunciante de 2026, isso significa duas coisas: o in-store brasileiro ainda não é canal totalmente acessível para programática, mas está em rota de maturação, e quem se preparar agora vai estar melhor posicionado quando a oferta amadurecer.

## O Que Brand Awareness Tem A Ver Com Retail Media

**Uma percepção persistente no mercado é que retail media serve para conversão, não para construção de marca.**

Essa percepção está cada vez mais desatualizada.

Plataformas como Amazon Brasil e Mercado Livre oferecem inventário de **display em página inicial, vídeo em destaque de categoria, posicionamento em campanhas sazonais** — formatos com lógica de awareness, não de busca. A diferença em relação a anunciar awareness em portal de notícias é que o anunciante está construindo marca no mesmo ambiente em que o consumidor compra. A distância entre exposição à marca e oportunidade de compra é menor do que em qualquer outro canal.

Isso muda o cálculo de incrementalidade. Brand lift em campanha de awareness em portal mede percepção daqui a alguns dias, talvez semanas. Brand lift em retail media é, em parte, comportamento de compra observado nas semanas seguintes — algo mensurável diretamente pelos dados do varejista.

## A Capacitação Que Falta

O fator que mais limita o crescimento de retail media no Brasil em 2026 não é tecnologia, é capacitação. As plataformas existem, as ferramentas funcionam, os dados estão disponíveis. O que falta, na maior parte das operações de anunciante, é equipe que entenda como integrar retail media ao restante do plano de mídia de forma orquestrada.

Operacionalmente, retail media exige times com perfil híbrido: conhecimento de e-commerce (para entender comportamento de compra e ROAS), conhecimento de programática (para integrar com display e CTV), conhecimento de search (para otimizar busca patrocinada dentro do varejista). Poucos profissionais têm os três simultaneamente, e poucas agências têm estrutura que combine as três disciplinas sob a mesma operação.

Anunciantes que vão liderar em retail media no Brasil até 2028 são, em grande parte, aqueles que estão investindo em capacitação interna ou em parceiros com a perspectiva integrada **agora** — não em 2027.

## A Pergunta Que Cabe Em 2026

Retail media não é mais aposta. É realidade em consolidação que vai redefinir parte significativa do orçamento digital nos próximos dois a três anos. A pergunta que cabe é onde cada anunciante está nessa curva.

Anunciantes em estágio inicial — fazendo apenas search patrocinada dentro de marketplaces — estão capturando uma fração do valor que o canal oferece. Anunciantes em estágio intermediário — combinando on-site com algumas iniciativas off-site — estão alinhados com o que o mercado está fazendo em média. Anunciantes em estágio avançado — operando on-site, off-site e começando a explorar in-store, com integração entre equipes de e-commerce e programática — estão se preparando para liderar quando o canal completar a transição para terceiro pilar dominante.

A transição vai acontecer com ou sem cada anunciante específico. Quem estiver pronto colhe mais. Quem não estiver entra correndo no meio do movimento, com desvantagem competitiva. 2028 está mais perto do que parece.

## Perguntas Frequentes

### O que é retail media?

É a mídia comprada dentro dos ambientes de varejistas — busca patrocinada e display no site/app, além de audiências construídas a partir de dados reais de compra. Aproxima a exposição da marca do momento em que o consumidor decide comprar.

### Retail media vai ultrapassar a busca paga?

Segundo as projeções de mercado, sim — com crescimento estimado de 14,1% em 2026, retail media deve passar a busca paga até 2028 e se firmar como a terceira via dominante do digital, ao lado de social e search.

### Qual a diferença entre retail media on-site, off-site e in-store?

On-site é anunciar dentro do site do varejista; off-site é usar os dados do varejista para anunciar fora dele (portais, CTV, programática); in-store é a mídia no ponto físico. No Brasil, o on-site é maduro, o off-site é incipiente e o in-store ainda está em construção.

### Retail media serve só para conversão?

Não. As plataformas já oferecem formatos de awareness — display em home, vídeo em destaque de categoria — no mesmo ambiente em que o consumidor compra. Isso encurta a distância entre a exposição à marca e a oportunidade de compra.`,
  },
  {
    id: 16,
    slug: "brand-safety-vs-brand-suitability",
    category: "Programática",
    title: "Brand Safety vs. Brand Suitability: A Diferença Que Ninguém Explica Direito",
    summary: "Brand safety evita ambiente perigoso para qualquer marca; brand suitability define o que é adequado para a sua. Veja a diferença e como reportar as duas.",
    date: "7 Mai 2026",
    readTime: "6 min",
    cover: "/blog/brand-safety-suitability.webp",
    author: "South Media",
    content: `## Qual a Diferença Entre Brand Safety e Brand Suitability?

Brand safety e brand suitability resolvem problemas diferentes. Brand safety é a camada universal: impede que o anúncio apareça em conteúdo perigoso ou ilegal — violência explícita, discurso de ódio, pirataria — e vale para qualquer anunciante. Brand suitability é a camada específica: define o que é adequado para aquela marca, naquela campanha, e varia por categoria e contexto. O benchmark de mercado para brand safety é acima de 95% das impressões em ambiente safe; abaixo disso, há problema de configuração.

No vocabulário operacional de mídia programática, **brand safety** e **brand suitability** aparecem com frequência nas mesmas frases, nas mesmas apresentações comerciais, nas mesmas seções de relatório. Costumam ser tratados como variações da mesma coisa — uma versão mais sofisticada do outro, talvez. Não são. São conceitos distintos que resolvem problemas diferentes, e confundir os dois leva a configurações de campanha que ou pecam por excesso (bloqueiam inventário que poderia ser usado) ou por falta (deixam passar conteúdo que não combina com a marca).

A diferença é simples de explicar e tem implicação concreta em todas as campanhas programáticas. Vale o esforço de fixar conceitualmente porque, a partir dessa distinção, decisões de configuração de DSP, escolha de ferramentas e estrutura de relatório ficam mais claras.

## Brand Safety: O Que Nenhuma Marca Quer Estar Perto

Brand safety é o conjunto de categorias de conteúdo que **nenhuma marca, em circunstância alguma, quer ter anúncio associado**. É proteção em base universal — independe da marca específica, independe do produto, independe da campanha.

A lista é razoavelmente padronizada na indústria: violência explícita, conteúdo sexual gráfico, terrorismo, fake news, discurso de ódio, atividades ilegais, pirataria. Nenhuma categoria razoável de anunciante quer aparecer em sites ou ao lado de conteúdo que se enquadre nessas categorias. O risco reputacional é universal: independentemente do produto ou da marca, o consumidor que vê o anúncio em ambiente assim associa a marca com o ambiente — e o impacto é negativo.

Ferramentas de brand safety — DoubleVerify, Integral Ad Science, Moat, e outras — operam com listas e classificações de conteúdo construídas para identificar e bloquear esses ambientes antes que a impressão seja entregue. A operação é binária: ambiente é classificado como seguro ou não, e o anúncio é veiculado ou não.

**Para o anunciante, brand safety é proteção mínima**. Não é diferencial competitivo, é requisito básico. Operar campanhas programáticas sem brand safety ativo é operar com risco que nenhum gestor competente aceita.

## Brand Suitability: O Que Essa Marca Específica Quer ou Não Quer Estar Perto

Brand suitability é o conjunto de categorias de conteúdo que **uma marca específica decide que não combina com sua identidade ou estratégia**, mesmo quando o conteúdo é "seguro" no sentido universal.

A lista é particular de cada marca. Uma marca de seguros pode decidir que não quer aparecer em conteúdo de esportes radicais — não porque o conteúdo seja inseguro, mas porque a mensagem da marca (proteção, prevenção, cautela) destoa do ambiente. Uma marca infantil pode decidir que não quer aparecer em conteúdo sobre política — não porque seja inseguro, mas porque o público da marca não é o público que consome esse tipo de conteúdo. Uma marca de produtos veganos pode decidir que não quer aparecer em conteúdo de churrascaria — por consistência, não por segurança.

Nenhum desses ambientes é "brand unsafe" no sentido universal. São perfeitamente apropriados para a maioria dos anunciantes. Mas não combinam com a marca específica em questão. Brand suitability é o que customiza a configuração de cada marca.

A operação não é binária — é gradual. Algumas marcas operam com listas amplas de exclusão (excluem dezenas de categorias por questão de tom ou consistência), outras operam com listas curtas (excluem apenas o que tem incompatibilidade clara). Algumas usam inclusion lists (especificam o que querem) em vez de exclusion lists (especificam o que não querem). Ferramentas modernas permitem configurar suitability em vários níveis de granularidade.

## A Confusão Que Aparece No Operacional

A confusão entre os dois conceitos aparece com frequência em duas situações operacionais:

**Briefing genérico sem definição de suitability.** Cliente pede "brand safety" e a operação configura apenas o padrão universal. Resultado: a marca está protegida contra o inaceitável, mas continua aparecendo em ambientes que não combinam com sua identidade. Cliente reclama do posicionamento, operador alega que "brand safety estava ativo". Os dois têm razão dentro do que entenderam — e o gap é exatamente entre safety e suitability.

**Suitability tratada como restrição extra de safety.** Algumas operações empilham camadas de exclusão sob a rubrica de "brand safety reforçado", quando na verdade estão configurando suitability sem chamar pelo nome. O efeito é que a marca acaba com lista de exclusão enorme, perde alcance significativo, e o relatório final mostra entrega muito abaixo do esperado. Sem entender a diferença entre safety (que deve ser ativada com critério padrão) e suitability (que deve ser calibrada para a marca específica), a configuração fica ou cega ou exagerada.

## Como Configurar Cada Camada

Para campanhas programáticas em 2026, a configuração funcional separa as duas camadas:

**Brand safety: ativar com configuração de mercado padrão.** Ferramentas como DoubleVerify e IAS oferecem perfis pré-configurados que cobrem as categorias universais de proteção. Para a maioria das campanhas, esse padrão é suficiente. Exceções existem para verticais sensíveis (saúde, infantil, financeiro) que podem exigir configuração mais conservadora — mas mesmo nesses casos, a customização é incremental, não substituição.

**Brand suitability: definir a partir da marca, não da ferramenta.** Antes de configurar a ferramenta, precisa existir definição editorial do que combina e do que não combina com a marca. Essa definição vem do briefing, da estratégia de marca, do posicionamento — não do operador da DSP. Sem essa definição, suitability é improvisada e mal calibrada.

**Inclusion lists ou exclusion lists?** A escolha depende do que faz mais sentido para a marca. Marcas com universo de afinidade bem definido (público específico, tema específico) funcionam melhor com inclusion list — especificar onde quer estar é mais eficiente do que listar todos os lugares que não quer. Marcas com posicionamento mais amplo funcionam melhor com exclusion list — listar exceções é mais eficiente do que tentar mapear o universo positivo.

## A Implicação Para Relatório

Um relatório de campanha programática bem estruturado reporta as duas camadas separadamente:

**Métrica de brand safety:** percentual de impressões entregues em ambiente safe. O benchmark de mercado é acima de 95%; abaixo disso indica problema na configuração.

**Métrica de brand suitability:** percentual de impressões entregues em ambiente que se enquadra nas regras de suitability da marca específica. O benchmark varia — depende de quão restritiva é a configuração — mas o ideal é ter a métrica explicitamente reportada, não diluída em "brand safety amplo".

**Quando o relatório só mostra "brand safety: 96%", ele responde apenas a metade da pergunta relevante.**

A outra metade é "do que foi entregue em ambiente safe, quanto se enquadrou nos critérios específicos da marca?". Essa segunda métrica é o que separa proteção genérica de configuração calibrada.

## O Que Olhar No Próximo Plano

Para o gestor de mídia que vai estruturar campanhas em 2026, três pontos práticos vêm da distinção entre os dois conceitos:

A definição de suitability precisa estar no briefing. Sem ela, a configuração vira improviso operacional. A definição não é trabalho da agência ou do operador — é trabalho do anunciante, em conjunto com quem cuida da marca. Sem alinhamento, o resultado fica desencontrado independentemente da qualidade da operação técnica.

A ferramenta sozinha não resolve. DoubleVerify, IAS e outras são ferramentas excelentes, mas operam a partir do que é configurado. Configuração ruim com ferramenta cara entrega resultado ruim por preço alto. A inteligência está no critério de configuração, não no nome da ferramenta no relatório.

E suitability evolui. O que combina com a marca hoje pode não combinar daqui a um ano, dependendo de como a marca se posiciona, como o ambiente muda, como o público responde. Revisar listas periodicamente é parte da operação. Brand safety, sendo universal, exige menos revisão; suitability, sendo específica, exige atualização contínua.

Brand safety e brand suitability não são variações do mesmo conceito. São camadas complementares de uma proteção de marca que precisa operar em dois níveis — universal e específico — para entregar o que cada campanha promete.

## Perguntas Frequentes

### O que é brand safety?

É a camada de proteção que impede o anúncio de aparecer em conteúdo perigoso ou ilegal — violência explícita, discurso de ódio, pirataria, desinformação. É universal: vale para qualquer anunciante, independentemente de categoria.

### O que é brand suitability?

É a camada que define o que é adequado para uma marca específica, em uma campanha específica. Um conteúdo pode ser perfeitamente seguro e ainda assim inadequado para aquela marca naquele momento — por tom, contexto ou proximidade temática.

### Qual a diferença entre brand safety e brand suitability?

Brand safety é binário e universal: o ambiente é seguro ou não é. Brand suitability é contextual e proprietária de cada marca: o ambiente é seguro, mas combina com o que a marca quer comunicar? Uma protege de risco; a outra protege de contexto.

### Qual o benchmark de brand safety em uma campanha?

O mercado trabalha com acima de 95% das impressões entregues em ambiente considerado safe. Percentuais abaixo disso indicam problema de configuração, e não apenas variação natural de inventário.`,
  },
  {
    id: 15,
    slug: "upfront-brasileiro-ctv-negociacao-inventario",
    category: "CTV",
    title: "O Upfront Brasileiro de CTV: Como Negociar Inventário Num Mercado Que Ainda Não Tem Regra Clara",
    summary: "O upfront de CTV no Brasil não tem ritual fixo, mas PMP já é rota dominante. Veja quando estruturar deals com publishers compensa e quando o open auction basta.",
    date: "5 Mai 2026",
    readTime: "7 min",
    cover: "/blog/upfront-ctv-brasil.webp",
    author: "South Media",
    content: `## Como Negociar Inventário no Upfront Brasileiro de CTV?

Upfront é a negociação antecipada de inventário, fechada antes do período de veiculação em troca de preço e garantia de entrega. No Brasil, o upfront de CTV ainda não tem o ritual fixo do modelo americano, mas as rotas de negociação estruturada já existem e funcionam: o PMP (marketplace privado) é hoje a rota dominante para anunciantes médios e grandes, com publishers como Globoplay, Pluto TV Brasil e Samsung TV Plus. A regra prática é que, acima de R$ 200-300 mil por ano em CTV, estruturar PMPs compensa.

Nos Estados Unidos, upfront é instituição. Toda primavera, os principais publishers de TV e streaming organizam apresentações para anunciantes, fecham compromissos antecipados de investimento para a temporada seguinte, e definem boa parte do mercado em rituais que se repetem há décadas. É previsível, é estruturado, e o resto do ano opera dentro do que foi negociado no upfront.

No Brasil, esse modelo nunca existiu na TV linear no mesmo formato — e está sendo construído em CTV no que dá pra chamar de **modelo híbrido**, com elementos do upfront americano, elementos da prática brasileira de negociação direta, e elementos novos que surgem da natureza programática do canal. Para o anunciante que vai colocar volume relevante em CTV em 2026, entender as três rotas de negociação disponíveis é o que define se está pagando preço de mercado ou prêmio desnecessário.

## Rota 1: Open Auction (Leilão Aberto)

A rota mais simples e a mais cara. Em open auction, o inventário de CTV é leiloado em tempo real para qualquer comprador qualificado que esteja participando do leilão. A DSP do anunciante coloca lance, o publisher recebe os lances, e o maior lance vence o slot.

Operacionalmente, essa rota tem três vantagens claras: não exige negociação prévia, permite acesso amplo a múltiplos publishers simultaneamente, e funciona bem para campanhas de menor escala ou de necessidade pontual. É a rota natural para anunciantes que estão testando o canal, fazendo ações tácticas curtas, ou que não têm volume suficiente para justificar negociações estruturadas.

A desvantagem é financeira. Em open auction, o anunciante paga o **CPM marginal** — o preço que o publisher consegue extrair quando o inventário é vendido para o lance mais alto disponível naquele momento. Em CTV, com demanda alta e oferta limitada, esse CPM tende a ficar elevado. Em muitos casos, 30% a 50% acima do que o mesmo publisher cobra em rotas negociadas.

Para campanhas pontuais ou de teste, open auction faz sentido.

**Para campanhas com volume comprometido ao longo do ano, é a rota mais cara possível.**

## Rota 2: Private Marketplace (PMP)

A segunda rota envolve negociação prévia entre anunciante (ou parceiro de mídia) e publisher para acesso a inventário com condições pré-definidas. PMP funciona via **deal ID** — um identificador específico no leilão que conecta o anunciante a inventário negociado, com regras (preço mínimo, audiência, formato, frequência) acordadas antecipadamente.

Em PMP, o inventário continua sendo leiloado, mas o leilão é restrito a um conjunto definido de compradores qualificados. Isso reduz a concorrência por slot, e o CPM efetivo tende a ser estruturalmente menor do que em open auction — em muitos casos, entre 15% e 30% mais baixo para inventário equivalente.

Para o publisher, PMP oferece previsibilidade. Para o anunciante, oferece acesso priorizado a inventário que faria sentido em open auction mas pagaria prêmio. A negociação prévia geralmente envolve compromisso mínimo de investimento — não precisa ser milionário, mas precisa ser substantivo o suficiente para justificar o esforço de estruturação do deal.

Em 2026, PMP é a rota dominante para anunciantes médios e grandes em CTV no Brasil. Publishers como Globoplay, Pluto TV Brasil, Samsung TV Plus, e plataformas de streaming com inventário programático operam programas estruturados de PMP, com diferentes níveis de comprometimento e diferentes condições de preço.

## Rota 3: Programmatic Guaranteed

A rota mais negociada e a mais segura, em termos de garantia de entrega. Em programmatic guaranteed, o publisher se compromete a entregar um volume específico de impressões em condições específicas, e o anunciante se compromete a pagar o valor acordado. Não há leilão — é compra direta, com a eficiência operacional da programática mas com a previsibilidade de uma compra tradicional.

Programmatic guaranteed faz sentido em três cenários: **campanhas com janela crítica de entrega** (lançamento de produto, sazonalidade definida, eventos), **compromissos de longo prazo com publishers prioritários** (acordo anual com um publisher relevante), e **acesso a inventário premium escasso** (programação específica, conteúdo de alto valor, eventos ao vivo).

O CPM em programmatic guaranteed costuma ser próximo ao de PMP — não estruturalmente mais barato, mas mais previsível. A vantagem é eliminar a incerteza de entrega: o publisher garante o volume, e a operação não fica refém de variações de leilão.

A desvantagem é flexibilidade. Programmatic guaranteed tem cláusulas mais rígidas, ajustes são mais difíceis, e a operação é menos dinâmica. Não é adequado para campanhas que precisam de muitos pivots em tempo real.

## A Decisão Que Define o Custo

Para anunciantes que vão investir volume relevante em CTV no Brasil em 2026, a decisão entre as três rotas tem impacto financeiro direto. Investir tudo em open auction significa pagar prêmio sobre cada impressão. Estruturar mix entre PMP e programmatic guaranteed, com open auction como complemento residual, significa pagar CPM efetivo significativamente menor para volume equivalente.

A regra prática que funciona: **se o investimento anual em CTV ultrapassa R$ 200-300 mil**, vale o esforço de estruturar PMPs com os 3-5 publishers mais relevantes para a audiência da marca. Abaixo disso, open auction continua sendo viável. Acima de R$ 1 milhão anual, faz sentido considerar programmatic guaranteed para parte do investimento, especialmente em janelas críticas.

A construção desses deals não acontece automaticamente. Exige interação com os times comerciais dos publishers, definição clara de condições, integração técnica entre DSP e os deal IDs. É operação que demanda capacidade técnica — não funciona em "auto-piloto" como open auction.

## A Pressão De 2026: Copa e Eleições

Existe um fator conjuntural que muda o cálculo de upfront em 2026: a Copa do Mundo da FIFA e as eleições presidenciais. Ambos os eventos elevam estruturalmente o investimento publicitário ao longo do ano, e o efeito em CTV é particularmente intenso porque o canal cresce em adoção e em demanda simultaneamente.

Para anunciantes que não atuam em categorias diretamente ligadas a esses eventos, o efeito é negativo: a competição por inventário aumenta, os CPMs sobem, e anunciantes que não negociaram condições antecipadamente pagam o prêmio do aquecimento de mercado. Para anunciantes que fizeram homework — estruturaram PMPs, fecharam programmatic guaranteed em janelas críticas — o impacto é mitigado.

O ensinamento é direto: em ano com eventos estruturais, esperar para negociar quando a demanda já está aquecida é decisão cara. **Quem negociou em janeiro chega em outubro com preço; quem negocia em setembro paga 30% a mais**.

## Como Estruturar A Negociação

Para o anunciante que vai estruturar a operação de CTV em 2026, quatro pontos práticos definem o resultado:

**Identifique os publishers prioritários.** A maioria das audiências brasileiras se concentra em um número limitado de publishers de CTV. Mapear quais são os 5-7 mais relevantes para o público da marca, e concentrar negociação neles, é mais eficiente do que tentar PMPs com vinte publishers simultaneamente.

**Estabeleça volume realista por publisher.** PMPs funcionam quando o compromisso é substantivo. Volumes muito pequenos não justificam estruturação do deal para o publisher e acabam recebendo condições próximas ao open auction. Concentrar verba em menos publishers, com volume maior em cada, tende a gerar melhor condição comercial.

**Negocie janela, não apenas preço.** A melhor condição financeira em PMP costuma vir acompanhada de compromisso de janela — investimento distribuído ao longo do ano, não concentrado em um trimestre. Publishers valorizam previsibilidade, e estruturas anuais com distribuição mensal funcionam melhor do que ondas concentradas.

**Mantenha open auction como complemento.** Mesmo com PMPs estruturados, parte do investimento deve continuar em open auction para flexibilidade tática. A proporção ideal varia, mas algo como 70-80% em rotas negociadas e 20-30% em open auction equilibra previsibilidade e flexibilidade.

O upfront brasileiro de CTV ainda não tem o ritual fixo do americano, mas o mercado já amadureceu o suficiente para que as rotas de negociação estruturada existam e funcionem. Anunciantes que tratam CTV como pilar de investimento em 2026 e ainda operam 100% em open auction estão pagando prêmio significativo por não terem dedicado o esforço de estruturar o que outros publishers e parceiros já oferecem como prática estabelecida.

## Perguntas Frequentes

### O que é upfront em mídia?

É a negociação antecipada de inventário, feita antes do período de veiculação, em que o anunciante compromete volume e recebe em troca preço melhor e garantia de entrega. É prática consolidada em TV e em formação no CTV brasileiro.

### Qual a diferença entre open auction e PMP?

No open auction, o inventário é leiloado para todo o mercado, e o anunciante paga o CPM marginal — o preço do lance mais alto disponível naquele momento. No PMP, o leilão é restrito a compradores qualificados, o que reduz a concorrência por slot e tende a baixar o CPM efetivo.

### Quando vale a pena estruturar PMP em CTV?

A regra prática é o volume: acima de R$ 200-300 mil de investimento anual em CTV, vale o esforço de estruturar deals com os 3-5 publishers mais relevantes para a audiência da marca. Abaixo disso, o custo operacional da negociação tende a não se pagar.

### Devo abandonar o open auction depois de fechar PMPs?

Não. Mesmo com PMPs estruturados, parte do investimento deve continuar em open auction para flexibilidade tática — algo em torno de 70-80% em deals e o restante em leilão aberto é uma proporção comum.`,
  },
  {
    id: 14,
    slug: "retail-media-on-site-off-site-in-store",
    category: "Programática",
    title: "On-Site, Off-Site e In-Store: O Guia Honesto Pra Quem Ainda Confunde os Três Sabores de Retail Media",
    summary: "Retail media on-site, off-site e in-store são três canais distintos sob o mesmo rótulo. Entenda o que muda em dados, inventário e alocação de verba entre eles.",
    date: "30 Abr 2026",
    readTime: "6 min",
    cover: "/blog/retail-media-tres-sabores.webp",
    author: "South Media",
    content: `## Qual a Diferença Entre Retail Media On-Site, Off-Site e In-Store?

Retail media tem três modalidades sob o mesmo rótulo. On-site é o anúncio dentro do site ou app do varejista, próximo ao momento da decisão. Off-site usa os dados de compra do varejista para impactar o consumidor fora dele — em display, vídeo, CTV e programática. In-store é a mídia dentro da loja física. Em mercados mais maduros, a alocação começa a se organizar em torno de 40-50% on-site, 30-40% off-site e 10-20% in-store.

Quando alguém fala em "retail media" no mercado brasileiro, normalmente está falando de uma das três coisas — sem deixar claro qual. As três têm em comum a presença de varejistas no ecossistema publicitário, mas operam com lógicas técnicas, mensurações e racionais comerciais bastante distintos. Quem confunde as três acaba alocando orçamento de maneira que parece retail media mas opera como qualquer outro canal — sem capturar o que cada modalidade efetivamente entrega.

Esse texto é descrição operacional dos três sabores. Não é técnico-pesado, não tem agenda comercial específica, e tem objetivo claro: depois de ler, o gestor de mídia deve conseguir, ao ouvir alguém falar em "retail media", perguntar com confiança qual dos três sabores está em discussão — e tomar decisões melhores em cada um.

## Sabor 1: On-Site Retail Media

A modalidade mais óbvia e a primeira que aparece quando alguém pensa em retail media. **On-site é anunciar dentro do ambiente próprio do varejista** — busca patrocinada dentro do Mercado Livre, banner na página inicial do Magalu, destaque de produto em categoria do Americanas, anúncio em vídeo na Amazon Brasil.

A lógica é simples: o consumidor está dentro do varejista com intenção de compra. O anúncio aparece exatamente nesse contexto, geralmente próximo ao momento da decisão. A audiência é qualificada por definição — não é necessário targeting sofisticado para garantir que quem está vendo é potencial comprador, porque o ambiente já filtrou isso.

**O que on-site retail media entrega bem:**
- Conversão direta em ambiente de alta intenção
- Posicionamento competitivo (estar acima ou ao lado dos concorrentes)
- Dados de comportamento de compra em tempo real
- Mensuração fechada (impressão → clique → compra no mesmo ambiente)

**O que on-site NÃO entrega:**
- Alcance massivo fora da base de usuários do varejista
- Awareness em audiência que ainda não está pensando na categoria
- Construção de marca em contextos editoriais ou de entretenimento
- Atribuição em vendas fora do canal específico

Para muitas marcas, on-site retail media é a primeira (e por vezes única) modalidade que fazem. É natural — é onde está a conversão visível. Mas tratar isso como "estamos fazendo retail media" subutiliza significativamente o potencial do canal.

## Sabor 2: Off-Site Retail Media

A modalidade mais sofisticada e a menos compreendida no Brasil. **Off-site é usar os dados de primeira parte do varejista para anunciar FORA do ambiente do varejista** — em portais de notícias, em CTV, em programática display, em redes sociais. O varejista funciona como provedor de audiência, não como ambiente de mídia.

A lógica é diferente da on-site. Em vez de impactar o consumidor enquanto ele está dentro do marketplace, off-site impacta o consumidor ao longo do dia, em qualquer ambiente digital que ele navegue. O diferencial está nos dados que definem quem é impactado: padrões reais de compra, frequência de compra, ticket médio, recência.

**Esses dados são mais precisos do que qualquer modelagem de behavioral targeting porque vêm de comportamento efetivo, não de inferência.**

**O que off-site retail media entrega bem:**
- Alcance amplo de audiência qualificada por comportamento real de compra
- Reimpacto programático de quem comprou (ou abandonou carrinho) no varejista
- Audience extension em CTV, display e vídeo com dados de primeira parte
- Mensuração de impacto cross-canal (anúncio fora do varejista → compra dentro)

**O que off-site NÃO entrega:**
- Conversão imediata no momento do anúncio (a compra acontece em outro momento)
- Posicionamento competitivo dentro do varejista (isso é on-site)
- Inventário próprio do varejista (off-site usa inventário externo)

A pegadinha do off-site é que, operacionalmente, parece com programática padrão. O anúncio é entregue em CTV, display, vídeo — o mesmo inventário que qualquer DSP de mercado oferece. A diferença está nos dados que definem o targeting. E essa diferença é grande: estar entregando display em portal de notícias para "homens 25-45 com interesse em tecnologia" é uma coisa. Estar entregando o mesmo display, no mesmo portal, para "pessoas que compraram smartphone na Amazon Brasil nos últimos 90 dias" é outra completamente diferente.

No Brasil, off-site retail media ainda é subutilizado. As principais plataformas oferecem a capacidade — Mercado Livre Ads, Amazon Ads, Magalu — mas a integração entre o time que cuida do varejista (e-commerce) e o time que cuida da programática (mídia digital) raramente acontece de forma estruturada nos anunciantes brasileiros. O resultado é que oportunidade fica parada.

## Sabor 3: In-Store Retail Media

A modalidade mais recente e a menos madura no Brasil. **In-store é mídia no ponto físico do varejista** — telas dentro da loja, áudio nos corredores, displays nas gôndolas, integração com comportamento real de compra detectado por sensores.

A lógica é fechar o loop completo: anúncio digital, decisão online, visita à loja, impacto adicional in-store, conversão. É a única modalidade que opera fisicamente no momento exato em que o consumidor está com produto na mão.

**O que in-store retail media entrega bem:**
- Impacto no momento crítico de decisão final
- Dados de comportamento físico (caminho percorrido, tempo em gôndola, conversão)
- Sinergia com campanhas digitais (audiência impactada digitalmente é mensurada in-store)
- Posicionamento em ambiente sem concorrência externa de outras marcas no mesmo segundo

**O que in-store NÃO entrega:**
- Escala para anunciantes sem distribuição física no varejista
- Targeting individualizado preciso (a granularidade é menor que digital)
- Mensuração imediata em tempo real como em digital
- Acessibilidade para anunciantes que não têm relação comercial estabelecida com o varejista

Nos Estados Unidos, Walmart Connect, Target Roundel e Kroger Precision Marketing são exemplos consolidados de operação in-store integrada. No Brasil, redes como Carrefour, Pão de Açúcar e algumas outras estão construindo capacidade nessa modalidade, mas a maturidade ainda é incipiente. A oferta existe; a integração com operação digital programática ainda está em fase de estruturação.

Para o anunciante de 2026, in-store retail media é canal que vale acompanhar e começar a testar em escala limitada — não substitui on-site ou off-site, mas complementa de forma única.

## A Decisão De Alocação

Para uma marca que vai estruturar investimento em retail media de forma completa, a alocação entre os três sabores depende do estágio de cada uma e do objetivo da campanha:

**Fundo de funil (conversão direta):** dominância de on-site. O consumidor está no ambiente de decisão, o anúncio capta no momento crítico, a conversão é mensurada no mesmo canal.

**Meio de funil (consideração e reimpacto):** dominância de off-site. O consumidor já mostrou interesse mas não decidiu; reimpactar com base em comportamento real é estruturalmente mais eficiente do que com base em modelagem comportamental.

**Topo de funil (awareness em audiência qualificada):** off-site também é a melhor escolha. Construir alcance entre pessoas que efetivamente compram na categoria é mais eficiente do que alcance amplo sem qualificação.

**Conversão física (drive to store em rede do varejista):** combinação de off-site (para impactar antes da visita) com in-store (para fechar a decisão no ponto). Os dois funcionam juntos.

A alocação típica em mercados maduros varia, mas algo na ordem de **40-50% on-site, 30-40% off-site, 10-20% in-store** começa a ser comum em anunciantes que operam retail media com sofisticação. No Brasil, a distribuição atual é geralmente 80-90% on-site, 10-15% off-site, 0-5% in-store — o que indica espaço significativo de migração ao longo dos próximos dois a três anos.

## O Que Mudar No Próximo Briefing

Quando o próximo briefing falar em "retail media", a primeira pergunta de quem entende o canal é: **on-site, off-site ou in-store?** Se a resposta for "todos" sem distinção entre proporções, é sinal de que o briefing ainda está operando com retail media como conceito genérico, não como conjunto de modalidades distintas.

A segunda pergunta deveria ser: **qual o objetivo da campanha em cada sabor?** Conversão direta? Reimpacto? Awareness qualificada? Drive to store? Cada uma das respostas direciona a alocação entre os três sabores.

Não existe campanha de retail media que seja igualmente eficiente nos três sabores ao mesmo tempo. Existem campanhas bem alocadas, que escolhem o sabor certo para o objetivo certo, e existem campanhas mal alocadas, que tratam retail media como bloco único e perdem o que cada modalidade oferece de específico.

Entender a diferença entre os três é o primeiro passo. O segundo é estruturar plano de mídia que reconheça essa diferença na alocação, na criatividade e na mensuração. Quem fizer isso em 2026 vai estar bem posicionado quando a curva de crescimento se concretizar nos próximos anos.

## Perguntas Frequentes

### O que é retail media on-site?

É a publicidade veiculada dentro do site ou app do varejista — busca patrocinada, banners de categoria, destaques de produto. O consumidor já está no ambiente de compra, o que aproxima a exposição do momento da decisão.

### O que é retail media off-site?

É o uso dos dados de compra do varejista para impactar o consumidor fora do ambiente dele, em display, vídeo, CTV e programática. O inventário é o mesmo do mercado; o diferencial está nos dados que definem quem é impactado.

### O que é retail media in-store?

É a mídia dentro da loja física — telas digitais, displays em gôndola, sinalização conectada. Fecha o loop entre a exposição digital e a decisão no ponto de venda, e no Brasil ainda está em estágio inicial.

### Como dividir a verba entre on-site, off-site e in-store?

Depende do estágio de cada modalidade e do objetivo da campanha, mas em mercados maduros a distribuição costuma girar em torno de 40-50% on-site, 30-40% off-site e 10-20% in-store.`,
  },
  {
    id: 13,
    slug: "digital-ultrapassou-tv-brasil-budget",
    category: "Programática",
    title: "Digital Ultrapassou TV no Brasil — e o Que Isso Significa Pra Quem Ainda Divide Budget em \"Online vs. Offline\"",
    summary: "O Cenp-Meios registrou 41,5% para digital contra 40,3% para TV. Mas a divisão online vs. offline morreu antes: CTV é digital e é TV, DOOH é OOH e programático.",
    date: "28 Abr 2026",
    readTime: "6 min",
    cover: "/blog/digital-ultrapassou-tv.webp",
    author: "South Media",
    content: `## O Digital Já Ultrapassou a TV no Brasil?

Sim. Os dados do Cenp-Meios consolidaram a virada em algum momento entre o fim de 2024 e meados de 2025: 41,5% do investimento publicitário para digital contra 40,3% para TV. Mais relevante que o número, porém, é o que ele revela — a dicotomia entre online e offline já havia deixado de descrever o mercado, porque CTV é digital mas é TV, e DOOH é out-of-home mas é programático.

Em algum momento entre o final de 2024 e meados de 2025, sem aviso prévio, sem cerimônia, e sem comemoração organizada do mercado publicitário brasileiro, o digital ultrapassou a TV em share de investimento. Os dados do Cenp-Meios consolidaram a virada: **41,5% para digital, 40,3% para TV**, entre janeiro e setembro de 2025. O movimento que vinha sendo previsto há uma década aconteceu, e a maioria da indústria mal notou.

A razão para a falta de comemoração é interessante. Não foi a virada que mudou a forma como o mercado pensa mídia — foi o fato de que, quando ela aconteceu, **a dicotomia "online vs. offline" já estava morta há tempo suficiente** para que a passagem do bastão fosse anti-climática. Quem ainda pensa em mídia com essa divisão binária está operando com mapa desatualizado.

## A Dicotomia Que Não Faz Mais Sentido

Por décadas, o plano de mídia brasileiro foi estruturado em dois blocos: mídia tradicional (TV, rádio, impresso, OOH) e mídia digital (display, vídeo, social, search). A divisão tinha lógica quando os dois mundos efetivamente operavam separados — equipes diferentes, fornecedores diferentes, métricas diferentes, ferramentas diferentes.

Essa lógica se desfez por dois movimentos simultâneos:

**A TV virou digital sem virar online no sentido clássico.** CTV (Connected TV) é TV em todo sentido relevante para o consumidor — assistida na sala, em tela grande, durante consumo de conteúdo audiovisual prolongado. Mas é digital em todo sentido relevante para o anunciante — comprada via DSP, segmentada por dados, mensurada por impressão. Onde colocar CTV no plano de mídia que ainda usa a dicotomia "tradicional vs. digital"? Nem categoria tradicional funciona, nem categoria digital tradicional funciona.

**O OOH virou programático.** DOOH (Digital Out-of-Home) — telas digitais em ruas, shoppings, aeroportos, transporte público — pode ser comprado em tempo real, com segmentação por horário, audiência estimada, condição climática, eventos de proximidade. É OOH em ambiente físico, mas é programático em lógica de compra. Onde colocar DOOH no plano de mídia binário? Também não encaixa.

Esses dois movimentos não são exceções pontuais — são vetores estruturais. CTV cresceu para ser canal relevante. DOOH se expandiu para ser opção real em metrópoles brasileiras. Áudio programático integrou Spotify e podcasts em compra automatizada. Retail media virou terceiro pilar entre os canais digitais. O resultado é que **a fronteira entre digital e não-digital deixou de ser linha clara para virar gradiente** — e a maioria dos canais relevantes em 2026 está em algum ponto desse gradiente, não nas extremidades.

## O Que Mudou Na Prática Pra Quem Planeja

A consequência operacional da virada não é matemática (share de digital cresceu, share de TV caiu) — é estrutural. Cinco coisas mudaram na forma como planejamento de mídia funciona em 2026:

**Equipes deixaram de operar separadas.** A separação entre time de TV e time de digital, que sustentou organogramas de agências por décadas, virou anacronismo. Anunciantes maiores estão consolidando operações em times integrados; anunciantes menores buscam parceiros que operem todos os canais sob a mesma estrutura. Quem ainda tem dois departamentos separados, com briefings paralelos para a mesma campanha, está estruturalmente atrasado.

**Mensuração precisa ser cross-canal.** Avaliar TV linear, CTV, DOOH, display e CTV separadamente, com métricas próprias de cada canal, é o que produz a percepção falsa de que cada canal "está performando bem" enquanto o resultado de negócio não acompanha. Mensuração precisa atribuir incrementalidade real considerando o conjunto, não cada parte.

**Compra precisa ser orquestrada.** Frequência efetiva, exposição cruzada, sequência narrativa entre canais — tudo isso depende de planejamento que opere acima dos canais individuais. Sem orquestração, o anunciante paga por exposição duplicada (mesma pessoa impactada em TV linear e CTV no mesmo horário, sem critério) e perde sinergia (CTV não potencializa TV linear, mas compete com ela pelo mesmo ponto de atenção).

**Criativo precisa ser pensado pelo formato, não pelo canal.** Um anúncio de 30 segundos em TV linear, CTV, YouTube e Stories funciona com lógicas diferentes em cada lugar. Pensar "vou rodar o mesmo VT em todos" gera resultado abaixo do ótimo. Adaptação por formato — não por canal — é o que faz cada exposição funcionar pelo que o ambiente permite.

**Atribuição precisa reconhecer jornada não-linear.** O consumidor de 2026 é impactado em DOOH no caminho do trabalho, em CTV à noite, em social no celular, em display em portal de notícias, em retail media quando vai pesquisar produto. Atribuir a venda ao último clique, como muitos sistemas ainda fazem, é descartar 80% da jornada que efetivamente influenciou a decisão.

## A Mensagem Política Atrás Do Gráfico

Existe uma leitura política que vale registrar. A migração de orçamento de TV para digital aconteceu, em parte, porque agências e anunciantes responderam à pressão de **provar resultado mensurável**. TV linear sempre lutou com mensuração — painéis de audiência, modelos econométricos, pesquisas de recall. Digital nasceu com mensuração granular embutida. A virada, em alguma medida, é vitória da mensuração quantificável sobre a mensuração estimada.

Mas existe contracorrente importante: parte do digital, especialmente programática display, tem **problemas de mensuração tão sérios quanto TV linear**, só que de natureza diferente. Tráfego inválido, viewability questionável, atribuição last-click distorcida, MFA (made-for-advertising), opacidade da cadeia programática. Em 2026, com casos como Publicis vs. Trade Desk expondo a fragilidade da cadeia, fica claro que digital "mensurável" nem sempre é digital "bem mensurado".

A consequência é que **a virada de share não significa automaticamente que digital está entregando mais retorno**. Significa que digital está sendo escolhido pelos motivos que historicamente justificaram a escolha — flexibilidade, segmentação, mensuração — mesmo quando esses motivos não estão sendo executados com a qualidade que justificava a escolha original.

Para o anunciante, isso é alerta operacional. Migrar verba de TV para digital não é decisão de retorno garantido. É decisão de canal cuja capacidade de retorno depende de como a operação é estruturada — auditoria, transparência, tecnologia anti-fraude, atribuição multi-toque. Sem essa infraestrutura, parte da economia que parecia vir da migração é consumida em ineficiências que TV linear, por mais limitada que fosse, não tinha.

## O Que Faz Sentido Em 2026

Para anunciantes que estão estruturando plano de mídia em 2026 com a virada de share como pano de fundo, três princípios práticos guiam decisão:

**Pense em canais por papel, não por categoria.** Em vez de "TV é X% do plano, digital é Y%", a pergunta correta é "que papel cada canal cumpre na jornada?" CTV faz o trabalho que TV linear fazia (alcance qualificado, alto impacto emocional) com vantagens digitais (segmentação, mensuração). DOOH faz trabalho que OOH fazia (presença urbana) com vantagens programáticas (timing, contexto). Retail media faz trabalho que search fazia (captura de intenção) com vantagens de comportamento real (dados de compra). Plano organizado por papel funciona melhor do que plano organizado por categoria tradicional.

**Avalie a operação, não só o canal.** Decidir colocar 30% em CTV é decisão de alocação. Decidir como CTV vai ser comprado (open auction vs. PMP), com que verificação (DoubleVerify, IAS), com que tecnologia anti-fraude (incluindo Anti-VPN Tech) é decisão de qualidade. As duas precisam ser tomadas — e a segunda, em geral, é menos discutida e mais decisiva para o resultado.

**Insista em mensuração unificada.** Avaliar canais em silos, com métricas próprias de cada um, continua sendo a prática dominante porque é mais simples. Mas é também a prática que esconde duplicação, sobreposição e perda de sinergia. Investir em mensuração que opere acima dos canais — atribuição multi-toque, análise de incrementalidade combinada, brand lift cross-canal — é o que separa quem aproveita a fluidez do ecossistema atual de quem ainda opera com o mapa antigo.

A dicotomia "online vs. offline" morreu. A virada do share foi a confirmação tardia do que o mercado já sabia. O que vem depois — operar com canais como gradiente integrado em vez de blocos separados — é a parte do trabalho que ainda está em construção na maioria dos anunciantes brasileiros. Quem fizer essa transição agora chega à próxima virada de share com plano pronto.

**Quem não fizer vai ficar reagindo a movimentos estruturais que já aconteceram.**

## Perguntas Frequentes

### Quando o digital ultrapassou a TV no Brasil?

Em algum momento entre o fim de 2024 e meados de 2025, segundo os dados do Cenp-Meios, que consolidaram a virada em 41,5% de share para digital contra 40,3% para TV. A passagem aconteceu sem cerimônia e quase sem repercussão de mercado.

### O que é o Cenp-Meios?

É o levantamento do Conselho Executivo das Normas-Padrão que acompanha a distribuição do investimento publicitário brasileiro entre os meios. É a referência mais usada pelo mercado para medir share por canal.

### CTV conta como digital ou como TV?

Tecnicamente como digital: é comprado via plataforma programática, com segmentação e mensuração digitais. Para o consumidor, porém, é TV — tela grande, sala de estar, consumo audiovisual prolongado. É justamente esse tipo de canal que torna a divisão online versus offline obsoleta.

### Como dividir o budget se a dicotomia online vs. offline acabou?

Estruturando o plano por papel na jornada e por qualidade de audiência, e não por rótulo de meio. A decisão relevante deixa de ser quanto vai para digital e passa a ser como cada canal é comprado, verificado e medido.`,
  },
  {
    id: 12,
    slug: "audio-programatico-alem-spotify-2026",
    category: "Áudio",
    title: "Áudio Programático em 2026: O Que Mudou Para Além do Spotify",
    summary: "Áudio programático vai além do Spotify: podcasts com inserção dinâmica, rádio digital e games ampliaram um canal que ainda recebe só 2% a 5% da verba digital.",
    date: "23 Abr 2026",
    readTime: "6 min",
    cover: "/blog/audio-programatico-2026.webp",
    author: "South Media",
    content: `## O Que Mudou no Áudio Programático Para Além do Spotify?

Áudio programático é a compra automatizada de espaços publicitários em streaming de música, podcasts, rádio digital e games. O Spotify segue como porta de entrada natural — mais de 36 milhões de usuários ativos no Brasil —, mas deixou de ser o único caminho: a inserção dinâmica de anúncios abriu o inventário de podcasts para a compra programática, sem depender de negociação direta com cada produtor. Ainda assim, o canal costuma receber apenas 2% a 5% do orçamento digital total.

**Áudio programático segue sendo o canal mais subestimado do plano de mídia digital brasileiro.**

A maioria dos planos B2C ou ignora ou aloca verba simbólica — algo na faixa de 2% a 5% do digital total. As razões para essa subalocação não mudaram muito ao longo dos anos: percepção de que áudio é canal "complementar", de que mensuração é mais frágil, de que criativo exige investimento específico que muitas marcas não fazem.

O que mudou, e tem mudado bastante desde 2024, é o ecossistema em volta do Spotify. **O áudio programático brasileiro em 2026 é significativamente mais diverso do que era há dois anos**, e essa diversificação cria oportunidades de alocação que merecem ser revisitadas por anunciantes que continuam tratando "áudio programático" como sinônimo de "Spotify Ads".

## Spotify Continua Sendo o Centro — Mas Não É Mais a Única Opção

O Spotify continua sendo a porta de entrada lógica para áudio programático no Brasil. Audiência massiva (mais de 36 milhões de usuários ativos), ferramentas maduras de compra programática, integração com DSPs principais, mensuração robusta. Para anunciante que está testando o canal pela primeira vez, começar por Spotify continua fazendo sentido.

Mas três outros ecossistemas amadureceram o suficiente para entrar na conversa de alocação:

**Podcasts programáticos via dynamic ad insertion.** Por anos, anunciar em podcast significava negociar diretamente com produtor — leitura de host, patrocínio de episódio, modelo customizado. Hoje, plataformas como Megaphone, Triton Digital, Acast e outras oferecem **dynamic ad insertion (DAI)** — inserção programática de anúncios de áudio em catálogos de podcasts, com targeting por gênero, audiência, geografia. O anunciante compra impressões em milhares de podcasts simultaneamente, com mensuração granular.

Para o mercado brasileiro, o que mudou em 2026 é a escala disponível em DAI. Os principais podcasts nacionais — entretenimento, negócios, jornalismo, comédia — em grande parte já operam com DAI integrada, oferecendo inventário programaticamente acessível em volume suficiente para campanhas relevantes.

**Smart speakers e voice ads.** Alexa, Google Home, e outros smart speakers em domicílios brasileiros criam inventário de áudio em ambiente único — comando de voz, interação ativa, contexto residencial. As primeiras experiências de **voice ads** começaram a ser oferecidas em programática nos Estados Unidos, e estão chegando ao Brasil em 2026 com inventário limitado mas crescente.

O formato ainda é incipiente, mas vale acompanhamento para anunciantes em categorias específicas (varejo, alimentos, entretenimento) onde a interação por voz tem afinidade natural com o produto.

**Áudio em apps de mobilidade.** Aplicativos como Waze e Google Maps oferecem inventário de áudio durante a navegação — momentos de alta atenção, contexto geográfico imediato, possibilidade de integração com drive to store. O inventário é menor do que Spotify em volume, mas a qualidade do contexto compensa: o consumidor está em movimento, próximo a pontos de interesse físicos, com atenção focada.

## O Que Cada Ecossistema Entrega de Diferente

A diversificação do áudio programático não significa que cada ecossistema é simplesmente mais um lugar para colocar o mesmo anúncio. Significa que cada um tem perfil de uso, audiência e momento de consumo distintos:

**Spotify funciona melhor para amplitude e segmentação.** Audiência massiva, dados ricos de comportamento musical, segmentação por mood/atividade. É a escolha óbvia para campanhas que precisam de alcance qualificado e flexibilidade de criativo.

**Podcasts programáticos funcionam melhor para profundidade contextual.** Ouvintes de podcast têm atenção concentrada (não há scroll, não há distração), engajamento ativo (a maioria escuta voluntariamente, em janelas específicas) e relação de confiança com o conteúdo. Para mensagens que precisam de profundidade — explicação de produto, posicionamento de marca, narrativa — o ambiente é estruturalmente superior.

**Smart speakers e voice ads funcionam para experimentação.** Ainda incipiente, mas único pela natureza interativa. Para marcas inovadoras em categorias específicas, vale teste de formato.

**Áudio em apps de mobilidade funciona para drive to store.** Combinação de áudio com contexto geográfico em tempo real cria afinidade natural com campanhas que querem levar consumidor a ponto físico próximo.

## A Mensuração Que Está Amadurecendo

Uma das críticas históricas ao áudio programático era a fragilidade da mensuração. Em 2026, isso continua sendo limitação — áudio não tem viewability no sentido visual, não tem clique imediato como display, e a atribuição depende de modelagem mais complexa. Mas três avanços têm mudado o quadro:

**Brand lift em áudio.** Estudos pós-campanha medindo recall, intenção de compra e mudança de percepção em audiência exposta vs. controle não exposta. As principais plataformas oferecem programas estruturados de brand lift — Spotify Advertising, plataformas de podcast — com metodologia consistente.

**Atribuição multi-toque que inclui áudio.** Soluções de atribuição multi-toque (como as oferecidas por LiveRamp, Neustar, e algumas DSPs) já reconhecem áudio como ponto de contato na jornada e atribuem incrementalidade de forma específica, em vez de descartar como "não mensurável".

**Pixel matching com first-party data.** Anunciantes que têm bases próprias de consumidores podem cruzar exposição programática em áudio com comportamento subsequente — visitas ao site, conversões, compras — para fechar o loop de mensuração.

Não significa que áudio tem mensuração tão direta quanto display. Significa que a desculpa de "não dá pra medir" não se sustenta mais. Quem quer medir tem ferramentas; quem não mede é porque a operação não foi estruturada para isso.

## O Que Considerar No Próximo Plano

Para o anunciante que vai estruturar áudio programático em 2026 com a perspectiva atual do ecossistema, quatro princípios práticos guiam a decisão:

**Spotify continua sendo ponto de partida, não ponto final.** Alocar entre 50-70% do orçamento de áudio em Spotify continua fazendo sentido pela escala e maturidade. O restante deveria estar distribuído entre podcasts programáticos (segundo maior, idealmente 20-30%), voice ads e mobilidade (em volumes menores, para teste e experimentação).

**Criativo de áudio é projeto, não adaptação.** Um spot de áudio bem produzido para Spotify pode não funcionar bem em podcast — o ambiente sonoro é diferente, o nível de atenção é diferente, a relação com o conteúdo é diferente. Adaptação por ambiente é parte do trabalho criativo, não detalhe operacional.

**Mensuração precisa ser pedida na estruturação.** Sem definir brand lift ou atribuição como parte do plano de campanha, a mensuração não acontece — relatório padrão de áudio mostra entrega e completion, mas não impacto. Estruturar mensuração antes da campanha começar é o que viabiliza ler resultado depois.

**Anti-VPN Tech filtra contaminação que afeta áudio também.** Tráfego sintético via VPN aparece em áudio também — completion forjado, audiência inflada, mensuração distorcida. A camada proprietária da South Media opera pré-bid, filtrando tráfego contaminado antes que entre no leilão, o que melhora a qualidade da audiência efetivamente impactada. Em campanhas de alcance geográfico específico (regionais, drive to store), esse filtro tem impacto direto na precisão do resultado.

Áudio programático em 2026 não é mais o canal frágil que justificava alocação simbólica de 3% do digital. É ecossistema maduro com diversificação real, com mensuração funcionando, com oportunidades de alocação que vão muito além de "rodar uns 30 mil reais em Spotify". Anunciantes que continuam tratando como canal acessório estão perdendo eficiência que outros canais com a mesma maturidade já capturaram há tempos.

## Perguntas Frequentes

### O que é áudio programático?

É a compra automatizada de espaços publicitários em conteúdo de áudio — streaming de música, podcasts, rádio digital e games — com segmentação por audiência, contexto e momento de escuta, em vez de negociação direta com cada veículo.

### O que é inserção dinâmica de anúncios em podcast?

É a tecnologia que insere o anúncio no episódio no momento em que ele é ouvido, e não de forma fixa na gravação. Isso permite segmentar por audiência e região e comprar inventário de podcast de forma programática, em escala.

### Quanto investir em áudio programático?

A maioria dos planos B2C aloca de 2% a 5% do digital total em áudio, patamar que reflete mais o hábito do mercado do que o potencial do canal. A definição correta depende do papel do áudio na jornada e da diversificação entre streaming, podcast e rádio digital.

### O Spotify ainda é o principal canal de áudio programático?

Continua sendo a porta de entrada pela escala e pela maturidade das ferramentas de compra, mas não deve ser o ponto final. Concentrar tudo em uma única plataforma deixa de fora podcasts, rádio digital e áudio em games.`,
  },
  {
    id: 11,
    slug: "ponto-virada-2026-copa-eleicoes-midia",
    category: "Programática",
    title: "O Ponto de Virada de 2026: Por Que Copa + Eleições Mudam o Cálculo de Quem Planeja Mídia Agora",
    summary: "Copa e eleições pressionam inventário e CPM em 2026: a Dentsu projeta alta de 9,1% no Brasil. Planejar por antecedência, não por reação, define o custo.",
    date: "21 Abr 2026",
    readTime: "7 min",
    cover: "/blog/ponto-virada-2026.webp",
    author: "South Media",
    content: `## Como Copa e Eleições Mudam o Planejamento de Mídia em 2026?

2026 reúne Copa do Mundo e eleições gerais no mesmo calendário, e o efeito prático é competição por inventário. A Dentsu projetou crescimento de 9,1% no investimento publicitário brasileiro em 2026 — a maior expansão entre os 12 principais mercados globais analisados, contra média global de 5,1%. Em CTV, onde a oferta ainda é estruturalmente limitada, essa pressão pode elevar CPMs em 40% a 60% nas janelas críticas.

2026 é ano singular para quem planeja mídia no Brasil. A combinação de **Copa do Mundo da FIFA e eleições presidenciais no mesmo ano** cria pressão sobre o ecossistema publicitário que não se repete há décadas — e que ainda vai demorar para se repetir novamente, dado o calendário de cada evento. Para o anunciante que opera em categorias B2C com penetração nacional, a consequência é que o cálculo de mídia que funcionou em anos anteriores precisa ser reescrito.

O ponto não é apenas que vai haver mais demanda por inventário — isso é óbvio e qualquer planejador sabe. O ponto é que **a magnitude da pressão é estruturalmente diferente** do que se vê em anos pares normais (com Olimpíadas ou Copa) ou em anos eleitorais sem evento esportivo. A combinação eleva CPMs em todos os canais relevantes, esgota inventário premium em janelas críticas, e force decisões de alocação que precisam ser tomadas meses antes do que seria habitual.

A Dentsu projetou crescimento de **9,1% no investimento publicitário brasileiro em 2026** — a maior expansão entre os 12 principais mercados globais analisados, contra média global de 5,1%. Esse número, sozinho, é apenas indicador do volume agregado. O que define o trabalho do planejador é como essa expansão se distribui ao longo do ano, em quais canais, em quais janelas — e a resposta a essas perguntas determina quem vai pagar preço de mercado e quem vai pagar prêmio.

## Por Que A Pressão É Diferente De Anos Anteriores

Em ano com Copa do Mundo isolado, a pressão se concentra em janelas específicas — semanas anteriores ao evento e durante a competição. CPMs em inventário esportivo, CTV e portais de notícias esportivas sobem significativamente, mas o resto do ano segue dinâmica relativamente normal.

Em ano eleitoral isolado, a pressão se concentra em outras janelas — terceiro trimestre, principalmente entre agosto e outubro, com gastos políticos elevando CPMs em canais que servem comunicação eleitoral (TV linear, rádio, OOH, mas também digital com forte presença de programática display e CTV).

Em 2026, as duas pressões coincidem. Copa acontece entre junho e julho. Eleições têm primeira janela crítica em agosto-setembro (campanhas oficiais) e segunda em setembro-outubro (intensidade máxima até o primeiro turno). O resultado é que **o segundo semestre inteiro de 2026 opera com pressão sobre inventário** — desde o ramp-up pré-Copa em maio até o primeiro turno eleitoral em outubro. Cinco meses de pressão sustentada, em vez de duas janelas separadas de pressão intensa.

## A Aritmética Do CPM No Aquecimento

Quando inventário fica disputado, CPMs sobem. A relação é direta em qualquer canal, mas a magnitude do aumento varia.

Em CTV, onde o inventário brasileiro ainda está em construção e a oferta é estruturalmente limitada, a pressão de 2026 pode elevar CPMs em **40% a 60%** em janelas críticas (julho durante Copa, setembro-outubro durante intensificação eleitoral) em relação ao mesmo período de anos anteriores. Em programmatic display, o aumento é menor mas significativo — algo entre 20% e 35% em portais e ambientes premium.

Em DOOH, a pressão depende fortemente de geografia. Em capitais e cidades-sede de jogos, o aumento pode ser tão intenso quanto em CTV. Em mercados regionais menores, a pressão é diluída.

Em áudio programático e retail media, o impacto é menor porque os canais têm maior elasticidade de oferta, mas ainda existe pressão sobre inventário premium.

A consequência operacional é clara: **anunciante que entra em CTV em setembro de 2026, pagando CPM aberto, vai pagar significativamente mais por impressão do que pagaria pelo mesmo inventário em janeiro ou fevereiro do mesmo ano**. Quem negociou contratos em janeiro consegue travar condições; quem espera para reagir paga o aquecimento.

## O Calendário Do Planejamento Que Funciona

**A lógica de planejamento que funciona em 2026 é estruturada por antecedência, não por reação.**

Cinco janelas de decisão definem a operação:

**Janeiro a março: estruturação.** Definição de alocação anual, negociação de PMPs e programmatic guaranteed com publishers prioritários (especialmente em CTV), travamento de condições antes do mercado aquecer. Anunciantes que fizeram isso entram em junho com CPM efetivo significativamente abaixo do que vai estar em mercado aberto.

**Abril a maio: ramp-up pré-Copa.** Início de campanhas relacionadas à Copa, com inventário ainda em condições próximas ao normal. Última janela para anunciantes que vão entrar em mercado aberto e ainda querer condições razoáveis. Quem chega aqui em maio buscando "começar a planejar Copa" já está atrasado em relação a quem estruturou em janeiro.

**Junho a julho: Copa.** Janela de pico para anunciantes em categorias diretamente conectadas (alimentos, bebidas, eletrônicos, financeiro). Mercado opera com CPMs elevados, inventário premium escasso, e demanda por flexibilidade tática (reagir a resultados do Brasil, ao desempenho da seleção).

**Agosto a outubro: convergência eleitoral.** Janela mais complexa do ano. Investimento eleitoral entra em mercado, pressionando inventário em canais que servem comunicação política (TV linear, rádio, DOOH em capitais, digital em portais e CTV). Anunciantes comerciais precisam navegar entre competir com gastos eleitorais ou recuar para janelas menos disputadas.

**Novembro a dezembro: pós-eleitoral.** Inventário se normaliza relativamente rápido após o segundo turno. Janela de oportunidade para anunciantes que recuaram em setembro-outubro e querem voltar com força em Black Friday e período natalino.

A leitura desse calendário muda toda a lógica de alocação. Não é "quanto vamos colocar em CTV este ano?" — é "quanto vamos colocar em CTV em cada janela, com que condições, negociadas quando?". A diferença entre essas duas perguntas é exatamente a diferença entre planejamento que funciona em 2026 e planejamento que opera com o playbook de anos normais.

## Categorias Que Vão Sofrer Mais

Nem toda categoria é igualmente afetada. Três grupos têm dinâmica distinta:

**Categorias com afinidade Copa (alimentos, bebidas, eletrônicos, telecom):** vão competir com escala global por inventário esportivo e CTV. Investimento precisa ser estruturado antecipadamente; tentar entrar em maio ou junho buscando oportunidade tática significa pagar prêmio relevante.

**Categorias com afinidade eleitoral (serviços, governo, B2B com posicionamento institucional):** vão competir indiretamente com gastos políticos por inventário em portais de notícia, CTV jornalístico, e canais com audiência politicamente engajada. Faz sentido recuar nessas janelas e concentrar investimento em outras.

**Categorias neutras (varejo geral, e-commerce, serviços de consumo):** sofrem o efeito de aumento generalizado de CPMs sem ter "compensação" de afinidade com os eventos. Para essas categorias, a estratégia inteligente é arbitrar — concentrar investimento em janelas menos disputadas (primeiro trimestre, novembro-dezembro) e operar com discrição no segundo e terceiro trimestres.

## A Decisão Que Define O Ano

Para o anunciante em qualquer dessas categorias, a decisão que mais define o resultado de 2026 já foi tomada — em janeiro, fevereiro, março. Quem fez homework de estruturação no primeiro trimestre tem condições negociadas, inventário garantido, e flexibilidade tática. Quem ainda está reagindo agora, em abril ou maio, está operando em desvantagem competitiva contra quem se preparou antes.

Não significa que está tudo perdido para quem não se preparou. Significa que cada mês que passa sem decisão estratégica eleva o custo de cada decisão subsequente. Em maio, ainda há espaço para negociar condições melhores que mercado aberto vai oferecer em junho. Em junho, ainda há espaço para mitigar parte do aquecimento. Em agosto, a margem de manobra está significativamente reduzida.

A lição estrutural de 2026 vale também para anos futuros: **mercados publicitários com pressão concentrada precisam de planejamento concentrado igualmente cedo no calendário**. O hábito brasileiro de definir plano de mídia em junho para começar a operar em agosto pode funcionar em anos normais. Em 2026, esse hábito é, na prática, decisão de pagar prêmio por inventário que outros anunciantes já travaram em condições melhores.

O ano oferece oportunidade clara para anunciantes que entendem o calendário e estruturam decisão de acordo. Oferece risco igual para quem ainda opera no automático. O que separa um grupo do outro não é tamanho de orçamento ou sofisticação técnica — é o reconhecimento de que 2026 não é um ano normal e que o planejamento precisa refletir essa singularidade.

## Perguntas Frequentes

### Por que Copa e eleições elevam o CPM?

Porque ampliam a demanda sem ampliar a oferta na mesma proporção. Quando mais anunciantes disputam o mesmo inventário em janelas concentradas, o preço sobe — e a magnitude do aumento depende da elasticidade de cada canal.

### Quais canais são mais afetados pela disputa de inventário em 2026?

CTV tende a sofrer a maior pressão, porque o inventário brasileiro ainda está em construção. Áudio programático e retail media absorvem melhor o pico, por terem maior elasticidade de oferta, mas ainda registram pressão no inventário premium.

### Quando negociar mídia para um ano com Copa e eleições?

O quanto antes. Negociar quando a demanda já está aquecida é sistematicamente mais caro: quem fecha condições no início do ano chega às janelas críticas com preço, e quem deixa para depois compra no pico.

### Campanhas com verba pequena também são afetadas?

Sim, e proporcionalmente até mais, porque têm menos poder de negociação para travar condições antecipadas. Nesses casos, escolher janelas fora do pico e canais de maior elasticidade costuma ser mais eficiente do que disputar inventário nas semanas concorridas.`,
  },
  {
    id: 10,
    slug: "omnichannel-jornada-consumidor-conectada",
    category: "Programática",
    title: "Omnichannel na Prática: Como Ativar a Jornada Completa do Consumidor Conectando CTV, Mobile, DOOH e Drive to Store",
    summary: "Omnichannel real não é comprar vários canais: é orquestrar CTV, mobile, DOOH e drive to store com dado unificado — e rende 20% a 40% mais conversão incremental.",
    date: "03 Abr 2026",
    readTime: "7 min",
    cover: "/blog/omnichannel-jornada-consumidor.webp",
    author: "South Media",
    content: `## O Que É Omnichannel na Prática — e Como Ativar a Jornada Completa?

Omnichannel, em mídia, é orquestrar canais diferentes — CTV, mobile, DOOH, display e drive to store — sob uma mesma camada de dado, controle de frequência e mensuração, em vez de comprá-los em plataformas separadas. A diferença para multicanal é técnica, não conceitual. Quando a operação está bem calibrada, a jornada orquestrada entrega entre 20% e 40% a mais de conversão incremental do que a mesma verba distribuída em canais isolados.

Omnichannel virou um dos termos mais esvaziados do vocabulário de marketing. Usado por praticamente qualquer fornecedor de mídia para descrever praticamente qualquer coisa, perdeu contorno técnico e virou sinônimo frouxo de "vários canais". Mas o conceito original continua valendo — e, em 2026, ele finalmente encontra tecnologia para ser executado de verdade.

Omnichannel não é estar em muitos canais. É **orquestrar uma jornada única em que cada canal cumpre um papel específico**, com mensuração integrada e reconhecimento contínuo do consumidor.

A diferença entre multicanal e omnichannel real é técnica, não conceitual. Multicanal é comprar display, vídeo, CTV, DOOH e mobile em plataformas separadas, com mensurações independentes e criativos que não conversam. Omnichannel é usar uma operação única que reconheça o mesmo consumidor atravessando todos esses pontos, registre a ordem em que ele foi impactado, atribua contribuição real de cada canal na decisão e ajuste a pressão de cada ponto em tempo real.

## O Mapa da Jornada: O Que Cada Canal Faz Melhor

A jornada do consumidor brasileiro em 2026 não é mais linear, mas continua tendo estrutura. Existem momentos de descoberta, de consideração, de decisão e de pós-compra — e cada um tem afinidade natural com determinados canais.

**Descoberta acontece, sobretudo, em CTV e DOOH.** A tela grande da sala durante o streaming e a tela digital no shopping, no aeroporto, na via de alto tráfego. Esses são os canais de primeira impressão — alto impacto visual, ambiente premium, sem possibilidade de clique imediato, mas com grande capacidade de fixar marca. A missão aqui não é converter; é construir presença para que, quando a decisão chegar, a marca esteja entre as candidatas consideradas.

**Consideração migra para mobile e display programático.** É quando o consumidor, depois de exposto, começa a pesquisar, comparar, pedir opinião, ler reviews. Aqui, a mídia precisa estar presente nos ambientes digitais que ele visita naturalmente — portais, apps, redes sociais, plataformas de conteúdo. A orquestração correta garante que a mensagem evolua: o criativo de awareness dá lugar a peças com informação técnica, benefícios claros, comparativos ou provas sociais.

**Decisão concentra-se em mobile e rich media.** É o momento em que formatos mais interativos, carrosséis shoppable, galerias de produto e anúncios com call-to-action direto têm melhor performance. O consumidor já sabe o que quer; precisa de facilitação para clicar.

**Conversão física depende de drive to store e push notification geolocalizado.** Quando a loja física faz parte do modelo — e na maioria dos setores brasileiros ainda faz — a jornada não termina no clique. Termina na visita. E aí entram tecnologias que impactam o usuário quando ele está fisicamente próximo do ponto de venda.

## A Camada Técnica que Conecta Tudo

Orquestrar essa jornada exige três camadas de tecnologia que raramente convivem em operações fragmentadas:

**Identidade persistente cross-device.** Reconhecer o mesmo consumidor atravessando CTV, mobile, display e DOOH. A tecnologia Household Sync resolve parte disso ao tratar a rede doméstica como unidade de identidade — consumidores da mesma casa, dispositivos da mesma casa, conversa sincronizada — operação que ganha precisão quando combinada com a tecnologia proprietária Anti-VPN Tech, que elimina IPs contaminados por VPN do mapeamento. Para DOOH e drive to store, entra geolocalização por triangulação de antenas celulares, que identifica concentração e movimento de dispositivos em áreas específicas.

**Sincronização online-offline.** É o que permite atribuir visita física a uma campanha digital. Tecnologias de drive to store cruzam exposição programática com visitas registradas ao ponto de venda por sinal de celular. Na prática, mede-se quantos dos consumidores impactados por uma campanha de display ou CTV foram fisicamente à loja em um raio de tempo definido — dias, semanas — após a exposição. Essa é a ponte que fecha o ciclo entre mídia digital e resultado físico.

**Atribuição multi-toque.** A camada analítica. Em jornadas longas, com múltiplos impactos em múltiplos canais, atribuir conversão ao último clique é engano estatístico. A atribuição correta distribui crédito entre os pontos de contato que efetivamente contribuíram, o que muda a forma como o anunciante avalia cada canal e aloca budget.

## Como Se Combina na Prática: Um Exemplo de Varejo

Considere uma campanha de varejo de moda com lojas físicas em shoppings e e-commerce ativo. A orquestração omnichannel funcionaria assim:

Na fase de **awareness**, a marca ocupa CTV nos principais publishers de streaming com criativos de coleção, e complementa com DOOH nos shoppings-alvo e nas vias de maior tráfego da cidade. A tela grande e a tela urbana trabalham em paralelo para fixar presença.

Na fase de **consideração**, a tecnologia de Household Sync reconhece os domicílios impactados na CTV e reimpacta nos dispositivos móveis da mesma casa com peças de rich media e vídeo out-stream em portais premium e apps de conteúdo. Paralelamente, usuários impactados no DOOH recebem push notification geolocalizada quando retornam ao shopping ou à região.

Na fase de **decisão**, anúncios de display e native em formatos shoppable e galeria levam ao e-commerce. Para consumidores com histórico de visita a loja física, o push reforça oferta e disponibilidade no ponto de venda.

Na fase de **mensuração**, a atribuição conecta: quantos compradores no e-commerce passaram por CTV antes; quantas visitas à loja física vieram de impactados no DOOH; quanto do uplift de vendas total é atribuível à orquestração combinada versus o que teria acontecido sem a campanha.

## O Que Isso Muda no Plano de Mídia

A mudança mais significativa não é o que é comprado, é **como o resultado é lido**. Planos de mídia tradicionais avaliam canais em silos: o CTV entregou X, o display entregou Y, o DOOH entregou Z. A soma dos parciais é apresentada como resultado da campanha.

Em operação omnichannel real, a pergunta é outra: a orquestração combinada entregou quanto a mais em conversão — digital e física — do que a soma dos canais isolados entregaria? Essa é a métrica de **incrementalidade**, e é ela que justifica o investimento em operação integrada.

A resposta, quando a operação está bem calibrada, é consistente: a jornada orquestrada entrega **entre 20% e 40% a mais de conversão incremental** em relação à mesma verba distribuída em canais não sincronizados. Esse delta é o retorno real da escolha por parceiro com capacidade técnica de tratar a jornada como unidade, não como somatório.

## A Implicação Estrutural Para 2026

Omnichannel não é uma linha a ser adicionada ao plano de mídia. É uma forma diferente de estruturar o plano desde o briefing. Exige escolha de parceiro que opere todos os canais sob orquestração unificada, com mensuração integrada e capacidade técnica de orquestrar reimpacto entre eles.

**Quem tenta construir jornada omnichannel juntando fornecedores diferentes acaba com uma colcha de retalhos — vários canais, nenhuma orquestração.**

Em 2026, com a fragmentação de atenção atingindo pico histórico e o consumidor circulando por dezenas de pontos de contato antes de decidir, omnichannel não é mais aspiração. É exigência operacional para anunciantes que tratam mídia como vetor de crescimento — e não apenas como linha de custo a ser justificada.

## Perguntas Frequentes

### Qual a diferença entre multicanal e omnichannel?

Multicanal é comprar display, vídeo, CTV, DOOH e mobile em plataformas separadas, com mensurações independentes e criativos que não conversam. Omnichannel é orquestrar esses mesmos canais sob uma camada única de dado, frequência e medição.

### Omnichannel aumenta a conversão?

Quando a orquestração é real, sim: a jornada integrada costuma entregar de 20% a 40% a mais de conversão incremental do que a mesma verba distribuída em canais isolados. O ganho vem da coordenação, não do número de canais.

### O que é preciso para operar omnichannel de verdade?

Camadas de tecnologia que raramente convivem em operações fragmentadas: identificação consistente de audiência entre telas, controle de frequência unificado e mensuração que atribua resultado à jornada, não a cada canal separadamente.

### Por onde começar a estruturar uma operação omnichannel?

Pelo briefing, não pelo plano de mídia. Omnichannel não é uma linha a ser acrescentada aos canais existentes: é definir desde o início qual papel cada tela cumpre na jornada e como o resultado será medido em conjunto.`,
  },
  {
    id: 9,
    slug: "tiktok-remarketing-reimpacto-programatica",
    category: "Performance",
    title: "TikTok Remarketing: Como Recuperar os 97% de Usuários que Clicam, Visitam e Somem",
    summary: "Só 2% a 3% convertem na primeira visita. O reimpacto programático transforma os outros 97% que vieram do TikTok em base de conversão nos dias seguintes.",
    date: "18 Abr 2026",
    readTime: "6 min",
    cover: "/blog/tiktok-remarketing.webp",
    author: "South Media",
    content: `## Como Recuperar os 97% Que Clicam no TikTok e Não Convertem?

Em qualquer canal digital, apenas 2% a 3% dos usuários convertem na primeira visita ao site do anunciante — os outros 97% clicam, navegam, se interessam e saem sem tomar ação. No TikTok, onde a atenção é alta e a jornada é rápida, esse vazamento pesa ainda mais. O reimpacto programático é a ponte: a audiência originada na plataforma volta a ser trabalhada em display, vídeo e CTV nos dias seguintes, em vez de ser perdida.

O TikTok é hoje uma das plataformas com maior taxa de atenção do mercado digital global. Formato em tela cheia, som ligado por padrão, algoritmo de descoberta que mantém o usuário por longos períodos dentro do app. Para anunciantes, isso significa acesso a uma audiência altamente engajada, em contexto de alto consumo de conteúdo. O que raramente é discutido é o que acontece **depois do clique** — e é exatamente aí que campanhas de TikTok Ads costumam perder a maior parte do investimento.

Em qualquer canal digital, apenas **2% a 3% dos usuários convertem na primeira visita** ao site do anunciante. Os outros **97% clicam, navegam, se interessam e saem sem tomar ação**. No TikTok, esse número é ainda mais sensível: a natureza do consumo na plataforma é de descoberta rápida, não de decisão de compra. O clique é um sinal de interesse, não de intenção consumada.

Se o anunciante não tem uma estratégia estruturada para reimpactar esse tráfego qualificado fora do ambiente do TikTok, a conta fica desequilibrada: gasta-se em awareness, gera-se consideração, e a conversão escapa por não ter continuidade.

## O Problema Estrutural: TikTok Ads é Uma Ilha

A plataforma de anúncios do TikTok opera dentro de um ambiente fechado. O remarketing dentro do próprio TikTok Ads funciona — é possível reimpactar quem interagiu com o anúncio ou visitou o pixel — mas se restringe ao inventário interno da plataforma. Isso cria dois problemas práticos:

**Problema de alcance:** nem todo usuário que clicou no anúncio do TikTok volta ao app no timing necessário para receber o reimpacto. Muitos consumidores usam a plataforma em janelas específicas do dia — almoço, fim de tarde, noite — e ficam fora do alcance nas demais horas.

**Problema de custo:** o inventário interno do TikTok, quando usado para remarketing, compete pelo mesmo espaço com a prospecção. Isso pressiona o CPM e reduz a eficiência da pressão adicional sobre o usuário.

A saída está em tratar o tráfego do TikTok como **entrada de funil, não como funil completo**, e usar a mídia programática aberta — display, vídeo, native e CTV — para o trabalho de reimpacto.

## A Ponte Técnica: Do Clique ao Remarketing Programático

O fluxo operacional que resolve esse gargalo tem cinco estágios:

1. **TikTok Ad** captura a atenção e gera o clique
2. **Clique** redireciona para o site do cliente
3. **Site do cliente** registra o comportamento via pixel ou cookie próprio
4. **Clusterização inteligente** agrupa esses usuários por padrões de intenção — páginas visitadas, tempo de permanência, produtos vistos
5. **Remarketing programático** reimpacta o usuário em display, vídeo, native e CTV em ambientes fora do TikTok

O resultado é um funil que não termina quando o usuário sai do app. Ele continua sendo trabalhado onde quer que esteja navegando — nos portais de notícias que lê, nos vídeos que assiste, na Smart TV que liga à noite, nos aplicativos que usa no celular durante o dia.

## Por Que Isso Multiplica o Retorno do Investimento em TikTok Ads

A lógica econômica é direta. Uma campanha de TikTok Ads sem estratégia de reimpacto trabalha com a premissa de que os 2% a 3% que convertem na primeira visita pagam os outros 97%. Em categorias de ticket alto, isso pode funcionar. Em varejo, serviços recorrentes, SaaS, educação, produtos de consideração média, esse modelo raramente fecha a conta.

**Com reimpacto programático estruturado, os 97% deixam de ser perda e viram base de conversão ao longo dos dias seguintes.**

O investimento original em TikTok passa a funcionar como **sourcing qualificado** para uma máquina de conversão que opera em ecossistema aberto. O CPM do TikTok continua sendo pago uma única vez, mas a audiência gerada é trabalhada múltiplas vezes em canais com CPM menor.

Na prática, o **CPA consolidado da operação tende a cair significativamente** — não porque o TikTok ficou mais barato, mas porque o TikTok deixou de ser o único ponto de conversão possível.

## Formatos que Funcionam Melhor no Reimpacto

Cada etapa da jornada pós-TikTok tem um formato mais eficiente:

**Display em portais premium** funciona para manter a marca presente durante a semana de consideração, especialmente com criativos que retomam visualmente o anúncio do TikTok.

**Vídeo programático out-stream** mantém a linguagem visual da plataforma original — vídeo vertical, som relevante, ritmo acelerado — em ambientes editoriais, reforçando mensagem sem perder o tom.

**Native ads** resolvem o problema de fadiga criativa. Usuários que viram o anúncio do TikTok respondem bem a formatos que parecem conteúdo, não interrupção.

**CTV** fecha o ciclo com alcance qualificado na tela grande, especialmente valioso em campanhas de produto de consideração — o usuário que clicou no TikTok durante o dia e viu o anúncio complementar na Smart TV à noite chega ao momento de decisão com a marca consolidada.

## O Que Muda na Operação de Mídia

O ganho operacional mais relevante não é técnico, é estratégico. Passar a tratar o TikTok como topo de funil em vez de funil completo reposiciona a plataforma no plano de mídia. O investimento em TikTok Ads deixa de ser avaliado apenas pelo CPA direto — métrica que historicamente subestima o valor da plataforma — e passa a ser avaliado pela **qualidade do tráfego que entrega para a esteira de remarketing**.

Esse reposicionamento muda também a alocação de budget. Deixa de existir a tensão entre "investir em TikTok" e "investir em programática", porque as duas operações passam a ser fases da mesma jornada. O TikTok alimenta; a programática converte. E o resultado medido é o CPA final, não o CPA de cada canal isolado.

## A Implicação Para Plano de 2026

Em 2026, com o CPM do TikTok Ads subindo de forma consistente e a concorrência por atenção crescendo em todas as plataformas, operar sem essa ponte é deixar dinheiro na mesa. Os 97% que não convertem na primeira visita não são perda. São **a maior oportunidade do plano de mídia** — desde que exista tecnologia para recuperá-los, e desde que a tecnologia inclua camadas como Anti-VPN Tech que garantem que o reimpacto está sendo entregue a audiências reais, não a tráfego forjado por VPN.

## Perguntas Frequentes

### Por que 97% dos usuários não convertem na primeira visita?

Porque a primeira visita costuma ser de descoberta, não de decisão. Em qualquer canal digital, apenas 2% a 3% convertem de imediato; o restante precisa de mais contato com a marca antes de tomar uma ação.

### O que é reimpacto programático?

É a estratégia de voltar a impactar, via mídia programática, uma audiência que já teve contato com a marca — no caso, quem veio do TikTok e não converteu. A entrega acontece em display, vídeo e CTV ao longo dos dias seguintes.

### Como conectar o TikTok Ads à mídia programática?

O TikTok funciona como fonte qualificada de audiência: o tráfego gerado ali passa a ser trabalhado na programática, com segmentação por etapa da jornada. Cada etapa tem o formato mais eficiente, e o fluxo operacional que resolve esse gargalo é estruturado em estágios.

### Por quanto tempo vale reimpactar quem veio do TikTok?

O intervalo eficiente costuma ser curto, acompanhando a janela em que a lembrança da marca ainda está ativa. Estender demais dilui a verba em audiência fria; encerrar cedo demais desperdiça o investimento já feito para gerar aquele tráfego.`,
  },
  {
    id: 8,
    slug: "household-sync-ctv-mobile-sincronizacao",
    category: "CTV",
    title: "Household Sync: Por Que a CTV Sozinha Não Converte — e Como a Sincronização com Mobile Resolve Isso",
    summary: "Household Sync liga a TV conectada ao celular do mesmo domicílio e transforma a atenção do CTV em conversão no mobile. Veja as camadas técnicas exigidas.",
    date: "11 Abr 2026",
    readTime: "6 min",
    cover: "/blog/household-sync.webp",
    author: "South Media",
    content: `## O Que É Household Sync e Como Ele Conecta CTV e Mobile?

Household Sync é a técnica que reconhece que a TV conectada e o celular pertencem ao mesmo domicílio e usa essa ligação para sincronizar a mensagem entre as duas telas. Ela existe porque o CTV é hoje o canal de mídia programática com os melhores indicadores de atenção no Brasil — completion rate superior a 90%, formato não-pulável, tela grande —, mas não tem clique. O mobile completa a jornada: apenas 2% a 3% dos usuários convertem na primeira visita, e os outros 97% precisam ser reimpactados.

A TV Conectada é hoje o canal de mídia programática com os melhores indicadores de atenção no Brasil. Completion rate superior a 90%, formato não-pulável, audiência em ambiente premium e tela grande com alto impacto emocional. O problema é que todo esse engajamento raramente se traduz em conversão imediata — e por um motivo simples de comportamento: ninguém compra direto pelo controle remoto.

Esse é o ponto cego mais caro da mídia digital em 2026. Anunciantes investem valores crescentes em CTV, veem indicadores de atenção brilhantes e depois se perdem no momento de explicar o que aconteceu depois da impressão. Entre o anúncio exibido na Smart TV da sala e a conversão no e-commerce, existe uma ponte que precisa ser construída tecnicamente — e ela se chama **Household Sync**.

## O Problema: a CTV Entrega Atenção, Não Ação Direta

A natureza do consumo de TV Conectada é assíncrona. O espectador assiste ao anúncio na sala de estar, mas o momento da decisão de compra acontece em outro dispositivo e, muitas vezes, horas ou dias depois. Se a campanha não conseguir reconhecer e reimpactar esse mesmo consumidor no smartphone, no tablet ou no desktop, todo o investimento em tela grande vira custo de branding sem ponte para performance.

Os números do comportamento de compra online reforçam isso. **Apenas 2% a 3% dos usuários convertem na primeira visita** a um site. Os outros **97% precisam ser reimpactados** em algum ponto da jornada para que a decisão amadureça. Quando o ponto de entrada é a CTV — um canal por natureza sem clique — esse reimpacto não é desejável, é obrigatório.

## A Solução Técnica: Sincronização por Domicílio

Household Sync é a tecnologia que reconhece dispositivos conectados a uma mesma rede doméstica e os trata como um único ecossistema de impacto. Na prática, quando um anúncio é exibido em uma Smart TV, o sistema identifica os outros aparelhos — celulares, tablets, notebooks — conectados àquele mesmo IP residencial e os torna alvos prioritários para reimpacto nas horas ou dias seguintes.

A **janela de reimpacto** é o segundo ponto crítico. Configurações genéricas, herdadas de sistemas pensados para display, costumam trabalhar com janelas fixas de 30 ou 60 dias. Isso dilui o efeito e gera frequência desnecessária. A operação da South Media permite janelas customizadas a partir de **30 segundos e estendidas até 10 dias** — o que muda completamente a lógica de orquestração de campanha.

Em uma ação de varejo com urgência — lançamento de coleção, Black Friday, promoção relâmpago — uma janela de 2 a 4 horas após o impacto na CTV pode transformar awareness em conversão dentro do mesmo dia. Em uma ação de consideração para compra complexa — automóvel, plano de saúde, imóvel — uma janela de 7 a 10 dias acompanha a maturação natural da decisão sem saturar o consumidor.

## Por Que Isso Exige Operação Especializada

Executar Household Sync com precisão depende de três camadas técnicas que raramente convivem em operações fragmentadas:

- **Identificação consistente de IP residencial** com filtros anti-VPN — onde entra a tecnologia proprietária Anti-VPN Tech da South Media, que elimina o ruído de VPNs e proxies que distorceria o mapeamento domiciliar
- **Integração entre inventário de CTV e de mobile/display** sob orquestração unificada
- **Controle de frequência orquestrado entre dispositivos** — contar impressão de CTV e de mobile como parte do mesmo teto de exposição

**Operações que executam CTV e mobile em silos separados simplesmente não conseguem fazer isso.**

O resultado típico é sobreposição: o consumidor vê o anúncio na TV, vê o mesmo anúncio no celular poucos minutos depois sem nenhuma progressão narrativa, e a campanha queima frequência sem ganhar incremento.

No modelo integrado, a progressão é construída como narrativa. O anúncio na Smart TV apresenta marca e mensagem principal — formato de 15 a 30 segundos, foco em emoção e reconhecimento. O reimpacto no mobile, minutos ou horas depois, traz CTA funcional, oferta específica ou comparativo. Cada dispositivo cumpre um papel na jornada, e o domicílio é tratado como a unidade real de decisão — porque ele é.

## Onde o Household Sync Entrega Mais Valor

Três cenários concentram o melhor retorno dessa tecnologia:

**Varejo com e-commerce.** Quando a conversão acontece online, a ponte entre a tela grande e o celular é literal. Marca impacta na sala, consumidor pesquisa no sofá, remarketing programático fecha a venda no mesmo dispositivo de pesquisa.

**Considerações de alto valor.** Setores como automotivo, financeiro e imobiliário dependem de múltiplos contatos ao longo de semanas. A CTV cria o primeiro impacto emocional de marca; o mobile reforça com informação técnica e drive-to-action ao longo da janela.

**Campanhas locais ou regionais.** Combinada com geolocalização, a Household Sync permite impactar domicílios em raios específicos — bairros, cidades, regiões atendidas por uma loja física — e reimpactar esses mesmos domicílios quando os dispositivos móveis circulam próximos ao ponto de venda.

## O Que Muda no Plano de Mídia

Anunciantes que operam CTV e mobile separadamente costumam reportar boa taxa de completion na tela grande e taxa de conversão mediana no display — sem conseguir conectar as duas métricas. Quando a tecnologia de sincronização é aplicada, essa lacuna se fecha. É possível demonstrar que usuários impactados primeiro na CTV e depois no mobile convertem em taxa significativamente superior aos que foram impactados apenas em um canal.

Esse é o tipo de evidência que muda o plano de mídia. Deixa de existir a pergunta "quanto investir em CTV e quanto em mobile?" e passa a existir a pergunta correta: "como desenhar uma jornada cross-device que use cada canal pelo que ele faz melhor?".

A CTV entrega atenção e alcance qualificado. O mobile entrega conversão. A Household Sync é o que transforma essas duas forças em uma só campanha — e é por isso que, em 2026, ela deixou de ser um diferencial técnico para virar requisito básico de qualquer operação programática que trate CTV como pilar de investimento.

## Perguntas Frequentes

### O que é Household Sync?

É a técnica que identifica que a TV conectada e o celular pertencem ao mesmo domicílio e sincroniza a mensagem entre as duas telas, de modo que o impacto no CTV seja continuado no mobile em vez de ficar isolado.

### Por que o CTV precisa do mobile para converter?

Porque o CTV entrega a melhor atenção do mercado, mas não tem clique: a tela grande constrói lembrança e desejo, e a conversão acontece no dispositivo que a pessoa tem na mão. Sem essa ponte, a atenção gerada se perde.

### O que é completion rate em CTV?

É o percentual de anúncios assistidos até o fim. No CTV brasileiro o indicador supera 90%, resultado do formato não-pulável e do consumo em tela grande — bem acima do que vídeo em display costuma entregar.

### O que é preciso para executar Household Sync?

Camadas técnicas que raramente convivem em operações fragmentadas: identificação consistente de domicílio, orquestração entre CTV e mobile na mesma operação e mensuração unificada. Times que compram cada canal em silos separados não conseguem executar a sincronização.`,
  },
  {
    id: 7,
    slug: "transparencia-programatica-auditoria-dsp",
    category: "Programática",
    title: "Transparência em Mídia Programática: Por Que Auditar Sua DSP é Essencial",
    summary: "A auditoria da Publicis na The Trade Desk expôs o custo oculto da cadeia: só 51% do investimento chega ao publisher, diz a ISBA. O que auditar na sua operação.",
    date: "27 Mar 2026",
    readTime: "9 min",
    cover: "/blog/transparencia-auditoria-dsp.webp",
    author: "South Media",
    content: `## O Que Foi o Caso Publicis vs. The Trade Desk?

A auditoria conduzida a pedido da Publicis na The Trade Desk apontou irregularidades na cadeia de mídia programática, segundo reportagens do Ad Age, Adweek e Meio e Mensagem. A repercussão foi imediata: as ações da Trade Desk caíram mais de 12% em dois dias e a Omnicom anunciou que conduziria a própria auditoria da plataforma. O caso é sintomático de um problema estrutural — estudos da ISBA mostram que, em média, apenas 51% do investimento programático chega ao publisher.

Em março de 2026, o mercado global de mídia programática foi sacudido por uma notícia que reverberou em toda a indústria: o **Publicis Groupe**, uma das maiores holdings de agências do mundo, anunciou publicamente que deixaria de recomendar a The Trade Desk (TTD) como plataforma de compra programática para seus clientes.

O motivo? Uma **auditoria independente** encomendada pela Publicis revelou que a TTD teria violado múltiplas cláusulas contratuais, incluindo a **aplicação indevida de taxas de DSP sobre outros serviços**, cobranças por ferramentas não autorizadas e falta de transparência na composição dos custos repassados aos anunciantes.

A repercussão foi imediata: as ações da Trade Desk caíram mais de 12% em dois dias, e a Omnicom — outro gigante do setor — anunciou que também conduziria sua própria auditoria da plataforma. O episódio abriu uma discussão global sobre **transparência, governança e prestação de contas na cadeia programática**.

## O Que a Auditoria Revelou

Segundo reportagens do Ad Age, Adweek e Meio e Mensagem, a auditoria conduzida a pedido da Publicis encontrou diversas irregularidades:

- **Taxas ocultas:** A DSP teria aplicado sua taxa de plataforma sobre outros custos adicionais (como ferramentas de verificação e dados de terceiros), inflando o custo total sem o conhecimento explícito dos anunciantes.
- **Serviços não autorizados:** Ferramentas e funcionalidades teriam sido ativadas automaticamente, gerando cobranças que os clientes não haviam aprovado.
- **Falta de granularidade nos relatórios:** Os relatórios fornecidos não permitiam que agências e anunciantes identificassem com clareza a composição exata dos custos por campanha.
- **Resistência à auditoria:** A Trade Desk teria inicialmente resistido a fornecer os dados solicitados, alegando questões de confidencialidade com parceiros.

A Trade Desk negou as acusações e afirmou que suas práticas são transparentes, mas o dano reputacional já estava feito — e o debate sobre transparência programática ganhou proporções inéditas.

## Por Que Isso Importa Para Sua Marca

O caso Publicis vs. Trade Desk não é um evento isolado. Ele é sintomático de um problema estrutural na cadeia de mídia programática que afeta anunciantes de todos os portes:

**A opacidade da cadeia programática:** Entre o anunciante e o publisher, existem múltiplos intermediários — DSPs, SSPs, ad exchanges, verificadores, data providers — cada um adicionando suas taxas. Sem auditoria rigorosa, é impossível saber exatamente quanto do investimento chega efetivamente ao inventário de mídia.

**O problema do "tech tax":** Estudos da ISBA (Incorporated Society of British Advertisers) já demonstraram que, em média, apenas **51% do investimento programático** chega ao publisher. Os outros 49% são consumidos por taxas tecnológicas ao longo da cadeia.

**Fraude e tráfego inválido:** Sem verificação independente, campanhas podem estar sendo entregues para bots, VPNs ou inventário fraudulento — desperdiçando orçamento sem gerar nenhum resultado real.

## Como a South Media Garante Transparência Total

**Na South Media, a transparência não é um diferencial de marketing — é a base da operação.**

Desde a fundação, foi implementado um protocolo rigoroso de auditoria e verificação que garante que cada real investido seja rastreável e justificável.

### 1. Auditoria Prévia de Inventário (Double Check)

Antes de qualquer campanha ir ao ar, realizamos uma auditoria completa do inventário disponível. Verificamos:

- **Qualidade dos publishers:** Cada publisher é avaliado quanto a viewability, brand safety e histórico de tráfego inválido.
- **Composição de custos:** Detalhamos cada componente do custo — taxa de DSP, taxa de dados, taxa de verificação — para que o cliente saiba exatamente para onde vai cada centavo.
- **Conformidade contratual:** Garantimos que todas as ferramentas e serviços ativados foram explicitamente aprovados pelo cliente.

### 2. Tecnologia Proprietária Anti-Fraude

A tecnologia **Anti-VPN Tech** identifica e bloqueia em tempo real impressões originadas de VPNs, proxies e data centers — fontes comuns de tráfego fraudulento que inflam métricas sem gerar valor real.

Além disso, utilizamos **Double Verify** como camada adicional de verificação independente, garantindo que os anúncios sejam exibidos em ambientes seguros e para audiências reais.

### 3. Relatórios Granulares e Transparentes

Os dashboards em tempo real oferecem visibilidade completa sobre:

- **Breakdown de custos:** Cada componente do investimento é detalhado separadamente.
- **Métricas de qualidade:** Viewability, brand safety score, taxa de tráfego inválido por campanha.
- **Performance real:** Conversões, atribuição e ROI calculados com metodologia auditável.

### 4. Independência Tecnológica

Como **AdTech independente**, a South Media não tem conflitos de interesse com nenhuma DSP, SSP ou holding de agências. Operamos com a tecnologia proprietária Anti-VPN Tech e selecionamos as melhores plataformas de mercado para cada campanha com base exclusivamente em performance e transparência — não em acordos comerciais ocultos.

## O Que Perguntar Ao Seu Parceiro de Mídia Programática

Se o caso Publicis vs. Trade Desk ensinou algo ao mercado, é que **confiar cegamente na cadeia programática é um risco**. Aqui estão as perguntas que todo gestor de marketing deveria fazer ao seu parceiro:

1. **Qual é o breakdown completo de custos da minha campanha?** (Taxa de DSP, dados, verificação, serving)
2. **Vocês realizam auditorias independentes das plataformas que utilizam?**
3. **Qual tecnologia de anti-fraude vocês empregam? É proprietária ou de terceiros?**
4. **Qual percentual do meu investimento chega efetivamente ao publisher?**
5. **Posso auditar os logs de campanha de forma independente?**
6. **Existem ferramentas ou serviços ativados automaticamente que geram custos adicionais?**

Se o seu parceiro não conseguir responder essas perguntas com clareza e dados, é hora de reconsiderar a parceria.

## O Futuro da Transparência Programática

O caso Publicis vs. Trade Desk é um divisor de águas. A tendência é que auditorias independentes se tornem prática padrão no mercado, e que anunciantes exijam cada vez mais visibilidade sobre a cadeia de custos.

Para o mercado como um todo, é uma oportunidade de amadurecimento que beneficiará anunciantes, publishers e toda a cadeia de valor. A transparência em mídia programática não é negociável — e o caso Publicis vs. Trade Desk demonstrou que mesmo as maiores plataformas do mundo podem operar com práticas questionáveis quando não há auditoria rigorosa. A lição é clara: **audite, questione e exija visibilidade total**.

## Perguntas Frequentes

### O que foi o caso Publicis vs. The Trade Desk?

Foi a auditoria conduzida a pedido da Publicis sobre a operação da The Trade Desk, que apontou irregularidades na cadeia programática segundo reportagens do Ad Age, Adweek e Meio e Mensagem. As ações da empresa caíram mais de 12% em dois dias e a Omnicom anunciou auditoria própria.

### O que é tech tax na mídia programática?

É a soma das taxas cobradas pelos intermediários entre o anunciante e o publisher. Estudos da ISBA indicam que, em média, apenas 51% do investimento programático chega efetivamente a quem publica o conteúdo.

### Como auditar a própria operação programática?

Exigindo visibilidade sobre inventário, taxas e caminho de compra: auditoria do inventário antes da campanha, relatório de domínios, breakdown de custos e acesso a dados granulares de entrega — não apenas o resumo consolidado.

### O que o anunciante deve perguntar ao parceiro de mídia?

Quanto do investimento vai para mídia e quanto vai para taxas, por quais intermediários a impressão passa, quem verifica a entrega de forma independente e se há relatório de domínios disponível para conferência.`,
  },
  {
    id: 6,
    slug: "spotify-ads-audio-programatico",
    category: "Áudio",
    title: "Spotify Ads e Áudio Programático: O Canal que Sua Marca Ainda Não Explorou",
    summary: "Spotify Ads alcança mais de 36 milhões de usuários no Brasil, com taxa de conclusão acima de 95% e CPE de R$0,10 a R$0,25. Veja como estruturar a campanha.",
    date: "15 Fev 2025",
    readTime: "6 min",
    cover: "/blog/spotify-audio-programatico.webp",
    author: "South Media",
    content: `## Como Funciona a Publicidade no Spotify Ads?

Spotify Ads é a plataforma de publicidade em áudio do Spotify, que no Brasil reúne mais de 36 milhões de usuários ativos — cerca de 60% deles no plano gratuito com anúncios. Segundo dados da Spotify Advertising, 93% dos ouvintes prestam atenção aos anúncios e a taxa de conclusão supera 95%. O modelo de cobrança mais usado é o CPE (custo por escuta), com benchmark de R$0,10 a R$0,25.

Enquanto a maioria dos gestores de marketing concentra seus investimentos em display, vídeo e redes sociais, o áudio programático permanece como um dos canais mais subutilizados — e com maior potencial de crescimento — do mercado brasileiro.

O Spotify, com mais de **36 milhões de usuários ativos no Brasil** (sendo aproximadamente 60% no plano gratuito com anúncios), representa uma oportunidade massiva para marcas que buscam engajamento genuíno.

## Por Que o Áudio é Diferente

O áudio digital tem uma característica única que nenhum outro formato oferece: **atenção exclusiva**. Quando um usuário está ouvindo música ou podcast, o anúncio de áudio é a única mensagem publicitária competindo por sua atenção naquele momento.

Diferente do display (onde o banner compete com o conteúdo da página), do vídeo (onde o skip button está sempre presente) ou das redes sociais (onde o scroll é infinito), o áudio captura a atenção de forma íntima e pessoal.

**Dados que comprovam:**
- 93% dos ouvintes de Spotify prestam atenção aos anúncios (pesquisa Spotify Advertising).
- Anúncios de áudio geram 24% mais recall que anúncios de display.
- A taxa de conclusão de anúncios de áudio no Spotify é superior a 95%.

## Formatos Disponíveis

### Audio Ads (15s e 30s)
O formato clássico. Um spot de áudio inserido entre músicas ou episódios de podcast. Pode ser acompanhado de um companion banner visual que aparece na tela do dispositivo.

### Podcast Ads
Anúncios inseridos em podcasts — seja de forma programática (inserção dinâmica) ou como leitura do host. Podcasts oferecem contexto e credibilidade únicos.

### Video Takeover
Quando o usuário está com o app aberto e a tela ativa, é possível entregar anúncios em vídeo com som. Combina o impacto visual do vídeo com a atenção do ambiente de áudio.

### Sponsored Playlists
Sua marca patrocina uma playlist popular, associando-se ao momento e ao mood do ouvinte. Ideal para branding e associação de marca.

## Segmentação no Spotify

A segmentação no Spotify vai muito além de dados demográficos:

- **Gênero musical:** Alcance fãs de sertanejo, funk, rock, pop, eletrônica, etc.
- **Momento do dia:** Manhã (workout), tarde (trabalho), noite (relaxamento).
- **Atividade:** Treino, estudo, culinária, viagem, festa.
- **Plataforma:** Mobile, desktop, smart speaker, carro conectado.
- **Podcast por tema:** Tecnologia, negócios, saúde, cultura, comédia.

**Essa granularidade permite que sua marca esteja presente no momento certo, com a mensagem certa, no contexto certo.**

## Métricas e Performance

As métricas de áudio programático incluem:

- **CPE (Custo por Escuta):** Quanto custa cada escuta completa do seu anúncio. Benchmark: R$0,10 a R$0,25.
- **Completion Rate:** Percentual de ouvintes que escutaram o anúncio completo. Benchmark: >90%.
- **Reach e Frequency:** Alcance único e frequência média por ouvinte.
- **Companion Banner CTR:** Taxa de clique no banner visual que acompanha o áudio.

## Case Real: Resultados em Áudio

Em uma campanha recente no Spotify operada pela South Media para uma escola de idiomas:

- **CPE mantido em R$0,15** — dentro do benchmark planejado.
- **154.000 escutas completas** — superando a projeção em 23,3%.
- **Taxa de conclusão de 93,7%** — demonstrando o alto engajamento do formato.
- **Sobre-entrega de 23,3%** — mais impressões entregues que o contratado, sem custo adicional.

## Quando Usar Áudio Programático

O áudio programático é especialmente eficaz para:

- **Campanhas de branding:** A natureza íntima do áudio cria conexões emocionais fortes.
- **Lançamentos de produto:** Spots criativos com storytelling capturam a imaginação.
- **Campanhas regionais:** Segmentação geográfica precisa com mensagens localizadas.
- **Complemento de mídia mix:** O áudio preenche momentos que outros canais não alcançam (dirigindo, cozinhando, se exercitando).

## A Importância de Considerar Áudio no Plano

O áudio programático não é o futuro — é o presente. Com custos acessíveis, engajamento superior e uma audiência massiva no Brasil, o Spotify e outras plataformas de áudio representam uma oportunidade que gestores inteligentes não podem ignorar. Ignorar o canal é deixar fora do plano um dos formatos com melhor relação atenção-investimento disponível no ecossistema digital brasileiro atual.

## Perguntas Frequentes

### Quanto custa anunciar no Spotify?

O modelo mais usado é o CPE (custo por escuta), com benchmark de R$0,10 a R$0,25 por escuta completa. O investimento total depende do alcance desejado e do nível de segmentação aplicado à campanha.

### O que é CPE?

É o custo por escuta: o anunciante paga por cada reprodução completa do anúncio de áudio. Diferente do CPM, que cobra por impressão entregue, o CPE está atrelado ao anúncio efetivamente ouvido até o fim.

### A publicidade em áudio funciona?

Os indicadores do canal são fortes: segundo a Spotify Advertising, 93% dos ouvintes prestam atenção aos anúncios, a taxa de conclusão passa de 95% e anúncios de áudio geram 24% mais recall que anúncios de display.

### Como segmentar campanhas no Spotify?

A segmentação vai além de dados demográficos: é possível ativar por momento de escuta, gênero musical, tipo de playlist, contexto e comportamento de consumo — o que permite alinhar a mensagem ao estado de espírito do ouvinte.`,
  },
  {
    id: 5,
    slug: "drive-to-store-impacto-digital-lojas",
    category: "Performance",
    title: "Drive to Store: Como Medir o Impacto do Digital nas Suas Lojas Físicas",
    summary: "Drive to Store leva o consumidor do anúncio digital até a loja e mede a visita: uplift de 15% a 45% e CPV de R$3 a R$15 nas campanhas operadas pela South Media.",
    date: "20 Fev 2025",
    readTime: "5 min",
    cover: "/blog/drive-to-store.webp",
    author: "South Media",
    content: `## O Que É Drive to Store e Como Medir o Resultado na Loja?

Drive to Store é a estratégia de mídia programática que usa dados de localização para levar o consumidor até um ponto de venda físico — e medir essa visita. O indicador central é o uplift de visitas: a diferença entre o grupo exposto à campanha e um grupo de controle. Nas campanhas operadas pela South Media, o uplift observado fica entre 15% e 45%, o CPV (custo por visita) entre R$3 e R$15, e 60% das visitas atribuídas ocorrem nos primeiros 7 dias após a exposição.

Um dos maiores desafios do marketing moderno é conectar o investimento em mídia digital com resultados no mundo físico. Para marcas com presença em lojas, restaurantes, concessionárias ou qualquer ponto de venda físico, a pergunta é sempre a mesma: "Minha campanha digital está gerando visitas reais?"

A resposta é sim — e hoje temos a tecnologia para provar isso.

## O Que é Drive to Store?

Drive to Store é uma estratégia de mídia programática focada em gerar tráfego para pontos de venda físicos.

**Diferente de campanhas puramente digitais, o objetivo final não é um clique ou uma conversão online, mas sim uma visita presencial.**

## Como Funciona a Mensuração

A mensuração de Drive to Store utiliza dados de localização de dispositivos móveis para identificar visitas a pontos de venda após a exposição a anúncios digitais. O processo funciona assim:

1. **Exposição:** O usuário é impactado por um anúncio digital (display, vídeo, CTV, áudio).
2. **Registro:** O ID do dispositivo é registrado como "exposto à campanha".
3. **Visita:** Quando o mesmo dispositivo é detectado dentro do perímetro da loja (via GPS, Wi-Fi ou beacons), a visita é registrada.
4. **Atribuição:** A visita é atribuída à campanha, considerando janelas de atribuição configuráveis (24h, 7 dias, 14 dias, 30 dias).

## Metodologias de Mensuração

### Footfall Attribution
A metodologia mais utilizada. Compara a taxa de visita do grupo exposto (quem viu o anúncio) com um grupo de controle (quem não viu). A diferença estatisticamente significativa é atribuída à campanha.

### Uplift Analysis
Mede o incremento de visitas gerado pela campanha. Se o grupo exposto tem uma taxa de visita 30% superior ao grupo de controle, o uplift é de 30%.

### Cost per Visit (CPV)
Divide o investimento total pelo número de visitas incrementais atribuídas à campanha. É a métrica definitiva de eficiência para Drive to Store.

## Fatores que Influenciam o Sucesso

**Segmentação geográfica:** Impactar usuários que estão a uma distância razoável do ponto de venda. Não adianta mostrar um anúncio de uma loja em Curitiba para alguém em Manaus.

**Timing:** Campanhas de Drive to Store performam melhor quando ativadas em horários e dias relevantes para o negócio. Um restaurante deve intensificar a entrega próximo ao horário de almoço e jantar.

**Criativo com call-to-action claro:** O anúncio deve comunicar claramente o benefício de visitar a loja — promoção, lançamento, experiência exclusiva.

**Frequência adequada:** Estudos mostram que são necessárias entre 3 e 7 exposições para gerar uma visita. Menos que isso é insuficiente; mais pode gerar fadiga.

## Resultados Reais

Em campanhas de Drive to Store operadas pela South Media, observamos consistentemente:

- **Uplift de visitas:** entre 15% e 45%, dependendo do segmento e da oferta.
- **CPV (Custo por Visita):** entre R$3 e R$15, variando por vertical.
- **Janela de conversão:** 60% das visitas atribuídas ocorrem nos primeiros 7 dias após a exposição.

## A Importância do Drive to Store

Drive to Store é a prova definitiva de que mídia digital gera resultados no mundo real. Com a tecnologia e a metodologia corretas, é possível atribuir cada visita ao investimento que a gerou — transformando mídia programática em um canal mensurável e otimizável para negócios com presença física.

## Perguntas Frequentes

### O que é Drive to Store?

É a estratégia de mídia programática que usa dados de localização para gerar tráfego a pontos de venda físicos. Diferente de campanhas puramente digitais, o objetivo final não é o clique, e sim a visita presencial à loja.

### Como se mede a visita gerada por uma campanha digital?

Comparando o comportamento de um grupo exposto à campanha com o de um grupo de controle não exposto. A diferença de taxa de visita entre os dois é o uplift, que isola o efeito da mídia do movimento natural da loja.

### O que é uplift de visitas?

É o incremento de visitas atribuível à campanha. Se o grupo exposto visita a loja 30% mais que o grupo de controle, o uplift é de 30%. É o indicador que separa visita causada pela mídia de visita que aconteceria de qualquer forma.

### Quanto tempo depois do anúncio a visita acontece?

A maior parte acontece rápido: cerca de 60% das visitas atribuídas ocorrem nos primeiros 7 dias após a exposição. Por isso a janela de mensuração precisa ser definida antes do início da campanha.`,
  },
  {
    id: 4,
    slug: "fraude-publicitaria-identificar-eliminar",
    category: "Programática",
    title: "Fraude Publicitária: Como Identificar e Eliminar Desperdício em Mídia",
    summary: "Entre 15% e 30% do investimento programático global se perde com fraude. Veja os sinais de alerta e as camadas de verificação que barram tráfego inválido.",
    date: "28 Fev 2025",
    readTime: "7 min",
    cover: "/blog/fraude-publicitaria.webp",
    author: "South Media",
    content: `## Como Identificar e Eliminar a Fraude Publicitária?

Fraude publicitária é o consumo de verba por impressões que nunca chegaram a uma pessoa real — bots, domain spoofing, click farms e tráfego mascarado. Estima-se que, globalmente, entre 15% e 30% do investimento em mídia programática seja desperdiçado dessa forma. Na prática: uma campanha de R$100.000 por mês com 20% de fraude perde R$20.000 mensais, ou R$240.000 por ano, que poderiam estar comprando impressões legítimas.

A fraude publicitária é um dos maiores desafios da indústria de mídia digital. Estima-se que globalmente, entre 15% e 30% do investimento em mídia programática seja desperdiçado com impressões fraudulentas — tráfego gerado por bots, fazendas de cliques, domain spoofing e outras técnicas sofisticadas.

No Brasil, o cenário não é diferente. Sem as proteções adequadas, uma parcela significativa do seu orçamento pode estar sendo consumida por impressões que nunca foram vistas por pessoas reais.

## Tipos Mais Comuns de Fraude

### Tráfego de Bots
Programas automatizados que simulam comportamento humano — navegam em sites, "assistem" vídeos e até "clicam" em anúncios. Bots sofisticados podem imitar padrões de navegação humana, tornando a detecção mais complexa.

### Domain Spoofing
Sites de baixa qualidade que se passam por publishers premium. Um site obscuro pode se apresentar como um grande portal de notícias, cobrando CPMs premium por inventário sem valor.

### Ad Stacking
Múltiplos anúncios empilhados em um único espaço publicitário. Apenas o anúncio do topo é visível, mas todos são contabilizados como impressões entregues.

### Pixel Stuffing
Anúncios renderizados em espaços de 1x1 pixel — tecnicamente "entregues", mas completamente invisíveis ao olho humano.

### Tráfego de VPN e Proxy
Usuários que utilizam VPNs podem distorcer dados de geolocalização, fazendo com que impressões destinadas a São Paulo sejam entregues em outros países.

## O Impacto Financeiro

Para uma campanha com investimento mensal de R$100.000 e uma taxa de fraude de 20%, isso significa R$20.000 desperdiçados por mês — R$240.000 por ano. Esse valor poderia ser redirecionado para impressões legítimas, gerando resultados reais.

## Como a South Media Combate a Fraude

Na South Media, operamos uma abordagem de verificação em três camadas, combinando tecnologia proprietária, ferramentas de mercado e metodologia exclusiva:

### Camada 1: Double Verify (Pré-bid) — Tecnologia de Mercado
Operamos com a tecnologia Double Verify, líder global em verificação independente, para filtrar inventário fraudulento antes mesmo de participar do leilão. Isso elimina a maior parte do tráfego de bots e domain spoofing na origem.

### Camada 2: Anti-VPN Tech — Tecnologia 100% Proprietária South Media
Anti-VPN Tech é a tecnologia proprietária desenvolvida pela South Media para identificar e bloquear, em tempo real, tráfego originado de VPNs, proxies e data centers. É essa camada que garante que a segmentação geográfica seja precisa e que as impressões sejam entregues para usuários reais na localização correta — algo que nenhuma DSP de mercado oferece de forma nativa.

### Camada 3: Double Check — Metodologia Exclusiva South Media
Double Check é a metodologia exclusiva da South Media para validação de inventário antes de cada campanha ir ao ar. Não é uma tecnologia automatizada — é um protocolo operacional que combina auditoria manual e cruzamento de dados das ferramentas de verificação. Verificamos a qualidade dos publishers, a legitimidade do tráfego e a segurança da marca em cada operação, antes do investimento começar.

## Indicadores de Fraude que Você Deve Monitorar

Como gestor, fique atento a estes sinais:

1. **CTR anormalmente alto:** Taxas de clique acima de 1% em display podem indicar cliques fraudulentos.
2. **Bounce rate elevado:** Se o tráfego do anúncio tem bounce rate acima de 90%, pode ser tráfego de bots.
3. **Tempo de sessão zero:** Visitantes que "clicam" mas passam 0 segundos no site são provavelmente bots.
4. **Picos inexplicáveis:** Aumentos súbitos de impressões ou cliques sem correlação com mudanças na campanha.
5. **Geolocalização inconsistente:** Impressões registradas em localizações que não fazem sentido para a campanha.

## Boas Práticas para Proteger Seu Investimento

- **Exija transparência:** Seu parceiro de mídia deve fornecer relatórios detalhados com métricas de viewability e brand safety.
- **Use verificadores independentes:** Double Verify, IAS ou MOAT devem ser parte obrigatória de qualquer operação programática.
- **Monitore em tempo real:** Dashboards com dados em tempo real permitem identificar anomalias rapidamente.
- **Questione CPMs muito baixos:** Inventário premium tem custo. Se o preço parece bom demais para ser verdade, provavelmente é.
- **Prefira parceiros com tecnologia proprietária:** Empresas que investem em tecnologia anti-fraude demonstram compromisso com a qualidade.

## A Realidade do Combate à Fraude

**A fraude publicitária não vai desaparecer — ela evolui constantemente.**

A diferença está em ter um parceiro que investe continuamente em tecnologia de detecção e prevenção. Cada percentual recuperado de tráfego válido é orçamento que volta a trabalhar para gerar resultado real — e isso só acontece quando proteção contra fraude é tratada como parte fundamental da operação, não como add-on opcional.

## Perguntas Frequentes

### O que é fraude publicitária?

É o consumo de verba de mídia por impressões que nunca foram vistas por uma pessoa real. Inclui bots, domain spoofing (sites que se passam por outros), click farms e tráfego mascarado para simular audiência qualificada.

### Quanto se perde com fraude em mídia programática?

As estimativas globais apontam entre 15% e 30% do investimento programático desperdiçado com impressões fraudulentas. Em uma campanha de R$100.000 mensais com 20% de fraude, isso representa R$240.000 por ano.

### Como identificar fraude em uma campanha?

Alguns sinais recorrentes: CTR anormalmente alto em display (acima de 1%), bounce rate acima de 90%, tempo de permanência quase nulo e concentração de entrega em domínios desconhecidos. Nenhum é prova isolada, mas juntos indicam tráfego inválido.

### Como se proteger da fraude publicitária?

Com verificação em camadas: curadoria de inventário antes da compra, verificação independente durante a entrega e tecnologia de detecção de tráfego mascarado — caso da Anti-VPN Tech, tecnologia 100% proprietária da South Media.`,
  },
  {
    id: 3,
    slug: "cpm-cpc-cpe-cpa-guia-gestores",
    category: "Performance",
    title: "O Que é CPM, CPC, CPE e CPA? Guia Completo para Gestores",
    summary: "CPM, CPC, CPE e CPA medem coisas diferentes. Veja os benchmarks brasileiros por formato e qual métrica cobrar em cada objetivo de campanha programática.",
    date: "5 Mar 2025",
    readTime: "10 min",
    cover: "/blog/cpm-cpc-cpe-cpa.webp",
    author: "South Media",
    content: `## CPM, CPC, CPE e CPA: Qual Métrica Usar em Cada Objetivo?

CPM, CPC, CPE e CPA são modelos de precificação que respondem a objetivos diferentes. O CPM é o custo por mil impressões, base das campanhas de alcance — no Brasil, display trabalha entre R$3 e R$15, vídeo in-stream entre R$15 e R$40, CTV entre R$25 e R$60 e DOOH entre R$10 e R$30. O CPC cobra por clique e atende tráfego; o CPE, por escuta ou engajamento completo; o CPA, por aquisição concretizada.

**No universo da mídia programática, entender as métricas de precificação e performance não é opcional — é fundamental.**

Gestores que dominam esses conceitos tomam decisões mais inteligentes, negociam melhor com fornecedores e conseguem justificar investimentos perante a diretoria com dados concretos.

## CPM — Custo por Mil Impressões

O CPM é a métrica mais básica e universal da mídia programática. Ele representa o custo para exibir seu anúncio mil vezes.

**Fórmula:** CPM = (Investimento Total / Impressões) × 1.000

**Quando usar:** O CPM é ideal para campanhas de awareness e branding, onde o objetivo principal é maximizar a exposição da marca. É a métrica padrão para compra de display, vídeo e CTV.

**Referências de mercado no Brasil:**
- Display padrão: R$3 a R$15
- Vídeo in-stream: R$15 a R$40
- CTV: R$25 a R$60
- DOOH: R$10 a R$30

**Atenção:** Um CPM baixo nem sempre é bom. CPMs muito baratos frequentemente indicam inventário de baixa qualidade, tráfego fraudulento ou posicionamentos pouco visíveis. Priorize qualidade sobre quantidade.

## CPC — Custo por Clique

O CPC mede quanto você paga cada vez que alguém clica no seu anúncio. É a métrica preferida para campanhas de tráfego e consideração.

**Fórmula:** CPC = Investimento Total / Cliques

**Quando usar:** Campanhas que buscam direcionar tráfego qualificado para landing pages, sites ou aplicativos. O CPC é especialmente relevante para e-commerce, geração de leads e campanhas de consideração.

**Referências de mercado no Brasil:**
- Display: R$0,50 a R$3,00
- Vídeo: R$1,00 a R$5,00
- Remarketing: R$0,30 a R$2,00

**Dica avançada:** Analise o CPC em conjunto com a taxa de conversão do site. Um CPC de R$2,00 com taxa de conversão de 5% é mais eficiente que um CPC de R$0,50 com conversão de 0,5%.

## CPE — Custo por Engajamento

O CPE mede o custo de cada interação significativa do usuário com seu anúncio. "Engajamento" pode significar diferentes ações dependendo do formato: visualização completa de vídeo, interação com rich media, expansão de anúncio, etc.

**Fórmula:** CPE = Investimento Total / Engajamentos

**Quando usar:** Campanhas de áudio (Spotify), vídeo interativo e rich media, onde a interação do usuário é mais valiosa que a simples impressão.

**Referências de mercado no Brasil:**
- Áudio (Spotify): R$0,10 a R$0,25
- Rich media: R$0,50 a R$2,00
- Vídeo interativo: R$0,30 a R$1,50

## CPA — Custo por Aquisição

O CPA é a métrica definitiva de performance. Ele mede quanto custa cada conversão — seja uma venda, um cadastro, um download ou qualquer ação definida como objetivo da campanha.

**Fórmula:** CPA = Investimento Total / Conversões

**Quando usar:** Campanhas focadas em resultados mensuráveis e diretos. O CPA é a métrica mais importante para justificar investimentos perante a diretoria, pois conecta diretamente o investimento em mídia ao resultado de negócio.

**Como otimizar o CPA:**
1. **Segmentação precisa:** Quanto mais qualificada a audiência, menor o CPA.
2. **Criativos relevantes:** Anúncios que ressoam com a audiência geram mais conversões.
3. **Landing pages otimizadas:** A experiência pós-clique é tão importante quanto o anúncio.
4. **Otimização algorítmica:** Plataformas de DSP utilizam machine learning para otimizar lances em tempo real.
5. **Atribuição correta:** Modelos de atribuição multi-touch capturam o valor real de cada canal.

## Métricas Complementares Essenciais

Além das métricas de custo, gestores devem acompanhar:

- **VTR (View-Through Rate):** Percentual de visualizações completas de vídeo. Benchmark: >70% para CTV, >50% para vídeo display.
- **CTR (Click-Through Rate):** Taxa de cliques sobre impressões. Benchmark: 0,1% a 0,5% para display, 0,5% a 2% para remarketing.
- **Viewability:** Percentual de impressões efetivamente visíveis. Benchmark mínimo: 70%.
- **Brand Safety:** Percentual de impressões em ambientes seguros para a marca. Deve ser >95%.

## Como Escolher a Métrica Certa

A escolha da métrica principal depende do estágio do funil:

- **Topo (Awareness):** CPM + Viewability + VTR
- **Meio (Consideração):** CPC + CTR + CPE
- **Fundo (Conversão):** CPA + ROAS

## A Importância de Dominar as Métricas

Dominar essas métricas é o primeiro passo para transformar mídia programática de um centro de custo em um motor de crescimento. Decisões informadas exigem leitura correta dos números — e leitura correta dos números exige conhecer o que cada métrica está efetivamente medindo, em que contexto, com que limitações. Sem esse domínio, o relatório vira ruído; com ele, vira insumo para decisão.

## Perguntas Frequentes

### O que é CPM?

É o custo por mil impressões — quanto se paga para exibir o anúncio mil vezes. É a métrica mais básica e universal da mídia programática, e a base de campanhas cujo objetivo é alcance.

### Qual a diferença entre CPM e CPC?

O CPM cobra pela entrega da impressão, independentemente de clique; o CPC cobra apenas quando alguém clica. O CPM serve a objetivos de alcance e lembrança, e o CPC a objetivos de tráfego e consideração.

### Qual o CPM médio no Brasil por formato?

Os benchmarks de mercado ficam em torno de R$3 a R$15 em display padrão, R$15 a R$40 em vídeo in-stream, R$25 a R$60 em CTV e R$10 a R$30 em DOOH. A variação depende de inventário, segmentação e período.

### Qual métrica usar em cada objetivo de campanha?

Alcance e lembrança pedem CPM; tráfego pede CPC; campanhas de áudio e engajamento completo pedem CPE; e campanhas de aquisição pedem CPA. Cobrar a métrica errada faz a campanha parecer boa ou ruim pelo motivo errado.`,
  },
  {
    id: 2,
    slug: "lba-vs-geofence-tecnologia",
    category: "Dados",
    title: "LBA vs Geofence: Qual Tecnologia Funciona Melhor para o Seu Negócio?",
    summary: "LBA constrói audiência pelo histórico de localização; geofencing ativa em tempo real quem entra na área. Entenda quando usar cada uma — e como combiná-las.",
    date: "10 Mar 2025",
    readTime: "8 min",
    cover: "/blog/lba-vs-geofence.webp",
    author: "South Media",
    content: `## Qual a Diferença Entre LBA e Geofencing?

LBA e geofencing são tecnologias de geolocalização com funções distintas. LBA (Location Based Audiences) usa dados históricos de localização para construir audiências qualificadas — quem frequentou determinado tipo de lugar ao longo das últimas semanas. Geofencing cria cercas virtuais ao redor de locais específicos: quando um dispositivo entra na área delimitada, o usuário se torna elegível para receber anúncios em tempo real. A primeira serve escala e consideração; a segunda, conversão e visita.

A geolocalização é uma das ferramentas mais poderosas da mídia programática moderna. Ela permite que marcas alcancem consumidores com base em sua localização física — seja em tempo real ou com base em histórico de visitas. Duas tecnologias dominam esse cenário: **Location Based Audiences (LBA)** e **Geofencing**.

## O Que é Location Based Audiences (LBA)?

LBA é uma estratégia que utiliza dados históricos de localização para construir audiências qualificadas. Em vez de impactar o usuário no momento exato em que ele está em determinado local, o LBA identifica padrões de comportamento baseados em locais que o usuário frequentou no passado.

**Como funciona na prática:**
- Coletamos dados de localização de dispositivos móveis (com consentimento) ao longo de semanas ou meses.
- Identificamos usuários que frequentaram locais relevantes para a campanha (concorrentes, eventos, pontos de interesse).
- Criamos segmentos de audiência baseados nesses padrões.
- Ativamos campanhas para esses segmentos em qualquer momento, independentemente de onde estejam agora.

**Vantagens do LBA:**
- Escala significativamente maior que geofencing em tempo real.
- Possibilidade de impactar o usuário em múltiplos momentos e canais.
- Ideal para campanhas de awareness e consideração.
- Permite combinação com outros dados (demográficos, comportamentais).

## O Que é Geofencing?

Geofencing é uma tecnologia que cria "cercas virtuais" ao redor de localizações específicas. Quando um dispositivo móvel entra nessa área delimitada, o usuário se torna elegível para receber anúncios em tempo real.

**Como funciona na prática:**
- Definimos um perímetro geográfico (raio de 100m a vários quilômetros) ao redor de um ponto de interesse.
- Quando o dispositivo do usuário entra nessa área, ele é adicionado a uma lista de impactação.
- O anúncio pode ser entregue imediatamente (real-time) ou em uma janela de tempo posterior.

**Vantagens do Geofencing:**
- Precisão geográfica extrema — ideal para campanhas hiperlocais.
- Relevância contextual máxima — o usuário está fisicamente próximo ao ponto de interesse.
- Excelente para drive to store e promoções locais.
- Possibilidade de "conquista" de clientes de concorrentes.

## Comparativo Direto

| Critério | LBA | Geofencing |
|----------|-----|------------|
| Timing | Histórico | Tempo real |
| Escala | Alta | Moderada |
| Precisão | Moderada | Alta |
| Melhor para | Awareness, consideração | Drive to store, conversão |
| Custo por mil | Menor | Maior |
| Complexidade | Média | Alta |

## Quando Usar Cada Tecnologia

**Use LBA quando:**
- Seu objetivo é alcançar grande escala com segmentação geográfica.
- Você quer impactar frequentadores de locais específicos ao longo do tempo.
- A campanha é de branding ou consideração.
- Precisa combinar dados de localização com outros segmentos.

**Use Geofencing quando:**
- Seu objetivo é gerar tráfego para lojas físicas.
- Você quer impactar consumidores no momento da decisão de compra.
- A campanha é promocional ou de conversão imediata.
- Precisa conquistar clientes de concorrentes próximos.

## A Abordagem Integrada

Na South Media, recomendamos uma abordagem que combina ambas as tecnologias em uma estratégia unificada.

**Utilizamos LBA para construir awareness e consideração em larga escala, e geofencing para converter essa consideração em visitas e vendas.**

Essa combinação, operada com tecnologias integradas de geolocalização e a camada proprietária Anti-VPN Tech, permite que cada real investido trabalhe em múltiplas frentes, maximizando o retorno sobre o investimento.

## A Escolha Que Faz Sentido

Não existe uma tecnologia universalmente superior — LBA e Geofencing são complementares. A escolha depende dos seus objetivos, do seu orçamento e da natureza do seu negócio. O mais importante é entender o que cada uma efetivamente entrega, em que contexto cada uma performa melhor, e como elas se combinam para cobrir diferentes momentos da jornada do consumidor.

## Perguntas Frequentes

### O que é LBA (Location Based Audiences)?

É a estratégia que utiliza dados históricos de localização para construir audiências qualificadas — pessoas que frequentaram determinados tipos de lugar em um período. Serve para alcançar perfis de comportamento em escala, sem depender de presença naquele instante.

### O que é geofencing?

É a tecnologia que cria cercas virtuais ao redor de localizações específicas. Quando um dispositivo móvel entra na área delimitada, o usuário se torna elegível para receber anúncios em tempo real.

### Qual a diferença entre LBA e geofencing?

LBA olha para trás — o histórico de lugares frequentados — e constrói audiência em escala. Geofencing olha para o agora: ativa quem está entrando em uma área definida. Uma serve a awareness e consideração; a outra, a conversão e visita.

### Dá para usar LBA e geofencing na mesma campanha?

Sim, e é o uso mais eficiente das duas. LBA constrói awareness e consideração em larga escala, e o geofencing converte essa consideração em visitas — desde que raio, tempo de permanência e exclusões estejam bem configurados.`,
  },
  {
    id: 1,
    slug: "ctv-brasil-netflix-acessivel",
    category: "CTV",
    title: "CTV no Brasil: Por que Anunciar na Netflix é Mais Acessível do Que Você Pensa",
    summary: "Anunciar na Netflix e em CTV no Brasil cabe em orçamento médio: CPM entre R$25 e R$60 e mais de 50 milhões de domicílios com streaming. Veja como funciona.",
    date: "15 Mar 2025",
    readTime: "6 min",
    cover: "/blog/ctv-netflix.webp",
    author: "South Media",
    content: `## Por Que Anunciar em CTV no Brasil é Mais Acessível do Que Parece?

CTV (TV Conectada) é a televisão que acessa conteúdo por streaming e permite compra de mídia programática, com segmentação e mensuração por impressão. No Brasil, são mais de 50 milhões de domicílios conectados a plataformas de streaming e a penetração de Smart TVs passa de 65% dos lares com televisão. O CPM médio fica entre R$25 e R$60, e a compra programática permite iniciar campanhas a partir de R$5.000 mensais — patamar bem distante dos orçamentos milionários da TV aberta.

A TV Conectada (CTV) transformou radicalmente a forma como as marcas se comunicam com seus consumidores. Com a explosão dos serviços de streaming no Brasil — Netflix, Globoplay, Disney+, Amazon Prime Video, Pluto TV e muitos outros — o inventário publicitário em CTV cresceu exponencialmente, criando oportunidades que antes eram exclusivas de grandes anunciantes.

## O Cenário Atual da CTV no Brasil

O Brasil já conta com mais de **50 milhões de domicílios** conectados a plataformas de streaming. Esse número representa uma audiência qualificada, engajada e que consome conteúdo de forma ativa — diferente da TV linear, onde o espectador muitas vezes está distraído.

A penetração de Smart TVs no país ultrapassou 65% dos lares com televisão, e o consumo de vídeo via streaming já supera o tempo dedicado à TV aberta em diversas faixas etárias, especialmente entre 18 e 49 anos.

## Por Que a CTV é Mais Acessível do Que Você Imagina

**Historicamente, anunciar em televisão exigia orçamentos milionários.**

Um spot de 30 segundos no horário nobre da TV aberta pode custar centenas de milhares de reais. Com a CTV programática, esse cenário mudou completamente:

**Compra por impressão (CPM):** Você paga apenas pelas impressões efetivamente entregues, sem desperdício. O CPM médio em CTV no Brasil varia entre R$25 e R$60, dependendo do inventário e da segmentação.

**Segmentação avançada:** Diferente da TV linear, a CTV permite segmentar por dados demográficos, comportamentais, geográficos e até por interesses específicos. Você alcança exatamente quem precisa alcançar.

**Sem mínimo de investimento proibitivo:** Com a compra programática, é possível iniciar campanhas de CTV com orçamentos a partir de R$5.000 mensais, tornando o canal acessível para empresas de médio porte.

**Mensuração completa:** Cada impressão é rastreável. Você sabe exatamente quantas pessoas viram seu anúncio, por quanto tempo, e pode atribuir conversões ao investimento.

## Como Funciona a Compra Programática de CTV

A compra de mídia em CTV via programática funciona de forma semelhante ao display tradicional, mas com algumas particularidades:

1. **Definição de audiência:** Utilizamos dados proprietários e de terceiros para definir o perfil ideal do espectador.
2. **Seleção de inventário:** Acessamos mais de 1.330 publishers de CTV no Brasil, incluindo Netflix (plano com anúncios), Globoplay, Samsung TV Plus, LG Channels e dezenas de outros.
3. **Ativação em tempo real:** Os anúncios são veiculados em tempo real, com otimização contínua baseada em performance.
4. **Relatórios transparentes:** Dashboards em tempo real mostram métricas como VTR (View-Through Rate), alcance, frequência e custo por visualização completa.

## Formatos Disponíveis em CTV

A CTV oferece formatos de alto impacto que capturam a atenção do espectador:

- **Pre-roll (15s e 30s):** Exibido antes do conteúdo principal, com taxas de conclusão superiores a 90%.
- **Mid-roll:** Inserido durante o conteúdo, similar ao intervalo comercial, mas com menor frequência e maior atenção.
- **Pause ads:** Exibido quando o espectador pausa o conteúdo — formato inovador com alta visibilidade.
- **Interactive ads:** Permitem interação via controle remoto, direcionando para landing pages ou QR codes.

## Resultados Reais em CTV

Em campanhas recentes operadas pela South Media, os resultados em CTV superaram consistentemente outros canais:

- **Taxa de conclusão de vídeo (VTR):** média de 93,7% — significativamente superior aos 65% típicos de vídeo display.
- **Brand lift:** aumento médio de 23% em recall de marca após campanhas de CTV.
- **Custo por visualização completa:** até 40% menor que vídeo in-stream tradicional.

## A Consolidação do Canal

A CTV no Brasil não é mais um canal experimental — é uma realidade consolidada que oferece escala, precisão e mensuração. Marcas que ainda não exploram esse inventário estão perdendo a oportunidade de alcançar audiências premium com a eficiência e transparência que o canal oferece. A democratização do acesso, combinada com a maturidade técnica das plataformas brasileiras, tornou a CTV opção real para anunciantes que antes não tinham como acessar inventário de tela grande em escala programática.

## Perguntas Frequentes

### Quanto custa anunciar em CTV no Brasil?

O CPM médio varia entre R$25 e R$60, conforme inventário e segmentação. Como a compra é por impressão entregue, é possível iniciar campanhas com orçamentos a partir de R$5.000 mensais, sem os mínimos proibitivos da TV aberta.

### É possível anunciar na Netflix no Brasil?

Sim. O plano com anúncios da Netflix integra o inventário de CTV disponível no país, ao lado de nomes como Globoplay, Samsung TV Plus e LG Channels, dentro de um universo de mais de 1.330 publishers de CTV.

### Qual a diferença entre CTV e TV linear?

Na TV linear a compra é por espaço e horário, com alcance estimado. Em CTV a compra é por impressão entregue, com segmentação por dados demográficos, geográficos e de interesse, e cada impressão é mensurável individualmente.

### Quantos domicílios brasileiros têm streaming?

São mais de 50 milhões de domicílios conectados a plataformas de streaming, com penetração de Smart TVs acima de 65% dos lares com televisão. Em várias faixas etárias, sobretudo entre 18 e 49 anos, o consumo por streaming já supera o da TV aberta.`,
  },
];

export const categories = ["Todos", "Programática", "CTV", "Dados", "Performance", "Áudio"];
