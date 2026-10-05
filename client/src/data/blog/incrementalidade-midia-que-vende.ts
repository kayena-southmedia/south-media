import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 29,
    slug: "incrementalidade-midia-que-vende",
    category: "Performance",
    title: "Incrementalidade: Como o Grupo de Controle Mostra o Que a Mídia Realmente Moveu",
    summary: "Incrementalidade é o efeito que só existe por causa da mídia. Entenda como o grupo de controle separa a campanha do acaso e onde já se aplica: visitas à loja.",
    date: "3 Jul 2026",
    readTime: "7 min",
    cover: "/blog/incrementalidade.webp",
    author: "South Media",
    content: `## O Que É Incrementalidade em Marketing?

Incrementalidade é o efeito que só aconteceu **por causa** da mídia — o resultado que não teria existido sem a campanha. Ela é medida comparando um grupo exposto a um grupo de controle não exposto, o mesmo princípio de um ensaio clínico randomizado. No Drive to Store, essa lógica já se aplica às visitas à loja.

Existe um erro de leitura que passa despercebido em muito relatório de campanha: confundir correlação com causa. A campanha rodou, o movimento subiu — logo, a campanha gerou o movimento. Nem sempre. Parte dele viria de qualquer jeito, por sazonalidade, clientes recorrentes ou uma data comemorativa no meio do período.

Um exemplo simples: uma loja que roda campanha na mesma semana do Dia das Mães. Parte do movimento viria de qualquer jeito; o grupo de controle é o que separa uma coisa da outra.

## O Que Incrementalidade Realmente Mede

Incrementalidade responde a uma pergunta precisa: quanto do resultado só aconteceu **por causa** da mídia? Ou seja, quanto é incremental — não teria existido sem a campanha?

A forma mais confiável de medir isso é por teste controlado: um grupo é exposto à campanha (grupo de teste) e um grupo estatisticamente equivalente não é exposto (grupo de controle). A diferença entre os dois é o lift incremental.

**Sem grupo de controle, o número mostra o que aconteceu. Com grupo de controle, mostra o que a campanha moveu.**

## Onde a Lógica do Grupo de Controle Já Funciona: Visitas à Loja

No Drive to Store, a medição de visitas compara quem foi impactado pela campanha com um grupo de controle que não foi. A leitura deixa de ser só "quantas visitas aconteceram" e passa a ser "quantas visitas a campanha acrescentou" — visitas atribuídas contra visitas observadas.

É incrementalidade aplicada ao objetivo que a mídia de drive to store se propõe a mover: levar o consumidor até o ponto de venda. O que acontece dentro da loja depois disso depende de preço, estoque e atendimento, e por isso a visita incremental é o KPI da campanha. O raciocínio completo está em [drive to store: da visita à venda](/blog/drive-to-store-venda-incremental-nao-footfall), e os cuidados de leitura do relatório, em [o que o footfall não mede](/blog/o-que-footfall-nao-mede).

## O Elo Com Transparência

Incrementalidade também expõe desperdício de inventário. Se uma fatia da campanha roda em ambiente de baixa qualidade — sites MFA, tráfego inválido, localização mascarada por VPN —, qualquer teste com grupo de controle tende a mostrar contribuição próxima de zero nessa fatia. É a lógica que não se deixa enganar por relatório bonito: ou a mídia moveu o ponteiro, ou não moveu. Por isso curadoria de inventário e verificação independente são pré-requisito de qualquer leitura de efeito.

## Como Começar Sem Virar um Projeto de Dois Anos

Não é preciso montar um laboratório. O mercado usa diferentes formatos de teste: comparação de praças expostas com praças de controle, retenção de parte da audiência (holdout) e estudos de lift oferecidos pelas próprias plataformas de mídia, cada um com sua metodologia. O essencial é desenhar a campanha já sabendo qual grupo de controle vai servir de comparação — e começar pelo que já é mensurável no canal escolhido. No Drive to Store, isso é a visita.

## O Que Vem a Seguir

Num mercado que cobra cada vez mais clareza sobre o efeito da mídia, ler número solto vai perdendo espaço para o desenho de teste. A pergunta que separa quem investe de quem torra verba é simples: contra o que eu estou comparando o resultado da campanha?

Na South Media, campanhas de Drive to Store trazem medição de visitas com grupo de controle, e toda a entrega passa por curadoria de inventário e verificação independente — porque mídia que roda em inventário inválido não move nada.

## Perguntas Frequentes

### O que é incrementalidade em marketing?

É a medida do resultado que só aconteceu por causa da campanha — ou seja, o que não teria existido sem a mídia. Ela separa o que a mídia efetivamente causou do que apenas coincidiu com o período da campanha.

### Qual a diferença entre incrementalidade e atribuição?

A atribuição credita à campanha o que aconteceu depois da exposição, como uma visita ou uma conversão. A incrementalidade compara expostos e não expostos para medir só o efeito adicional. Por isso as duas leituras respondem a perguntas diferentes e se complementam.

### Como medir incrementalidade?

O método mais confiável é o teste controlado: um grupo exposto e um grupo de controle equivalente que não vê a campanha. No Drive to Store, isso é feito nas visitas à loja, comparando a taxa de visita dos dois grupos.

### O que é lift incremental?

É a diferença de resultado entre o grupo exposto à campanha e o grupo de controle, geralmente expressa em percentual. Um lift positivo indica que a mídia gerou efeito; um lift próximo de zero indica que o resultado teria acontecido de qualquer forma.`,
  };
