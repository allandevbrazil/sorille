---
name: Sorille
description: Landing page da Sorille, clínica odontológica e de harmonização orofacial em Sorocaba-SP.
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  text: "#474242"
  accent-gold: "#E2A032"
  accent-gold-deep: "#987D16"
  ink-charcoal: "#212526"
  champagne: "#D4A65A"
  surface-muted: "#E9E9E9"
  slate-muted: "#68717A"
  taupe: "#B8AA9E"
typography:
  display:
    fontFamily: "Playfair, Georgia, serif"
    fontWeight: 600
  secondary-display:
    fontFamily: "Playfair, Georgia, serif"
    fontWeight: 400
  body:
    fontFamily: "Lato, sans-serif"
    fontWeight: 400
  accent:
    fontFamily: "Lato, sans-serif"
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.accent-gold}"
    textColor: "{colors.secondary}"
    typography: "{typography.display}"
---

# Design System: Sorille

## Overview

**Creative North Star: "A Boutique Clínica" — elegância clínica discreta, com um toque de dourado sofisticado.**

A identidade visual da Sorille combina a seriedade clínica (preto, branco, cinza-texto
neutro) com um acento dourado quente (`#E2A032` / `#987D16`) que carrega conotação de
cuidado premium/estética, sem cair em exagero ou "luxo genérico". A tipografia contrasta
uma serifada elegante (Playfair) para títulos/identidade com uma sans-serif limpa e
legível (Lato) para corpo de texto — um padrão editorial clássico de clínicas de estética
e saúde de padrão elevado.

Este documento registra o sistema **incumbente**, extraído do export legado
WordPress/Elementor (`storage/elementor/css/post-6.css`, kit global `elementor-kit-6`),
antes de qualquer refinamento visual (ver [newlayoutplan.md](newlayoutplan.md)).

**Key Characteristics:**
- Paleta neutra (preto/branco/cinza-texto) + acento dourado quente único.
- Serifada (Playfair) para impacto/título, sans-serif (Lato) para leitura.
- Tom sóbrio, confiável, levemente premium — não vibrante, não infantil.

## Colors

Paleta predominantemente neutra com um único acento de destaque (dourado), variando em
dois tons (claro/quente e profundo) — típico de marcas que quer transmitir
sofisticação sem recorrer a paletas multicoloridas.

| Token | Valor | Uso observado |
|---|---|---|
| `primary` | `#000000` | Cor primária global (textos fortes, botões de contraste) |
| `secondary` | `#FFFFFF` | Fundo claro, texto sobre fundo escuro |
| `text` | `#474242` | Corpo de texto padrão |
| `accent-gold` | `#E2A032` | Acento principal — fundo de botões (`.elementor-button`), CTAs |
| `accent-gold-deep` | `#987D16` | Acento em estado alternativo/hover, fundos secundários |
| `ink-charcoal` | `#212526` | Fundo escuro alternativo (seções escuras) |
| `champagne` | `#D4A65A` | Detalhe/realce quente secundário |
| `surface-muted` | `#E9E9E9` | Fundos suaves de seção |
| `slate-muted` | `#68717A` | Texto/ícone secundário, menor contraste |
| `taupe` | `#B8AA9E` | Detalhe neutro quente |

## Typography

Duas famílias: **Playfair** (serifada, títulos/identidade, peso 600 no primário e 400 no
secundário) e **Lato** (sans-serif, texto/peso 400, acento/peso 500). Ambas hospedadas
localmente (`storage/elementor/google-fonts/`).

- `display` (H1/H2 de destaque, headline hero): Playfair, weight 600.
- `secondary-display` (subtítulos, títulos de card): Playfair, weight 400.
- `body`: Lato, weight 400.
- `accent` (labels, botões, nav): Lato, weight 500.

## Layout

Página única em seções empilhadas (padrão Elementor "sections/containers"): Hero,
Sobre nós, Serviços (grid de cards com ícone/imagem), Especialistas em destaque,
Equipe, FAQ (accordion), Rodapé/contato. Botões de CTA para WhatsApp aparecem
repetidamente ao longo da rolagem, não apenas no hero.

## Shapes

Botões com cantos levemente arredondados (`elementor-button` padrão), cards de serviço
com ícone/imagem + título + leve sombra. Sem uso pesado de bordas fortes — visual
"clean/editorial".

## Components

- **Botão primário** (`button-primary`): fundo dourado (`accent-gold`), texto Playfair,
  usado nos CTAs de WhatsApp em todas as seções.
- **Card de serviço**: imagem/ícone + `h3` (Playfair) + descrição curta (Lato).
- **Accordion (FAQ)**: título com cor secundária, comportamento expandir/recolher.
- **Chat button flutuante**: botão fixo de WhatsApp (`simple-chat-button`), estilo
  circular fixo no canto da tela.

## Do's and Don'ts

- **Do** manter o par tipográfico Playfair + Lato como identidade central.
- **Do** manter o dourado como único acento de destaque — não introduzir novas cores
  saturadas sem necessidade.
