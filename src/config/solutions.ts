/**
 * The SeasonsJob product family, as presented on the homepage.
 *
 * The four products belong to the same family but are not presented as a single
 * integrated platform: they are independent tools that can be adopted separately.
 */
import type { IconName } from '@/components/ui/icon-set';

export interface Solution {
  /** Product name, used as written by the company. */
  name: string;
  /** Operational area the product covers (people, operations, purchasing, inventory). */
  area: string;
  /** One homepage-level sentence: the problem the product addresses. */
  summary: string;
  href: string;
  icon: IconName;
  /** Set only for products that are not generally available yet. */
  status?: 'in-sviluppo';
  /** Optional status note shown under the summary. */
  statusNote?: string;
}

export const SOLUTIONS: Solution[] = [
  {
    name: 'Lavoro',
    area: 'Persone',
    summary:
      'Mette in contatto le strutture ricettive con chi cerca lavoro stagionale in hotel e ristoranti.',
    href: '/soluzioni/lavoro/',
    icon: 'users',
  },
  {
    name: 'Comande',
    area: 'Operazioni',
    summary:
      'Gestisce le comande tra reception, sala e cucina: ogni ordine arriva al reparto giusto.',
    href: '/soluzioni/comande/',
    icon: 'receipt-text',
  },
  {
    name: 'Procuro',
    area: 'Acquisti',
    summary:
      'Segue il flusso degli acquisti — fornitori, listini, ordini e ricevimento merci — in un unico percorso.',
    href: '/soluzioni/procuro/',
    icon: 'clipboard-list',
    status: 'in-sviluppo',
    statusNote:
      'In sviluppo: lo stiamo costruendo insieme alle prime strutture.',
  },
  {
    name: 'Wine',
    area: 'Magazzino',
    summary:
      'Tiene traccia della cantina: giacenze, posizione delle bottiglie e movimenti di carico e scarico.',
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
