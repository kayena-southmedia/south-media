// Compat: os artigos agora vivem em client/src/data/blog/<slug>.ts
// Este arquivo reexporta o agregado para não quebrar imports existentes.
export type { BlogPost } from "./blog/types";
export { blogPosts } from "./blog";
