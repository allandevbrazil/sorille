# 🦷 Sorille - Clínica Odontológica

> Landing page moderna e responsiva para a **Clínica Odontológica Sorille** 🦷✨

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.185.1-000000?style=for-the-badge&logo=three.js&logoColor=white)

---

## 🌐 Demo Online

🔗 **[Acesse a Landing Page no GitHub Pages](https://allandevbrazil.github.io/sorille/)**

---

## 📋 Sobre o Projeto

Esta é uma **landing page completa** para a **Clínica Odontológica Sorille**, desenvolvida com tecnologias modernas para oferecer uma experiência de usuário fluida, acessível e visualmente atraente. 🎨

### ✨ Funcionalidades Principais

- 🏠 **Hero Section** com vídeo de fundo imersivo
- 👨‍⚕️ **Seção de Especialistas** com cards interativos
- 🦷 **Serviços Odontológicos** organizados por categorias
- 👥 **Equipe** com fotos e especialidades
- 💬 **Depoimentos** de pacientes reais
- ❓ **FAQ** com accordion animado
- 📱 **WhatsApp Flutuante** para contato rápido
- 🎭 **Animações suaves** com Framer Motion
- 🌌 **Efeitos 3D** com React Three Fiber
- ♿ **Totalmente acessível** (WCAG 2.1)

---

## 🏗️ Arquitetura e Estrutura de Pastas

```
src/
├── 📁 components/          # Componentes React reutilizáveis
│   ├── 📁 ui/              # Componentes base (Button, Card, etc.) - shadcn/ui
│   ├── 📁 kokonutui/       # Componentes customizados da Kokonut UI
│   ├── 📁 three/           # Componentes Three.js / React Three Fiber
│   ├── About.tsx           # Seção "Sobre a Clínica"
│   ├── Faq.tsx             # Perguntas Frequentes
│   ├── FloatingWhatsApp.tsx # Botão flutuante do WhatsApp
│   ├── Footer.tsx          # Rodapé da página
│   ├── Hero.tsx            # Seção principal (Hero)
│   ├── Navbar.tsx          # Barra de navegação
│   ├── Reveal.tsx          # Animação de revelação ao scroll
│   ├── Services.tsx        # Serviços odontológicos
│   ├── Specialists.tsx     # Cards dos especialistas
│   ├── Team.tsx            # Equipe da clínica
│   ├── Testimonials.tsx    # Depoimentos de pacientes
│   └── WhatsAppButton.tsx  # Botão de WhatsApp
│
├── 📁 data/
│   └── content.ts          # 📝 Dados centralizados (textos, imagens, configs)
│
├── 📁 hooks/
│   ├── usePrefersReducedMotion.ts  # 🎯 Respeita preferência de movimento reduzido
│   └── useReveal.ts                # 🔍 Hook para animações on-scroll
│
├── 📁 lib/
│   └── utils.ts            # 🛠️ Utilitários (cn, formatação, etc.)
│
├── 📁 assets/              # 🖼️ Imagens, vídeos e recursos estáticos
│
├── App.tsx                 # 🎯 Componente raiz
├── main.tsx                # 🚀 Ponto de entrada
└── index.css               # 🎨 Estilos globais + Tailwind
```

### 🎯 Decisões Arquiteturais

| Decisão | Justificativa |
|---------|---------------|
| **React 19 + TypeScript** | Tipagem forte, performance e DX moderna |
| **Vite** | Build ultra-rápido, HMR instantâneo |
| **TailwindCSS v4** | Utility-first, zero config, tree-shaking nativo |
| **shadcn/ui** | Componentes acessíveis, customizáveis, copy-paste |
| **Framer Motion** | Animações declarativas, performáticas |
| **React Three Fiber** | 3D declarativo no React, ecossistema rico |
| **Dados centralizados (data/content.ts)** | Fácil manutenção, separação de concerns, i18n-ready |
| **Hooks customizados** | Lógica reutilizável, testável, separada da UI |
| **Componentes atômicos** | Reutilização, consistência, manutenibilidade |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** 18+ 📦
- **npm** 9+ (ou yarn/pnpm)

### Passo a Passo

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/allandevbrazil/sorille.git

# 2️⃣ Entre no diretório
cd sorille/app

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Rode em modo desenvolvimento 🔥
npm run dev
```

> A aplicação estará disponível em **http://localhost:5173** 🌐

### Outros Comandos Úteis

```bash
# 🏗️ Build de produção
npm run build

# 👀 Preview do build de produção
npm run preview

# 🔍 Lint com Oxlint
npm run lint
```

---

## 📦 Deploy no GitHub Pages

O deploy é automático via **GitHub Actions** a cada push na branch `main`/`master`.

### Configuração Manual (se necessário)

1. Vá em **Settings** → **Pages**
2. Source: **GitHub Actions**
3. O workflow fará o build e deploy automático ✨

---

## 🛠️ Stack Tecnológica

| Categoria | Tecnologias |
|-----------|-------------|
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | TailwindCSS v4, tw-animate-css |
| **UI Components** | shadcn/ui, Radix UI, class-variance-authority |
| **Animações** | Framer Motion (motion) |
| **3D/Graphics** | Three.js, React Three Fiber, React Three Drei, Postprocessing |
| **Ícones** | Lucide React |
| **Linting** | Oxlint |
| **Deploy** | GitHub Pages + GitHub Actions |

---

## 📱 Responsividade

✅ **Mobile First** - 320px+  
✅ **Tablet** - 768px+  
✅ **Desktop** - 1024px+  
✅ **Large Desktop** - 1440px+  

---

## ♿ Acessibilidade

- ✅ Semântica HTML5 correta
- ✅ ARIA labels e roles
- ✅ Navegação por teclado
- ✅ Contraste WCAG AA
- ✅ `prefers-reduced-motion` respeitado
- ✅ Alt text em todas as imagens
- ✅ Focus visible

---

## 🤝 Contribuindo

1. Faça um **fork** do projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um **Pull Request** 🚀

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">
  <h3>DESENVOLVIDO POR ALLAN SELEGUIM</h3>
  
  [![GitHub](https://img.shields.io/badge/GitHub-allandevbrazil-181717?style=for-the-badge&logo=github)](https://github.com/allandevbrazil)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Allan%20Seleguim-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/allanseleguim)
  
  ---
  
  ⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐
</div>

---

<div align="center">
  <sub>Feito com ❤️ e ☕ para a Clínica Sorille</sub>
</div>