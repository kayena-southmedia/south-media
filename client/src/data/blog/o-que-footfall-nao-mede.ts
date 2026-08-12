import type { BlogPost } from "./types";

export const post: BlogPost = {
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
  };
