export type Tecnologia = {
  id: string;
  label: string;
  resumo: string;
  headline: string;
  tipo: "Tecnologia proprietária" | "Metodologia exclusiva" | "Parceria de verificação" | "De terceiro, exclusiva nossa";
  icon: React.ReactNode;
  oQueE: string;
  porQueExiste: string;
  problema: string;
  comoResolve: string;
  fluxo: string[];
  clienteBeneficios: string[];
  equipeBeneficios: string[];
  aplicacoes: string[];
  produtosRelacionados: string[];
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#F45504",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const tecnologias: Tecnologia[] = [
  {
    id: "anti-vpn-tech",
    label: "Anti-VPN Tech",
    resumo: "Identifica e bloqueia tráfego mascarado por VPN, garantindo geolocalização real.",
    headline: "Você paga por pessoas reais, não por VPNs.",
    tipo: "Tecnologia proprietária",
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>,
    oQueE: "Tecnologia 100% proprietária da South Media — desenvolvida internamente, sem depender de ferramenta de terceiro — que identifica dispositivos mascarando sua localização via VPN e os remove da entrega da campanha.",
    porQueExiste: "Boa parte do mercado depende só de ferramentas de terceiros para geolocalização, mas nenhuma delas foi desenhada para detectar quando essa localização está sendo falsificada. Isso é crítico em campanhas regionais, onde pagar por uma pessoa na cidade errada é dinheiro perdido.",
    problema: "\"Minha campanha regional está entregando fora da área que eu comprei, e não sei quanto disso é gente usando VPN.\"",
    comoResolve: "Detecta em tempo real sinais de rede típicos de VPN/proxy e bloqueia essas impressões antes da entrega, mantendo a audiência dentro da geografia realmente contratada.",
    fluxo: ["Impressão disponível", "Verificação de sinal de rede", "Detecção de VPN/proxy", "Bloqueio ou liberação", "Entrega na localização real"],
    clienteBeneficios: [
      "Verba investida em pessoas realmente dentro da região comprada",
      "Campanhas regionais e de geolocalização com precisão real",
      "Menos desperdício de budget com impressões fora de área",
    ],
    equipeBeneficios: [
      "Menos tempo auditando entregas fora de geo",
      "Relatórios de geolocalização confiáveis para apresentar ao cliente",
      "Camada extra de verificação sem esforço manual",
    ],
    aplicacoes: ["Campanhas regionais e hiperlocais", "Drive to Store e Geolocalização (LBA)", "Qualquer campanha com segmentação geográfica crítica"],
    produtosRelacionados: ["drive-to-store", "geolocalizacao", "dooh", "audio"],
  },
  {
    id: "double-check",
    label: "Double Check",
    resumo: "Dupla verificação, antes e durante a campanha, para eliminar fraude e desperdício.",
    headline: "Verificação em duas camadas, antes do desperdício acontecer.",
    tipo: "Metodologia exclusiva",
    icon: <svg {...iconProps}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
    oQueE: "Metodologia exclusiva South Media de dupla checagem: audita o inventário antes da compra e monitora a entrega durante a campanha, para garantir que o investimento atinja apenas humanos reais.",
    porQueExiste: "Fraude publicitária e tráfego não-humano drenam parte do orçamento de qualquer operação programática que não verifica ativamente onde e para quem está entregando.",
    problema: "\"Não sei quanto do meu investimento em mídia está indo para bots ou tráfego fraudulento.\"",
    comoResolve: "Audita o inventário e os sinais de qualidade antes da compra (pré-campanha) e monitora continuamente a entrega durante o voo, sinalizando e removendo fontes de risco em tempo real.",
    fluxo: ["Auditoria pré-campanha do inventário", "Compra só do inventário aprovado", "Monitoramento contínuo durante o voo", "Remoção de fontes de risco", "Relatório de verificação"],
    clienteBeneficios: [
      "Investimento concentrado em audiência real",
      "Redução de fraude e desperdício",
      "Mais confiança nos relatórios de performance",
    ],
    equipeBeneficios: [
      "Menos necessidade de auditoria manual pós-campanha",
      "Otimização baseada em inventário já filtrado",
      "Camada de proteção padrão em toda campanha, sem configuração extra",
    ],
    aplicacoes: ["Camada padrão em toda campanha operada pela South Media", "Campanhas de alto volume, onde fraude é risco maior", "Verticais com budget sensível a desperdício"],
    produtosRelacionados: ["display", "ctv", "audio", "streamings"],
  },
  {
    id: "double-verify",
    label: "DoubleVerify",
    resumo: "Parceria global independente de auditoria de viewability, fraude e brand safety.",
    headline: "Uma camada de verificação que não é nossa — e é por isso que funciona.",
    tipo: "Parceria de verificação",
    icon: <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
    oQueE: "Parceria com a DoubleVerify, empresa global independente de verificação de mídia, que audita viewability, fraude e brand safety em tempo real nas campanhas operadas pela South Media.",
    porQueExiste: "Nenhum fornecedor deveria ser o único juiz da própria entrega. Uma camada de verificação independente confirma, com um terceiro fora da operação, que a campanha está sendo entregue como contratado.",
    problema: "\"Como eu confio que minha própria plataforma de mídia está sendo honesta sobre a qualidade da entrega?\"",
    comoResolve: "A DoubleVerify monitora, de forma independente da South Media, indicadores como viewability, fraude e adequação de contexto (brand safety/suitability), gerando dados que não passam pelo mesmo fornecedor que vendeu a mídia.",
    fluxo: ["Anúncio entregue", "Auditoria independente DoubleVerify", "Sinal de viewability, fraude e brand safety", "Ajuste ou bloqueio de inventário", "Relatório auditável por terceiro"],
    clienteBeneficios: [
      "Prova de qualidade que não depende só da palavra do fornecedor de mídia",
      "Redução de risco de brand safety",
      "Relatórios reconhecidos pelo mercado global",
    ],
    equipeBeneficios: [
      "Padrão de mercado já integrado, sem setup adicional",
      "Um ponto a menos de due diligence manual",
      "Argumento de credibilidade pronto para apresentar à diretoria",
    ],
    aplicacoes: ["Campanhas com exigência de brand safety", "Anunciantes que reportam para diretoria/compliance", "Qualquer campanha de mídia programática em CTV, display e streaming"],
    produtosRelacionados: ["display", "ctv", "streamings"],
  },
  {
    id: "geo-intelligence",
    label: "Geo Intelligence",
    resumo: "Cruza Device ID, GPS e comportamento para validar a entrega na região certa.",
    headline: "100% das impressões, na região correta.",
    tipo: "Tecnologia proprietária",
    icon: <svg {...iconProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    oQueE: "Camada de inteligência geográfica que cruza Device ID, GPS e dados comportamentais de deslocamento para validar a localização real de cada impressão.",
    porQueExiste: "Segmentação geográfica baseada só em IP ou dados declarados é frágil. Precisão de localização é decisiva para campanhas regionais, drive-to-store e mídia geolocalizada.",
    problema: "\"Quero atingir pessoas de uma região específica sem depender só de segmentação declarada.\"",
    comoResolve: "Cruza múltiplos sinais de localização — Device ID, GPS, padrão de deslocamento — para confirmar que o usuário realmente está na área definida antes de contar a impressão como válida naquela geografia.",
    fluxo: ["Sinal de localização (GPS / Device ID)", "Cruzamento com padrão de deslocamento", "Validação da área (geofence / região)", "Entrega confirmada na geografia certa", "Auditoria de 100% das impressões"],
    clienteBeneficios: [
      "Maior precisão geográfica na construção da audiência",
      "Base confiável para campanhas regionais e drive-to-store",
      "Menos desperdício fora da área de interesse",
    ],
    equipeBeneficios: [
      "Dados de localização auditáveis para o planejamento",
      "Suporte direto às campanhas de LBA e geofencing",
      "Menos retrabalho por entrega fora de geo",
    ],
    aplicacoes: ["Drive to Store", "Geolocalização / Location Based Audiences (LBA)", "Out of Home Sync (DOOH)", "Segmentação geográfica em áudio"],
    produtosRelacionados: ["drive-to-store", "geolocalizacao", "dooh", "audio"],
  },
  {
    id: "ad-tech-core",
    label: "Ad Tech Core",
    resumo: "Desenvolvimento interno de entrega, otimização, integrações e formatos exclusivos.",
    headline: "A infraestrutura que construímos para não depender só de terceiros.",
    tipo: "Tecnologia proprietária",
    icon: <svg {...iconProps}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
    oQueE: "Camada de desenvolvimento interno da South Media responsável por algoritmos de entrega e otimização customizados, integrações via API e formatos publicitários exclusivos.",
    porQueExiste: "Depender inteiramente de tecnologia de terceiros limita o quanto uma AdTech consegue customizar entrega, formato e regra de otimização para a necessidade específica de cada cliente.",
    problema: "\"Minha operação de mídia está limitada ao que a ferramenta de terceiro permite configurar.\"",
    comoResolve: "Desenvolve internamente algoritmos de entrega e otimização e integrações via API que vão além do que as plataformas de mercado oferecem prontas, viabilizando formatos e regras de negócio exclusivas.",
    fluxo: ["Necessidade identificada", "Desenvolvimento interno (algoritmo / integração)", "Integração via API com o stack programático", "Formato ou regra exclusiva disponível", "Aplicação nas campanhas"],
    clienteBeneficios: [
      "Soluções sob medida que fornecedor padrão não oferece",
      "Agilidade para resolver necessidades específicas do negócio",
      "Diferenciação frente a operações que só usam ferramentas prontas",
    ],
    equipeBeneficios: [
      "Mais flexibilidade de configuração no dia a dia",
      "Suporte técnico direto do time que constrói a tecnologia",
      "Evolução da operação sem depender de roadmap de terceiro",
    ],
    aplicacoes: ["Formatos especiais e Rich Media", "Integrações customizadas de mensuração", "Regras de otimização específicas por vertical"],
    produtosRelacionados: ["display", "household-sync"],
  },
  {
    id: "otimizacao-real-time",
    label: "Otimização Real-Time",
    resumo: "Ajustes automáticos de lance e entrega com base em performance real.",
    headline: "A campanha se ajusta enquanto está no ar.",
    tipo: "Tecnologia proprietária",
    icon: <svg {...iconProps}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    oQueE: "Motor de otimização que ajusta automaticamente lances, budget e entrega da campanha com base em sinais de performance coletados em tempo real.",
    porQueExiste: "Campanhas configuradas uma vez e revisadas só ao final perdem a oportunidade de melhorar performance enquanto ainda estão no ar.",
    problema: "\"Só descubro o que funcionou depois que a campanha já acabou.\"",
    comoResolve: "Monitora sinais de performance — CTR, conversão, viewability, footfall, conforme o produto — durante o voo e ajusta automaticamente lance e budget para os canais, criativos e públicos que estão performando melhor.",
    fluxo: ["Campanha no ar", "Coleta de sinais de performance em tempo real", "Comparação entre canais, criativos e públicos", "Reajuste automático de lance e budget", "Performance final otimizada"],
    clienteBeneficios: [
      "Redução comprovada de CPA ao longo da campanha",
      "Budget migra automaticamente para o que está funcionando",
      "Menos verba parada em canais de baixa performance",
    ],
    equipeBeneficios: [
      "Menos ajustes manuais diários",
      "Decisões de otimização baseadas em dado, não em achismo",
      "Tempo do time de mídia liberado para estratégia, não operação",
    ],
    aplicacoes: ["Camada padrão de otimização em toda campanha programática", "Campanhas de performance com meta de CPA/CPL", "Campanhas com múltiplos criativos em teste, como Drive to Store"],
    produtosRelacionados: ["display", "ctv", "drive-to-store", "app-download"],
  },
  {
    id: "forja",
    label: "Forja",
    resumo: "Dashboard proprietário com entrega, investimento e indicadores em tempo real.",
    headline: "Você não precisa esperar o fim do mês para saber como a campanha foi.",
    tipo: "Tecnologia proprietária",
    icon: <svg {...iconProps}><rect x="3" y="12" width="4" height="8" /><rect x="10" y="7" width="4" height="13" /><rect x="17" y="3" width="4" height="17" /></svg>,
    oQueE: "Forja é o dashboard proprietário da South Media — desenvolvido internamente, não licenciado — com atualização diária de impressões, cliques, CTR, VTR, CPM, CPA e viewability por canal, mapa de calor de Drive to Store e análise de performance criativo a criativo.",
    porQueExiste: "Relatórios tradicionais de mídia chegam só ao final do mês ou da campanha, quando já não há mais tempo para corrigir o que não está funcionando.",
    problema: "\"Só descubro como a campanha foi no fim do mês, quando já não dá mais para corrigir nada.\"",
    comoResolve: "Mostra entrega, investimento e indicadores no ritmo da operação, com heatmap de Drive to Store e ranking de performance por criativo, para decisões tomadas durante a campanha, não depois dela.",
    fluxo: ["Campanha em veiculação", "Dados de entrega coletados diariamente", "Consolidação no Forja", "Visualização por canal e criativo", "Decisão de otimização em tempo real"],
    clienteBeneficios: [
      "Visão clara e auditável de onde cada real do orçamento está",
      "Decisões de otimização tomadas durante a campanha, não depois",
      "Relatórios exportáveis, sem métricas de vaidade",
    ],
    equipeBeneficios: [
      "Não precisa pedir relatório para acompanhar a campanha",
      "Heatmap de Drive to Store e ranking de criativos prontos, sem montar planilha",
      "Atualização diária no ritmo da operação",
    ],
    aplicacoes: ["Acompanhamento de qualquer campanha em veiculação", "Otimização por criativo em campanhas com múltiplas peças", "Leitura de heatmap em campanhas de Drive to Store"],
    produtosRelacionados: ["drive-to-store", "display", "ctv"],
  },
  {
    id: "instant-play",
    label: "Instant Play",
    resumo: "Converte o vídeo em player embutido no anúncio, protegendo o Complete View.",
    headline: "Seu vídeo não trava — e a métrica de visualização completa fecha de verdade.",
    tipo: "De terceiro, exclusiva nossa",
    icon: <svg {...iconProps}><polygon points="5 3 19 12 5 21 5 3" /></svg>,
    oQueE: "Instant Play converte o vídeo em um player embutido diretamente no anúncio, eliminando a espera de carregamento externo que normalmente compromete a experiência e a métrica de visualização completa.",
    porQueExiste: "Players de vídeo carregados de fora do anúncio dependem da conexão e do site de destino — quando travam ou demoram, o espectador sai antes de completar o vídeo, e a métrica de Complete View nunca fecha.",
    problema: "\"Meu vídeo trava ou não carrega a tempo, e a métrica de visualização completa nunca fecha.\"",
    comoResolve: "Embute o player diretamente no próprio anúncio, carregando o vídeo na hora em vez de depender de uma chamada externa — protegendo a taxa de Complete View e a experiência do espectador.",
    fluxo: ["Anúncio carregado", "Player embutido inicia junto, sem chamada externa", "Vídeo reproduz sem espera", "Espectador assiste até o fim", "Complete View contabilizado com precisão"],
    clienteBeneficios: [
      "Métrica de Complete View confiável, sem perda por travamento",
      "Melhor experiência do espectador com o criativo em vídeo",
      "Menos desperdício de impressões que não completam o vídeo",
    ],
    equipeBeneficios: [
      "Não precisa investigar quedas de Complete View por problema técnico externo",
      "Relatório de conclusão de vídeo mais próximo da realidade",
      "Menos dependência da infraestrutura do site de destino",
    ],
    aplicacoes: ["Campanhas de vídeo em Display", "CTV e Streaming", "Qualquer formato com métrica de Complete View como KPI"],
    produtosRelacionados: ["display", "ctv", "streamings"],
  },
];
