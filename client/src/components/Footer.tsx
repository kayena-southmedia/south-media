import { Link } from "wouter";
import { LogoSVG, WHATSAPP_URL } from "./Navbar";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a0035] to-[#050008] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoSVG className="w-10 h-10" />
              <div>
                <span className="font-['Syne'] font-extrabold text-white text-lg tracking-[0.15em] block leading-none">
                  SOUTH MEDIA
                </span>
                <span className="text-[0.6rem] text-[#888] tracking-[0.08em] font-['DM_Sans']">
                  AdTech Brasileira e Independente
                </span>
              </div>
            </div>
            <p className="text-[#888] text-sm max-w-[320px] leading-relaxed">
              Conectamos sua marca a audiências reais com tecnologia proprietária,
              transparência total e otimização focada em performance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com/company/southmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[rgba(155,0,255,0.3)] flex items-center justify-center hover:bg-[rgba(155,0,255,0.15)] transition-all" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://instagram.com/southmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[rgba(155,0,255,0.3)] flex items-center justify-center hover:bg-[rgba(155,0,255,0.15)] transition-all" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com/southmedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[rgba(155,0,255,0.3)] flex items-center justify-center hover:bg-[rgba(155,0,255,0.15)] transition-all" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-['Syne'] font-bold text-white text-sm mb-4 tracking-wide">Soluções</h4>
            <ul className="space-y-2">
              {["Display", "CTV", "App Marketing", "DOOH", "Push Notification", "Drive to Store"].map((item) => (
                <li key={item}>
                  <Link href="/solucoes" className="text-[#888] text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-['Syne'] font-bold text-white text-sm mb-4 tracking-wide">Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Resultados", href: "/resultados" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#888] text-sm hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-['Syne'] font-bold text-white text-sm mb-4 tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#888] text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  (41) 99691-7857
                </a>
              </li>
              <li>
                <a href="mailto:comercial@southmedia.com.br" className="text-[#888] text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  comercial@southmedia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(155,0,255,0.2)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-xs text-center md:text-left">
            &copy; 2025 South Media. Tecnologia 100% Proprietária. Feito no Brasil.
          </p>
          <div className="flex gap-4">
            <span className="text-[#666] text-xs">Política de Privacidade</span>
            <span className="text-[#666] text-xs">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
