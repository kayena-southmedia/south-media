import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

import { WA_NAVBAR } from "@/lib/whatsapp";
const LOGO_URL = "/logo-horizontal-branco.png";

const navLinks = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/resultados", label: "Resultados" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-['Inter'] font-semibold transition-colors duration-200 ${
                  location === link.href ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_NAVBAR}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta !py-3 !px-6 !text-sm"
            >
              Falar com um especialista
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
          <div className="absolute top-0 right-0 w-[280px] h-full bg-black border-l border-[rgba(127,49,184,0.3)] p-8 pt-24 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-['Inter'] font-bold ${
                  location === link.href ? "text-white" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_NAVBAR}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-4 text-center"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export { LOGO_URL };
