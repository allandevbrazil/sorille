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
