# Alterações Solicitadas - Rodada 2

- [ ] 1. Remover tag "Native" do case BlaBlaCar na página Resultados, deixar apenas 3 formatos (App Marketing, Vídeo, Display)
- [ ] 2. Substituir mapa SVG da América do Sul por imagem realista (estilo Google Maps), remover ponto de Assunção
- [ ] 3. Corrigir imagens de capa do blog - os 3 primeiros posts mostram apenas alt text, imagens não carregam

# Rodada 3 - Links, Formulário, Newsletter, Blog

- [x] Corrigir link do Facebook para https://www.facebook.com/southmedia.br/ em todo o site
- [x] Upgrade para full-stack com banco de dados (tRPC + Drizzle + MySQL)
- [x] Criar tabela contacts no banco de dados para armazenar formulários de contato
- [x] Criar tabela newsletter_subscribers no banco de dados para armazenar inscritos
- [x] Criar endpoints tRPC para submissão de contato e newsletter (públicos)
- [x] Criar endpoints tRPC protegidos para listar contatos e inscritos (admin)
- [x] Conectar formulário de contato da página Contato ao backend
- [x] Conectar formulário de newsletter do Blog ao backend
- [x] Criar arquivo de dados com conteúdo completo de 6 artigos do blog
- [x] Criar página individual de artigo (BlogPost) com renderização de conteúdo
- [x] Adicionar rota /blog/:slug no App.tsx
- [x] Escrever testes vitest para os endpoints de contato e newsletter (11 testes passando)
