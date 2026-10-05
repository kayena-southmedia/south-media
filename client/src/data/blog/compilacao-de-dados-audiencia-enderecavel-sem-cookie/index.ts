// Compilacao de dados (definicao validada no brief de edicao, out/2026): a South Media faz a COLETA dos IDs criptografados da audiencia impactada pela campanha para compor a base compilada. Citar so essa parte; nunca a plataforma de destino, clientes anteriores, modelagem, CRM, lookalike, grupo de controle ou ROI.
// TODO: Geo Intelligence e Household Sync aparecem apenas como canais/insumos de veiculacao (tecnologia de terceiros operada pela South Media), sem rotulo de proprietario. Confirmar com o time se a descricao de uso esta correta.
// TODO: dado do IAB (71% / 41%) e do State of Data 2024 (14/03/2024). Substituir por edicao mais recente se houver numero equivalente verificavel.
// TODO: o numero "menos de 30% de usuarios logados" do artigo de 1st-party NAO foi reutilizado aqui por falta de fonte verificada.
import type { BlogPost } from "../types";

export const post: BlogPost = {
    id: 49,
    slug: "compilacao-de-dados-audiencia-enderecavel-sem-cookie",
    category: "Dados",
    title: "Compilação de Dados: Como a Audiência Impactada pela Sua Campanha Vira Base Endereçável sem Cookie",
    summary: "Compilação de dados transforma a audiência impactada pela campanha em base endereçável, sem cookie de terceiros. Veja como funciona a coleta e por que importa.",
    date: "23 Set 2026",
    readTime: "6 min",
    cover: "/blog/compilacao-de-dados-audiencia-enderecavel-sem-cookie.webp",
    author: "South Media",
    content: `## Como a Compilação de Dados Transforma a Audiência da Campanha em Base Endereçável sem Cookie?

Em 17 de outubro de 2025, o Google anunciou a aposentadoria de dez tecnologias do Privacy Sandbox, entre elas Topics e Protected Audience, e confirmou que o Chrome mantém a abordagem de oferecer ao usuário a escolha sobre cookies de terceiros. A promessa de um mercado sem cookies em data marcada saiu do calendário, mas o problema de fundo não: o sinal continua fragmentado. A **compilação de dados** é uma resposta prática a essa fragmentação, e ela começa pela coleta: cada campanha veiculada gera sinal sobre quem foi de fato impactado.

## O Que É Compilação de Dados em Mídia Programática?

Compilação de dados é a coleta, durante a veiculação, dos IDs criptografados da audiência efetivamente impactada por uma campanha, reunidos numa base compilada. Em vez de depender de cookie de terceiros, a base nasce da própria mídia: quem viu o anúncio, em qual canal. Segundo o [IAB, no State of Data 2024](https://www.prnewswire.com/news-releases/digital-industry-moves-aggressively-to-privacy-by-design-according-to-iabs-annual-state-of-data-report-302088679.html), 71% de marcas, agências e publishers estavam crescendo ou planejando crescer seus datasets de first-party, quase o dobro dos 41% de dois anos antes. Mais dado próprio exige mais fontes confiáveis — e a audiência efetivamente impactada por uma campanha é uma delas.

## O Que Mudou (e o Que Não Mudou) com os Cookies de Terceiros

A narrativa do "fim do cookie" precisa de precisão. Segundo o [Google Privacy Sandbox](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies), o Chrome mantém a abordagem atual de oferecer ao usuário a escolha sobre cookies de terceiros, e dez tecnologias do Sandbox, incluindo Topics e Protected Audience, estão sendo aposentadas. Ou seja, o cookie de terceiros não foi removido do Chrome.

Isso não devolve ao cookie a confiabilidade de antes. Safari e Firefox já bloqueiam cookies de terceiros por padrão há anos, e o IAB registrou que 95% dos decisores de publicidade e dados esperavam perda contínua de sinal e/ou nova legislação de privacidade. Quem constrói audiência sobre um único identificador herda a fragilidade desse identificador. A saída é não depender dele — e usar como fonte aquilo que a marca já está comprando: a própria veiculação.

## De Onde Vem a Audiência da Base Compilada

A base compilada reúne a audiência impactada nos canais em que a campanha roda. Cada canal contribui com um tipo de exposição:

- **CTV e streaming:** a audiência impactada na tela grande, em ambiente premium. Quando a campanha usa a [sincronização entre CTV e mobile via Household Sync](/blog/household-sync-ctv-mobile-sincronizacao), tecnologia de terceiros operada pela South Media, a exposição se estende aos dispositivos do mesmo domicílio.
- **Display, vídeo e native:** a audiência impactada em sites e apps selecionados por curadoria, com segmentos por intenção ou com [segmentação contextual](/blog/segmentacao-contextual-2-0-ia), que lê o contexto da página em vez do histórico da pessoa.
- **Geolocalização:** a audiência impactada em campanhas entregues por raio, bairro ou praça. Ferramentas como Geo Intelligence, tecnologia de terceiros operada pela South Media, entram aqui como forma de entrega da mídia, não como a base em si.

Em todos os casos, o que entra na base é o mesmo tipo de registro: o ID criptografado de quem foi efetivamente exposto ao anúncio.

## Por Que a Coleta Durante a Campanha Importa

**A melhor fonte de audiência sem cookie é a própria campanha: quem foi impactado de verdade.**

A base compilada nasce de exposição real. Só entra quem foi efetivamente impactado pela campanha, e não uma lista comprada de terceiros ou inferida de navegação antiga. Isso traz três vantagens práticas:

1. **Origem conhecida.** Cada registro vem de uma veiculação específica, em um canal específico.
2. **Qualidade herdada da mídia.** Quando a campanha roda com inventário curado, verificação independente e bloqueio de tráfego de VPN, proxy e data center, a base reflete esse cuidado: o que foi coletado veio de tráfego verificado.
3. **Independência do cookie.** A base não depende de cookie de terceiros para existir, porque é formada pelos IDs criptografados coletados na própria entrega.

## Base Compilada versus First-Party Data

First-party data é o que a marca sabe sobre quem se relacionou diretamente com ela: cadastro, site, app, atendimento. A base compilada é outra coisa: o registro de quem a campanha de fato alcançou, sem exigir cookie de terceiros. As duas se complementam. O [guia sobre dado próprio](/blog/o-que-e-dado-proprio-first-party-data) mostra o limite de alcance do first-party, que cobre só quem já interagiu com a marca; a base compilada registra a audiência que a mídia impactou, inclusive quem ainda não chegou até ela.

## Privacidade como Requisito de Projeto

Coletar dados de audiência aumenta a responsabilidade sobre a base legal de cada etapa. No Brasil, a [ANPD](https://www.gov.br/anpd/pt-br) fiscaliza a aplicação da LGPD (Lei 13.709/2018), e a finalidade, a minimização e a base legal precisam estar definidas antes da coleta, não depois. Trabalhar com IDs criptografados e com origem conhecida é parte desse desenho: dá para dizer de qual campanha veio cada registro.

## Como Começar

1. Defina o objetivo da campanha antes de escolher os canais: alcance, visitas à loja ou reativação.
2. Ative em mais de um canal para que a base compilada reúna a audiência impactada em diferentes telas.
3. Garanta que a veiculação rode em inventário curado e verificado, porque a qualidade da base acompanha a qualidade da mídia.
4. Alinhe finalidade e base legal da coleta com a área jurídica e de privacidade da marca.

## Onde a South Media Entra

A South Media é uma AdTech brasileira independente de mídia programática. Nossa parte é a coleta: durante a veiculação, coletamos os IDs criptografados da audiência impactada e compilamos essa base. A campanha roda protegida pela Anti-VPN Tech, verificada pela metodologia exclusiva Double Check, com a DoubleVerify, e acompanhada em tempo real no Forja. Insumos de geolocalização e de sincronização entre telas são tecnologia de terceiros que operamos com método, a serviço da audiência e não como fim em si.

## Perguntas Frequentes

### O que é compilação de dados em mídia programática?
É a coleta, durante a veiculação, dos IDs criptografados da audiência efetivamente impactada por uma campanha, reunidos numa base compilada. A base nasce da própria mídia, sem depender de cookie de terceiros.

### Como construir audiência endereçável sem cookies de terceiros?
Usando fontes que não dependem do cookie: dado próprio da marca, contexto de conteúdo, endereçamento por domicílio e a audiência efetivamente impactada pelas campanhas. O Chrome ainda mantém cookies de terceiros sob escolha do usuário, mas Safari e Firefox os bloqueiam por padrão, então depender só deles limita o alcance.

### Qual a diferença entre first-party data e base compilada?
First-party data é o dado coletado na relação direta da marca com o cliente, em cadastro, site ou app. A base compilada é formada pelos IDs criptografados de quem foi impactado pela campanha, e por isso inclui também quem ainda não interagiu diretamente com a marca.

### De quais canais vem a base compilada?
Dos canais em que a campanha é veiculada, como CTV, streaming, display, vídeo, native e campanhas geolocalizadas. Em todos eles, o que se coleta é o ID criptografado de quem foi efetivamente exposto ao anúncio.

## Fontes

- [Google Privacy Sandbox - Update on plans for Privacy Sandbox technologies (17/10/2025)](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies)
- [IAB - State of Data 2024, release de imprensa (14/03/2024)](https://www.prnewswire.com/news-releases/digital-industry-moves-aggressively-to-privacy-by-design-according-to-iabs-annual-state-of-data-report-302088679.html)
- [ANPD - Agência Nacional de Proteção de Dados (LGPD, Lei 13.709/2018)](https://www.gov.br/anpd/pt-br)
`,
};
