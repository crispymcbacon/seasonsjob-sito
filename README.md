# seasonsjob-sito

> Nota: questo README originale conterrà le istruzioni di configurazione del progetto sotto.

## Project setup

### Stack

- **Astro** — static-first site framework
- **TypeScript (strict)** + Astro strict tsconfig
- **Tailwind CSS 4** (via the official Vite plugin), theme tokens in `src/styles/global.css`
- **Self-hosted fonts** — Merriweather (display) and Source Sans 3 (body/UI) via
  `@fontsource-variable/*`; no third-party font requests
- **Lucide** icons via `lucide-static`, inlined as SVG at build time (see
  `src/components/ui/icon-set.ts`)
- **Vue 3** — only for interactive islands (`client:*` directives); the current
  pages ship **no** client JavaScript
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
pnpm check          # astro check (types + template diagnostics)
pnpm lint           # ESLint (incl. .astro files)
pnpm format         # Prettier across the repo
pnpm format:check   # Prettier check only
```

### Structure

```text
src/
  components/
    layout/    Header, nav, footer
    ui/        Small reusable presentational pieces (Button, Icon, SectionHeader)
    sections/  Homepage sections (hero, solutions, why, field work, CTA)
               + HeroEcosystem.astro (static SVG/HTML ecosystem visual)
  config/      Site constants, navigation, product family data (solutions.ts)
  layouts/     Base layout (head/SEO/skip link, `head` slot for per-page tags)
  pages/       File-based routes
  styles/      Tailwind entry + global base styles and design tokens
  content/     Content collections (casi-reali)
public/        Static files served as-is (favicon, robots.txt)
```

Interactive islands belong in `src/components/interactive/` (created when the
first genuinely interactive component is needed).

### Conventions

- **Static-first**: pages are prerendered HTML. Vue is available for islands that
  explicitly set `client:*`; never hydrate globally.
- **SEO**: per-page `title`/`description` props flow through `BaseLayout`, which
  emits canonical URLs and OpenGraph tags. Sitemap + robots.txt are generated at build.
- **Content**: case studies live in `src/content/casi-reali/` via Astro Content
  Collections (schema in `src/content.config.ts`). The homepage credibility
  section reads this collection: publishing the first entry replaces the
  "in preparazione" state automatically. Partner logos are configured in
  `PARTNERS` (`src/config/solutions.ts`) and stay hidden while the list is empty.
- **Motion**: the homepage uses CSS only — a short load animation in the hero, an
  SVG path draw-in in the ecosystem visual and a scroll-driven entrance
  (`animation-timeline`) gated behind `@supports` and `prefers-reduced-motion`.
  Note for maintainers: keep `animation-timeline` in its own rule — the CSS
  minifier would otherwise fold it into the `animation` shorthand, which
  browsers reject.
- **Homepage only**: product pages, Chi siamo and Casi reali are still
  placeholders; the homepage is the first real implementation.
- No analytics, no backend, no CMS — to be evaluated in later phases.
- GSAP / Three.js / TresJS are intentionally not installed; add them only when
  a feature actually requires them.

### Deployment

`pnpm build` outputs a fully static `dist/` directory, ready to be served by
Nginx or Caddy. No server-side runtime is required.
