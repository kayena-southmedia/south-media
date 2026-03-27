import { useEffect } from "react";
import { getCookieConsent, type CookiePreferences } from "./CookieBanner";

const GTM_ID = "GTM-NGJCWQJK";
const GA4_ID = "G-BDRPG0XJ19";

function loadGTM() {
  if (document.querySelector(`script[src*="gtm.js?id=${GTM_ID}"]`)) return;

  // GTM inline script
  (function (w: any, d: Document, s: string, l: string, i: string) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    const f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s) as HTMLScriptElement;
    const dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode?.insertBefore(j, f);
  })(window, document, "script", "dataLayer", GTM_ID);

  // GTM noscript iframe
  const existingNoscript = document.querySelector(
    `noscript iframe[src*="${GTM_ID}"]`
  );
  if (!existingNoscript) {
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }
}

function loadGA4() {
  if (document.querySelector(`script[src*="gtag/js?id=${GA4_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA4_ID);
}

function applyConsent(prefs: CookiePreferences) {
  if (prefs.analytics) {
    loadGA4();
  }
  if (prefs.marketing) {
    loadGTM();
  }
}

export default function ConsentManager() {
  useEffect(() => {
    // Check stored consent on mount
    const stored = getCookieConsent();
    if (stored) {
      applyConsent(stored);
    }

    // Listen for consent updates from CookieBanner
    const handler = (e: Event) => {
      const prefs = (e as CustomEvent<CookiePreferences>).detail;
      applyConsent(prefs);
    };

    window.addEventListener("cookie-consent-update", handler);
    return () => window.removeEventListener("cookie-consent-update", handler);
  }, []);

  return null; // This component has no UI
}
