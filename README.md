# Portfólio — Leonardo (Software & Data Engineer)

Portfólio pessoal com foco em estudos de caso técnicos: arquitetura, stack,
decisões de engenharia e métricas de impacto de cada projeto.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion (animações e transições do modal)
- Lucide React (ícones)

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Adicionando um novo projeto

Edite [`src/data/projects.data.ts`](src/data/projects.data.ts) e adicione um
novo objeto seguindo a interface `Project` (definida em
[`src/types/project.ts`](src/types/project.ts)). Nenhum outro arquivo precisa
ser tocado — grid, filtros, busca e modal de detalhe são gerados
automaticamente a partir dessa lista.

Coloque as imagens em `public/images/projects/<slug-do-projeto>/` e referencie
o caminho (`/images/projects/<slug>/arquivo.png`) no campo `screenshots`. Caso
uma imagem não exista ainda, a interface mostra um placeholder acessível no
lugar — não é necessário ter todos os prints prontos para publicar o projeto.

## Editando habilidades

A matriz de skills é alimentada por
[`src/data/skills.data.ts`](src/data/skills.data.ts).
