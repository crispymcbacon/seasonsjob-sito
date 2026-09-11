/**
 * Global site constants shared across pages, navigation and SEO metadata.
 * Values are placeholders; the final copy and branding will be defined later.
 */
export const SITE = {
  /** Canonical production origin (must match `site` in astro.config.ts). */
  url: 'https://seasonsjob.it',
  /** Base site name used in titles and OpenGraph metadata. */
  name: 'SeasonsJob',
  /** Fallback description if a page does not define one. */
  description: 'SeasonsJob — soluzioni digitali per il settore hospitality.',
  /** Default OpenGraph language-locale. */
  locale: 'it_IT',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation — structural placeholder, ordering to be finalized later. */
export const NAV_LINKS: NavLink[] = [
  { label: 'Soluzioni', href: '/soluzioni/' },
  { label: 'Casi reali', href: '/casi-reali/' },
  { label: 'Chi siamo', href: '/chi-siamo/' },
  { label: 'Contatti', href: '/contatti/' },
];
