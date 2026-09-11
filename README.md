# seasonsjob-sito

> Nota: questo README originale conterrà le istruzioni di configurazione del progetto sotto.

## Project setup

### Stack

- **Astro 5** — static-first site framework
- **TypeScript (strict)** + Astro strict tsconfig
- **Tailwind CSS 4** (via the official Vite plugin)
- **Vue 3** — only for interactive islands (`client:*` directives)
- **pnpm** as package manager
- **@astrojs/sitemap** — sitemap generation at build time

### Prerequisites

- Node.js 18.17.1 or newer (Node 20+ recommended)
- pnpm 8 or newer

### Commands

```bash
pnpm install        # install dependencies
pnpm dev            # start dev server at localhost:4321
pnpm build          # production build to ./dist/
pnpm preview        # preview the production build locally
pnpm lint           # ESLint (incl. .astro files)
pnpm format         # Prettier across the repo
pnpm format:check   # Prettier check only
```

### Structure

```text
src/
  components/
    layout/    Header, nav, footer
    ui/        Small reusable presentational pieces
    sections/  Page sections (future home/solution sections)
    interactive/  Vue islands (client-side interactivity only)
  layouts/     Base layout (head/SEO/skip link)
  pages/       File-based routes
  styles/      Tailwind entry + global base styles
  content/     Content collections (casi-reali)
public/        Static files served as-is (favicon, robots.txt)
```

### Conventions

- **Static-first**: pages are prerendered HTML. Vue is available for islands that
  explicitly set `client:*`; never hydrate globally.
- **SEO**: per-page `title`/`description` props flow through `BaseLayout`, which
  emits canonical URLs and OpenGraph tags. Sitemap + robots.txt are generated at build.
- **Content**: case studies live in `src/content/casi-reali/` via Astro Content
  Collections (schema in `src/content.config.ts`).
- No analytics, no backend, no CMS — to be evaluated in later phases.
- GSAP / Three.js / TresJS are intentionally not installed; add them only when
  a feature actually requires them.

### Deployment

`pnpm build` outputs a fully static `dist/` directory, ready to be served by
Nginx or Caddy. No server-side runtime is required.
