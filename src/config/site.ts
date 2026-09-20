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
  description:
    'SeasonsJob progetta strumenti digitali per il settore alberghiero: personale stagionale, comande, acquisti e cantina.',
  /** Default OpenGraph language-locale. */
  locale: 'it_IT',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation. */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Soluzioni', href: '/soluzioni/' },
  { label: 'Casi reali', href: '/casi-reali/' },
  { label: 'Chi siamo', href: '/chi-siamo/' },
];

/**
 * Header call to action. Contact is kept out of the nav list so it reads as the
 * primary action rather than as a fourth destination.
 */
export const CONTACT_LINK: NavLink = { label: 'Contatti', href: '/contatti/' };

/** Live Lavoro application, now on its own subdomain. */
export const LAVORO_APP = {
  url: 'https://lavoro.seasonsjob.it',
  label: 'Accedi a Lavoro',
} as const;
