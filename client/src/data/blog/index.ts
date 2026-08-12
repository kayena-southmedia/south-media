import type { BlogPost } from "./types";
import { post as p0 } from "./curadoria-de-inventario";
import { post as p1 } from "./native-programatico-atencao";
import { post as p2 } from "./supply-path-optimization-caminho-impressao";
import { post as p3 } from "./incrementalidade-midia-que-vende";
import { post as p4 } from "./segmentacao-contextual-2-0-ia";
import { post as p5 } from "./sites-mfa-inventario-desperdicio";
import { post as p6 } from "./metricas-de-atencao-viewability";
import { post as p7 } from "./dooh-programatico-performance";
import { post as p8 } from "./trading-desk-adtech-manifesto-south-media";
import { post as p9 } from "./retail-media-regional-vs-top-5";
import { post as p10 } from "./in-game-ads-brasil-formato-em-ascensao";
import { post as p11 } from "./acr-medicao-cross-screen-ctv-linear";
import { post as p12 } from "./geofencing-inteligente-vs-generico";
import { post as p13 } from "./ctv-cpm-alto-inventario-sobrando";
import { post as p14 } from "./o-que-footfall-nao-mede";
import { post as p15 } from "./retail-media-passar-busca-paga-2028";
import { post as p16 } from "./brand-safety-vs-brand-suitability";
import { post as p17 } from "./upfront-brasileiro-ctv-negociacao-inventario";
import { post as p18 } from "./retail-media-on-site-off-site-in-store";
import { post as p19 } from "./digital-ultrapassou-tv-brasil-budget";
import { post as p20 } from "./audio-programatico-alem-spotify-2026";
import { post as p21 } from "./ponto-virada-2026-copa-eleicoes-midia";
import { post as p22 } from "./omnichannel-jornada-consumidor-conectada";
import { post as p23 } from "./tiktok-remarketing-reimpacto-programatica";
import { post as p24 } from "./household-sync-ctv-mobile-sincronizacao";
import { post as p25 } from "./transparencia-programatica-auditoria-dsp";
import { post as p26 } from "./spotify-ads-audio-programatico";
import { post as p27 } from "./drive-to-store-impacto-digital-lojas";
import { post as p28 } from "./fraude-publicitaria-identificar-eliminar";
import { post as p29 } from "./cpm-cpc-cpe-cpa-guia-gestores";
import { post as p30 } from "./lba-vs-geofence-tecnologia";
import { post as p31 } from "./ctv-brasil-netflix-acessivel";

export type { BlogPost };

// Registro de artigos. Para publicar um novo post: crie client/src/data/blog/<slug>.ts
// exportando `post`, adicione o import acima e inclua no array abaixo.
// A ordem de exibição é resolvida por id (mais recente primeiro).
export const blogPosts: BlogPost[] = [
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
  p30,
  p31,
].sort((a, b) => b.id - a.id);
