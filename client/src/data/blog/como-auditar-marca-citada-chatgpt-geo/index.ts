import type { BlogPost } from "../types";

// TODO: dado de Gartner (pauta) nao incluido. A previsao de queda de 25% do volume de busca ate 2026 (fev/2024) nao se confirmou segundo analises de 2026 e a pagina do press release retornou 403. Substituir por dado Gartner atual e verificavel, se desejado.
// TODO: paginas do Search Engine Land retornaram 403 ao WebFetch; os numeros (44,2% e 46%/67%) foram confirmados apenas pelo trecho dos resultados de busca. Reabrir manualmente antes de publicar.
// TODO: o metodo de auditoria (20 prompts, 3 rodadas, planilha de share of citation) e recomendacao editorial da South Media, nao benchmark de mercado.

export const post: BlogPost = {
    id: 45,
    slug: "como-auditar-marca-citada-chatgpt-geo",
    category: "IA",
    title: "Como Auditar se o ChatGPT Cita a Sua Marca (e o Que Fazer Quando Não Cita)",
    summary: "Auditoria de GEO em 6 passos: rode prompts, meça share of citation e mapeie as fontes que o ChatGPT cita no seu nicho para virar uma fonte citável por IA.",
    date: "9 Set 2026",
    readTime: "6 min",
    cover: "/blog/como-auditar-marca-citada-chatgpt-geo.webp",
    author: "South Media",
    content: `## Como Auditar GEO: O Passo a Passo Para Saber se o ChatGPT Cita a Sua Marca

Mais de 20% dos americanos já usam uma ferramenta de IA dez vezes ou mais por mês, segundo o estudo de 2026 da SparkToro, e essas ferramentas devolvem menos de 1% do tráfego para fora. A consequência prática: parte da decisão de compra acontece dentro da resposta, e a marca que não aparece ali não entra na consideração. Auditar GEO (Generative Engine Optimization) é o primeiro passo para saber de que lado dessa conta você está.

## O Que É GEO e Por Que Auditar Antes de Otimizar?

GEO (Generative Engine Optimization) é a prática de tornar uma marca citável pelos motores de resposta com IA, como ChatGPT, Gemini, Perplexity e o AI Overviews do Google. Auditar GEO significa rodar os prompts que o seu público faria e medir se, e como, a marca aparece nas respostas. O ponto de partida importa porque os AI Overviews já aparecem em mais de 20% das buscas do Google e, quando aparecem, derrubam a taxa de clique em quase 60%, segundo a SparkToro. Para o conceito completo, veja [o que é GEO e como ele difere do SEO](/blog/o-que-e-geo-generative-engine-optimization).

**No SEO você brigava pela primeira posição. No GEO, ou você é a fonte que a IA cita, ou você não existe na resposta.**

## Como Auditar Se o ChatGPT Cita a Sua Marca: 6 Passos

O método abaixo roda com uma planilha. A repetição é o que dá valor ao resultado.

1. **Monte a lista de prompts.** Escreva de 15 a 25 perguntas que o seu público realmente faria, em três grupos: descoberta ("qual o melhor jeito de fazer X"), comparação ("A ou B para Y") e marca direta ("o que é a empresa Z"). Use a linguagem do cliente, não a do seu departamento de marketing.
2. **Rode cada prompt em mais de uma plataforma.** ChatGPT, Gemini, Perplexity e o AI Overviews do Google têm fontes e comportamentos diferentes. Registre a data, o modelo e se a busca na web estava ativa.
3. **Repita três vezes.** Respostas de IA variam entre execuções. Uma única rodada é anedota; três rodadas começam a ser amostra.
4. **Classifique cada resposta.** Para cada prompt, anote se a marca foi citada com link, mencionada sem link, ou ausente. A distinção importa: menção sem link e citação com link são resultados diferentes.
5. **Calcule o share of citation.** Divida o número de respostas em que a marca aparece pelo total de respostas rodadas, separando por plataforma e por grupo de prompt. Faça o mesmo para dois ou três concorrentes diretos. O número isolado diz pouco; a comparação diz onde você está.
6. **Mapeie as fontes citadas.** Liste todos os domínios que aparecem nas respostas do seu nicho. Esse mapa é o seu plano de ação: ele mostra onde a IA vai buscar informação sobre a sua categoria.

Dê atenção ao sexto passo. Em análise publicada no Search Engine Land com base em estudo de Kevin Indig, em tópicos de comparação de produtos os 10 principais domínios concentraram 46% das citações do ChatGPT e os 30 principais, 67%. A lista de fontes que mandam no seu nicho é curta, e você precisa saber quais são.

## O Que Fazer Quando a Marca Não Aparece

Se o share of citation está baixo, o diagnóstico costuma cair em um de três casos: a marca não tem conteúdo que responda a pergunta, tem conteúdo mas ele não é extraível, ou não é mencionada nas fontes que a IA consulta. Cada caso pede uma alavanca diferente.

### Reescreva o conteúdo para abrir com a resposta

Um estudo de Kevin Indig publicado no Search Engine Land encontrou que 44,2% das citações do ChatGPT vêm dos primeiros 30% do conteúdo de uma página. Se a sua página só chega ao ponto no quinto parágrafo, ela perde para a que responde na abertura. A regra: definição e resposta em duas ou três frases autossuficientes logo abaixo do título, com título em formato de pergunta quando fizer sentido.

### Adicione dado, citação e fonte nomeada

O paper "GEO: Generative Engine Optimization", de pesquisadores de Princeton, Georgia Tech e outras instituições, aceito no KDD 2024, testou estratégias de reescrita de conteúdo e concluiu que o GEO pode aumentar a visibilidade em respostas de motores generativos em até 40%. O efeito varia por domínio, e por isso a auditoria vem antes: ela mostra o que funciona na sua categoria. Em termos de escrita, a lição é trocar adjetivo por número com fonte.

### Entre nas fontes que a IA já consulta

Se o mapa do passo 6 mostra que o ChatGPT cita publicações setoriais, fóruns e páginas de comparação, a alavanca é presença editorial nesses lugares: pautas, dados proprietários, participação em matérias de mercado. Aqui o GEO se aproxima de relações públicas.

### Cuide da base técnica do SEO

A documentação do Google sobre recursos de IA na Busca é direta: não há requisitos adicionais nem otimizações especiais para aparecer nos AI Overviews e no AI Mode. A página precisa estar indexada e elegível para exibir snippet. Ou seja, o SEO técnico continua sendo o piso. O que muda é a camada de conteúdo por cima dele.

## Como Medir o Resultado e Quando Repetir a Auditoria

Meça GEO por share of citation e por qualidade da menção, não por sessões vindas de IA. O volume de tráfego que chega de chatbots é pequeno demais para servir de termômetro, e o estudo da SparkToro mostra que essas ferramentas devolvem menos de 1% do tráfego. Para entender por que a métrica de clique perdeu poder explicativo, leia sobre [a busca zero-click e o impacto no tráfego orgânico e na mídia paga](/blog/busca-zero-click-trafego-organico-midia-paga).

Repita a auditoria a cada 30 ou 60 dias, com a mesma lista de prompts, para que a série seja comparável. Quando a janela de resposta também vira espaço de mídia, o raciocínio se estende para a publicidade: [ChatGPT Ads não é Google Ads](/blog/chatgpt-ads-nao-e-google-ads), e a lógica de compra é outra.

## Onde a South Media Entra

A automação de coleta é o piso: qualquer ferramenta roda prompts em escala. O que gera resultado é o critério de quem define os prompts, interpreta o mapa de fontes e conecta a presença orgânica em IA à estratégia de mídia paga. É nesse ponto que operação humana e dados trabalham juntos.

## Perguntas Frequentes

### O que é GEO e como difere de SEO?

GEO é a prática de tornar uma marca citável nas respostas de motores de IA, como ChatGPT, Gemini e Perplexity. O SEO disputa posição numa lista de links para gerar clique; o GEO disputa ser a fonte referenciada dentro da resposta, que muitas vezes não gera clique. Segundo a SparkToro, 68,01% das buscas do Google nos EUA terminaram sem clique entre janeiro e abril de 2026.

### Como saber se minha marca aparece no ChatGPT?

Rode de 15 a 25 prompts que seu público faria, repita cada um três vezes e registre se a marca foi citada com link, mencionada sem link ou ausente. Divida as aparições pelo total de respostas para obter o share of citation e compare com dois ou três concorrentes. Repita a cada 30 a 60 dias.

### O que fazer para ser citado por motores de IA?

Abra cada página com a resposta direta, use dados com fonte nomeada e esteja presente nas fontes que a IA já cita no seu nicho. O paper de GEO de Princeton e Georgia Tech mostrou ganho de visibilidade de até 40% com estratégias de reescrita, com efeito variável por domínio. O SEO técnico segue como base, conforme o Google.

## Fontes

- [SparkToro - In 2026, Less than One Third of Google Searches Still Send a Click](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
- [arXiv - GEO: Generative Engine Optimization (Aggarwal et al., KDD 2024)](https://arxiv.org/abs/2311.09735)
- [Google Search Central - AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Search Engine Land - ChatGPT citations favor a small group of domains: Study](https://searchengineland.com/chatgpt-citations-domains-study-472349)
- [Search Engine Land - 44% of ChatGPT citations come from the first third of content: Study](https://searchengineland.com/chatgpt-citations-content-study-469483)
`,
};
