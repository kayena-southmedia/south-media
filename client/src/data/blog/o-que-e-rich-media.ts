import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 51,
    slug: "o-que-e-rich-media",
    category: "Performance",
    title: "O Que É Rich Media: Formatos e Como Funciona",
    summary: "O que é Rich Media: formatos interativos, expansíveis e com vídeo, como sustentam atenção e viewability e os cuidados técnicos para agências medirem a entrega.",
    date: "3 Out 2026",
    readTime: "6 min",
    cover: "/blog/o-que-e-rich-media.webp",
    author: "South Media",
    content: `## O que é Rich Media?

Rich Media é o anúncio de display que vai além da arte estática: ele expande, traz vídeo integrado, elementos interativos, galeria ou jogo, e pode ter áudio, tudo dentro do espaço do banner. Segundo o guia New Ad Portfolio, da IAB Tech Lab, rich media são recursos interativos que engajam o usuário dentro do próprio anúncio. Bem executado, o formato sustenta tempo de exposição e viewability na etapa de consideração.

## Quais são os formatos de Rich Media e como eles diferem do banner estático?

O formato reúne quatro famílias. Os expansíveis abrem uma área maior depois da interação do usuário. O vídeo integrado roda dentro do próprio banner. Os interativos trazem quiz, jogo ou galeria de produtos navegável. E o áudio em display adiciona som à peça, sempre iniciado pelo usuário.

## Por que o Rich Media funciona na etapa de consideração?

Consideração é a fase em que o público compara opções, e para isso ele precisa de tempo com a marca. O Rich Media oferece esse tempo em troca de interatividade, sem pedir que o usuário saia da página onde está.

O primeiro critério de qualidade é a viewability. Pelo padrão do Media Rating Council (MRC), um anúncio de display é viewable quando 50% dos pixels ficam visíveis por pelo menos um segundo contínuo. No vídeo, a exigência é de dois segundos contínuos.

O segundo critério é a atenção. Em novembro de 2025, MRC e IAB publicaram as Attention Measurement Guidelines, primeiro padrão formal do setor para atenção, e estabeleceram que ela não deve ser usada como medida de resultado de campanha, mas como indicador de qualidade da exposição. É exatamente nesse papel que o Rich Media se destaca.

**Rich Media não serve para arrancar clique. Serve para manter a marca na tela tempo suficiente para ela ser considerada.**

## Quais cuidados técnicos a agência precisa ter com peso e carregamento?

Um arquivo de Rich Media pesado perde a disputa antes de começar. Se a peça demora a carregar, o usuário rola a página e o anúncio sai da tela antes sequer de aparecer, gerando uma impressão que nunca teve chance de ser vista.

O guia LEAN da IAB Tech Lab organiza o peso em etapas. A carga inicial leva só o necessário para a peça aparecer, com no máximo dez requisições de arquivo. Os elementos pesados, como animação e vídeo, ficam para a carga posterior. O que o usuário pede ao interagir pode carregar sem limite de peso.

Três cuidados práticos para a agência:

1. Entregar o criativo já separado em carga inicial e carga posterior, com a primeira tela funcionando sozinha.
2. Deixar áudio e expansão sempre sob comando do usuário, nunca automáticos, como pede o princípio de experiência não invasiva do LEAN.
3. Testar a peça em conexão móvel lenta antes de subir, que é o cenário mais exigente de carregamento.

O vídeo é o ponto mais sensível. A SouthMedia opera o Instant Play, tecnologia que converte o vídeo em alta definição em pixels dinâmicos, com player embutido no próprio anúncio. O vídeo carrega na hora e roda sem travar em qualquer conexão, o que viabiliza formatos mistos de imagem e vídeo, quizzes, jogos e galerias de produtos dentro do banner.

## Como medir a qualidade da entrega de Rich Media?

O Rich Media pode gerar cliques, mas o clique não é a promessa do formato. A pessoa interage com a peça justamente para não sair da página, e medir só a saída esconde o que o anúncio entregou.

A leitura correta combina quatro indicadores. Viewability auditada no padrão MRC mostra se o anúncio teve chance real de ser visto. Tráfego inválido filtrado mostra se quem viu era gente. Tempo de exposição e taxa de interação mostram a qualidade do contato. E a conclusão do vídeo integrado mostra se a mensagem chegou até o fim.

Quando a marca precisa saber se a percepção mudou, o caminho é um estudo de brand lift, operado com parceiros especializados e desenhado antes de a campanha começar.

## Como a SouthMedia entrega campanhas de Rich Media?

A SouthMedia, AdTech brasileira e independente, opera as principais plataformas de compra do mercado e roda Rich Media com o Instant Play, que faz o vídeo carregar na hora em qualquer conexão. Toda entrega passa pelo Double Check, nossa metodologia exclusiva de verificação em tripla camada com a DoubleVerify, e pela Anti-VPN Tech, tecnologia proprietária que filtra o tráfego desde a primeira impressão. O inventário é curado para ficar fora de sites MFA, e os dados ficam disponíveis em tempo real no Forja, nosso dashboard proprietário. A tecnologia executa; a escolha de formato, inventário e leitura de dados é da nossa operação.

## Perguntas Frequentes

### Rich Media é a mesma coisa que anúncio em vídeo?

Não. O vídeo é um dos recursos possíveis, mas o Rich Media também inclui formatos expansíveis, interativos e com áudio, sempre dentro do espaço de display.

### Rich Media aumenta os cliques da campanha?

O formato pode gerar cliques, mas não é essa a sua promessa. O valor está no tempo de exposição e na interação dentro da peça, medidos junto com a viewability.

### Qual deve ser o peso de um criativo Rich Media?

O criativo segue o guia LEAN da IAB Tech Lab: carga inicial leve, com o essencial para a peça aparecer, e o restante na carga posterior. A especificação de cada formato é confirmada com a operação antes da produção.

### Como saber se o anúncio Rich Media foi visto?

A viewability é medida no padrão do MRC, que considera visível o anúncio de display com metade dos pixels na tela por pelo menos um segundo. Na SouthMedia, a entrega também passa pela verificação em tripla camada do Double Check.

## Fontes

- [IAB Tech Lab, New Ad Portfolio · Ad Experience Guide](https://www.iab.com/wp-content/uploads/2019/04/IABNewAdPortfolio_AdExperience_CBA_Guide.pdf): definição de rich media, princípio LEAN, carga inicial e posterior.
- [IAB Tech Lab, Flexible Size Ad Specifications](https://media.potatopro.com/iab-flexible-size-ad-specifications.pdf): máximo de dez requisições na carga inicial.
- [PPC Land, Viewability](https://ppc.land/viewability/): padrão MRC para display e vídeo.
`,
};
