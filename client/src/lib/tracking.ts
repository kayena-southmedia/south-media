// Empurra eventos para o dataLayer já usado pelo GTM (ConsentManager.tsx).
// Funciona mesmo antes do consentimento/carregamento do GTM: dataLayer é só um
// array, o GTM lê o histórico assim que carrega.
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
