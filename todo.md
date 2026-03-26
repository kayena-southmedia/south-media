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

# Rodada 4 - Correções de SEO na página inicial (/)

- [x] Adicionar palavras-chave (keywords) na página inicial
- [x] Reduzir título H2 para 80 caracteres ou menos
- [x] Reduzir descrição para entre 50 e 160 caracteres
- [x] Adicionar texto alternativo (alt) na imagem que está sem

# Rodada 5 - Bug Fix

- [x] Corrigir filtros de categoria do blog que não filtram os artigos ao clicar

# Rodada 6 - Ebook e Consentimento

- [x] Trocar botão "Baixar Nossa Apresentação" por "Baixe nosso Ebook"
- [x] Criar formulário/modal de download do Ebook com campo de email
- [x] Adicionar checkbox de consentimento para coleta de dados em formulário do Ebook
- [x] Adicionar checkbox de consentimento no formulário de contato
- [x] Adicionar checkbox de consentimento na newsletter do blog
- [x] Não existe newsletter no footer (verificado) - N/A
- [x] Criar Ebook PDF profissional sobre mídia programática com identidade visual South Media
- [x] Downloads do Ebook salvos na tabela contacts com source="ebook" (reutilizando tabela existente)
- [x] Upload do Ebook para CDN e conectar ao formulário de download
