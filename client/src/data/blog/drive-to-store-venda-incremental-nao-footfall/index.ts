// TODO: inserir um caso South Media com numeros de visita incremental (uplift de visitas, custo por visita) autorizado pelo cliente, se houver.
// TODO: validar com o parceiro de medicao de visitas a nomenclatura "visitas atribuidas" x "visitas observadas" e a descricao do grupo de controle usada no texto.
import type { BlogPost } from "../types";

export const post: BlogPost = {
    id: 50,
    slug: "drive-to-store-venda-incremental-nao-footfall",
    category: "Performance",
    title: "Drive to Store: Da Visita à Venda — Por Que a Visita Incremental É a Prova Que a Mídia Pode Dar",
    summary: "No drive to store, a visita incremental é a prova que a mídia entrega. Veja como ler footfall com grupo de controle e onde a venda entra na conta do anunciante.",
    date: "26 Set 2026",
    readTime: "6 min",
    cover: "/blog/drive-to-store-venda-incremental-nao-footfall.webp",
    author: "South Media",
    content: `## Drive to store mede venda ou visita?

Drive to store é o objetivo de campanha de levar o consumidor do anúncio até a loja física, e o resultado que a mídia comprova é a visita incremental: quantas visitas a campanha acrescentou ao movimento natural da loja, medidas contra um grupo de controle. A venda é o passo seguinte, acontece dentro da loja e depende de preço, estoque e atendimento. O anunciante pode cruzar o período da campanha com os próprios números de venda, mas o KPI da mídia de drive to store é a visita.

Existe uma confusão recorrente no mercado: tratar o footfall como se fosse uma métrica fraca e exigir dele uma resposta que ele não se propõe a dar. O problema real é outro. Boa parte dos relatórios de footfall que circulam por aí entrega um número bruto, sem grupo de controle, sem amostra declarada e sem explicar como o perímetro da loja foi desenhado. É esse relatório que não se sustenta, e não a métrica.

## O que é drive to store e o que é visita incremental?

Drive to store é a campanha cujo objetivo é gerar visitas a pontos de venda físicos, medida pelas visitas às lojas. A visita incremental é a parte dessas visitas que só aconteceu por causa da campanha: a diferença entre o comportamento de quem foi exposto aos anúncios e o de um grupo de controle, comparável, que não foi.

É a mesma lógica de qualquer [teste de incrementalidade](/blog/incrementalidade-midia-que-vende), aplicada ao que a mídia de drive to store se propõe a mover: a ida até a loja. O [guia de medição de drive to store](/blog/drive-to-store-impacto-digital-lojas) detalha o processo, da exposição ao registro da visita.

## O problema não é o footfall, é o relatório bruto

Um relatório que apenas casa dispositivos expostos com dispositivos que entraram na loja registra sequência, não causa. Segundo a análise da PPC Land sobre footfall attribution, esse número atribuído "não carrega contrafactual": sem comparação, não dá para saber quantas pessoas teriam ido à loja de qualquer forma.

Três vícios aparecem com frequência nesse tipo de relatório:

- **Visita que já aconteceria:** clientes recorrentes, funcionários e moradores do entorno entram na conta como se a mídia os tivesse levado.
- **Perímetro mal desenhado:** um raio genérico em volta do endereço captura quem passou pelo corredor do shopping ou esperou o ônibus na porta.
- **Amostra escondida:** o número final é uma projeção sobre os dispositivos detectados, e sem o tamanho da amostra não há como avaliar a margem de erro. Veja em [o que o footfall não mede](/blog/o-que-footfall-nao-mede) como ler cada um desses pontos.

**Footfall bruto conta quem passou pela porta. Footfall com grupo de controle mostra quantas dessas visitas a campanha colocou lá — e essa é a prova que a mídia de drive to store pode dar.**

## Quatro critérios de um relatório de visitas confiável

### 1. Grupo de controle para visitas

O controle precisa se parecer com o grupo exposto em perfil e região. Parte da audiência elegível fica deliberadamente sem a campanha (holdout), e a taxa de visita dos dois grupos é comparada na mesma janela de observação. A escolha do controle e a janela são definidas antes de a campanha entrar no ar, nunca depois de ver o resultado.

### 2. Visitas atribuídas comparadas às observadas

Um relatório honesto mostra de onde vem o número. As visitas observadas são as que a medição efetivamente detectou; as visitas atribuídas são as que o método credita à campanha depois da comparação com o controle e da projeção estatística. Ver os dois lado a lado, com a amostra declarada, é o que permite julgar se o resultado tem base.

### 3. Perímetro e dwell time bem desenhados

Visita só é visita quando o perímetro está certo. Raio largo demais captura pedestres do corredor ao lado; raio estreito demais perde quem entrou pelo estacionamento. O tempo mínimo de permanência (dwell time) separa quem entrou de quem só passou pela frente, e as exclusões tiram da base funcionários e vizinhos. As mesmas decisões de [geofencing inteligente](/blog/geofencing-inteligente-vs-generico) valem para desenhar o perímetro de medição. Como referência de credibilidade, a MRC publicou em 2017 diretrizes para medição de publicidade baseada em localização, e a Foursquare recebeu em agosto de 2020 a primeira acreditação da MRC para dados de localização.

### 4. Tráfego VPN filtrado na compra

Dispositivos conectados via VPN, proxy ou data center registram uma localização que não é a física. Se entram na base da campanha, viram impressões desperdiçadas e, depois, ruído na contagem de visitas. A Anti-VPN Tech, tecnologia proprietária da South Media, filtra esse tráfego pré-bid, antes de a impressão ser comprada, o que deixa a base de expostos mais limpa para a medição.

## O que olhar no resultado

- **Visita incremental (uplift de visitas):** diferença de taxa de visita entre expostos e controle no período.
- **Custo por visita incremental:** investimento dividido pelas visitas que a campanha acrescentou, não pelo total de visitas da loja.
- **Visitas observadas e atribuídas:** os dois números lado a lado, com o tamanho da amostra.
- **Significância:** diferença dentro da margem de erro não é resultado. Com poucas lojas ou baixo volume, o teste pode ser inconclusivo, e isso também é informação para o próximo ciclo.

## E a venda? O passo seguinte acontece dentro da loja

A visita é o elo que a mídia consegue provocar e comprovar: o consumidor saiu de casa, foi até o ponto de venda e entrou. O que acontece dali em diante depende de fatores que estão fora da mídia, como preço, estoque, sortimento, fila e atendimento. Uma campanha pode colocar mais gente na loja e a venda não acompanhar porque faltou produto na prateleira, e isso não diz nada sobre a eficiência da mídia.

Por isso a leitura de faturamento é do próprio anunciante, com os dados dele. Quem quiser pode comparar o período da campanha com os números de venda das lojas atendidas, sabendo que essa leitura mistura o efeito da mídia com tudo o que acontece no ponto de venda. Para a campanha de drive to store, a pergunta que a mídia responde é clara: quantas visitas ela acrescentou.

## Onde a operação humana pesa

Automação executa a campanha. Quem desenha o perímetro de cada loja, escolhe o dwell time pela categoria, monta as listas de exclusão e define a janela de observação é critério, e é aí que a [operação de drive to store da South Media](/blog/drive-to-store-impacto-digital-lojas) atua: compra protegida pela Anti-VPN Tech, segmentação geográfica operada com [as tecnologias de geolocalização certas para cada etapa](/blog/lba-vs-geofence-tecnologia) e relatório de visitas com grupo de controle, visitas atribuídas e observadas.

## Perguntas Frequentes

### O que é drive to store?

É o objetivo de campanha de levar o consumidor do anúncio digital até um ponto de venda físico. O resultado é medido pelas visitas às lojas, comparando quem foi exposto à campanha com um grupo de controle.

### Qual a diferença entre footfall e visita incremental?

Footfall é a medição das visitas de dispositivos expostos à campanha. Visita incremental é a parte dessas visitas que só aconteceu por causa da mídia, calculada contra um grupo de controle. A primeira mostra o movimento; a segunda mostra o que a campanha acrescentou a ele.

### Drive to store mede vendas?

Não: mede visitas, que é o objetivo da campanha. A venda acontece dentro da loja, depende de preço, estoque e atendimento, e o anunciante lê esse resultado com os próprios dados. A visita incremental é o elo que a mídia comprova.

### Como saber se o relatório de footfall é confiável?

Verifique se há grupo de controle para visitas, se as visitas atribuídas aparecem ao lado das observadas com a amostra declarada, como o perímetro e o dwell time foram configurados e se o tráfego VPN foi filtrado. Sem essas respostas, o número é só volume.

## Fontes

- [PPC Land - Explaining footfall attribution](https://ppc.land/footfall-attribution/)
- [MRC - Location-Based Advertising Measurement Guidelines (março de 2017)](https://www.mediaratingcouncil.org/sites/default/files/Standards/MRC%20Location-Based%20Advertising%20Measurement%20Guidelines%20Final%20March%202017.pdf)`,
};
