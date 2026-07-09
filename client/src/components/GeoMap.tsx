import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import "leaflet/dist/leaflet.css";

export type GeoMapLocation = {
  name: string;
  lat: number;
  lng: number;
  color: string;
  type: "brasil" | "latam";
};

export const geoMapLocations: GeoMapLocation[] = [
  { name: "Pernambuco", lat: -8.0476, lng: -34.877, color: "#F45504", type: "brasil" },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333, color: "#F45504", type: "brasil" },
  { name: "Paraná", lat: -25.4284, lng: -49.2733, color: "#F45504", type: "brasil" },
  { name: "Santa Catarina", lat: -27.5954, lng: -48.548, color: "#F45504", type: "brasil" },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, color: "#F45504", type: "brasil" },
  { name: "Minas Gerais", lat: -19.9167, lng: -43.9345, color: "#F45504", type: "brasil" },
  { name: "Distrito Federal", lat: -15.7939, lng: -47.8828, color: "#F45504", type: "brasil" },
  { name: "Peru", lat: -12.0464, lng: -77.0428, color: "#7F31B8", type: "latam" },
  { name: "Argentina", lat: -34.6037, lng: -58.3816, color: "#7F31B8", type: "latam" },
  { name: "Chile", lat: -33.4489, lng: -70.6693, color: "#7F31B8", type: "latam" },
];

function dotIcon(color: string) {
  return L.divIcon({
    className: "geo-map-dot-wrapper",
    html: `<span class="geo-map-dot" style="background:${color}"></span><span class="geo-map-dot-ping" style="background:${color}"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

function HeatLayer({ locations }: { locations: GeoMapLocation[] }) {
  const map = useMap();

  useEffect(() => {
    const points: [number, number, number][] = locations.map((loc) => [
      loc.lat,
      loc.lng,
      loc.type === "brasil" ? 0.8 : 0.6,
    ]);
    const heat = (L as any).heatLayer(points, {
      radius: 35,
      blur: 25,
      maxZoom: 6,
      gradient: { 0.2: "#7F31B8", 0.6: "#F45504", 1: "#ffffff" },
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, locations]);

  return null;
}

export default function GeoMap() {
  return (
    <div className="relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden">
      <style>{`
        .geo-map-dot-wrapper { position: relative; }
        .geo-map-dot {
          position: absolute; inset: 0; border-radius: 9999px;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.4);
        }
        .geo-map-dot-ping {
          position: absolute; inset: 0; border-radius: 9999px;
          opacity: 0.5; animation: geo-map-ping 2s cubic-bezier(0,0,0.2,1) infinite;
        }
        @keyframes geo-map-ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .leaflet-popup-content-wrapper {
          background: rgba(0,0,0,0.85); color: #fff; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .leaflet-popup-tip { background: rgba(0,0,0,0.85); }
        .leaflet-container { background: #000000; font-family: 'Inter', sans-serif; }
      `}</style>
      <MapContainer
        center={[-20, -55]}
        zoom={3}
        minZoom={3}
        maxZoom={20}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap &copy; CARTO"
          subdomains="abcd"
          maxZoom={20}
        />
        <HeatLayer locations={geoMapLocations} />
        {geoMapLocations.map((loc) => (
          <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={dotIcon(loc.color)}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
