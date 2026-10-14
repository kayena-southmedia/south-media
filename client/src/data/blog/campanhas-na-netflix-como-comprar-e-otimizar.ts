import type { BlogPost } from "./types";

export const post: BlogPost = {
    id: 54,
    slug: "campanhas-na-netflix-como-comprar-e-otimizar",
    category: "CTV",
    title: "Campanhas na Netflix: Como Agências Compram e Otimizam Mídia em CTV",
    summary: "Campanhas na Netflix sem investimento mínimo: como agências escolhem o modelo de compra e otimizam piso de lance, ad pods, frequência e verificação em CTV.",
    date: "14 Out 2026",
    readTime: "7 min",
    cover: "/blog/campanhas-na-netflix-como-comprar-e-otimizar.webp",
    author: "South Media",
    content: `## Como funcionam as campanhas na Netflix depois do fim do investimento mínimo?

Campanhas na Netflix ficaram ao alcance de um número maior de agências em julho de 2026, quando parte do inventário da plataforma entrou em um marketplace programático sem compromisso mínimo de investimento. Antes, o acesso programático exigia acordos individuais de Programmatic Guaranteed ou PMP, segundo a Media in Canada (21/07/2026). O resultado, porém, depende menos da porta de entrada e mais da configuração: piso de lance, posição no intervalo, frequência por domicílio e verificação de tráfego.

## O que mudou nas campanhas na Netflix em 2026?

A Netflix começou a vender anúncios no fim de 2022 e entrou na compra programática em 2024, sempre por acordos privados. Em 20 de julho de 2026, seu inventário passou a integrar um marketplace curado de publishers premium, sem investimento mínimo e sem integração adicional, de acordo com a PPC Land. O anúncio não detalha a disponibilidade por país, então cada praça precisa ser confirmada na configuração da campanha. Contamos o que essa mudança significa em [Netflix sem investimento mínimo](/blog/netflix-sem-minimo-investimento-ctv).

A mudança chega num mercado que já migrou para a tela da sala. O Inside Video 2025, da Kantar IBOPE Media, mostra que a TV conectada alcança 64% da população digital brasileira. Em dezembro de 2025, as plataformas de streaming chegaram a 37,2% do share de audiência de TV no país, recorde da série, também segundo a Kantar IBOPE Media.

O investimento acompanha o hábito. No Digital AdSpend 2026, do IAB Brasil com a Kantar IBOPE Media, o vídeo concentrou 49% do investimento em publicidade digital em 2025, sete pontos percentuais acima do ano anterior.

Boa parte do mercado leu a notícia como "a Netflix ficou acessível". A leitura mais útil é outra: a barreira saiu do contrato e foi para a configuração da compra.

**O mínimo de investimento caiu. O critério de compra não pode cair junto.**

## Qual modelo de compra faz sentido para cada campanha na Netflix?

Existem três caminhos, e cada um resolve um problema diferente. A escolha depende do que a marca não pode abrir mão: entrega reservada, controle de preço ou flexibilidade.

| Modelo | Como funciona | Quando faz sentido |
|---|---|---|
| Programmatic Guaranteed | Volume e condições reservados antes da campanha, sem leilão | Lançamentos com data fixa e meta de alcance que não pode oscilar |
| PMP (Private Marketplace) | Leilão fechado para compradores convidados, com piso acordado | Campanhas que precisam de inventário selecionado com controle de preço |
| Marketplace curado sem mínimo | Leilão dentro de um conjunto de publishers premium, sem compromisso de volume | Testes, campanhas regionais e planos que combinam a Netflix com outros streamings |

O marketplace sem mínimo não substitui os outros modelos. Ele abre espaço para campanhas menores, mas sem reserva de entrega: em leilão, a veiculação depende de vencer a disputa por cada impressão.

## Como otimizar piso de lance, ad pods e frequência na CTV?

Três alavancas técnicas definem se a verba vira entrega de qualidade ou fica parada no leilão.

**Piso de lance (floor).** É o valor mínimo que o vendedor aceita por impressão. O padrão OpenRTB 2.6, da IAB Tech Lab, permitiu que publishers de CTV fixem o piso por segundo de anúncio, e não mais um piso único, segundo o IAB UK. Na prática, uma peça de 30 segundos disputa um piso maior que uma de 15. Ter as duas versões prontas amplia o inventário que a campanha consegue disputar.

**Ad pods.** É o intervalo comercial com vários anúncios em sequência, como na TV linear. O mesmo padrão permite ofertar por posição dentro do intervalo e aplica separação competitiva, que evita duas marcas concorrentes no mesmo bloco. Para isso funcionar, a categoria do anunciante precisa estar declarada corretamente e a duração do criativo precisa bater com a dos slots.

**Frequência.** A TV conectada é uma tela compartilhada, então a frequência faz sentido por domicílio, não por pessoa. Repetir o anúncio na mesma tela além do necessário consome verba sem ampliar o alcance. A saída mais eficiente costuma ser levar a mensagem para outra tela da mesma casa.

## Como o Household Sync reimpacta no celular quem viu o anúncio na TV?

O Household Sync conecta a exposição na TV aos outros dispositivos do mesmo domicílio. Depois que o anúncio roda na tela da sala, a campanha reimpacta no celular as pessoas daquela casa com uma peça complementar.

A lógica resolve uma limitação estrutural da CTV: a TV raramente é a tela da ação, e o celular é. Em vez de aumentar a frequência na TV, a campanha usa a segunda tela para dar continuidade à mensagem, com um ponto de contato clicável.

O Household Sync amplia o alcance qualificado e cria esse segundo ponto de contato. A leitura da campanha é de entrega: impressões, alcance, frequência e as interações registradas no mobile.

## Como verificar que cada impressão em CTV é real?

O Media Rating Council (MRC) divide o tráfego inválido em duas camadas. O GIVT é o tráfego identificado por filtragem de rotina, com listas e checagens padronizadas. O SIVT imita comportamento humano e exige análise avançada para ser detectado.

Na CTV, as atualizações de 2024 do MRC incluíram a falsificação de identificador de aplicativo, o bundle ID spoofing, em que um app se passa por outro de maior valor. Do lado da oferta, o app-ads.txt, padrão da IAB Tech Lab, permite verificar quem está autorizado a vender o inventário de cada aplicativo.

Inventário premium reduz o risco, mas não substitui a verificação. Quanto mais caminhos de compra levam ao mesmo publisher, mais importante é confirmar quem vendeu a impressão e de onde ela veio.

## Como a SouthMedia opera campanhas na Netflix?

A SouthMedia, AdTech brasileira e independente, negocia o inventário da Netflix diretamente desde que a plataforma abriu para anúncios, em 2022, e opera as principais plataformas de compra do mercado. Toda campanha passa pelo Double Check, nossa metodologia exclusiva de verificação em tripla camada com a DoubleVerify, e pela Anti-VPN Tech, tecnologia proprietária que atua desde a primeira impressão. O Household Sync leva a mensagem ao celular do mesmo domicílio, e o Forja, nosso dashboard proprietário, mostra a entrega em tempo real. A automação das plataformas executa o leilão; modelo de compra, piso, frequência e público são decisões da nossa operação.

## Perguntas Frequentes

### É preciso investimento mínimo para fazer campanhas na Netflix?

Desde julho de 2026, parte do inventário da Netflix está disponível em marketplace programático sem compromisso mínimo. O investimento é definido com a operação da SouthMedia, conforme objetivo, público, região e período.

### Dá para escolher a série em que o anúncio aparece?

Na compra programática, não: ela não seleciona título nem episódio específico. A segmentação é feita por público e região, e os títulos entram no planejamento como referência editorial de tom e gênero.

### Qual a diferença entre PMP e Programmatic Guaranteed?

No Programmatic Guaranteed, volume e condições ficam reservados antes da campanha, sem leilão. No PMP, compradores convidados disputam o inventário em leilão fechado, com piso acordado.

### Como confirmar que as impressões na Netflix foram entregues?

A entrega passa pela verificação em tripla camada do Double Check e pela filtragem da Anti-VPN Tech. Os dados ficam disponíveis em tempo real no Forja, o dashboard proprietário da SouthMedia.

## Fontes

- [Media in Canada, 21/07/2026](https://mediaincanada.com/2026/07/21/the-trade-desk-expands-programmatic-access-to-netflix/): inventário da Netflix em marketplace sem compromisso mínimo; antes, só via PG ou PMP.
- [PPC Land, 20/07/2026](https://ppc.land/netflix-opens-250m-user-inventory-to-trade-desk-buyers-drops-spend-minimums/): data da mudança e entrada da Netflix na programática em 2024.
- [Tela Viva, Kantar IBOPE Media Inside Video 2025](https://telaviva.com.br/22/09/2025/ecossistema-de-valor-do-streaming-no-brasil-mapear-para-crescer/): CTV alcança 64% da população digital.
- [Poder PB, Kantar IBOPE Media, dez/2025](https://poderpb.com.br/2026/01/19/streaming-atinge-recorde-historico-no-brasil-e-encosta-na-tv-aberta-aponta-kantar-ibope/): streaming com 37,2% do share de TV.
- [InfoMoney, IAB Brasil Digital AdSpend 2026](https://www.infomoney.com.br/?p=3311624): vídeo com 49% do investimento digital, +7 p.p.
- [IAB UK, OpenRTB 2.6](https://www.iabuk.com/member-content/10-most-exciting-openrtb-26-features): oferta por posição no ad pod e piso por segundo.
- [MRC, 2024 IVT Interim Updates](https://www.mediaratingcouncil.org/sites/default/files/News/2024_IVT_Interim_Updates_FINAL.pdf): GIVT, SIVT e bundle ID spoofing em CTV.
`,
};
