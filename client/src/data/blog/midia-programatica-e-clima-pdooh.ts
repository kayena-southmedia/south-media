import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 53,
    slug: "midia-programatica-e-clima-pdooh",
    category: "Programática",
    title: "Mídia Programática e Clima: Como Ativar o pDOOH na Hora Literalmente Mais Quente",
    summary: "Mídia programática e clima: como gatilhos meteorológicos ativam o pDOOH só quando calor, frio ou chuva chegam à praça certa, sem desperdiçar impressões.",
    date: "14 Out 2026",
    readTime: "6 min",
    cover: "/blog/midia-programatica-e-clima-pdooh.webp",
    author: "South Media",
    content: `## Como a mídia programática e o clima se combinam no pDOOH?

Mídia programática e clima se encontram nos gatilhos meteorológicos: regras que ativam ou trocam o anúncio em telas de DOOH programático (pDOOH) quando temperatura, chuva ou outra condição atinge um limite definido na praça. A lógica é econômica antes de ser criativa: a campanha só disputa impressões quando o clima cria a ocasião de consumo. Um estudo da Scanntech divulgado em setembro de 2026 mostra que cada grau a mais eleva, em média, 4,1% o volume de bebidas sensíveis à temperatura no Brasil.

## Por que o clima virou dado de mídia?

O mesmo estudo da Scanntech, publicado pela SuperVarejo em 04/09/2026, detalha o efeito por categoria. A água cresce 5,7% em volume a cada grau adicional, os isotônicos 5,4%, a cerveja 5% e o gelo 4,9%. Na direção oposta, vinho e conhaque recuam 3,2% por grau.

O efeito se acumula: um aumento de 3 °C está associado a cerca de 12,8% a mais no volume das bebidas que respondem ao calor, e a resposta se intensifica perto dos 30 °C. O Sul tem a maior associação entre temperatura e consumo, por causa da maior amplitude térmica da região.

Enquanto isso, a mídia de rua ganha espaço no plano. No primeiro semestre de 2026, a mídia exterior como um todo chegou a 13,4% do investimento do Painel Cenp-Meios, contra 11,9% um ano antes. O IAB Brasil incluiu o DOOH pela primeira vez no Digital AdSpend 2026.

O problema é que boa parte da mídia exterior ainda é vendida por período. A peça fica no ar o dia inteiro, faça sol ou faça chuva, e cada hora custa o mesmo, mesmo quando o contexto não favorece a mensagem.

**O clima muda a demanda de uma hora para outra. A mídia precisa mudar no mesmo ritmo.**

## Como funcionam os gatilhos climáticos no pDOOH?

Um gatilho climático tem três partes. A fonte de dado é uma API meteorológica consultada por localização. A regra define a condição, como temperatura acima de um limite ou início de chuva na praça. A ação decide o que acontece quando a condição é atendida.

Existem dois modos de ação. Na ativação condicional, a campanha só disputa impressões enquanto a condição estiver valendo. Na troca dinâmica de criativo, a campanha segue no ar e a peça muda conforme o cenário, por exemplo de uma versão de verão para uma de frio.

Isso só funciona porque a tela de rua passou a ser comprada como qualquer outro inventário programático. Em novembro de 2022, a IAB Tech Lab incorporou o DOOH ao protocolo OpenRTB, com a OAAA e a Outsmart, incluindo um multiplicador de audiência por exibição, já que uma única exibição é vista por várias pessoas, segundo a PPC Land. Explicamos a compra por impressão em [DOOH programático com métricas do marketing digital](/blog/dooh-programatico-metricas-digitais).

## Como a mídia programática e o clima eliminam o vazamento silencioso de verba?

O vazamento silencioso é a verba gasta em horas em que o contexto não favorece a mensagem. Ele não aparece em relatório, porque a peça foi exibida: só que para quem não tinha motivo para comprar naquele momento.

Na ativação condicional, esse custo deixa de existir. Sem a condição climática, a campanha não oferta naquela praça, e a verba fica concentrada nas horas em que o calor, o frio ou a chuva estão presentes.

A contagem também é mais precisa. Cada exibição vira impressões pelo multiplicador de audiência da tela, e o padrão da Outsmart, entidade do setor no Reino Unido, recomenda calcular esse multiplicador em janelas de 15 minutos. A compra é feita por impressão, com prova de exibição.

Há uma ressalva que o planejamento precisa assumir. Se a condição não acontecer no período, a entrega não acontece. Por isso, os limites são definidos a partir do histórico climático de cada praça, com um criativo de base para os dias fora do gatilho quando o objetivo exigir presença contínua.

## Como o clima muda a mensagem de cada categoria?

O gatilho certo é aquele que coincide com a ocasião de consumo da categoria. Alguns exemplos de como a mídia programática e o clima se combinam na prática:

| Categoria | Gatilho climático | Como a ativação muda |
|---|---|---|
| Bebidas geladas e sorvetes | Temperatura acima do limite definido para a praça | A peça de refresco entra nas telas perto de pontos de venda nas horas mais quentes |
| Apps de transporte | Início de chuva | A mensagem entra em pontos de ônibus e saídas de metrô enquanto chove |
| Delivery de comida | Chuva ou queda brusca de temperatura | A veiculação se concentra no horário das refeições, quando sair de casa fica menos atraente |
| Proteção solar e farmácia | Índice UV alto | A peça sobre proteção entra em áreas abertas e de lazer |
| Vestuário e bebidas quentes | Chegada de frente fria | O criativo de inverno substitui o de verão sem nova compra |

## Como combinar audiência, localização e horário com a previsão do tempo?

O clima é a última camada de um plano que começa antes dele. A localização define as praças, bairros ou raios em torno de pontos de venda. O horário define as faixas em que a ocasião de consumo existe. A audiência define as telas cujo fluxo de pessoas combina com o público da marca.

O gatilho climático entra por cima, liberando a compra só quando as quatro condições coincidem. Um app de delivery, por exemplo, pode concentrar a veiculação em telas próximas a corredores comerciais, no fim da tarde, apenas nos dias em que a chuva começa antes do jantar.

A previsão do tempo também tem uso próprio. Ela não aciona a compra, mas antecipa a semana: permite preparar os criativos de cada cenário e ajustar o ritmo de entrega antes de a frente fria ou a onda de calor chegar.

A leitura de resultado segue a natureza do meio. Tela de rua não tem clique. O pDOOH é lido por impressões auditadas, alcance e frequência, e a venda que acontece depois, na loja ou no app, é leitura do anunciante.

## Como a SouthMedia opera pDOOH com gatilhos climáticos?

A SouthMedia, AdTech brasileira e independente, opera exclusivamente DOOH programático e opera as principais plataformas de compra do mercado. Nas campanhas com gatilho climático, nossa operação define com o anunciante a condição que libera a compra em cada praça, o criativo de cada cenário e as faixas de horário, com dados meteorológicos em tempo real de provedores especializados. A entrega é comprada por impressão auditada e acompanhada no Forja, nosso dashboard proprietário. A plataforma executa a regra; a escolha da condição, do limite e da praça é decisão da nossa operação.

## Perguntas Frequentes

### A campanha paga impressões quando o gatilho não é acionado?

Na ativação condicional, não: sem a condição climática, a campanha não disputa impressões naquela praça. Na troca dinâmica de criativo, a veiculação continua e só a peça muda conforme o clima.

### Dá para medir cliques em pDOOH?

Não. Tela de rua não tem clique, e a leitura é feita por impressões auditadas, alcance e frequência.

### Quais condições do tempo podem acionar a mídia programática?

As mais usadas são temperatura, chuva, umidade e índice UV. A condição e o limite de cada praça são definidos no planejamento, de acordo com o comportamento da categoria.

### O gatilho climático funciona em qualquer cidade?

Depende de haver telas de DOOH programático na praça e dado meteorológico com resolução local. A disponibilidade é confirmada no planejamento de cada campanha.

## Fontes

- [SuperVarejo, estudo Scanntech, 04/09/2026](https://supervarejo.com.br/economia/calor-aumenta-em-41-volume-de-vendas-de-bebidas-no-brasil): +4,1% de volume por grau e efeito por categoria.
- [Meio & Mensagem, Cenp-Meios 1º semestre 2026](https://www.meioemensagem.com.br/midia/cenp-meios-mercado-cresce-158-no-primeiro-semestre): mídia exterior com 13,4% de share, contra 11,9%.
- [Propmark, IAB Brasil Digital AdSpend 2026](https://propmark.com.br/out-of-home/dooh-chega-a-r-427-bilhoes-no-brasil/): DOOH medido pela primeira vez.
- [PPC Land, Digital out of home](https://ppc.land/digital-out-of-home/): DOOH no OpenRTB desde nov/2022, com OAAA e Outsmart.
- [Outsmart, Impression Multiplier Standard (fev/2026)](https://www.outsmart.org.uk/site/userfiles/File/20260205105322_Impression_Multiplier_Standard.pdf): multiplicador em janelas de 15 minutos.
`,
};
