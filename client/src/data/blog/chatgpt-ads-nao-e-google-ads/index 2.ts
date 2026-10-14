// TODO: Similarweb nao foi consultado diretamente (MCP exige autenticacao); o dado de alcance usa o numero oficial da OpenAI (900 mi de usuarios semanais, fev/2026, via Yahoo Finance). Se quiser dado Similarweb, adicionar.
// TODO: Janela de atribuicao (1, 7 ou 28 dias) vem de guia de terceiro (Top Growth Marketing); a pagina de ajuda da OpenAI retornou 403. Confirmar na documentacao oficial.
// TODO: Data do Brasil: fontes (Zenda, Index Lab) indicam piloto em 4 Ago 2026; o post chatgpt-ads-brasil-o-que-muda diz 17 Ago. Texto usa "agosto de 2026". Alinhar os dois posts.
// TODO: o relato da Digiday de 1 Out 2026 foi removido para nao anachronizar a data do post (5 Set 2026). Se o post for publicado em outubro, reincluir.
import type { BlogPost } from "../types";

export const post: BlogPost = {
  id: 44,
  slug: "chatgpt-ads-nao-e-google-ads",
  category: "IA",
  title: "ChatGPT Ads não é Google Ads: por que copiar a lógica da busca paga queima verba",
  summary: "ChatGPT Ads não segue a lógica do Google Ads: a intenção é conversacional e a medição ainda é frágil. Veja o que testar agora e o critério antes do orçamento.",
  date: "5 Set 2026",
  readTime: "6 min",
  cover: "/blog/chatgpt-ads-nao-e-google-ads.webp",
  author: "South Media",
  content: `## ChatGPT Ads não é Google Ads: por que copiar a lógica da busca paga queima verba

O ChatGPT tem 900 milhões de usuários ativos por semana, segundo anúncio da OpenAI em fevereiro de 2026, e desde agosto os anúncios chegaram ao Brasil. O reflexo do mercado é previsível: montar a conta como se fosse mais um Google Ads, com grupos de palavras-chave, lance por clique e ROAS de último clique. É a forma mais rápida de queimar verba em **ChatGPT Ads** e concluir, errado, que o canal não funciona.

## O que é ChatGPT Ads?

ChatGPT Ads é o formato de publicidade exibido dentro do ChatGPT, ao lado das respostas conversacionais da IA. Diferente da busca paga, não existe uma palavra-chave com intenção de compra clara: o contexto é uma conversa. O alcance é enorme (900 milhões de usuários semanais, segundo a OpenAI), mas isso muda a lógica de mensuração: o last-click não captura o valor.

## Intenção conversacional não é intenção de busca

Quem digita "tênis de corrida barato" no Google está, em geral, com a carteira na mão. A palavra-chave é um sinal compacto e confiável de intenção, e todo o modelo de leilão da busca paga foi construído sobre ela.

No ChatGPT, a mesma pessoa pode escrever três parágrafos explicando uma lesão no joelho, o orçamento e a rotina de treino. O sinal é mais rico, mas também mais ambíguo: ela está pesquisando, comparando, aprendendo ou só desabafando? Conversa tem fases, e o anúncio aparece em uma delas, sem que a plataforma ou o anunciante saibam exatamente qual.

Segundo reportagens e guias de mercado sobre o lançamento brasileiro, os anúncios aparecem em unidades claramente identificadas, abaixo da resposta, para usuários maiores de 18 anos dos planos Free e Go. Planos pagos não veem anúncios nessa fase. É um recorte de audiência diferente do da busca, e isso importa para quem planeja alcance.

Por isso o primeiro erro é transplantar a estrutura de campanha. Lista de palavras-chave exatas, correspondência de frase e negativação pertencem a um ambiente em que a intenção vem em forma de consulta. Aqui, o que existe é contexto e, em geral, uma jornada mais longa e menos linear.

**Levar a lógica de busca paga para o ChatGPT é como medir CTV por cliques: você vai otimizar a métrica errada e concluir que o canal não funciona.**

## A mensuração ainda é frágil

A plataforma já oferece pixel, API de conversões e parâmetros de UTM, e a atribuição é baseada em clique. Segundo guia da Top Growth Marketing, a janela padrão é de 7 dias, configurável entre 1 e 28. O que isso não mostra é o efeito de quem viu, absorveu a mensagem e converteu depois, por busca de marca, acesso direto ou compra na loja.

Quando a plataforma e o anunciante medem o mesmo resultado de formas diferentes, decidir só pelo dado da plataforma é jogar.

Isso conversa com o que já discutimos sobre [busca zero-click e o tráfego que não chega ao site](/blog/busca-zero-click-trafego-organico-midia-paga): quando a resposta resolve na própria interface, o clique deixa de ser a régua do valor.

## O que testar agora

A lógica correta é a de mídia de topo e meio de funil, avaliada por incrementalidade, e não a de captura de demanda. Há quatro frentes razoáveis para um teste:

- **Categorias de consideração longa:** produtos e serviços em que a pessoa pesquisa antes de decidir (financeiro, educação, saúde, viagem, tecnologia).
- **Mensagem de resposta, não de oferta:** o criativo precisa parecer útil dentro de uma conversa, não um banner de promoção.
- **Medição com controle:** grupo ou período de comparação, monitoramento de busca de marca e de tráfego direto, e UTM padronizada para conciliar com o analytics próprio.
- **Janela de leitura mais longa:** o efeito de um anúncio visto numa conversa raramente aparece no mesmo dia.

## O que não testar

- **Migrar verba de busca paga para o ChatGPT.** O canal ainda não tem histórico de conversão que justifique realocação, e a base de mensuração não sustenta essa decisão.
- **Cobrar CPA igual ao do Google.** Comparar custo por aquisição de último clique entre os dois ambientes mede o canal com a régua da busca.
- **Replicar a conta de busca.** Estruturas calcadas em palavras-chave exatas não traduzem o contexto de uma conversa.
- **Escalar antes de ter leitura incremental.** Preço baixo não é critério: segundo a Digiday, o CPM caiu de cerca de US$ 60 no lançamento para a faixa de US$ 25 a US$ 45 em abril de 2026, e preço em queda indica oferta crescendo, não resultado comprovado.

Para entender os números iniciais do canal no país, veja [o que muda com os anúncios do ChatGPT no Brasil](/blog/chatgpt-ads-brasil-o-que-muda).

## Critério antes de orçamento

A pergunta certa não é quanto alocar, e sim o que o teste precisa provar. Antes de liberar verba, defina por escrito a hipótese, o indicador incremental que a confirma, o prazo e a regra de saída. Sem isso, qualquer resultado, bom ou ruim, será interpretado conforme a conveniência.

Há ainda uma camada que o anunciante precisa considerar: a visibilidade orgânica da marca nas respostas da IA. Ela não depende do anúncio, e é objeto de [GEO, a otimização para mecanismos generativos](/blog/o-que-e-geo-generative-engine-optimization). Mídia paga e presença orgânica na IA são alavancas diferentes, e medir uma pela outra gera conclusões erradas.

A automação das plataformas é o piso: o lance automático e a otimização por conversão entram em qualquer conta. O que diferencia o resultado é o critério de quem define o que medir e a operação humana que lê o dado com ceticismo. Na South Media, canal novo entra com teste controlado e leitura incremental, antes de virar linha fixa no plano.

## Perguntas Frequentes

### O que é ChatGPT Ads?

É o formato de publicidade exibido dentro do ChatGPT, em unidades identificadas ao lado das respostas da IA. Está disponível, em fase inicial, para usuários dos planos Free e Go, e chegou ao Brasil em agosto de 2026.

### Qual a diferença entre ChatGPT Ads e Google Ads?

No Google Ads, a palavra-chave expressa uma intenção de busca clara e o clique é a principal métrica. No ChatGPT Ads, o contexto é uma conversa, a intenção é menos explícita e boa parte do valor acontece fora do clique, o que torna a lógica de último clique inadequada.

### Como medir resultado de anúncio no ChatGPT?

Combine pixel ou API de conversões com UTM padronizada e compare contra grupo ou período de controle. Monitore também busca de marca e tráfego direto, porque o efeito sem clique não aparece no relatório da plataforma.

## Fontes

- [Yahoo Finance - ChatGPT reaches 900M weekly active users](https://finance.yahoo.com/news/chatgpt-reaches-900m-weekly-active-182551628.html)
- [Digiday - 'Everything is coming down': ChatGPT ads are getting cheaper](https://digiday.com/marketing/everything-is-coming-down-chatgpt-ads-are-getting-cheaper/)
- [Top Growth Marketing - How to Measure ChatGPT Ads (And What You Can't - Yet)](https://topgrowthmarketing.com/how-to-measure-chatgpt-ads/)
- [Zenda - ChatGPT Ads in Brazil and Mexico: It Finally Has a Date](https://zenda.com.ar/en/blog/chatgpt-ads-brazil-mexico)
- [Index Lab - Where ChatGPT Ads are available (2026): country list](https://www.indexlab.ai/services/chatgpt-ads/availability)
`,
};
