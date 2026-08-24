import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 33,
    slug: "o-que-e-dado-proprio-first-party-data",
    category: "Dados",
    title: "O Que É Dado Próprio (First-Party Data) — e o Teto Que Ninguém Conta",
    summary: "Dado próprio é o que a marca coleta na relação direta com o cliente. Entenda o que ele resolve, e por que menos de 30% dos usuários logados limitam o alcance.",
    date: "20 Jul 2026",
    readTime: "6 min",
    cover: "/blog/o-que-e-dado-proprio.webp",
    author: "South Media",
    content: `## O Que É Dado Próprio (First-Party Data)?

Dado próprio, ou first-party data, é a informação que a própria marca coleta na relação direta com o cliente: cadastro, histórico de compra, navegação no site, base de CRM, atendimento, aplicativo. É dado obtido com consentimento e sem intermediário, o que o torna a base mais confiável e mais estável que uma empresa pode ter. Existe um limite estrutural pouco discutido: **menos de 30% dos usuários de publishers estão logados ou registrados**, segundo o relatório State of Digital Identity do ID5 (setembro de 2025) — o que significa que o dado próprio, sozinho, endereça uma fração da audiência.

"Invista no dado próprio" virou conselho automático nos últimos cinco anos. O conselho está certo. O que quase nunca vem junto é a segunda metade da frase.

## Por Que o Dado Próprio Virou Prioridade

A resposta curta é perda de sinal. Restrições de navegador, regras de privacidade, sistemas operacionais limitando identificadores e legislações como a LGPD reduziram a capacidade da indústria de reconhecer a mesma pessoa em ambientes diferentes.

Nesse cenário, o dado que a marca coleta na própria casa ganhou peso por três motivos objetivos: tem base legal clara quando há consentimento, não depende de intermediário que pode desligar o acesso, e descreve comportamento real de compra — não inferência.

A consequência prática é que o dado próprio passou a ocupar três funções no plano de mídia: modelar quem se parece com o melhor cliente, excluir quem já comprou ou não deve ser impactado, e medir o que aconteceu depois da campanha.

## Qual É o Teto do Dado Próprio?

O teto é de cobertura. Uma marca conhece quem já se relacionou com ela. Mídia existe para alcançar quem ainda não se relacionou.

O número do ID5 mostra o tamanho do problema do outro lado: com **menos de 30% dos usuários logados**, o ambiente de publishers onde a campanha vai rodar simplesmente não tem identificador estável para a maior parte do inventário. Não adianta ter uma base própria excelente se ela não pode ser reconhecida onde a mídia acontece.

**Dado próprio resolve quem você já conhece. O problema de mídia é quem você ainda não conhece.**

Por isso o mercado não parou de procurar alternativas. Ainda segundo o ID5, **91% dos profissionais usam ou planejam testar IDs alternativos**, **67%** já os usam para tráfego não endereçável e **51% dos publishers** trabalham com parceiros de ID bridging para costurar identidade entre ambientes.

## O Sinal Continua Mudando de Nome

Um episódio recente ilustra bem a instabilidade dessa camada: a partir de **3 de agosto de 2026**, o Google passou a usar endereço IP para personalização e mensuração de anúncios no Espaço Econômico Europeu, Reino Unido e Suíça — revertendo, na prática, a própria restrição a técnicas de fingerprinting anunciada anos antes.

A leitura estratégica não é sobre IP. É sobre dependência: sempre que a indústria concentra a identificação num único sinal controlado por terceiros, ela fica exposta à decisão desse terceiro. Foi assim com o cookie, com o identificador de dispositivo e agora com o que vier a seguir.

Dado próprio é a resposta mais duradoura a esse ciclo justamente porque não depende de ninguém — e continua tendo um teto de alcance que nenhuma quantidade de investimento em CRM resolve.

## Como Usar Dado Próprio Sem Depender Só Dele

O desenho que funciona trata o dado próprio como núcleo e não como cobertura total:

**Modelagem.** A base própria descreve o cliente de valor. A partir dela se define o perfil de intenção a ser buscado no inventário aberto — não copiando indivíduos, mas replicando características de comportamento.

**Exclusão.** Retirar da campanha quem já comprou, quem está em negociação ou quem não deve ser impactado é o uso de dado próprio com maior retorno imediato, porque devolve verba para audiência nova.

**Medição.** A base própria é o que permite ligar o que aconteceu na mídia ao que aconteceu no negócio, sem depender exclusivamente do que a plataforma reporta sobre si mesma.

**Expansão por intenção.** O alcance além da base vem de segmentos de audiência construídos por comportamento e intenção declarada no ambiente de mídia — não de rastreio próprio instalado no site do anunciante.

## O Que Vem a Seguir

Dado próprio deixou de ser projeto de inovação e virou infraestrutura básica de marketing. O que ainda precisa amadurecer é a expectativa: ele não substitui audiência de mídia, ele qualifica a audiência de mídia. Quem trata a base própria como se fosse o plano inteiro acaba falando sempre com as mesmas pessoas e chamando isso de eficiência.

Na South Media, o dado do cliente entra como referência de modelagem e de exclusão, e a expansão de alcance vem de segmentos de audiência por intenção dentro do inventário curado — o que preserva a base do anunciante e evita depender de um único sinal que pode mudar de regra a qualquer momento.

## Perguntas Frequentes

### Qual a diferença entre dado próprio, de segunda e de terceira parte?

Dado próprio é coletado pela marca na relação direta com o cliente. Dado de segunda parte é o dado próprio de outra empresa, compartilhado por acordo. Dado de terceira parte é agregado e comercializado por fornecedores que não têm relação direta com aquelas pessoas.

### Dado próprio substitui a segmentação de audiência na mídia?

Não. Ele descreve quem a marca já conhece e serve para modelar, excluir e medir. O alcance de quem ainda não é cliente continua dependendo de segmentos de audiência disponíveis no ambiente de mídia, construídos por comportamento e intenção.

### Por que menos de 30% de usuários logados é um problema?

Porque a maior parte do inventário onde a campanha roda não tem identificador estável associado a uma pessoa. Sem esse ponto de contato, a base própria da marca não consegue ser reconhecida ali, o que limita ativação e mensuração diretas.

### O que é ID bridging?

É a prática de conectar identificadores diferentes para reconhecer o mesmo usuário entre ambientes. Segundo o ID5, 51% dos publishers já trabalham com parceiros desse tipo — sinal de que a fragmentação de identidade segue sendo resolvida por camadas intermediárias.`,
  };
