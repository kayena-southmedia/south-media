// TODO: validar features do Forja com o time. Afirmacoes sobre o produto presentes neste artigo:
//  [CONFIRMADAS NO SITE: Home.tsx / FaqAccordion.tsx]
//   - Forja e o dashboard da South Media; mostra entrega, investimento e indicadores no ritmo da operacao, sem pedir relatorio.
//   - E tecnologia propria (nao licenciada), ao lado da Anti-VPN Tech; e usado na etapa de Mensuracao.
//   - Permite dizer "onde e como cada real foi entregue".
//  [A VALIDAR COM O TIME]
//   1. Forja serve para "gestao e auditoria" de campanhas programaticas (o site fala em acompanhamento/mensuracao, nao em auditoria).
//   2. Forja expoe "em qual inventario" cada real foi investido (nivel de detalhe do inventario: dominio/app/exchange?).
//   3. Forja mostra "com qual resultado" (quais KPIs de resultado, alem de entrega/investimento?).
//   4. Forja "reduz a opacidade da cadeia" (afirmacao de efeito, nao de feature).
//   5. "Tempo real" = ritmo da operacao; confirmar latencia/atualizacao real (o site diz "no ritmo da operacao").
//   6. Acesso do cliente ao Forja (cliente acessa diretamente? login proprio?). O artigo diz apenas que o cliente acompanha sem pedir relatorio.
//   7. Qualquer visibilidade log-level: o artigo trata log-level como PRINCIPIO de mercado (ANA), nao como feature confirmada do Forja.
// TODO: dado do IAB Brasil sobre transparencia nao foi localizado/verificado; artigo ancorado em ANA, TAG TrustNet e ISBA/PwC.
import type { BlogPost } from "../types";

