import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIcon2xUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Pino padrão azul do Leaflet (teardrop), com sombra.
const blueMarkerIcon = L.icon({
  iconUrl: markerIconUrl,
  iconRetinaUrl: markerIcon2xUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// ============================================================================
// DADOS DE EXEMPLO — distribuição litorânea Recife (Paulista/Olinda ao norte
// até Jaboatão dos Guararapes ao sul). Substituir por dados reais quando
// disponíveis. Fácil de editar: cada grupo abaixo corresponde a um dos 5
// pontos de referência (norte → sul).
// ============================================================================

// Marcadores individuais — agrupados em 5 pontos da orla. A quantidade de
// marcadores próximos em cada grupo é o que faz o leaflet.markercluster
// mostrar os números 2/4/3/2 (e um pino solo no meio, sem cluster).
const MARKER_LOCATIONS: { name: string; lat: number; lng: number }[] = [
  // Grupo 1 — Paulista/Janga (norte litoral) — cluster "2"
  { name: "Paulista / Janga", lat: -7.93, lng: -34.835 },
  { name: "Paulista / Janga", lat: -7.9315, lng: -34.8365 },

  // Grupo 2 — Olinda litoral — cluster "4"
  { name: "Olinda", lat: -8.0089, lng: -34.842 },
  { name: "Olinda", lat: -8.0075, lng: -34.8405 },
  { name: "Olinda", lat: -8.01, lng: -34.8435 },
  { name: "Olinda", lat: -8.011, lng: -34.841 },

  // Grupo 3 — Recife orla / Boa Viagem norte — pino solo (sem cluster)
  { name: "Recife Orla / Boa Viagem Norte", lat: -8.065, lng: -34.885 },

  // Grupo 4 — Boa Viagem / Piedade — cluster "3"
  { name: "Boa Viagem / Piedade", lat: -8.12, lng: -34.905 },
  { name: "Boa Viagem / Piedade", lat: -8.1215, lng: -34.9035 },
  { name: "Boa Viagem / Piedade", lat: -8.1185, lng: -34.9065 },

  // Grupo 5 — Candeias / Jaboatão litoral — cluster "2"
  { name: "Candeias / Jaboatão", lat: -8.165, lng: -34.92 },
  { name: "Candeias / Jaboatão", lat: -8.1665, lng: -34.9185 },
];

// Pontos de heatmap — concentrados na mesma faixa litorânea (lat -7.93 a
// -8.17, lng -34.835 a -34.92), cobrindo a orla de Olinda a Jaboatão.
const HEATMAP_POINTS: { lat: number; lng: number; weight: number }[] = [
  { lat: -7.93, lng: -34.835, weight: 0.7 },
  { lat: -7.945, lng: -34.838, weight: 0.6 },
  { lat: -7.965, lng: -34.842, weight: 0.65 },
  { lat: -7.985, lng: -34.845, weight: 0.75 },
  { lat: -8.005, lng: -34.848, weight: 0.85 },
  { lat: -8.02, lng: -34.855, weight: 0.8 },
  { lat: -8.035, lng: -34.862, weight: 0.7 },
  { lat: -8.05, lng: -34.87, weight: 0.9 },
  { lat: -8.063, lng: -34.878, weight: 1.0 },
  { lat: -8.075, lng: -34.883, weight: 0.95 },
  { lat: -8.09, lng: -34.888, weight: 0.85 },
  { lat: -8.105, lng: -34.895, weight: 0.8 },
  { lat: -8.12, lng: -34.9, weight: 0.9 },
  { lat: -8.135, lng: -34.905, weight: 0.75 },
  { lat: -8.148, lng: -34.91, weight: 0.7 },
  { lat: -8.158, lng: -34.915, weight: 0.65 },
  { lat: -8.165, lng: -34.918, weight: 0.6 },
  { lat: -8.17, lng: -34.92, weight: 0.55 },
];

function HeatLayer({ visible }: { visible: boolean }) {
  const map = useMap();
  const layerRef = useRef<L.Layer | null>(null);

  useEffect(() => {
    const points: [number, number, number][] = HEATMAP_POINTS.map((loc) => [loc.lat, loc.lng, loc.weight]);
    layerRef.current = (L as any).heatLayer(points, {
      radius: 30,
      blur: 35,
      maxZoom: 13,
      minOpacity: 0.3,
      gradient: {
        0.2: "#3B4CC0",
        0.4: "#7F31B8",
        0.6: "#C0398F",
        0.8: "#F45504",
        1.0: "#FF3B30",
      },
    });
    return () => {
      if (layerRef.current && map.hasLayer(layerRef.current)) map.removeLayer(layerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (visible) {
      layer.addTo(map);
    } else if (map.hasLayer(layer)) {
      map.removeLayer(layer);
    }
  }, [visible, map]);

  return null;
}

function MarkerClusterLayer({ visible }: { visible: boolean }) {
  const map = useMap();
  const groupRef = useRef<L.Layer | null>(null);

  useEffect(() => {
    const group = (L as any).markerClusterGroup({
      iconCreateFunction: (cluster: any) => {
        const count = cluster.getChildCount();
        const color = count < 3 ? "#6AA84F" : "#F45504";
        return L.divIcon({
          className: "recife-cluster-wrapper",
          html: `<div class="recife-cluster-icon" style="background:${color}">${count}</div>`,
          iconSize: L.point(40, 40),
        });
      },
    });

    MARKER_LOCATIONS.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], { icon: blueMarkerIcon });
      marker.bindPopup(loc.name);
      group.addLayer(marker);
    });

    groupRef.current = group;
    return () => {
      group.clearLayers();
      if (map.hasLayer(group)) map.removeLayer(group);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    if (visible) {
      map.addLayer(group);
    } else if (map.hasLayer(group)) {
      map.removeLayer(group);
    }
  }, [visible, map]);

  return null;
}

export default function RecifeMap() {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showMarkers, setShowMarkers] = useState(true);

  return (
    <div className="relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden">
      <style>{`
        .recife-cluster-icon {
          width: 40px; height: 40px; border-radius: 9999px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        .leaflet-popup-content-wrapper {
          background: rgba(0,0,0,0.85); color: #fff; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .leaflet-popup-tip { background: rgba(0,0,0,0.85); }
        .leaflet-container { background: #000000; font-family: 'Inter', sans-serif; }
      `}</style>
      <MapContainer
        center={[-8.0578, -34.8774]}
        zoom={11}
        minZoom={10}
        maxZoom={18}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap &copy; CARTO"
          subdomains="abcd"
          maxZoom={20}
        />
        <HeatLayer visible={showHeatmap} />
        <MarkerClusterLayer visible={showMarkers} />
      </MapContainer>

      {/* Legenda com toggles */}
      <div className="absolute top-3 right-3 z-[1000] bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex flex-col gap-2">
        <label className="flex items-center gap-2 cursor-pointer select-none text-white text-xs font-['Inter'] font-semibold">
          <input
            type="checkbox"
            checked={showHeatmap}
            onChange={(e) => setShowHeatmap(e.target.checked)}
            className="accent-[#F45504]"
          />
          Mapa de Calor
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none text-white text-xs font-['Inter'] font-semibold">
          <input
            type="checkbox"
            checked={showMarkers}
            onChange={(e) => setShowMarkers(e.target.checked)}
            className="accent-[#7F31B8]"
          />
          Marcadores
        </label>
      </div>
    </div>
  );
}
