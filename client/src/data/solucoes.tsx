export type Solucao = {
  id: string;
  label: string;
  resumo: string;
  icon: React.ReactNode;
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

export const solucoes: Solucao[] = [
  {
    id: "display",
    label: "Display",
    resumo: "Formatos de alto impacto em publishers premium, com viewability garantida e brand safety.",
    icon: <svg {...iconProps}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  },
  {
    id: "ctv",
    label: "CTV",
    resumo: "Vídeo em streaming premium na maior tela da casa, com Netflix operada diretamente desde 2022.",
    icon: <svg {...iconProps}><rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>,
  },
  {
    id: "dooh",
    label: "DOOH",
    resumo: "Telas digitais de alto tráfego — shoppings, aeroportos e vias urbanas — compradas como mídia digital.",
    icon: <svg {...iconProps}><rect x="3" y="3" width="18" height="12" rx="1" /><line x1="7" y1="19" x2="17" y2="19" /><line x1="12" y1="15" x2="12" y2="19" /><line x1="5" y1="22" x2="19" y2="22" /></svg>,
  },
  {
    id: "audio",
    label: "Áudio Programático",
    resumo: "Spotify, podcasts, rádio digital e games, com inserção dinâmica de anúncios.",
    icon: <svg {...iconProps}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>,
  },
  {
    id: "native",
    label: "Native",
    resumo: "O anúncio que assume a forma do conteúdo ao redor, sem a cegueira de banner.",
    icon: <svg {...iconProps}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="16" y2="11" /></svg>,
  },
  {
    id: "drive-to-store",
    label: "Drive to Store",
    resumo: "Atribuição de visita física, do anúncio ao deslocamento até a loja.",
    icon: <svg {...iconProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
  {
    id: "household-sync",
    label: "Household Sync",
    resumo: "Conecta o impacto na TV conectada aos demais dispositivos da mesma casa.",
    icon: <svg {...iconProps}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    id: "geolocalizacao",
    label: "Geolocalização",
    resumo: "Location Based Audiences com precisão de alcance geográfico avançado.",
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
  {
    id: "app-marketing",
    label: "App Marketing",
    resumo: "Tracking S2S com 5 eventos pós-download para medir o funil completo do app.",
    icon: <svg {...iconProps}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
  },
  {
    id: "push",
    label: "Push Notification",
    resumo: "Notificações via geofence, disparadas ao entrar na área de interesse.",
    icon: <svg {...iconProps}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
  },
  {
    id: "tiktok-remarketing",
    label: "TikTok Remarketing",
    resumo: "A ponte entre cliques no TikTok Ads e remarketing programático.",
    icon: <svg {...iconProps}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>,
  },
  {
    id: "in-game",
    label: "In-Game",
    resumo: "Publicidade nativa dentro de jogos, para uma audiência 2,5x mais engajada.",
    icon: <svg {...iconProps}><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>,
  },
];
