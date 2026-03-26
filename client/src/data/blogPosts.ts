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
    id: 1,
    slug: "ctv-brasil-netflix-acessivel",
    category: "CTV",
    title: "CTV no Brasil: Por que Anunciar na Netflix é Mais Acessível do Que Você Pensa",
    summary: "Descubra como a TV Conectada democratizou o acesso à publicidade em plataformas premium de streaming e por que sua marca deveria estar lá.",
    date: "15 Mar 2025",
    readTime: "6 min",
    cover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/blog-ctv-cover_0c60d0fb.png",
    author: "South Media",
    content: `## A Revolução da TV Conectada no Brasil

A TV Conectada (CTV) transformou radicalmente a forma como as marcas se comunicam com seus consumidores. Com a explosão dos serviços de streaming no Brasil — Netflix, Globoplay, Disney+, Amazon Prime Video, Pluto TV e muitos outros — o inventário publicitário em CTV cresceu exponencialmente, criando oportunidades que antes eram exclusivas de grandes anunciantes.

## O Cenário Atual da CTV no Brasil

O Brasil já conta com mais de **50 milhões de domicílios** conectados a plataformas de streaming. Esse número representa uma audiência qualificada, engajada e que consome conteúdo de forma ativa — diferente da TV linear, onde o espectador muitas vezes está distraído.

A penetração de Smart TVs no país ultrapassou 65% dos lares com televisão, e o consumo de vídeo via streaming já supera o tempo dedicado à TV aberta em diversas faixas etárias, especialmente entre 18 e 49 anos.

## Por Que a CTV é Mais Acessível do Que Você Imagina

Historicamente, anunciar em televisão exigia orçamentos milionários. Um spot de 30 segundos no horário nobre da TV aberta pode custar centenas de milhares de reais. Com a CTV programática, esse cenário mudou completamente:

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

## Conclusão

A CTV no Brasil não é mais um canal experimental — é uma realidade consolidada que oferece escala, precisão e mensuração. Se sua marca ainda não está explorando esse inventário, está perdendo a oportunidade de alcançar audiências premium com eficiência e transparência.

A South Media opera o maior inventário de CTV programática do Brasil, com acesso a mais de 1.330 publishers e tecnologia proprietária de verificação de qualidade. Entre em contato para um diagnóstico estratégico e descubra como a CTV pode transformar seus resultados.`,
  },
  {
    id: 2,
    slug: "lba-vs-geofence-tecnologia",
    category: "Dados",
    title: "LBA vs Geofence: Qual Tecnologia Funciona Melhor para o Seu Negócio?",
    summary: "Entenda as diferenças entre Location Based Audiences e Geofencing, e saiba qual estratégia de geolocalização é ideal para seus objetivos.",
    date: "10 Mar 2025",
    readTime: "8 min",
    cover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/blog-programmatic-cover_77369ae9.png",
    author: "South Media",
    content: `## Geolocalização na Mídia Programática

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

Na South Media, recomendamos uma abordagem que combina ambas as tecnologias em uma estratégia unificada. Utilizamos LBA para construir awareness e consideração em larga escala, e geofencing para converter essa consideração em visitas e vendas.

Essa combinação, operada através de nossa plataforma proprietária, permite que cada real investido trabalhe em múltiplas frentes, maximizando o retorno sobre o investimento.

## Conclusão

Não existe uma tecnologia universalmente superior — LBA e Geofencing são complementares. A escolha depende dos seus objetivos, do seu orçamento e da natureza do seu negócio. O mais importante é contar com um parceiro que domine ambas as tecnologias e saiba quando aplicar cada uma.`,
  },
  {
    id: 3,
    slug: "cpm-cpc-cpe-cpa-guia-gestores",
    category: "Performance",
    title: "O Que é CPM, CPC, CPE e CPA? Guia Completo para Gestores",
    summary: "Um guia prático e direto sobre as principais métricas de mídia programática que todo gestor de marketing precisa dominar.",
    date: "5 Mar 2025",
    readTime: "10 min",
    cover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/blog-dooh-cover_31097d71.png",
    author: "South Media",
    content: `## Dominando as Métricas de Mídia Programática

No universo da mídia programática, entender as métricas de precificação e performance não é opcional — é fundamental. Gestores que dominam esses conceitos tomam decisões mais inteligentes, negociam melhor com fornecedores e conseguem justificar investimentos perante a diretoria com dados concretos.

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

## Conclusão

Dominar essas métricas é o primeiro passo para transformar mídia programática de um centro de custo em um motor de crescimento. Na South Media, todos os relatórios incluem essas métricas com benchmarks de mercado, permitindo que gestores tomem decisões informadas e comprovem resultados com confiança.`,
  },
  {
    id: 4,
    slug: "fraude-publicitaria-identificar-eliminar",
    category: "Programática",
    title: "Fraude Publicitária: Como Identificar e Eliminar Desperdício em Mídia",
    summary: "Saiba como a fraude publicitária consome orçamentos e conheça as tecnologias que protegem seu investimento de impressões para bots.",
    date: "28 Fev 2025",
    readTime: "7 min",
    cover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/blog-audio-cover_81753002.png",
    author: "South Media",
    content: `## O Problema Silencioso da Fraude Publicitária

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

Na South Media, desenvolvemos uma abordagem de verificação em três camadas que chamamos de **Triple Check**:

### Camada 1: Double Verify (Pré-bid)
Utilizamos a tecnologia Double Verify para filtrar inventário fraudulento antes mesmo de participar do leilão. Isso elimina a maior parte do tráfego de bots e domain spoofing na origem.

### Camada 2: Anti-VPN e Anti-Proxy
Nossa tecnologia proprietária identifica e bloqueia tráfego originado de VPNs e proxies, garantindo que a segmentação geográfica seja precisa e que as impressões sejam entregues para usuários reais na localização correta.

### Camada 3: Double Check Proprietário
Antes de qualquer campanha ir ao ar, realizamos uma auditoria manual e automatizada do inventário selecionado. Verificamos a qualidade dos publishers, a legitimidade do tráfego e a segurança da marca.

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

## Conclusão

A fraude publicitária não vai desaparecer — ela evolui constantemente. A diferença está em ter um parceiro que investe continuamente em tecnologia de detecção e prevenção. Na South Media, a proteção contra fraude não é um add-on opcional — é parte fundamental de cada campanha que operamos.`,
  },
  {
    id: 5,
    slug: "drive-to-store-impacto-digital-lojas",
    category: "Performance",
    title: "Drive to Store: Como Medir o Impacto do Digital nas Suas Lojas Físicas",
    summary: "Aprenda a atribuir visitas em lojas físicas às suas campanhas digitais com metodologias de mensuração comprovadas.",
    date: "20 Fev 2025",
    readTime: "5 min",
    cover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/blog-privacy-cover_f7f44c2c.png",
    author: "South Media",
    content: `## A Ponte Entre o Digital e o Físico

Um dos maiores desafios do marketing moderno é conectar o investimento em mídia digital com resultados no mundo físico. Para marcas com presença em lojas, restaurantes, concessionárias ou qualquer ponto de venda físico, a pergunta é sempre a mesma: "Minha campanha digital está gerando visitas reais?"

A resposta é sim — e hoje temos a tecnologia para provar isso.

## O Que é Drive to Store?

Drive to Store é uma estratégia de mídia programática focada em gerar tráfego para pontos de venda físicos. Diferente de campanhas puramente digitais, o objetivo final não é um clique ou uma conversão online, mas sim uma visita presencial.

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

## Conclusão

Drive to Store é a prova definitiva de que mídia digital gera resultados no mundo real. Com a tecnologia e a metodologia corretas, é possível atribuir cada visita ao investimento que a gerou — transformando mídia programática em um canal mensurável e otimizável para negócios com presença física.`,
  },
  {
    id: 6,
    slug: "spotify-ads-audio-programatico",
    category: "Áudio",
    title: "Spotify Ads e Áudio Programático: O Canal que Sua Marca Ainda Não Explorou",
    summary: "O áudio programático oferece engajamento único. Descubra por que o Spotify é uma oportunidade que sua marca não pode ignorar.",
    date: "15 Fev 2025",
    readTime: "6 min",
    cover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663079259420/ALCctmknampU7QGyb5uPjL/blog-app-cover-34TbPUaSEYfaBBC4Va6iG4.webp",
    author: "South Media",
    content: `## O Poder do Áudio na Era Digital

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

Essa granularidade permite que sua marca esteja presente no momento certo, com a mensagem certa, no contexto certo.

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

## Conclusão

O áudio programático não é o futuro — é o presente. Com custos acessíveis, engajamento superior e uma audiência massiva no Brasil, o Spotify e outras plataformas de áudio representam uma oportunidade que gestores inteligentes não podem ignorar.

A South Media opera campanhas de áudio programático com acesso direto ao inventário do Spotify e outras plataformas, com otimização contínua e relatórios transparentes. Descubra como o áudio pode complementar sua estratégia de mídia.`,
  },
];

export const categories = ["Todos", "Programática", "CTV", "Dados", "Performance", "Áudio"];