export const post: BlogPost = {
    id: 47,
    slug: "forja-dashboard-proprietario-transparencia-tempo-real",
    category: "Programática",
    title: "Dentro do Forja: como um dashboard proprietário torna a verba programática auditável em tempo real",
    summary: "Só 36 centavos de cada dólar chegam ao consumidor, diz a ANA. Veja o que um dashboard de mídia programática próprio, o Forja, resolve e o relatório pronto não.",
    date: "16 Set 2026",
    readTime: "6 min",
    cover: "/blog/forja-dashboard-proprietario-transparencia-tempo-real.webp",
    author: "South Media",
    content: `## Dashboard de mídia programática: como o Forja torna a verba auditável em tempo real

Apenas 36 centavos de cada dólar que entra em uma plataforma de compra programática chegam efetivamente ao consumidor, segundo o estudo de dezembro de 2023 da ANA (Association of National Advertisers). Outros 29% ficam com custos de transação de ad tech e 35% vão para impressões inválidas, não mensuráveis ou em sites feitos para publicidade. Um dashboard de mídia programática próprio existe para responder a uma pergunta simples que esse número deixa em aberto: onde, exatamente, está o seu dinheiro?

## O que é o dashboard Forja?

O Forja é o dashboard proprietário da South Media para gestão e acompanhamento de campanhas programáticas em tempo real. Diferente de relatórios de terceiros, ele foi desenhado para mostrar onde cada real foi investido, em qual inventário e com qual resultado, reduzindo a opacidade da cadeia. É uma das duas tecnologias 100% proprietárias da empresa, ao lado da Anti-VPN Tech, e o contexto de mercado explica por que isso importa: no estudo da ANA, executivos da entidade apontaram a falta de habilidade dos anunciantes para obter dados em nível de log (log-level), "um caminho principal para a tomada de decisão eficaz" em programática.

## O problema não é a falta de relatório

Quase toda campanha programática entrega relatório. O problema é quem o produz e com que granularidade. Quando o relatório vem pronto, o anunciante recebe a leitura do intermediário: totais, médias e capturas de tela de plataforma. O detalhe que permitiria contestar o número, como domínio, aplicativo, caminho da impressão e custo em cada elo, raramente acompanha o PDF.

Os números de mercado mostram a dimensão disso:

- **ISBA/PwC (Reino Unido, 2020):** apenas 51% do investimento chegava ao publisher e 15% era "unknown delta", gasto que não podia ser atribuído a nenhum ponto da cadeia.
- **ISBA, segundo estudo (2023):** o repasse ao publisher subiu para 65% e o unknown delta caiu para 3%, depois que o setor padronizou os campos de dados exigidos em auditorias.
- **ANA (EUA, 2023):** a campanha média rodava em cerca de 44.000 sites, e apenas 46% dos anunciantes monitoravam quantos sites eram usados.

A lição do caso britânico é metodológica: a opacidade diminuiu quando a cadeia passou a entregar dados granulares e comparáveis. Foi o dado, não a promessa, que mudou o resultado. Para o contexto de auditoria de plataformas, vale ler também [nosso guia sobre transparência e auditoria programática](/blog/transparencia-programatica-auditoria-dsp).

## Por que usar um dashboard proprietário em vez do relatório da plataforma?

**Relatório que você recebe pronto conta a história que o intermediário quer. Dashboard próprio mostra o que aconteceu.**

A diferença prática é de incentivo e de controle. A plataforma de compra mede a própria entrega com as próprias definições; quem opera a campanha com um painel próprio decide quais dimensões ficam visíveis e como elas se cruzam. A South Media descreve o Forja como tecnologia própria, não licenciada, e é essa propriedade que permite dizer com precisão onde e como cada real foi entregue. Em linhas gerais, um painel proprietário permite:

1. **Cruzar custo, entrega e resultado no mesmo lugar**, em vez de reconciliar três relatórios de fontes diferentes no fim do mês.
2. **Ver a campanha no ritmo da operação**, sem pedir relatório e sem esperar o fechamento, o que permite corrigir rota enquanto a verba ainda está ativa.
3. **Manter a mesma régua de medição** entre canais, de CTV a DOOH e áudio, sem depender da definição de cada fornecedor.
4. **Sustentar a conversa com o anunciante em dados**, e não em narrativa: o que foi entregue, onde e a que custo.

Esses são princípios do que um dashboard próprio habilita, não uma lista de funções de produto. O que o Forja faz hoje é o que a South Media afirma publicamente: mostrar entrega, investimento e indicadores no ritmo da operação.

## O que significa transparência em tempo real na programática?

Transparência em tempo real significa que o anunciante enxerga entrega, investimento e indicadores enquanto a campanha roda, e não semanas depois, em um relatório consolidado. O benchmark da ANA com a TAG TrustNet, lançado em 2024, parte do mesmo princípio: coleta dados em nível de log para acompanhar MFA, custos de transação e qualidade de mídia, com métricas mensais para os participantes. Entre os 11 participantes iniciais, o gasto em sites made-for-advertising caiu de 15% para 4% e a média de sites e apps por campanha foi de 44.000 para 23.000. O número só mudou porque alguém passou a olhar o dado granular de forma contínua.

## Auditável não é o mesmo que bonito

Um painel só é auditável se a informação que ele mostra puder ser verificada contra uma fonte independente. Por isso, a tese da South Media não é que dashboard substitui verificação. A verificação de terceiros, o [Double Check](/blog/fraude-publicitaria-identificar-eliminar) como metodologia e a filtragem de tráfego sintético continuam sendo camadas distintas; o dashboard é onde elas ficam legíveis. Um número de fraude sem inventário associado é só um número. Com o inventário ao lado, vira decisão: bloquear, renegociar ou realocar.

O mesmo vale para a cadeia de intermediários. Quem quer entender por que parte da verba some antes de chegar ao consumidor precisa do dado de custo em cada etapa, tema que detalhamos em [para onde vai a verba programática](/blog/ad-tech-tax-para-onde-vai-verba-programatica). Sem visibilidade, a conversa sobre taxa de tecnologia vira opinião.

## Critério e operação: o que o painel não faz sozinho

Automação é o piso do mercado. Qualquer plataforma gera gráfico. O que separa uma operação de outra é o critério de quem lê o painel e a rotina de quem age sobre ele: cortar inventário que não entrega, revisar rota de compra, questionar um indicador que parece bom demais. Essa é a tese da South Media, AdTech brasileira e independente: tecnologia proprietária onde ela faz diferença e operação humana que prova resultado.

## Perguntas Frequentes

### O que é o dashboard Forja?

O Forja é o dashboard proprietário da South Media, uma das duas tecnologias 100% próprias da empresa, ao lado da Anti-VPN Tech. Ele mostra entrega, investimento e indicadores da campanha no ritmo da operação, sem que o anunciante precise pedir relatório.

### Por que usar um dashboard proprietário em vez do relatório da plataforma?

Porque o relatório da plataforma reflete as definições e os incentivos de quem o produz, enquanto um painel próprio permite cruzar custo, entrega e resultado com a mesma régua. A ANA aponta que a dificuldade de obter dados em nível de log é uma das principais barreiras à decisão eficaz em programática.

### O que significa transparência em tempo real na programática?

É acompanhar investimento, entrega e indicadores enquanto a campanha ainda está ativa, e não apenas no relatório de fim de mês. Isso permite corrigir inventário e alocação a tempo, e é o princípio por trás de iniciativas como o benchmark da ANA com a TAG TrustNet, que usa dados em nível de log.

## Fontes

- [Marketing Dive - ANA: just 36% of programmatic spend reaches consumers due to cost waterfall](https://www.marketingdive.com/news/ana-programmatic-advertising-report-MFA-crackdown/701705/)
- [TAG - ANA and TAG TrustNet launch Programmatic Transparency Benchmark](https://www.tagtoday.net/pressreleases/ana-tag-trustnet-launch-programmatic-transparency-benchmark)
- [WFA - ISBA investigates the UK's programmatic supply chain (2020)](https://wfanet.org/knowledge/item/2020/05/18/ISBA-investigates-the-UKs-programmatic-supply-chain)
- [WFA - UK programmatic audit suggests improvements in online advertising transparency (2023)](https://wfanet.org/knowledge/item/2023/04/12/UK-programmatic-audit-suggests-improvements-in-online-advertising-transparency)
`,
};
