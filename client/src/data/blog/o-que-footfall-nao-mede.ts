import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 18,
    slug: "o-que-footfall-nao-mede",
    category: "Dados",
    title: "O Que Footfall Não Mede, e Por Que Isso Não É Defeito: Como Ler um Relatório de Visitas",
    summary: "Footfall mede visitas à loja, o objetivo do drive to store. Veja o que a métrica não mede, por que isso não é defeito e as 4 perguntas para ler o relatório.",
    date: "14 Mai 2026",
    readTime: "6 min",
    cover: "/blog/footfall-limitacoes.webp",
    author: "South Media",
    content: `## O Que Footfall Mede — e o Que Não Mede?

Footfall é a métrica que mede visitas a um ponto de venda físico feitas por pessoas expostas a uma campanha digital, reconhecendo de forma anônima e agregada os dispositivos que viram o anúncio e depois entraram na loja. Ela mede o que o drive to store promete, a visita, sobre uma amostra de dispositivos projetada estatisticamente. Para o número valer, o relatório precisa mostrar como ele foi construído: amostra, perímetro e grupo de controle.

Quando a mensuração de footfall ganhou maturidade no Brasil, mudou a forma como anunciantes com lojas físicas pensam mídia digital. Pela primeira vez, era possível medir visitas ao ponto de venda geradas por uma campanha programática — fechar o loop entre investimento digital e resultado físico, algo que durante décadas dependeu de inferência ou de pesquisa pós-campanha.

A consequência é que footfall virou número estrela em relatórios de drive to store. Aparece em capas de apresentação, em manchetes de case, em peças de marketing institucional. O problema é que muitos relatórios do mercado entregam esse número sem o contexto de como ele foi medido. E é aí que um bom resultado e um número inflado ficam parecidos.

Esse texto não tem objetivo de desmerecer footfall. É a melhor ferramenta disponível para medir o impacto de mídia digital no ponto físico. O objetivo é mapear o que a métrica não se propõe a medir, e como um relatório bem desenhado trata cada ponto, para que quem lê o número saiba exatamente o que ele significa.

## Ponto 1: Footfall Mede Presença, Não o Motivo da Visita

A métrica registra quando um dispositivo móvel entra no perímetro do ponto de venda após ter sido exposto à campanha. Não registra por quê.

Quem foi à loja porque viu o anúncio? Quem foi porque já ia, e o anúncio só aconteceu de ser exibido antes? Quem foi porque é vizinho e passa por lá todo dia? Um número bruto agrupa os três no mesmo total.

A resposta para isso existe e é padrão em uma medição bem feita: o **grupo de controle**. Compara-se a taxa de visita do grupo exposto com a de um grupo comparável que não foi exposto, e a diferença estatisticamente significativa é o que a campanha acrescentou ao movimento natural da loja. Relatórios de mercado que trazem só o número bruto deixam essa pergunta sem resposta. Na South Media, o drive to store é medido com visitas atribuídas e observadas e com grupo de controle para visitas.

**Implicação para leitura:** quando o relatório mostra "12.000 visitas atribuídas à campanha", a pergunta seguinte é "comparadas a quê?". Com grupo de controle, o número mostra o efeito da campanha; sem ele, mostra só o volume de visitas.

## Ponto 2: Footfall Trabalha Sobre Uma Amostra

A medição funciona quando o dispositivo do consumidor fornece dados de localização para algum dos sistemas que alimentam a base de footfall — apps com permissão de localização ativa e integrações específicas. Quando não fornece, a visita não é detectada.

Significa que footfall captura uma **amostra**, não a totalidade das visitas. Em grandes centros urbanos a cobertura tende a ser maior; em cidades menores, áreas rurais ou públicos com menor uso de apps com localização, ela cai.

O número reportado é então uma **projeção estatística** baseada na amostra detectada — o que é normal e metodologicamente sólido quando a amostra tem tamanho suficiente e o método de projeção é declarado.

**Implicação para leitura:** o relatório deve indicar o tamanho da amostra detectada e a metodologia de projeção. Sem essas informações, "12.000 visitas" pode significar "detectamos 4.500 visitas e projetamos 12.000" ou "detectamos 11.800 e projetamos 12.000". Os dois cenários têm robustez muito diferente.

## Ponto 3: Footfall Não Mede o Que Acontece no Caixa — e Não Precisa

Visita à loja e compra são etapas diferentes. Em alguns negócios, quase toda visita termina em compra — fast food, drogaria, padaria. Em outros, como concessionária, móveis e eletrônicos, muitas visitas são de pesquisa e comparação, parte de uma decisão mais longa.

**Footfall não foi feito para medir venda. Foi feito para medir visita — e, com grupo de controle, mede bem.**

Para campanhas em categorias de alta consideração, a visita costuma ser o primeiro passo de uma decisão mais longa, e o footfall mostra se a campanha colocou o consumidor dentro da loja.

**Implicação para leitura:** em categorias de consideração, a visita é o resultado que a mídia consegue provocar: levar o consumidor ao ponto de venda. O fechamento da compra depende de preço, estoque e atendimento na loja, fatores fora da mídia. Por isso o KPI da campanha de drive to store é visita, não venda. A discussão completa está em [drive to store: da visita à venda](/blog/drive-to-store-venda-incremental-nao-footfall).

## Ponto 4: Perímetro Mal Configurado Conta Quem Não Entrou

Em pontos de venda em áreas de alto fluxo — shopping center, rua comercial movimentada — "entrar no perímetro" não significa necessariamente "entrar na loja". Em um ponto dentro de shopping, alguém passando no corredor a 5 metros da porta pode ser registrado como visita. Em um ponto em rua, alguém esperando o ônibus na porta também.

Os filtros que resolvem isso são conhecidos: dwell time (tempo mínimo dentro do perímetro), perímetro refinado para cobrir só a área da loja e exclusão de dispositivos com padrão de presença incompatível com cliente, como funcionários e vizinhos. Mas precisam ser configurados explicitamente. Quando não são, o número vem inflado por presença que não é cliente. As mesmas decisões estão detalhadas em [geofencing inteligente vs. genérico](/blog/geofencing-inteligente-vs-generico).

**Implicação para leitura:** a precisão do perímetro definido na campanha importa tanto quanto o método de detecção. Perímetro mal configurado gera footfall inflado, que parece sucesso mas é ruído.

## A Camada Que Anti-VPN Tech Adiciona

Existe ainda uma camada de contaminação que poucos relatórios discutem: tráfego de VPN. Dispositivos conectados via VPN registram localização baseada no servidor de saída, não na localização física real. Em algumas análises de footfall, isso aparece como "visitas fantasma" — dispositivos cuja localização registrada coincide com o perímetro do ponto, mas que estão fisicamente em outro lugar.

A Anti-VPN Tech, tecnologia proprietária da South Media, filtra esse tráfego pré-bid, antes que ele entre na base de impressões da campanha. O efeito é duplo: reduz desperdício de impressão para dispositivos com localização forjada e, na mensuração de visitas, elimina o ruído de visitas fantasma. Em campanhas regionais, esse filtro pode mudar o footfall reportado — para menos, em volume bruto, mas para mais, em precisão.

## Como Ler Um Relatório de Footfall

Quatro perguntas separam relatório honesto de relatório que vende ilusão — e são as quatro que um relatório de drive to store bem feito responde sem precisar ser cobrado:

**Existe grupo de controle?** É ele que separa as visitas provocadas pela campanha das que aconteceriam de qualquer jeito. Peça esse comparativo no relatório.

**Qual o tamanho da amostra detectada?** A projeção carrega uma margem de erro que precisa ser comunicada, e ela é maior quanto menor for a amostra.

**Como o perímetro foi configurado?** Perímetro genérico em torno do endereço pode estar capturando tráfego que nada tem a ver com a loja. Perímetro refinado, com dwell time apropriado, gera número mais limpo.

**Tráfego contaminado por VPN foi filtrado?** Em campanhas regionais especialmente, esse filtro muda a precisão do dado.

Footfall continua sendo a melhor ferramenta disponível para medir o impacto de mídia digital no ponto físico. Com amostra declarada, perímetro bem configurado, tráfego VPN filtrado e grupo de controle, o número deixa de ser só volume e passa a mostrar o efeito da campanha na loja. Para entender o processo de medição do começo ao fim, veja [como medir o impacto do digital nas lojas físicas](/blog/drive-to-store-impacto-digital-lojas).

## Perguntas Frequentes

### O que é footfall?

É a métrica que mede visitas a um ponto de venda físico feitas por pessoas expostas a uma campanha digital, reconhecendo de forma anônima e agregada os dispositivos que viram o anúncio e depois entraram na loja. Fecha o loop entre investimento digital e resultado físico.

### O que o footfall não mede?

Não mede intenção nem o que acontece no caixa. Mede visitas, que são o objetivo do drive to store, sobre uma amostra de dispositivos projetada estatisticamente.

### Footfall prova que a campanha funcionou?

Footfall com grupo de controle mostra quantas visitas a campanha provocou além das que aconteceriam sem ela. Sem controle, o número indica volume de visitas, e por isso vale exigir o comparativo no relatório.

### Como ler um relatório de footfall com criticidade?

Perguntando se há grupo de controle, qual o tamanho da amostra detectada, como o perímetro foi configurado e se o tráfego contaminado por VPN foi filtrado. Com essas respostas, o número mostra o efeito real da campanha na loja.`,
  };
