// TODO: CONFIRMAR se compilacao de dados e processo proprio da South Media. Nada no repo (grep "compila" em client/src) indica isso; o artigo trata como CONCEITO GERAL.
// TODO: Geo Intelligence e Household Sync aparecem apenas como insumos (tecnologia de terceiros operada pela South Media), sem rotulo de proprietario. Confirmar com o time se a descricao de uso esta correta.
// TODO: dado do IAB (71% / 41%) e do State of Data 2024 (14/03/2024). Substituir por edicao mais recente se houver numero equivalente verificavel.
// TODO: o numero "menos de 30% de usuarios logados" do artigo de 1st-party NAO foi reutilizado aqui por falta de fonte verificada.
import type { BlogPost } from "../types";

export const post: BlogPost = {
    id: 49,
    slug: "compilacao-de-dados-audiencia-enderecavel-sem-cookie",
    category: "Dados",
    title: "Compilação de Dados: Como Transformar 1st-Party, Geolocalização e Comportamento em Audiência Endereçável sem Cookie",
    summary: "Compilação de dados une 1st-party, geolocalização e comportamento em audiência endereçável. Veja por que o critério de modelagem, e não a coleta, define o ROI.",
    date: "23 Set 2026",
    readTime: "6 min",
    cover: "/blog/compilacao-de-dados-audiencia-enderecavel-sem-cookie.webp",
    author: "South Media",
    content: `## Compilação de Dados: Como Transformar 1st-Party, Geolocalização e Comportamento em Audiência Endereçável sem Cookie

Em 17 de outubro de 2025, o Google anunciou a aposentadoria de dez tecnologias do Privacy Sandbox, entre elas Topics e Protected Audience, e confirmou que o Chrome mantém a abordagem de oferecer ao usuário a escolha sobre cookies de terceiros. A promessa de um mercado sem cookies em data marcada saiu do calendário, mas o problema de fundo não: o sinal continua fragmentado. A **compilação de dados** é a resposta prática a essa fragmentação, e é ela, mais do que a coleta, que separa campanha de resultado.

## O Que É Compilação de Dados em Mídia Programática?

Compilação de dados é o processo de unificar sinais de origens diferentes — dados proprietários (1st-party), geolocalização e comportamento de navegação — numa audiência endereçável e ativável em mídia. Segundo o [IAB, no State of Data 2024](https://www.prnewswire.com/news-releases/digital-industry-moves-aggressively-to-privacy-by-design-according-to-iabs-annual-state-of-data-report-302088679.html), 71% de marcas, agências e publishers estavam crescendo ou planejando crescer seus datasets de first-party, quase o dobro dos 41% de dois anos antes. Coletar ficou comum; compilar bem continua raro.

## O Que Mudou (e o Que Não Mudou) com os Cookies de Terceiros

A narrativa do "fim do cookie" precisa de precisão. Segundo o [Google Privacy Sandbox](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies), o Chrome mantém a abordagem atual de oferecer ao usuário a escolha sobre cookies de terceiros, e dez tecnologias do Sandbox, incluindo Topics e Protected Audience, estão sendo aposentadas. Ou seja, o cookie de terceiros não foi removido do Chrome.

Isso não devolve ao cookie a confiabilidade de antes. Safari e Firefox já bloqueiam cookies de terceiros por padrão há anos, e o IAB registrou que 95% dos decisores de publicidade e dados esperavam perda contínua de sinal e/ou nova legislação de privacidade. Quem constrói audiência sobre um único identificador herda a fragilidade desse identificador. A saída é não depender dele.

## Os Três Insumos da Audiência Compilada

Uma audiência compilada nasce do cruzamento de três famílias de sinal, cada uma com uma força e um ponto cego.

- **Dados proprietários (1st-party):** cadastro, histórico de compra, CRM, eventos do site e do app. É o sinal de maior intenção e consentimento mais claro, mas cobre só quem já interagiu com a marca. O [guia sobre dado próprio](/blog/o-que-e-dado-proprio-first-party-data) detalha esse teto de alcance.
- **Geolocalização:** onde o dispositivo circula, por quanto tempo e com que recorrência. Revela contexto físico e hábito, mas sem qualificar bem o intervalo entre visitas. Ferramentas como Geo Intelligence, tecnologia de terceiros operada pela South Media, entram aqui como insumo, não como a audiência em si.
- **Comportamento de navegação:** categorias consumidas, frequência e momento de consumo. Aqui a [segmentação contextual com IA](/blog/segmentacao-contextual-2-0-ia) reduz a dependência de identificador individual, lendo o contexto da página em vez do histórico da pessoa.

Um quarto elemento aparece quando o objetivo é cross-screen: a ligação entre dispositivos do mesmo domicílio. A [sincronização entre CTV e mobile via Household Sync](/blog/household-sync-ctv-mobile-sincronizacao) funciona como mais um insumo de endereçamento, ampliando onde a audiência pode ser reencontrada.

## Por Que o Critério de Modelagem Vale Mais que a Coleta

**Dado bruto não segmenta ninguém. O que vira resultado é o critério com que você compila o dado em audiência.**

Dois anunciantes podem ter acesso aos mesmos sinais e chegar a audiências opostas. A diferença está nas decisões de modelagem:

1. **Peso de cada sinal.** Uma compra recente pesa mais que uma visita de seis meses atrás; um deslocamento recorrente pesa mais que uma passagem única.
2. **Janela de validade.** Sinal de intenção envelhece rápido. Audiência sem prazo de expiração vira lista morta.
3. **Regras de exclusão.** Quem já comprou, quem é cliente ativo e quem gera tráfego inválido precisam sair da audiência antes da ativação.
4. **Nível de endereçamento.** Pessoa, domicílio, dispositivo ou contexto: cada nível troca precisão por escala.
5. **Teste contra grupo de controle.** Sem isso, a compilação é opinião, não método.

É nesse ponto que a automação deixa de bastar. Plataformas conseguem juntar sinais em escala, mas decidir pesos, janelas e exclusões depende de critério e de operação humana que acompanhe a campanha e prove o resultado.

## Audiência Compilada versus First-Party Data

First-party data é uma matéria-prima: o que a marca sabe sobre quem se relacionou com ela. Audiência compilada é um produto: um conjunto de pessoas, domicílios ou contextos selecionado por critério, pronto para ser ativado em CTV, DOOH, áudio, display ou drive-to-store. O 1st-party é um dos insumos, e normalmente o de melhor qualidade, mas isolado ele alcança apenas a base já conhecida. A compilação estende esse sinal a quem se comporta como a base, sem exigir cookie de terceiros.

## Privacidade como Requisito de Projeto

Compilar sinais de origens diferentes aumenta a responsabilidade sobre a base legal de cada um. No Brasil, a [ANPD](https://www.gov.br/anpd/pt-br) fiscaliza a aplicação da LGPD (Lei 13.709/2018), e a finalidade, a minimização e o consentimento precisam ser definidos antes da modelagem, não depois. Audiência bem compilada é auditável: dá para dizer de onde veio cada sinal e por que cada pessoa entrou no segmento.

## Como Começar

1. Mapeie os sinais 1st-party que já existem e a base legal de cada um.
2. Defina o objetivo de negócio antes de escolher os insumos: venda em loja, lead ou reativação.
3. Escreva as regras de peso, janela e exclusão por escrito.
4. Ative em mais de um canal e compare contra grupo de controle.
5. Revise a audiência em ciclos curtos, porque o sinal envelhece.

## Perguntas Frequentes

### O que é compilação de dados em mídia programática?
É o processo de unificar sinais de origens diferentes, como dados proprietários, geolocalização e comportamento de navegação, numa audiência que pode ser ativada em mídia. O resultado depende menos de quanto dado foi coletado e mais dos critérios de peso, validade e exclusão aplicados.

### Como segmentar sem cookies de terceiros?
Combinando dado próprio, sinais de localização, contexto de conteúdo e endereçamento por domicílio ou dispositivo. O Chrome ainda mantém cookies de terceiros sob escolha do usuário, mas Safari e Firefox os bloqueiam por padrão, então depender só deles limita alcance e mensuração.

### Qual a diferença entre first-party data e audiência compilada?
First-party data é o dado coletado na relação direta da marca com o cliente. Audiência compilada é o segmento construído a partir dele e de outros sinais, com critérios de modelagem que permitem alcançar também quem ainda não é da base.

## Onde a South Media Entra

A South Media é uma AdTech brasileira independente de mídia programática. Nossa leitura é que a automação é o piso: o diferencial está no critério de compilação e na operação humana que acompanha a campanha até provar resultado. Insumos de geolocalização e de sincronização entre telas são tecnologia de terceiros que operamos com método, a serviço da audiência e não como fim em si.

## Fontes

- [Google Privacy Sandbox - Update on plans for Privacy Sandbox technologies (17/10/2025)](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies)
- [IAB - State of Data 2024, release de imprensa (14/03/2024)](https://www.prnewswire.com/news-releases/digital-industry-moves-aggressively-to-privacy-by-design-according-to-iabs-annual-state-of-data-report-302088679.html)
- [ANPD - Agência Nacional de Proteção de Dados (LGPD, Lei 13.709/2018)](https://www.gov.br/anpd/pt-br)
`,
};
