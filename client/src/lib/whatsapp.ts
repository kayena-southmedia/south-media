const WHATSAPP_NUMBER = "5541996917857";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagens por contexto
export const WA_NAVBAR    = whatsappLink("Olá! Quero saber mais sobre a South Media.");
export const WA_HOME_HERO = whatsappLink("Olá! Quero saber mais sobre a South Media.");
export const WA_HOME_MID  = whatsappLink("Olá! Tenho interesse em conhecer o Diagnóstico Gratuito.");
export const WA_SOBRE     = whatsappLink("Olá! Quero saber mais sobre o Diagnóstico Estratégico.");
export const WA_SOLUCOES  = whatsappLink("Olá! Quero saber mais sobre as soluções da South Media.");
export const WA_RESULTADOS = whatsappLink("Olá! Vi os resultados e quero conhecer o Diagnóstico Gratuito.");
export const WA_BLOG      = whatsappLink("Olá! Li um artigo no blog e quero agendar um Diagnóstico Gratuito.");
export const WA_CONTATO   = whatsappLink("Olá! Gostaria de falar com um especialista da South Media.");
export const WA_FOOTER    = whatsappLink("Olá! Gostaria de falar com um especialista da South Media.");