export type ShowcaseSlide = {
  id: string;
  solucaoId: string;
  nome: string;
  frase: string;
  quandoUsar: string;
  objetivoPrincipal: string;
  aplicacaoPratica: string;
  isCaseReal?: boolean;
  icon: "tv" | "pin" | "billboard" | "play" | "audio" | "chat" | "expand";
};

export const showcase: ShowcaseSlide[] = [
  {
    id: "ctv",
    solucaoId: "ctv",
    nome: "CTV / TV Conectada",
    frase: "Vídeo na maior tela da casa, com o maior inventário de Connected TV do Brasil.",
    quandoUsar: "Campanhas que precisam gerar alcance qualificado em ambientes premium, com alta atenção e brand safety.",
    objetivoPrincipal: "Awareness + alcance incremental",
    aplicacaoPratica: "Uma marca planeja um lançamento e usa CTV para alcançar famílias dentro de conteúdo premium em streaming — depois reimpacta essa mesma audiência em outras telas da casa com o Household Sync.",
    icon: "tv",
  },
  {
    id: "drive-to-store",
    solucaoId: "drive-to-store",
    nome: "Drive to Store",
    frase: "Conecta mídia digital a visitas reais na loja física — com atribuição auditável.",
    quandoUsar: "Marcas com ponto de venda físico que precisam provar que o investimento digital gera tráfego na loja.",
    objetivoPrincipal: "Geração de visitas + prova de ROI offline",
    aplicacaoPratica: "Case real: a Toyota usou Drive to Store para medir quantos compradores expostos aos anúncios visitaram o showroom — resultado de 109% da meta de impressões e 150% de visitas ao showroom.",
    isCaseReal: true,
    icon: "pin",
  },
  {
    id: "dooh",
    solucaoId: "dooh",
    nome: "DOOH",
    frase: "Telas do mundo físico compradas como mídia digital, com reimpacto no mobile.",
    quandoUsar: "Campanhas que combinam alto tráfego físico — shoppings, vias, aeroportos — com reforço digital.",
    objetivoPrincipal: "Cobertura em ambientes premium + reimpacto",
    aplicacaoPratica: "Uma marca veicula em painéis de alto tráfego e cria uma cerca virtual ao redor de cada ponto: todo dispositivo mobile que passa pela área é identificado e reimpactado com mensagens de reforço no celular.",
    icon: "billboard",
  },
  {
    id: "streamings",
    solucaoId: "streamings",
    nome: "Streaming & Netflix",
    frase: "Anúncios dentro do plano com anúncios da Netflix e dos principais apps de streaming.",
    quandoUsar: "Marcas que querem alcançar a maior audiência de streaming do Brasil, em ambiente premium e seguro.",
    objetivoPrincipal: "Awareness em ambiente premium",
    aplicacaoPratica: "O plano com anúncios da Netflix já reúne mais de 250 milhões de espectadores mensais no mundo — a marca aparece antes, durante ou depois do conteúdo mais assistido do momento.",
    icon: "play",
  },
  {
    id: "audio",
    solucaoId: "audio",
    nome: "Áudio Programático",
    frase: "Anúncios em Spotify, podcasts e streaming de áudio, segmentados por momento de escuta.",
    quandoUsar: "Alcançar a audiência em momentos sem tela — deslocamento, treino, foco — onde a atenção não disputa espaço com o vídeo.",
    objetivoPrincipal: "Atenção qualificada + frequência",
    aplicacaoPratica: "Em vez de segmentar só por idade, a campanha mira o momento de escuta certo — ex.: playlists de treino ou de deslocamento — capturando a intenção real do ouvinte.",
    icon: "audio",
  },
  {
    id: "chatgpt-ads",
    solucaoId: "chatgpt-ads",
    nome: "ChatGPT Ads",
    frase: "Publicidade dentro da conversa do ChatGPT, para quem já está em momento de decisão.",
    quandoUsar: "Marcas que querem testar um canal novo com verba de teste, em categorias de alta intenção de compra.",
    objetivoPrincipal: "Teste controlado + aprendizado incremental",
    aplicacaoPratica: "O Brasil entrou na lista de mercados ativos do ChatGPT Ads em agosto de 2026. Em vez de comprar palavra-chave, a marca descreve o contexto da conversa (context hint) e aparece com um anúncio patrocinado logo após a resposta.",
    icon: "chat",
  },
  {
    id: "rich-media",
    solucaoId: "rich-media",
    nome: "Rich Media",
    frase: "Formatos interativos que o usuário usa, não apenas vê — carrossel, tela cheia, galeria shoppable.",
    quandoUsar: "Campanhas de e-commerce ou lançamento que querem se diferenciar do banner comum e aumentar tempo de permanência.",
    objetivoPrincipal: "Engajamento + tempo de permanência",
    aplicacaoPratica: "Em vez de um banner estático, o usuário navega por um carrossel de produtos dentro do próprio anúncio — sem sair da página onde está.",
    icon: "expand",
  },
];
