// Histórico de leitura do blog, guardado no navegador do próprio visitante
// (sem envio a servidor). Usado para identificar padrão de categoria lida
// e recomendar a próxima leitura.

const STORAGE_KEY = "sm_reading_history";
const MAX_HISTORY = 30;

interface ReadEntry {
  slug: string;
  category: string;
  at: number;
}

interface RecommendablePost {
  id: number;
  slug: string;
  category: string;
}

function readHistory(): ReadEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeHistory(entries: ReadEntry[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // localStorage indisponível (aba anônima, quota cheia etc.) — sem histórico, sem problema
  }
}

/** Registra a leitura de um artigo. Chamar uma vez ao abrir a página do post. */
export function recordArticleRead(slug: string, category: string) {
  if (typeof window === "undefined") return;
  const history = readHistory().filter((e) => e.slug !== slug);
  history.push({ slug, category, at: Date.now() });
  writeHistory(history.slice(-MAX_HISTORY));
}

/**
 * Recomenda os próximos artigos com base no padrão de categorias lidas.
 * Categorias lidas recentemente pesam mais que categorias lidas há mais tempo,
 * e a categoria do artigo atual sempre entra como sinal extra de contexto.
 * Sem histórico (primeira visita), cai para "mesma categoria do artigo atual".
 */
export function getRecommendedArticles<T extends RecommendablePost>(
  posts: T[],
  currentSlug: string,
  currentCategory: string,
  count = 3
): T[] {
  const history = readHistory();
  const readSlugs = new Set(history.map((e) => e.slug));
  readSlugs.add(currentSlug);

  const categoryWeight = new Map<string, number>();
  history.forEach((entry, i) => {
    const recencyWeight = (i + 1) / history.length; // leituras mais recentes pesam mais
    categoryWeight.set(entry.category, (categoryWeight.get(entry.category) ?? 0) + recencyWeight);
  });
  // A categoria do artigo que o usuário está lendo agora é o sinal mais forte de contexto
  categoryWeight.set(currentCategory, (categoryWeight.get(currentCategory) ?? 0) + 1.5);

  const scored = posts
    .filter((p) => !readSlugs.has(p.slug))
    .map((post) => ({
      post,
      score: (categoryWeight.get(post.category) ?? 0) * 10 + post.id * 0.001, // id como desempate por mais recente
    }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.post);
}
