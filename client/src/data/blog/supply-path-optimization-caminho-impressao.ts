import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 30,
    slug: "supply-path-optimization-caminho-impressao",
    category: "Programática",
    title: "Supply Path Optimization: Por Que o Caminho Que a Sua Impressão Percorre Decide Quanto Você Paga a Mais",
    summary: "Supply Path Optimization (SPO) escolhe a rota mais curta até a mesma impressão. A ANA aponta que a intermediação chega a consumir ~29% do investimento.",
    date: "9 Jul 2026",
    readTime: "6 min",
    cover: "/blog/supply-path-optimization.webp",
    author: "South Media",
    content: `## O Que É Supply Path Optimization (SPO)?

Supply Path Optimization (SPO) é a disciplina de mapear todos os caminhos pelos quais uma mesma impressão pode chegar até o comprador e escolher deliberadamente a rota mais curta, transparente e barata. Uma única impressão pode ser oferecida por vários caminhos ao mesmo tempo — e cada intermediário leva um pedaço da verba. O tamanho do problema tem número: o estudo de transparência da ANA quantificou custos de transação da cadeia consumindo por volta de **29%** do investimento programático.

Uma única impressão de um único site pode ser oferecida ao seu comprador por vários caminhos ao mesmo tempo — direto do publisher, via SSP A, via SSP B, via revendedor, via revendedor do revendedor. Todos vendem o mesmo espaço. E cada intermediário no caminho leva um pedaço da sua verba.

Parece detalhe técnico. É, na verdade, uma das maiores alavancas de eficiência da mídia programática.

## O Tamanho do Problema

O estudo de transparência da ANA quantificou o que o mercado preferia não olhar: custos de transação da cadeia programática consumindo por volta de **29%** do investimento, com apenas cerca de 36 centavos de cada dólar chegando ao consumidor em mídia de qualidade. Parte relevante dessa perda está justamente nos caminhos redundantes — a mesma impressão comprada por uma rota cheia de pedágios em vez de uma rota direta.

O detalhe mais revelador do estudo: enquanto a maioria das SSPs ficava com menos de 5% do investimento, uma única SSP chegou a absorver perto de 45% do gasto de mídia num dos casos. Sem SPO, o comprador não enxerga isso. Só vê a impressão entregue.

## Caminho Mais Curto Não é Só Mais Barato

SPO não é uma corrida pelo menor custo. Rota direta com publisher costuma significar também menos oportunidade de fraude, menos discrepância de mensuração e mais controle sobre onde a marca aparece.

**O caminho curto é, ao mesmo tempo, mais barato e mais seguro — é raro que eficiência e qualidade apontem tão claramente para a mesma direção.**

## Como Isso Se Traduz em Decisão

Na prática, SPO envolve consolidar sellers, priorizar conexões diretas e supply autorizado, ler os arquivos de transparência (ads.txt, sellers.json) e cortar rotas que só adicionam taxa sem adicionar acesso. É trabalho contínuo, não um ajuste único: a cadeia muda o tempo todo, e a rota que era limpa no mês passado pode ter ganhado um pedágio novo.

O resultado é direto no bolso: a mesma verba, comprando a mesma audiência, com uma fatia maior chegando de fato à mídia — e não aos intermediários.

## O Que Vem a Seguir

À medida que o anunciante brasileiro ganha acesso a dados de log e passa a auditar a própria cadeia, SPO deixa de ser tema de especialista e vira exigência básica. A pergunta que todo gestor deveria fazer ao parceiro de mídia é simples: por quantas mãos passa a minha impressão antes de chegar na tela?

Na South Media, otimização de caminho de compra é parte de operar com transparência — encurtar a distância entre a verba e a mídia é, no fim, o que faz a conta fechar para o anunciante.

## Perguntas Frequentes

### O que é supply path optimization (SPO)?

É a estratégia de identificar todos os caminhos pelos quais uma impressão pode ser comprada e priorizar as rotas mais curtas, diretas e transparentes até o publisher. O objetivo é eliminar intermediários redundantes que só adicionam taxa, sem adicionar acesso.

### Por que a mesma impressão tem vários caminhos e preços?

Um mesmo espaço pode ser ofertado simultaneamente direto pelo publisher e por várias SSPs e revendedores. Cada rota carrega sua própria camada de taxas, então o mesmo inventário chega ao comprador por preços diferentes conforme o caminho.

### SPO só serve para reduzir custo?

Não. Além de reduzir taxas de intermediação, a rota mais direta costuma trazer menos risco de fraude, menos discrepância de mensuração e mais controle sobre onde a marca aparece. Eficiência e qualidade tendem a andar juntas no SPO.

### Como começar a aplicar SPO?

Os primeiros passos são consolidar o número de sellers, priorizar conexões diretas e supply autorizado, e ler os arquivos ads.txt e sellers.json para cortar rotas sem valor. Como a cadeia muda o tempo todo, o trabalho é contínuo, não um ajuste único.`,
  };