- **Do** preservar CTAs de WhatsApp visíveis e repetidos ao longo da página.
- **Don't** tornar o visual "gritante"/infantil; a marca é uma clínica de saúde/estética,
  não um produto de consumo casual.
- **Don't** remover ou reduzir credenciais/nome da responsável técnica (confiança clínica).

## Roadmap de Redesign (Impeccable Shape → Overdrive)

Decisões de design para as Etapas 4-8 do `newlayoutplan.md`, documentadas aqui e
implementadas de uma só vez na reconstrução Vite/React (Etapas 10-11), evitando refazer
o trabalho sobre o markup Elementor legado que será descartado.

### Shape — direção de composição escolhida

**Modo:** Persuade (landing page de conversão). Três alternativas de composição foram
avaliadas para o Hero + fluxo de seções:

1. **A — Empilhado clássico (o que existe hoje):** logo/nav, headline, subheadline, CTA,
   tudo centralizado verticalmente sem imagem de apoio. Simples, mas sem ponto focal e
   sem prova de credibilidade próxima da decisão.
2. **B — Split hero (copy + mídia lado a lado):** copy/CTA à esquerda, à direita uma
   composição visual (fundo com efeito sutil — ver Overdrive) sugerindo sorriso/clínica;
   faixa de credenciais (CRO, avaliação Google 4.9) logo abaixo do CTA. Depoimentos
   antecipados para logo após "Sobre" (não apenas na metade da página).
3. **C — Editorial com prova social intercalada:** seções de serviço intercaladas com
   depoimentos a cada 2-3 cards, estilo revista.

**Escolhida: Opção B (Split hero + credencial próxima ao CTA + depoimentos antecipados).**
Motivo: para uma clínica odontológica, confiança é o principal bloqueio de conversão;
aproximar prova social (nota 4.9 do Google, CRO) do primeiro CTA reduz atrito sem exigir
uma composição "de revista" mais complexa/arriscada de implementar bem. Mantém todas as
seções e textos existentes, apenas reordena posição da prova social e dá um ponto focal
visual ao hero.

**Ordem de seções revisada:** Hero (split) → faixa de credencial/avaliação → Sobre →
Serviços → Depoimentos (antecipado) → Especialistas → Equipe → FAQ → Rodapé/Contato.

**Correção estrutural obrigatória (independente da opção escolhida):** o H1 real da
página está hoje escondido dentro de um accordion colapsado (ver `plan.md`, item crítico
#1). No rebuild, o H1 visível do hero passa a ser a headline real da página; a hierarquia
H1→H2→H3 é reconstruída do zero, sem duplicar texto.

### Typeset — hierarquia tipográfica

- Escala modular única para toda a página (ex.: 1.25 - Major Third), aplicada a
  H1/H2/H3/H4/body/label, usando Playfair (display) + Lato (body/label) já definidos.
- H1 do hero em Playfair 600, tamanho fluido (`clamp()`), un único por página.
- Parágrafos de card de serviço padronizados em tamanho e número de linhas
  (atualmente muito desiguais — ver crítica item #12); resumir visualmente via
  `line-clamp` ou revisão de densidade, sem cortar texto original.
- Line-height generoso no corpo (1.5-1.6) para legibilidade em Lato; tracking levemente
  negativo em títulos Playfair grandes.

### Animate — microinterações

- Entrada de seções: fade + slide sutil (8-16px) ao entrar no viewport (Intersection
  Observer / `framer-motion` no React), stagger leve entre cards de serviço.
- Hover de botão CTA: leve elevação/mudança de tom (`accent-gold` → `accent-gold-deep`),
  sem mudança de tamanho brusca.
- Nav: sublinhado deslizante ou fade nos links ao hover (preservando o comportamento
  atual do `e--pointer-underline`).
- Accordion FAQ: transição de altura suave (não abrupta) ao expandir/recolher.
- Duração padrão 150-300ms, easing `ease-out`; respeitar `prefers-reduced-motion:
  reduce` desabilitando entrada/parallax.

### Delight — refinamentos sutis

- Micro-feedback ao clicar em CTA (ripple sutil ou leve "press" de escala 0.97).
- Numeração ou ícones consistentes nos 13 cards de serviço (hoje sem padrão visual
  comum de ícone).
- Destaque visual sutil (borda dourada fina ou fundo levemente diferenciado) para os
  2-3 serviços mais estratégicos (Implantodontia, Harmonização Orofacial, Facetas),
  sem tornar os demais menos importantes.
- Selo/badge discreto de avaliação Google (4.9 ★, com link) próximo ao CTA do hero.

### Overdrive — momento extraordinário (somente Hero)

- Efeito de fundo sofisticado e performático no hero (implementado na Etapa 11 com
  KokonutUI/React Bits — ex. flow field / partículas em canvas ou WebGL leve),
  estritamente atrás do conteúdo do hero, nunca em outras seções.
- Deve rodar a 60fps em desktop e mobile; degradar graciosamente (estático ou pausado)
  quando `prefers-reduced-motion: reduce` ou em dispositivos de baixa performance.
- Paleta do efeito restrita aos tokens já definidos (preto/dourado), reforçando a
  identidade em vez de introduzir cores novas.
