# 🦷 Sorille - Landing Page da Clínica Odontológica

![Sorille](public/images/logos-cos-alta-1.png)

> **Transforme seu sorriso com a excelência Sorille** ✨

Uma landing page moderna, elegante e responsiva para a **Sorille - Clínica Odontológica em Sorocaba**, construída com as melhores tecnologias do ecossistema React.

---

## 🌟 Sobre o Projeto

Esta é a landing page oficial da **Sorille**, uma clínica odontológica de excelência localizada em Sorocaba/SP. O projeto foi desenvolvido com foco em:

- 🎨 **Design Premium** - Visual sofisticado com paleta de cores elegante (ink, champagne, paper, accent-gold)
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ⚡ **Performance Otimizada** - Build otimizado com Vite, lazy loading e code splitting
- ♿ **Acessibilidade** - Semântica HTML5, ARIA labels, contraste adequado
- 🎭 **Animações Suaves** - Transições elegantes com Framer Motion e Intersection Observer

---

## 🏗️ Arquitetura e Estrutura de Pastas

```
sorille/
├── 📁 public/                    # Assets estáticos servidos diretamente
│   ├── 🎬 hero.mp4              # Vídeo de background do hero
│   ├── 🖼️ images/               # Logos e imagens otimizadas
│   ├── 🎨 *.jpg, *.png          # Texturas e backgrounds
│   └── 📄 icons.svg             # Sprite de ícones SVG
│
├── 📁 src/
│   ├── 📁 components/           # Componentes React reutilizáveis
│   │   ├── 🧭 Navbar.tsx        # Navegação responsiva com menu mobile
│   │   ├── 🦸 Hero.tsx          # Seção principal com vídeo background
│   │   ├── 📖 About.tsx         # Seção "Sobre nós"
│   │   ├── 👩‍⚕️ Specialists.tsx   # Cards das especialistas
│   │   ├── 👥 Team.tsx          # Grid da equipe
│   │   ├── 💬 WhatsAppButton.tsx # Botão CTA para WhatsApp
│   │   ├── ✨ Reveal.tsx        # Animação de entrada (IntersectionObserver)
│   │   ├── 🦶 Footer.tsx        # Rodapé com links e redes sociais
│   │   └── 🎨 kokonutui/        # Componentes UI customizados (MorphicNavbar)
│   │
│   ├── 📁 data/
│   │   └── 📄 content.ts        # Dados centralizados (team, especialistas, nav links, etc.)
│   │
│   ├── 📁 hooks/
│   │   └── 🎣 useIntersectionObserver.ts # Hook customizado para animações
│   │
│   ├── 📁 lib/
│   │   └── 🛠️ utils.ts          # Utilitários (cn para classnames, etc.)
│   │
│   ├── 🎨 index.css             # Estilos globais + Tailwind + variáveis CSS
│   ├── ⚛️ App.tsx               # Componente raiz
│   └── 🚀 main.tsx              # Entry point da aplicação
│
├── ⚙️ Configurações
│   ├── 📦 package.json          # Dependências e scripts
│   ├── 🔧 vite.config.ts        # Configuração do Vite (base: '/sorille/')
│   ├── 📝 tsconfig.json         # TypeScript config
│   ├── 🎨 tailwind.config.js    # Tailwind CSS customizado
│   ├── 📏 .oxlintrc.json        # Oxlint config
│   └── 🧩 components.json       # shadcn/ui config
│
└── 📄 README.md                 # Este arquivo
```

### 🎯 Decisões Arquiteturais

| Decisão | Justificativa |
|---------|---------------|
| **React 19 + TypeScript** | Tipagem forte, performance moderna, ecossistema maduro |
| **Vite** | Build ultra-rápido, HMR instantâneo, otimizações nativas |
| **Tailwind CSS** | Utility-first, design system consistente, bundle otimizado |
| **Framer Motion** | Animações declarativas, performáticas, acessíveis |
| **Dados centralizados (`data/content.ts`)** | Single source of truth, fácil manutenção, separação de concerns |
| **Componentes pequenos e focados** | Reutilizabilidade, testabilidade, legibilidade |
| **CSS Variables para theming** | Flexibilidade, suporte a dark mode futuro, manutenção fácil |
| **IntersectionObserver para animações** | Performance nativa, sem dependências pesadas |
| **Base URL dinâmica (`import.meta.env.BASE_URL`)** | Funciona tanto local quanto no GitHub Pages |

---

## 🚀 Como Baixar e Rodar Localmente

### Pré-requisitos

