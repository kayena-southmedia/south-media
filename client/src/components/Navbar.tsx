import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const WHATSAPP_URL = "https://wa.me/5541996917857?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.";

// SVG Logo: spiral/galaxy dots
function LogoSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="white" xmlns="http://www.w3.org/2000/svg">
      {/* Outer arc */}
      <circle cx="30" cy="8" r="2.2" opacity="0.5" />
      <circle cx="40" cy="10" r="2.5" opacity="0.6" />
      <circle cx="48" cy="16" r="2.8" opacity="0.7" />
      <circle cx="52" cy="24" r="3" opacity="0.8" />
      <circle cx="52" cy="34" r="2.8" opacity="0.7" />
      <circle cx="48" cy="42" r="2.5" opacity="0.6" />
      {/* Inner arc */}
      <circle cx="20" cy="12" r="1.8" opacity="0.4" />
      <circle cx="14" cy="20" r="2" opacity="0.5" />
      <circle cx="12" cy="30" r="2.5" opacity="0.7" />
      <circle cx="14" cy="40" r="2.2" opacity="0.6" />
      <circle cx="20" cy="48" r="2" opacity="0.5" />
      {/* Center cluster */}
      <circle cx="30" cy="26" r="3.5" opacity="0.9" />
      <circle cx="36" cy="30" r="2.8" opacity="0.8" />
      <circle cx="28" cy="34" r="2.2" opacity="0.7" />
      <circle cx="34" cy="22" r="1.8" opacity="0.6" />
      <circle cx="24" cy="28" r="1.5" opacity="0.5" />
      {/* Scattered small dots */}
      <circle cx="42" cy="28" r="1.2" opacity="0.4" />
      <circle cx="38" cy="38" r="1.5" opacity="0.5" />
      <circle cx="22" cy="20" r="1" opacity="0.3" />
      <circle cx="32" cy="42" r="1.3" opacity="0.4" />
      <circle cx="44" cy="36" r="1" opacity="0.3" />
    </svg>
  );
}

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
            ? "bg-[#050008]/80 backdrop-blur-xl border-b border-[rgba(155,0,255,0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoSVG className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-['Syne'] font-extrabold text-white text-lg tracking-[0.15em] leading-none">
                SOUTH MEDIA
              </span>
              <span className="text-[0.6rem] text-[#888] tracking-[0.08em] font-['DM_Sans']">
                AdTech Brasileira e Independente
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-['DM_Sans'] font-medium transition-colors duration-200 ${
                  location === link.href ? "text-white" : "text-[#ccc] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta !py-3 !px-6 !text-sm"
            >
              Fale Conosco
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
          <div className="absolute top-0 right-0 w-[280px] h-full bg-[#0d0015] border-l border-[rgba(155,0,255,0.3)] p-8 pt-24 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-['Syne'] font-bold ${
                  location === link.href ? "text-white" : "text-[#ccc]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-4 text-center"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export { LogoSVG, WHATSAPP_URL };
