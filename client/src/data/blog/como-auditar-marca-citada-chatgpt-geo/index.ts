import type { BlogPost } from "../types";

// TODO: dado de Gartner (pauta) nao incluido. A previsao de queda de 25% do volume de busca ate 2026 (fev/2024) nao se confirmou segundo analises de 2026 e a pagina do press release retornou 403. Substituir por dado Gartner atual e verificavel, se desejado.
// TODO: paginas do Search Engine Land retornaram 403 ao WebFetch; o numero 46%/67% foi confirmado apenas pelo trecho dos resultados de busca. Reabrir manualmente antes de publicar. (O dado de 44,2% e o paper de GEO de Princeton sairam do texto na revisao de tese.)
// TODO: o metodo de auditoria (20 prompts, 3 rodadas, planilha de share of citation) e recomendacao editorial da South Media, nao benchmark de mercado. A South Media nao executa a auditoria nem GEO para clientes; opera a veiculacao de ChatGPT Ads.

export const post: BlogPost = {
    id: 45,
    slug: "como-auditar-marca-citada-chatgpt-geo",
    category: "IA",
    title: "Como Auditar se o ChatGPT Cita a Sua Marca (e Como Garantir Presença Quando Ele Não Cita)",
    summary: "Auditoria de GEO em 6 passos: rode prompts, meça share of citation e veja se o ChatGPT cita a sua marca — e como estar na conversa com anúncio quando não cita.",
    date: "9 Set 2026",
    readTime: "6 min",
    cover: "/blog/como-auditar-marca-citada-chatgpt-geo.webp",
    author: "South Media",
    content: `## Como Auditar GEO: O Passo a Passo Para Saber se o ChatGPT Cita a Sua Marca

Mais de 20% dos americanos já usam uma ferramenta de IA dez vezes ou mais por mês, segundo o estudo de 2026 da SparkToro, e essas ferramentas devolvem menos de 1% do tráfego para fora. A consequência prática: parte da decisão de compra acontece dentro da resposta, e a marca que não aparece ali não entra na consideração. Auditar GEO (Generative Engine Optimization) é o diagnóstico que mostra de que lado dessa conta você está, e o tamanho da lacuna a cobrir.

## O Que É GEO e Por Que Auditar a Presença da Marca?

GEO (Generative Engine Optimization) é a prática de tornar uma marca citável pelos motores de resposta com IA, como ChatGPT, Gemini, Perplexity e o AI Overviews do Google. Auditar GEO significa rodar os prompts que o seu público faria e medir se, e como, a marca aparece nas respostas. O diagnóstico importa porque os AI Overviews já aparecem em mais de 20% das buscas do Google e, quando aparecem, derrubam a taxa de clique em quase 60%, segundo a SparkToro. Para a diferença entre o caminho orgânico e o pago, veja [GEO e ChatGPT Ads: como sua marca entra na resposta da IA](/blog/o-que-e-geo-generative-engine-optimization).

**No SEO você brigava pela primeira posição. No ChatGPT, ou a IA cita a sua marca, ou ela precisa estar lá como anúncio.**

## Como Auditar Se o ChatGPT Cita a Sua Marca: 6 Passos

O método abaixo roda com uma planilha. A repetição é o que dá valor ao resultado.

1. **Monte a lista de prompts.** Escreva de 15 a 25 perguntas que o seu público realmente faria, em três grupos: descoberta ("qual o melhor jeito de fazer X"), comparação ("A ou B para Y") e marca direta ("o que é a empresa Z"). Use a linguagem do cliente, não a do seu departamento de marketing.
2. **Rode cada prompt em mais de uma plataforma.** ChatGPT, Gemini, Perplexity e o AI Overviews do Google têm fontes e comportamentos diferentes. Registre a data, o modelo e se a busca na web estava ativa.
3. **Repita três vezes.** Respostas de IA variam entre execuções. Uma única rodada é anedota; três rodadas começam a ser amostra.
4. **Classifique cada resposta.** Para cada prompt, anote se a marca foi citada com link, mencionada sem link, ou ausente. A distinção importa: menção sem link e citação com link são resultados diferentes.
5. **Calcule o share of citation.** Divida o número de respostas em que a marca aparece pelo total de respostas rodadas, separando por plataforma e por grupo de prompt. Faça o mesmo para dois ou três concorrentes diretos. O número isolado diz pouco; a comparação diz onde você está.
6. **Mapeie as fontes citadas.** Liste todos os domínios que aparecem nas respostas do seu nicho. Esse mapa mostra quem ocupa hoje a conversa sobre a sua categoria — e o tamanho da lacuna que a sua marca precisa cobrir.

Dê atenção ao sexto passo. Em análise publicada no Search Engine Land com base em estudo de Kevin Indig, em tópicos de comparação de produtos os 10 principais domínios concentraram 46% das citações do ChatGPT e os 30 principais, 67%. A lista de fontes que dominam a resposta é curta, e entrar nela não depende só da marca.

## O Que Fazer Quando a Marca Não Aparece

Se o share of citation está baixo, há duas frentes, com prazos diferentes.

A frente orgânica (conteúdo, SEO técnico, presença em fontes setoriais) é trabalho de longo prazo e depende de como cada modelo escolhe suas fontes. A marca não controla quando nem como será citada. A própria documentação do Google sobre recursos de IA na Busca diz que não há otimização especial para aparecer nos AI Overviews: a página precisa estar indexada e elegível para snippet, e o resto é decisão do sistema.

A frente controlável é a mídia. Desde agosto de 2026 o ChatGPT exibe anúncios no Brasil, em unidades identificadas abaixo da resposta, para usuários dos planos Free e Go. É a forma de a marca estar na conversa agora, com a mensagem que ela definiu, no formato de chat card ou carrossel, com segmentação por país, estado ou região. Para entender como o canal funciona, veja [por que ChatGPT Ads não é Google Ads](/blog/chatgpt-ads-nao-e-google-ads) e [o que muda com os anúncios do ChatGPT no Brasil](/blog/chatgpt-ads-brasil-o-que-muda).

## Como Acompanhar a Lacuna e Quando Repetir a Auditoria

Acompanhe a presença orgânica por share of citation e por qualidade da menção, não por sessões vindas de IA. O volume de tráfego que chega de chatbots é pequeno demais para servir de termômetro, e o estudo da SparkToro mostra que essas ferramentas devolvem menos de 1% do tráfego. Para entender por que o clique perdeu poder explicativo, leia sobre [a busca zero-click e o impacto no tráfego orgânico e na mídia paga](/blog/busca-zero-click-trafego-organico-midia-paga).

Repita a auditoria a cada 30 ou 60 dias, com a mesma lista de prompts, para que a série seja comparável. Nos prompts em que a marca segue ausente, a resposta é o anúncio: ele garante a presença enquanto a citação orgânica não vem.

## Onde a South Media Entra

A auditoria mostra a lacuna; o anúncio a preenche. A South Media é pioneira na operação de ChatGPT Ads no Brasil: passou pela fase de teste da plataforma e hoje opera campanhas em escala crescente. A marca entra na conversa com objetivo definido (Alcançar, Cliques ou Conversões), criativo pensado para o ambiente conversacional e entrega acompanhada em tempo real no Forja, o dashboard proprietário da South Media.

## Perguntas Frequentes

### O que é GEO e como difere de SEO?

GEO é a prática de tornar uma marca citável nas respostas de motores de IA, como ChatGPT, Gemini e Perplexity. O SEO disputa posição numa lista de links para gerar clique; o GEO disputa ser a fonte referenciada dentro da resposta, que muitas vezes não gera clique. Segundo a SparkToro, 68,01% das buscas do Google nos EUA terminaram sem clique entre janeiro e abril de 2026.

### Como saber se minha marca aparece no ChatGPT?

Rode de 15 a 25 prompts que seu público faria, repita cada um três vezes e registre se a marca foi citada com link, mencionada sem link ou ausente. Divida as aparições pelo total de respostas para obter o share of citation e compare com dois ou três concorrentes. Repita a cada 30 a 60 dias.

### O que fazer se minha marca não aparece no ChatGPT?

No longo prazo, conteúdo que responda direto e presença nas fontes que a IA consulta ajudam, mas a marca não controla quando será citada. Para estar na conversa agora, o caminho é o ChatGPT Ads, disponível no Brasil desde agosto de 2026, com investimento mínimo de R$ 40 por dia e R$ 570 por campanha.

## Fontes

- [SparkToro - In 2026, Less than One Third of Google Searches Still Send a Click](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
- [Google Search Central - AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Search Engine Land - ChatGPT citations favor a small group of domains: Study](https://searchengineland.com/chatgpt-citations-domains-study-472349)
`,
};
