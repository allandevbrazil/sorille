# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Atualmente HTML/CSS estático (export legado de WordPress/Elementor, em processo de
limpeza). Destino planejado: Vite + React + TypeScript + Tailwind (ver
[newlayoutplan.md](newlayoutplan.md), Etapa 10). _(inferido do pedido do usuário; não
houve interview por indisponibilidade do usuário nesta sessão)_

## Users

Pacientes/potenciais pacientes buscando tratamentos odontológicos e estéticos faciais na
região de Sorocaba-SP e Votorantim-SP, que chegam à landing page e decidem entrar em
contato via WhatsApp para agendar uma consulta. _(inferido do conteúdo existente: CTAs de
WhatsApp em toda a página, copy voltado a conversão de agendamento)_

## Product Purpose

Landing page institucional de conversão para a Sorille, clínica odontológica, cujo
sucesso é o visitante clicar em "Fale conosco" / WhatsApp para agendar uma consulta.

## Positioning

Clínica odontológica e de harmonização orofacial em Sorocaba-SP que combina tratamentos
odontológicos convencionais (endodontia, implantodontia, ortodontia, etc.) com estética
facial/dentária (faceta realista, harmonização orofacial, dentística estética) e
atendimento humanizado, sob responsabilidade técnica de uma cirurgiã-dentista com CRO
registrado.

## Operating Context

Página única (single landing page), sem CMS, servida como arquivo estático. Contato
primário é o WhatsApp Business (número fixo usado em todos os CTAs). Não há
carrinho/checkout, login ou área logada.

## Capabilities and Constraints

- Conteúdo, textos e nomes de serviços/profissionais **não podem ser alterados** durante
  o redesign (apenas HTML/CSS/estrutura de apresentação, conforme instrução do usuário).
- Todas as seções existentes devem ser preservadas (Hero, Sobre, Serviços, Especialistas/
  Equipe, FAQ, Rodapé/Contato).
- Assets visuais atuais (imagens, ícones, fontes Google Fonts locais: Playfair Display e
  Lato) devem ser mantidos.
- Responsividade e animações atuais devem ser preservadas como piso mínimo de qualidade
  ao longo de toda a evolução visual.
- Sem backend: toda interação de contato aponta para um link `https://api.whatsapp.com/send`.

## Brand Commitments

- Nome: **Sorille**.
- Tipografia observada no export atual: Playfair Display (títulos/serifada) e Lato
  (texto/sans-serif) — a confirmar/registrar em DESIGN.md.
- Tom de voz: acolhedor, humanizado, profissional ("atendimento humanizado", "sorriso
  bonito e saudável").
- CTA padrão: botão/link para WhatsApp com texto pré-preenchido "Olá, vim do website,
  desejo informações sobre atendimento.".

## Evidence on Hand

- Serviços listados em [index.html](index.html): Faceta Realista, Implantodontia,
  Odontopediatria, Endodontia, Cirurgia Ortognática, Periodontia, Ortodontia e Ortopedia
  Funcional, DTM, Dentística Estética, Cirurgias Odontológicas, Harmonização Orofacial,
  Clínico Geral, Prótese Dentária, Aparelho Invisível.
- Equipe: Dra. Bárbara Tózi Andrade (responsável técnica, CRO113439SP), Dra. Lia Biruel,
  Vânia Pureza.
- Atendimento em Sorocaba-SP e Votorantim-SP.
- Contato: WhatsApp `+55 15 99115-2320`.
- Nenhum depoimento/prova social real encontrado no HTML atual além de FAQ; não inventar
  depoimentos, números ou estudos de caso.

## Product Principles

1. Cada seção deve conduzir com clareza a uma ação: falar no WhatsApp.
2. Preservar confiança clínica (credenciais, nome da responsável técnica, tom sério) mesmo
   ao tornar o visual mais sofisticado/bonito.
3. Elegância discreta acima de efeitos chamativos — sofisticação sóbria condizente com
   saúde/estética, não "vendedor agressivo".
4. Performance e acessibilidade (incluindo `prefers-reduced-motion`) não são negociáveis
   ao adicionar efeitos visuais.
5. Nenhuma mudança de copy, seção ou asset sem aprovação explícita do usuário.

## Accessibility & Inclusion

Sem requisito específico confirmado pelo usuário até o momento; seguir boas práticas
padrão de acessibilidade web (contraste, foco visível, `prefers-reduced-motion`,
alt text em imagens) como piso mínimo.
