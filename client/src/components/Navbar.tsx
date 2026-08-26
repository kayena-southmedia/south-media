import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

import { track } from "@/lib/tracking";
const LOGO_URL = "/logo-horizontal-branco.png";

const navLinks = [
  { href: "/#tecnologia", label: "Tecnologia" },
  { href: "/resultados", label: "Cases" },
  { href: "/blog", label: "Conteúdos" },
  { href: "/sobre", label: "Sobre" },
];

const solutionsMenu = [
  { href: "/solucoes#display", label: "Display" },
  { href: "/solucoes#ctv", label: "CTV" },
  { href: "/solucoes#dooh", label: "DOOH" },
  { href: "/solucoes#audio", label: "Áudio Programático" },
  { href: "/solucoes#native", label: "Native" },
  { href: "/solucoes#drive-to-store", label: "Drive to Store" },
  { href: "/solucoes#household-sync", label: "Household Sync" },
  { href: "/solucoes#geolocalizacao", label: "Geolocalização" },
  { href: "/solucoes#audience-insights", label: "Audience Insights" },
  { href: "/solucoes#app-marketing", label: "App Marketing" },
  { href: "/solucoes#push", label: "Push Notification" },
  { href: "/solucoes#tiktok-remarketing", label: "TikTok Remarketing" },
  { href: "/solucoes#in-game", label: "In-Game" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="South Media"
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <Link
                href="/solucoes"
                className={`nav-link text-sm font-['Inter'] font-semibold transition-colors duration-200 flex items-center gap-1 ${
                  location === "/solucoes" ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                Soluções
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                <div className="glass-nav backdrop-blur-xl rounded-2xl border border-[rgba(127,49,184,0.3)] p-3 grid grid-cols-2 gap-1 w-[420px] shadow-2xl shadow-black/50">
                  {solutionsMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => track("solution_click", { placement: "navbar_menu", solucao: item.href })}
                      className="px-3 py-2 rounded-lg text-sm font-['Inter'] text-white/80 hover:text-white hover:bg-[rgba(127,49,184,0.15)] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.map((link) =>
              link.href.includes("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-['Inter'] font-semibold transition-colors duration-200 text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-['Inter'] font-semibold transition-colors duration-200 ${
                    location === link.href ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/#agendar"
              onClick={() => track("meeting_cta_click", { placement: "navbar" })}
              className="btn-cta !py-3 !px-6 !text-sm"
            >
              Agendar uma conversa
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 w-[280px] h-full bg-black border-l border-[rgba(127,49,184,0.3)] p-8 pt-24 flex flex-col gap-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <Link
                href="/solucoes"
                className={`text-lg font-['Inter'] font-bold ${location === "/solucoes" ? "text-white" : "text-white/70"}`}
              >
                Soluções
              </Link>
              <div className="mt-3 pl-3 border-l border-[rgba(127,49,184,0.3)] flex flex-col gap-2">
                {solutionsMenu.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm font-['Inter'] text-white/60">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((link) =>
              link.href.includes("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-['Inter'] font-bold text-white/70"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-['Inter'] font-bold ${
                    location === link.href ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/#agendar"
              onClick={() => track("meeting_cta_click", { placement: "navbar_mobile" })}
              className="btn-cta mt-4 text-center"
            >
              Agendar uma conversa
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export { LOGO_URL };