- **Node.js 18+** (recomendado 20+)
- **npm** ou **pnpm** ou **yarn**

### Passo a Passo

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/allandevbrazil/sorille.git

# 2️⃣ Entre na pasta do projeto
cd sorille/app

# 3️⃣ Instale as dependências
npm install
# ou
pnpm install
# ou
yarn install

# 4️⃣ Rode o servidor de desenvolvimento
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

### 🌐 Acesse Localmente

Abra seu navegador em: **http://localhost:5173**

> 💡 **Dica:** O Vite faz HMR (Hot Module Replacement) - suas mudanças aparecem instantaneamente sem recarregar a página!

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção otimizado (TypeScript + Vite) |
| `npm run preview` | Preview local do build de produção |
| `npm run lint` | Executa Oxlint para verificar código |
| `npm run type-check` | Verifica tipos TypeScript sem emitir arquivos |

---

## 🌍 Deploy no GitHub Pages

O projeto está configurado para deploy automático no **GitHub Pages** via GitHub Actions.

### 🔗 URL de Produção

> **🌐 https://allandevbrazil.github.io/sorille/**

### ⚙️ Como Funciona

1. **Push na branch `master`** → Dispara workflow automaticamente
2. **GitHub Actions** → Instala dependências, roda build, faz deploy
3. **GitHub Pages** → Serve os arquivos estáticos da pasta `dist/`

### 📋 Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

---

## 🛠️ Stack Tecnológica

<div align="center">

| Categoria | Tecnologias |
|-----------|-------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white) |
| **Build** | ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white) ![CSS Variables](https://img.shields.io/badge/CSS_Variables-Native-1572B6?logo=css3&logoColor=white) |
| **Animações** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white) |
| **Ícones** | ![Lucide React](https://img.shields.io/badge/Lucide_React-Latest-F56565?logo=lucide&logoColor=white) |
| **Linting** | ![Oxlint](https://img.shields.io/badge/Oxlint-Latest-000000?logo=oxlint&logoColor=white) |
| **Deploy** | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deploy-222222?logo=githubpages&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=githubactions&logoColor=white) |

</div>

---

## 🎨 Paleta de Cores (Design System)

```css
:root {
  --ink: #0A0A0A;           /* Preto profundo - backgrounds principais */
  --ink-charcoal: #141414;  /* Cinza escuro - cards, overlays */
  --paper: #F5F0E8;         /* Branco quente - texto principal */
  --champagne: #D4C4A8;     /* Dourado suave - destaques, acentos */
  --accent-gold: #C9A84C;   /* Ouro - CTAs, links, elementos de marca */
}
```

---

## 📱 Seções da Landing Page

| Seção | ID | Descrição |
|-------|-----|-----------|
| **Hero** | `#home` | Vídeo background, headline, CTA WhatsApp, rating Google |
| **Sobre** | `#sobre` | Apresentação da clínica, background texturizado |
| **Especialistas** | `#especialistas` | Cards das doutoras com bio e CRO |
| **Equipe** | `#equipe` | Grid com fotos e nomes da equipe |
| **Footer** | - | Contato, redes sociais, links rápidos, copyright |

---

## ♿ Acessibilidade

- ✅ Semântica HTML5 adequada (`header`, `main`, `section`, `footer`, `nav`)
- ✅ Navegação por teclado funcional
- ✅ ARIA labels em elementos interativos
- ✅ Contraste de cores WCAG AA
- ✅ `alt` text em todas as imagens
- ✅ `prefers-reduced-motion` respeitado
- ✅ Focus visible customizado

---

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- 📦 **Bundle Size**: ~216 KB JS (gzipped: ~68 KB) + ~42 KB CSS (gzipped: ~8 KB)
- 🖼️ **Imagens**: Otimizadas, lazy loading nativo
- 🎬 **Vídeo**: Preload metadata, autoplay muted loop
- 🔄 **Code Splitting**: Automático via Vite/Rollup

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch: `git checkout -b feature/minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: minha nova feature'`
4. Push na branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é privado e proprietário da **Sorille Clínica Odontológica**.

---

## 👨‍💻 Desenvolvido por

<div align="center">

### **ALLAN SELEGUIM** 🚀

[![GitHub](https://img.shields.io/badge/GitHub-allandevbrazil-181717?logo=github&logoColor=white)](https://github.com/allandevbrazil)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Allan%20Seleguim-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/allanseleguim)

---

**Feito com ❤️, ☕ e muito código limpo**

*Última atualização: Agosto 2026*

</div>