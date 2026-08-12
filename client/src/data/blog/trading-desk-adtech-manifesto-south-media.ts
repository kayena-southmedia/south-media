import type { BlogPost } from "./types";

export const post: BlogPost = {
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
  };
