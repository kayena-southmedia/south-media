// TODO: sem dado verificavel e recente de uplift de vendas especifico de drive-to-store (Think with Google / Nielsen Brasil). O numero citado (Nielsen Catalina Solutions, 2016, CPG, EUA) e verificavel mas antigo e de contexto diferente: considerar substituir por estudo mais recente.
// TODO: o texto nao cita benchmarks proprios da South Media de venda incremental; inserir um caso com numero autorizado pelo cliente, se houver.
import type { BlogPost } from "../types";

export const post: BlogPost = {
    id: 50,
    slug: "drive-to-store-venda-incremental-nao-footfall",
    category: "Performance",
    title: "Visita não é venda: medindo faturamento incremental na loja, não só footfall",
    summary: "Drive to store prova a visita, mas só o grupo de controle prova a venda incremental. Veja como desenhar o teste: controle, janela, loja e dados de vendas.",
    date: "26 Set 2026",
    readTime: "6 min",
    cover: "/blog/drive-to-store-venda-incremental-nao-footfall.webp",
    author: "South Media",
    content: `## Drive to store: visita não é venda, e faturamento incremental é o que importa

Em 2016, a Nielsen Catalina Solutions cruzou exposição a anúncios com dados de compra em mais de 1.400 campanhas de 450 marcas de bens de consumo e comparou domicílios expostos com domicílios quase idênticos que não viram a mídia. O método, e não o volume de visitas, é o que separa relatório de prova. É esse salto que o **drive to store** precisa dar: sair da contagem de entradas na loja e chegar ao faturamento que a campanha gerou.

## O que é drive to store e o que significa medir venda incremental?

Drive to store é a atribuição de visitas físicas a lojas geradas por uma campanha digital, medida por geolocalização e grupo de controle. O avanço é ir de visita para venda incremental: quanto de faturamento a mídia gerou além do que aconteceria sem ela. A Nielsen mede vendas incrementais comparando expostos e não expostos, e o Google descreve seu Conversion Lift como a medição de conversões "diretamente geradas" por quem viu o anúncio, contra um grupo de controle.

## Por que footfall sozinho engana

O [artigo anterior da South Media sobre drive to store](/blog/drive-to-store-impacto-digital-lojas) mostra como medir visitas e uplift. Aqui o critério sobe. Um relatório de footfall que apenas casa dispositivos expostos com dispositivos que entraram na loja registra sequência, não causa. Segundo a análise da PPC Land sobre footfall attribution, esse número atribuído "não carrega contrafactual": a pessoa pode ter ido à loja de qualquer forma.

Três problemas recorrentes:

- **Visita sem compra:** entrar no ponto de venda não garante ticket. Quem só comparou preço conta como sucesso no relatório.
- **Visita que já aconteceria:** clientes recorrentes e moradores do entorno inflam a atribuição sem que a mídia tenha mudado nada.
- **Compra sem visita medida:** dispositivos sem sinal confiável, lojas em shopping e baixa precisão de localização escondem parte do efeito. Veja em [o que o footfall não mede](/blog/o-que-footfall-nao-mede) os limites da métrica.

**Footfall prova que a pessoa entrou. Venda incremental prova que a sua mídia foi a razão — e só a segunda paga a conta.**

## Como medir vendas em loja geradas por anúncio digital

A resposta curta: com um experimento. Dividir a audiência entre grupo exposto e grupo de controle e comparar a venda dos dois. A diferença é a venda incremental. O Google organiza essa lógica em dois formatos no Conversion Lift: por usuários e por geografia. A versão geográfica, segundo a documentação do Google Ads, aceita dados offline do anunciante, o que permite medir vendas de loja sem depender de cookies.

A [incrementalidade aplicada à mídia que vende](/blog/incrementalidade-midia-que-vende) vale para qualquer canal. No varejo físico, ela exige quatro decisões de desenho antes de a campanha entrar no ar.

## Quatro critérios para desenhar o teste de venda incremental

### 1. Grupo de controle comparável

O controle precisa se parecer com o exposto em perfil, região e histórico de compra. Pode ser um holdout de usuários, em que parte da audiência elegível é deliberadamente retida, ou um teste geográfico, em que praças semelhantes ficam sem a campanha. Em ambos, a regra é a mesma: a escolha é feita antes, de forma aleatória ou pareada, e nunca depois de ver o resultado.

### 2. Janela de atribuição definida antes

Janela curta demais perde compras de maior consideração; longa demais incorpora vendas que nada têm a ver com a campanha. Defina o período de exposição, o período de observação e a duração mínima do teste antes do início, e use a mesma régua para expostos e controle.

### 3. Ponto de venda e geolocalização bem delimitados

Visita só é visita quando o perímetro está certo. Raio mal desenhado captura pedestres do corredor ao lado; raio estreito perde quem entrou pela garagem. Aqui entra a qualidade da segmentação: [geofencing inteligente e geofencing genérico](/blog/geofencing-inteligente-vs-generico) entregam audiências muito diferentes. A MRC publicou em 2017 diretrizes para medição de publicidade baseada em localização, e a Foursquare recebeu em agosto de 2020 a primeira acreditação da MRC para dados de localização. A mensagem para o anunciante é pedir transparência do fornecedor sobre como a visita é inferida.

### 4. Dados de vendas do próprio cliente

É o critério que separa visita de faturamento. Sem o cupom fiscal, o CRM ou o relatório de vendas por loja e por dia, o teste mede só comportamento de deslocamento. Com eles, a comparação passa a ser em reais por loja, ticket médio e número de transações. O dado de venda é do cliente, e por isso o projeto precisa nascer com esse acesso combinado, respeitando a LGPD e a agregação dos resultados.

## O que olhar no resultado

- **Venda incremental:** diferença de faturamento entre expostos e controle, no período.
- **Custo por venda incremental e ROAS incremental:** investimento dividido pelo faturamento adicional, não pelo total vendido.
- **Visita incremental:** continua útil como indicador intermediário, desde que apareça ao lado da venda.
- **Significância:** diferença dentro da margem de erro não é resultado. Com poucas lojas ou baixo volume, o teste pode ser inconclusivo, e isso também é informação.

Os números de retorno variam muito por categoria e tamanho de marca. Na mesma série da Nielsen, a venda incremental por mil impressões de mobile chegou a US$ 26,52, contra US$ 20,56 de TV linear. O dado é de 2016, de bens de consumo nos Estados Unidos, e serve como prova de método, não como benchmark para o seu varejo.

## Onde a operação humana pesa

Automação executa a campanha. Quem decide o desenho do teste, o raio das lojas, a janela e a leitura do resultado é critério, e é aí que a [operação de drive to store da South Media](/blog/drive-to-store-impacto-digital-lojas) atua: planejamento do experimento junto com o time do cliente, acompanhamento e relatório que separa visita de venda. Cada campanha parte do que o dado de vendas do anunciante consegue provar.

## Perguntas Frequentes

### O que é drive to store?

É a atribuição de visitas físicas a lojas geradas por uma campanha digital, medida por geolocalização e grupo de controle. O objetivo final deixa de ser o clique e passa a ser o comportamento no ponto de venda.

### Qual a diferença entre footfall e venda incremental?

Footfall conta quantas pessoas expostas à campanha entraram na loja. Venda incremental mede quanto faturamento a mídia gerou além do que aconteceria sem ela, comparando expostos com um grupo de controle. A primeira mostra movimento; a segunda mostra causa e retorno.

### Como medir vendas em loja geradas por anúncio digital?

Com um teste de incrementalidade: grupo exposto e grupo de controle definidos antes, janela de observação fixa, perímetro de loja bem delimitado e dados de vendas do próprio anunciante. O Conversion Lift geográfico do Google, por exemplo, aceita dados offline para esse fim.

## Fontes

- [Nielsen - Benchmarking Return on Ad Spend: Media Type and Brand Size Matter](https://www.nielsen.com/insights/2016/benchmarking-return-on-ad-spend-media-type-brand-size-matter/)
- [Google Ads Help - About Conversion Lift](https://support.google.com/google-ads/answer/12003020?hl=en)
- [PPC Land - Explaining footfall attribution](https://ppc.land/footfall-attribution/)
- [MRC - Location-Based Advertising Measurement Guidelines (março de 2017)](https://www.mediaratingcouncil.org/sites/default/files/Standards/MRC%20Location-Based%20Advertising%20Measurement%20Guidelines%20Final%20March%202017.pdf)`,
};
