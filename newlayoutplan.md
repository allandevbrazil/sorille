# Plano de Ação — Novo Layout/Design Sorille (Centro Odontológico)

Objetivo: redesenhar a landing page da Sorille preservando identidade visual e assets,
eliminar todo vestígio de WordPress/Elementor/Drupal do HTML/CSS, documentar design e
crítica de UX com a skill **Impeccable**, e por fim migrar o projeto para
**Vite + React + TypeScript** com componentes KokonutUI/React Bits (flow field só no
hero) e navbar "morphic", sem alterar textos, seções ou a responsividade existente.

Ordem definida por custo-benefício de tokens: primeiro o que é barato e desbloqueia
tudo (limpeza + git), depois documentação/análise (baixo custo, alto valor de contexto),
depois mudanças visuais incrementais (do menor para o maior impacto), e só por último a
migração de framework (a etapa mais cara e arriscada), validando a cada etapa antes de
avançar.

---

## Etapa 1 — Fundação (baixo custo, alto valor)
1.1. Iniciar repositório git na raiz do projeto.
1.2. Criar `.gitignore` (incluir `plan.md`, `node_modules/`, `dist/`, backups, etc.).
1.3. Fazer commit inicial do estado atual (checkpoint "antes de tudo").
1.4. Limpar `index.html`/CSS: remover meta tags, comentários, classes e referências a
     WordPress, Elementor, Drupal, plugins (cookie-law-info, wp-i18n, elementor-pro
     etc.). Consolidar arquivos soltos (`*-js-before.html`, `*-js-extra.html`) no HTML
     principal ou remover se obsoletos.
1.5. Renomear pastas/arquivos com hashes opacos (`core/modules/7e4609f00f/...`) para nomes
     legíveis (ex.: `assets/vendor/...`) somente onde for seguro sem quebrar referências.
1.6. Validar visualmente que a página ainda renderiza igual após a limpeza.

## Etapa 2 — Skill Impeccable + Documentação de Design
2.1. Instalar a skill: `npx skills add https://github.com/pbakaus/impeccable --skill impeccable`.
2.2. Rodar `impeccable init` para a skill entender o contexto da landing page.
2.3. Rodar `impeccable` para gerar `design.md` na raiz documentando: paleta de cores,
     tipografia, identidade visual, layout/seções, componentes e padrões usados.

## Etapa 3 — Crítica de UX (somente análise, sem alterar nada)
3.1. Rodar `impeccable critique` avaliando hierarquia visual, clareza, espaçamento,
     tipografia, composição, CTAs e experiência do usuário.
3.2. Consolidar um checklist priorizado (mais → menos importante) em `plan.md` na raiz.
3.3. Confirmar que `plan.md` está no `.gitignore` (não versionar).

## Etapa 4 — Composição Visual (Shape)
4.1. Rodar `impeccable shape` para propor alternativas de composição de alta conversão.
4.2. Analisar as alternativas e aplicar a melhor opção para o contexto (clínica
     odontológica), preservando identidade e conteúdo.

## Etapa 5 — Tipografia (Typeset)
5.1. Rodar `impeccable typeset` para aprimorar hierarquia, proporções, legibilidade e
     ritmo tipográfico, preservando as fontes definidas em `design.md` e sem alterar a
     estrutura da página.

## Etapa 6 — Microinterações (Animate)
6.1. Rodar `impeccable animate` para animações sutis: entrada de conteúdo, hover,
     feedback de botões, transições — sem exageros que prejudiquem performance.

## Etapa 7 — Refinamento (Delight)
7.1. Rodar `impeccable delight` para pequenos refinamentos de precisão/sofisticação
     (gestalt, UI/UX, conversão), evitando algo chamativo ou infantil.

## Etapa 8 — Momento Extraordinário (Overdrive) — somente Hero
8.1. Rodar `impeccable overdrive` restrito à seção Hero e ao mockup principal: efeito
     visual sofisticado (referência: Slider Revolution, 3D/Three.js, partículas,
     transições), 60fps em qualquer device, fallback para `prefers-reduced-motion`.
8.2. Preservar identidade, copy e estrutura existentes; sem afetar outras seções.

## Etapa 9 — Checkpoint pré-migração
9.1. Commit/tag de backup do estado 100% estático finalizado (antes da migração para
     React), para permitir rollback fácil.

## Etapa 10 — Migração para Vite + React + TypeScript
10.1. Scaffold do projeto Vite + React + TS.
10.2. Configurar Tailwind (e shadcn/ui, se for a lib escolhida) corretamente.
10.3. Portar HTML/CSS/JS existente para componentes React preservando: design, textos,
      seções, responsividade e animações já existentes. Manter todos os assets atuais.
10.4. Validar que a landing page migrada funciona e é visualmente idêntica à versão
      estática antes de prosseguir.

## Etapa 11 — Efeitos avançados pós-migração (somente Hero)
11.1. Instalar KokonutUI e/ou React Bits.
11.2. Aplicar um efeito de destaque (ex.: flow field original ou equivalente) **apenas**
      como background da seção Hero, mantendo todo o conteúdo do hero por cima e sem
      aplicar o efeito em nenhuma outra seção.

## Etapa 12 — Navbar Morphic
12.1. Integrar o componente "morphic navbar", preservando logo, links, CTA,
      comportamento fixo, versão mobile e animações do componente.
12.2. Adaptar apenas as cores para a identidade visual conforme `design.md`.

## Etapa 13 — QA Final
13.1. Checar responsividade (mobile/tablet/desktop), 60fps das animações, fallback de
      `prefers-reduced-motion`, e paridade de conteúdo/seções/textos com o original.

---

## Notas de execução
- Nenhuma etapa altera textos, remove seções ou muda assets — apenas visual/estrutura
  de código e efeitos.
- Cada etapa é um checkpoint git independente para permitir rollback.
- `plan.md` (checklist de crítica) fica fora do controle de versão por definição do
  usuário.
