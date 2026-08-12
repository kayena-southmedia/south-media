import type { BlogPost } from "./types";

export const post: BlogPost = {
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
  };
