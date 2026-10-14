import type { BlogPost } from "../types";

// TODO: Forja (dashboard proprietario) citado so em termos gerais ("visibilidade em tempo real" vem do slug da pauta); confirmar features antes de detalhar.
// TODO: dados ISBA/PwC 2023 (65%, 3%, match rate 58%) confirmados via ISBA/MediaPost/WFA/Drum em buscas; PDF primario nao pode ser lido. Conferir no PDF oficial.
// TODO: ANA 36 centavos/29%/35%/US$22B confirmados na pagina da ANA e na Fiducia (PDF original nao legivel pelo fetch). "8% cada" DSP/SSP vem de Marketing Interactive sobre ISBA 2020.
// TODO: confirmar id 46 e categoria "Programática" (mesma de transparencia-programatica-auditoria-dsp).

export const post: BlogPost = {
    id: 46,
    slug: "ad-tech-tax-para-onde-vai-verba-programatica",
    category: "Programática",
    title: "Ad Tech Tax: Para Onde Vai Cada Real da Sua Verba Programática Antes de Virar Impressão",
    summary: "Só 36 centavos de cada dólar chegam ao consumidor, diz a ANA. Veja onde o ad tech tax retém a verba programática e como reduzir o custo da sua cadeia.",
    date: "12 Set 2026",
    readTime: "7 min",
    cover: "/blog/ad-tech-tax-para-onde-vai-verba-programatica.webp",
    author: "South Media",
    content: `## Ad tech tax: para onde vai cada real da sua verba programática antes de virar impressão

De cada dólar que entra na cadeia programática, apenas 36 centavos chegam efetivamente ao consumidor, segundo o Programmatic Media Supply Chain Transparency Study, da ANA (Association of National Advertisers), publicado em dezembro de 2023. O restante é o que o mercado passou a chamar de **ad tech tax**: o custo acumulado de intermediários, tecnologia e inventário que não entrega mídia de trabalho. Este artigo segue o dinheiro, etapa por etapa, e mostra onde a perda é recuperável.

## O que é ad tech tax?

Ad tech tax é a parcela da verba de mídia programática retida pela cadeia de intermediários (DSPs, SSPs, exchanges, verificação) antes de o anúncio chegar ao publisher. No estudo da ANA, 29% do valor de cada dólar ficaram em custos de transação, principalmente taxas de DSP e SSP, e outros 35% se perderam em perda de produtividade de mídia, como impressões não viewable, tráfego inválido e inventário Made for Advertising. Quanto mais opaca a cadeia, maior o imposto invisível.

## Quanto da verba chega ao publisher? O que dizem os estudos

Dois estudos medem coisas diferentes, e misturá-los gera conclusões erradas.

- **ANA (2023), foco no consumidor:** analisou 21 anunciantes e 12 empresas da cadeia, com US$ 123 milhões em investimento e 35,5 bilhões de impressões. O número de 36 centavos mede o que chega ao consumidor depois de taxas e desperdício de qualidade.
- **ISBA/PwC (2020), foco no publisher:** em análise de campanhas no Reino Unido, só 51% do investimento do anunciante chegou ao publisher. Outros 15% eram um "unknown delta", gasto que o estudo não conseguiu atribuir a nenhum participante da cadeia.
- **ISBA/PwC (2023), segunda rodada:** a parcela que chegou ao publisher subiu para 65% e o unknown delta caiu para 3%, com a taxa de correspondência entre compra e venda passando de 12% para 58%.

A diferença importa. O número da ISBA responde "quanto sai do bolso do anunciante e chega a quem publica". O da ANA vai além e desconta a mídia que chegou, mas não valeu: não foi vista, foi robô ou estava em site feito para gerar receita de anúncio.

## A cadeia está melhorando, mas devagar

O Programmatic Transparency Benchmark da ANA, produzido com TAG TrustNet e Fiducia, acompanha o tema trimestralmente. No relatório do terceiro trimestre de 2025, divulgado em 5 de novembro de 2025, a parcela do investimento que chega aos publishers foi de 47,1%, alta de 11 pontos desde 2023, e a exposição a sites MFA caiu para 0,39% do gasto.

O avanço é real e mostra que a pressão de anunciantes funciona. Mas 47,1% ainda significa que mais da metade do investimento fica pelo caminho. O ganho também não é automático: depende de contratos, de escolha de caminho e de leitura de dados em nível de impressão.

**Todo real que a cadeia retém sem explicar é mídia que você pagou e não comprou.**

## Onde o dinheiro fica: as quatro camadas do imposto

Seguir o dinheiro significa separar o que é taxa explícita do que é perda silenciosa.

1. **Taxas de tecnologia de compra e venda.** Cobranças de DSP e SSP, que o estudo da ISBA de 2020 estimou em cerca de 8% cada, além de taxas de tecnologia de dados e de agência.
2. **Intermediação repetida.** Quando a mesma impressão passa por mais de um revendedor, cada salto soma uma margem. É o problema que o [supply path optimization](/blog/supply-path-optimization-caminho-impressao) busca reduzir.
3. **Inventário de baixa qualidade.** Páginas feitas para vender anúncio, não para ser lidas, consomem verba com baixa atenção. Veja o custo em [sites MFA e inventário desperdiçado](/blog/sites-mfa-inventario-desperdicio).
4. **Perda de medição.** Impressões não mensuráveis ou inválidas são pagas e não geram nenhum efeito demonstrável.

Cada camada exige uma resposta diferente. Cortar apenas a taxa visível deixa as outras três intactas.

## Como reduzir o custo da cadeia programática

A própria ANA aponta que seguir boas práticas poderia elevar o valor efetivo da verba de 36 para 50 centavos por dólar ou mais, o que representaria cerca de US$ 22 bilhões em ganhos de eficiência para anunciantes. Na prática, quatro frentes concentram o esforço.

- **Encurtar o caminho.** Priorizar rotas diretas e reduzir revendedores, como detalhado em [supply path optimization](/blog/supply-path-optimization-caminho-impressao).
- **Curar o inventário.** Trabalhar com listas de inventário selecionadas, em vez de aceitar tudo que o leilão oferece. A [curadoria de inventário](/blog/curadoria-de-inventario) troca volume indiscriminado por critério.
- **Exigir log de impressão.** Sem dados em nível de impressão não há como reconciliar o que foi pago com o que foi entregue. O roteiro de perguntas está em [auditoria e transparência programática](/blog/transparencia-programatica-auditoria-dsp).
- **Medir com painel próprio.** Quando o anunciante enxerga custo, entrega e qualidade no mesmo lugar, a perda deixa de ser invisível. É a lógica do [dashboard proprietário Forja](/blog/forja-dashboard-proprietario-transparencia-tempo-real), a tecnologia própria da South Media para dar visibilidade em tempo real à operação.

## Por que operação independente reduz a perda

Taxa e perda ficam onde ninguém olha. Uma operação independente, sem obrigação de direcionar volume a uma cadeia específica, tem liberdade para escolher caminho, inventário e ferramenta pelo critério do resultado. A automação é o piso: qualquer plataforma faz o leilão. O que reduz o imposto invisível é a decisão humana sobre onde comprar, o que bloquear e o que reportar sem filtro.

Isso vale para todos os canais em que a South Media atua, de CTV e DOOH a áudio e display. Em cada um, a pergunta é a mesma: quanto da verba virou impressão entregue, para uma pessoa real, em ambiente adequado?

## Perguntas Frequentes

### O que é ad tech tax?

É a parcela da verba de mídia programática retida por intermediários e perdida em qualidade de inventário antes de gerar uma impressão útil. O termo reúne taxas de DSP e SSP, repasses entre revendedores e mídia paga que não foi vista ou foi inválida. No estudo da ANA de 2023, só 36 centavos de cada dólar chegavam ao consumidor.

### Quanto da verba programática realmente vira impressão?

Depende da métrica. A ISBA/PwC apontou 65% do investimento chegando ao publisher em 2023, no Reino Unido, e a ANA registrou 47,1% no terceiro trimestre de 2025 em seu benchmark. Já a conta da ANA de 2023, que desconta perdas de qualidade, chegou a 36 centavos por dólar entregues ao consumidor.

### Como reduzir o custo da cadeia programática?

Encurtando o caminho entre anunciante e publisher, curando o inventário, exigindo dados em nível de impressão e acompanhando o custo em um painel próprio. A ANA estima que boas práticas podem levar o valor efetivo da verba de 36 para 50 centavos por dólar ou mais.

## Sobre a South Media

A South Media é uma AdTech brasileira e independente, que opera mídia programática com tecnologia proprietária e operação humana. A proposta é simples: mostrar para onde vai cada real da verba, sem caixa-preta.

## Fontes

- [ANA - Programmatic Media Supply Chain Transparency Study (dezembro de 2023)](https://www.ana.net/content/show/id/media-programmatic-transparency)
- [Fiducia - ANA Programmatic Media Supply Chain Transparency Study: Complete Report](https://www.fiducia.eco/post/ana-programmatic-media-supply-chain-transparency-study-complete-report)
- [ANA - Q3 2025 Programmatic Transparency Benchmark (5 de novembro de 2025)](https://www.ana.net/content/show/id/pr-2025-11-transparency)
- [WFA - ISBA investigates the UK's programmatic supply chain (estudo ISBA/PwC, 2020)](https://wfanet.org/knowledge/item/2020/05/18/ISBA-investigates-the-UKs-programmatic-supply-chain)
- [ISBA - Second programmatic supply chain transparency study (2023)](https://www.isba.org.uk/knowledge/second-programmatic-supply-chain-transparency-study)
- [Marketing Interactive - Exploring the unknown delta](https://www.marketing-interactive.com/analysis-an-explanation-for-the-unattributable-15-of-advertiser-spend)`,
};
