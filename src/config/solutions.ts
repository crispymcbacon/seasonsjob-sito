/**
 * The SeasonsJob product family, as presented on the homepage.
 *
 * The four products belong to the same family but are not presented as a single
 * integrated platform: they are independent tools that can be adopted separately.
 */
import type { IconName } from '@/components/ui/icon-set';

export interface Solution {
  slug: 'lavoro' | 'comande' | 'procuro' | 'wine';
  /** Product name, used as written by the company. */
  name: string;
  /** Operational area the product covers (people, operations, purchasing, inventory). */
  area: string;
  /** One-line purpose, homepage level. */
  tagline: string;
  /** Short explanation of the problem addressed. */
  description: string;
  href: string;
  icon: IconName;
  /** Set only for products that are not generally available yet. */
  status?: 'in-sviluppo';
  /** Optional status note shown under the description. */
  statusNote?: string;
}

/** Public SeasonsJob product family, in ecosystem order. */
export const SOLUTIONS: Solution[] = [
  {
    slug: 'lavoro',
    name: 'Lavoro',
    area: 'Persone',
    tagline: 'Personale stagionale per l’hospitality',
    description:
      'La piattaforma che mette in contatto strutture ricettive e lavoratori per le stagioni: ricerca, candidature e selezione in un unico flusso.',
    href: '/soluzioni/lavoro/',
    icon: 'users',
  },
  {
    slug: 'comande',
    name: 'Comande',
    area: 'Operatività',
    tagline: 'Comande digitali tra reception, sala e cucina',
    description:
      'Gestione digitale di pasti e ordini: le informazioni passano tra i reparti senza fogli, telefonate e trascrizioni.',
    href: '/soluzioni/comande/',
    icon: 'receipt-text',
  },
  {
    slug: 'procuro',
    name: 'Procuro',
    area: 'Acquisti',
    tagline: 'Fornitori, listini e ordini sotto controllo',
    description:
      'Il flusso degli acquisti per la struttura: elenco fornitori, listini, ordini e ricezione della merce in un percorso ordinato.',
    href: '/soluzioni/procuro/',
    icon: 'clipboard-list',
    status: 'in-sviluppo',
    statusNote:
      'In sviluppo: lo stiamo costruendo insieme alle prime strutture.',
  },
  {
    slug: 'wine',
    name: 'Wine',
    area: 'Inventario',
    tagline: 'La cantina, sempre aggiornata',
    description:
      'Gestione digitale dell’inventario vini: giacenze, posizioni e movimenti registrati man mano che avvengono.',
    href: '/soluzioni/wine/',
    icon: 'wine',
  },
];

/**
 * Customer and partner logos for the homepage trust section.
 * Intentionally empty: only real, approved logos should be added here, and the
 * corresponding files placed in `public/`. The section renders the logo row
 * automatically once this list is populated.
 */
export interface PartnerLogo {
  name: string;
  /** Path relative to the site root, e.g. `/partner/example.svg`. */
  src: string;
}

export const PARTNERS: PartnerLogo[] = [];
