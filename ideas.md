# Brainstorm de Design — South Media

## Contexto
Site institucional de uma AdTech brasileira especializada em mídia programática. O prompt define com precisão absoluta: paleta escura (preto/roxo/laranja/dourado), tipografia Syne + DM Sans, cards glassmorphism com borda roxa, partículas animadas, gradientes orange-purple, e zero imagens raster. O BrandScript SB7 orienta toda a narrativa.

---

<response>
<text>

## Ideia 1 — "Cosmos Data" (Sci-Fi Minimalista)

**Design Movement:** Inspirado em interfaces de ficção científica e visualizações de dados astronômicos. Referência estética: painéis de controle de naves espaciais misturados com mapas estelares.

**Core Principles:**
1. Dados como constelações — cada métrica é uma estrela no universo da marca
2. Profundidade infinita — camadas de z-index criando sensação de espaço tridimensional
3. Precisão cirúrgica — alinhamento milimétrico, grids assimétricos com propósito
4. Movimento orbital — animações circulares e de rotação suave

**Color Philosophy:** O preto profundo (#050008) é o vácuo do espaço. O roxo (#9B00FF) representa a energia das nebulosas — tecnologia e inovação. O laranja (#FF4500) é a explosão solar — urgência, resultado, impacto. O dourado (#FFB800) é a luz das estrelas — sucesso e conquista.

**Layout Paradigm:** Layout em camadas de profundidade com parallax sutil. Seções que "flutuam" sobre o fundo escuro. Cards dispostos em constelações assimétricas, não em grids uniformes. Hero com composição diagonal.

**Signature Elements:**
1. Partículas orbitais animadas no hero que ecoam o logo da marca (pontos em espiral)
2. Linhas de conexão SVG entre cards de soluções, como constelações
3. Radial glows pulsantes nos pontos de destaque

**Interaction Philosophy:** Hover revela camadas ocultas — como zoom em uma nebulosa. Scroll dispara animações de "aproximação" — elementos surgem como se o usuário estivesse navegando pelo espaço.

**Animation:** Partículas flutuando em órbitas elípticas (CSS keyframes). Cards entram com fade + scale de 0.95 a 1. Counters numéricos com efeito de "decodificação" (números aleatórios antes do valor final). Transições suaves de 0.6s ease-out.

**Typography System:** Syne 800 para H1 — geométrica e futurista, perfeita para o tema espacial. DM Sans 400 para corpo — legibilidade máxima no fundo escuro. Números em Syne 800 com tamanho exagerado (96px+) para impacto.

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Ideia 2 — "Neon Brutalism" (Brutalismo Digital Tropical)

**Design Movement:** Neo-brutalismo digital com influências de arte generativa brasileira. Contraste extremo entre elementos pesados e espaço negativo. Referência: interfaces de trading desks misturadas com arte concreta brasileira.

**Core Principles:**
1. Contraste como comunicação — blocos de cor sólida que gritam informação
2. Hierarquia agressiva — tamanhos extremos criam drama visual
3. Geometria tropical — formas angulares com curvas inesperadas
4. Transparência como valor — o design reflete a transparência da marca

**Color Philosophy:** Preto absoluto como base de autoridade. Laranja e dourado como "fogo" — a energia que queima o desperdício. Roxo como "noite digital" — o ambiente onde a tecnologia opera. O gradiente orange-purple é a transição do problema (laranja/fogo) para a solução (roxo/tecnologia).

**Layout Paradigm:** Blocos assimétricos com overlap intencional. Seções com cortes diagonais via clip-path. Layout em "Z" para guiar o olho. Cards com posicionamento staggered (escalonado), não alinhados em grid perfeito.

**Signature Elements:**
1. Bordas com glow neon roxo que pulsam sutilmente
2. Grain/noise texture sobre todos os fundos escuros
3. Pills/badges com gradiente laranja→roxo como marca registrada visual

**Interaction Philosophy:** Interações com feedback imediato e visível. Hover causa "explosão" sutil de glow. Cliques em CTAs disparam shimmer. Scroll revela conteúdo com impacto — não suavidade.

**Animation:** Entrada de elementos com translateY agressivo (50px) e ease-out rápido (0.4s). Partículas no hero com movimento browniano. Labels pill deslizam da esquerda com bounce. Counters com incremento rápido.

**Typography System:** Syne 800 em tamanhos massivos (80px+) para headlines — brutalismo tipográfico. DM Sans 400 em 18px para corpo — contraponto de legibilidade. Espaçamento entre letras amplo nos labels de seção.

</text>
<probability>0.06</probability>
</response>

<response>
<text>

## Ideia 3 — "Pulse Network" (Rede Neural Viva)

**Design Movement:** Inspirado em visualizações de redes neurais e fluxos de dados em tempo real. Estética de dashboard de alta tecnologia com influências de motion design editorial.

**Core Principles:**
1. Conexão como metáfora — tudo está interligado, como a rede programática
2. Pulso vital — elementos que "respiram" com animações sutis de escala e opacidade
3. Fluxo direcional — o design guia o olho como dados fluindo por uma rede
4. Camadas de informação — revelação progressiva de profundidade

**Color Philosophy:** O preto (#050008) é o substrato da rede — onde os dados vivem. O roxo (#9B00FF → #6B00B6) é a energia elétrica que percorre os nós. O laranja (#FF4500 → #FFB800) é o sinal de alerta e resultado — onde a atenção deve focar. A transição orange-purple representa dados brutos se transformando em inteligência.

**Layout Paradigm:** Layout fluido com seções que se conectam visualmente por linhas SVG animadas. Hero com composição centralizada mas com elementos satélite nas laterais. Seções alternando entre full-width imersivo e conteúdo contido em max-width.

**Signature Elements:**
1. Linhas de "pulso" SVG animadas conectando seções (como batimentos cardíacos de dados)
2. Nós/pontos luminosos nos cruzamentos de informação
3. Efeito de "scan line" sutil nos backgrounds (CSS pseudo-element)

**Interaction Philosophy:** Hover em cards "ativa" o nó — glow se intensifica, como um neurônio disparando. Scroll cria sensação de "mergulho" na rede de dados. Elementos respondem ao viewport como se estivessem "acordando".

**Animation:** Partículas conectadas por linhas finas no hero (canvas-like via CSS). Cards surgem com opacity + translateY + escala sutil. Pulse animation nos pontos de destaque (scale 1 → 1.1 → 1, loop infinito). Shimmer nos CTAs como dados fluindo.

**Typography System:** Syne 800 para headlines — peso e presença. Syne 700 para H2 — hierarquia clara. DM Sans 400/500 para corpo e labels — clareza técnica. Números em Syne 800 com gradiente laranja aplicado via background-clip.

</text>
<probability>0.07</probability>
</response>

---

## Decisão

**Escolha: Ideia 1 — "Cosmos Data" (Sci-Fi Minimalista)** com elementos selecionados da Ideia 2 (grain texture, pills com gradiente) e Ideia 3 (pulso vital, linhas de conexão).

Esta abordagem se alinha perfeitamente com o logo da South Media (pontos em espiral/galáxia) e cria uma metáfora visual poderosa: a South Media navega pelo universo complexo da mídia programática como um guia estelar, transformando caos em constelações de resultado.
