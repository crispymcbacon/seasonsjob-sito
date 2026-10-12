/**
 * The SeasonsJob product family, as presented on the homepage.
 *
 * The four products belong to the same family but are not presented as a single
 * integrated platform: they are independent tools that can be adopted separately.
 */
import type { IconName } from '@/components/ui/icon-set';
import { LAVORO_APP } from '@/config/site';

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
  /** Longer intro used on the solutions overview and product pages. */
  intro: string;
  /** Three short, concrete benefits. */
  benefits: readonly string[];
  href: string;
  /** Live product origin, when the tool is already reachable online. */
  appHref?: string;
  icon: IconName;
  /** Set only for products that are not generally available yet. */
  status?: 'in-sviluppo';
  /** Optional status note shown under the description. */
  statusNote?: string;
}

/** Public SeasonsJob product family, in ecosystem order. */
export const SOLUTIONS: Solution[] = [
  {
    slug: 'comande',
    name: 'Comande',
    area: 'Operatività',
    tagline: 'Comande digitali tra reception, sala e cucina',
    description:
      'Gestione digitale di pasti e ordini: le informazioni passano tra i reparti senza fogli, telefonate e trascrizioni.',
    intro:
      'Reception, sala e cucina lavorano sulla stessa comanda, aggiornata appena l’ospite ordina.',
    benefits: [
      'Comande leggibili da ogni reparto',
      'Modifiche e note sempre tracciate',
      'Meno passaggi manuali durante il servizio',
    ],
    href: '/soluzioni/comande/',
    icon: 'receipt-text',
  },
  {
    slug: 'wine',
    name: 'Wine',
    area: 'Inventario',
    tagline: 'La cantina, sempre aggiornata',
    description:
      'Gestione digitale dell’inventario vini: giacenze, posizioni e movimenti registrati man mano che avvengono.',
    intro:
      'Dalle giacenze alla posizione di ogni bottiglia, senza fogli da rincorrere.',
    benefits: [
      'Etichette e annate facili da trovare',
      'Movimenti registrati al momento',
      'Scorte e riordini sotto controllo',
    ],
    href: '/soluzioni/wine/',
    icon: 'wine',
  },
  {
    slug: 'lavoro',
    name: 'Lavoro',
    area: 'Persone',
    tagline: 'Personale stagionale per il settore alberghiero',
    description:
      'La piattaforma che mette in contatto strutture ricettive e lavoratori per le stagioni: ricerca, candidature e selezione in un unico flusso.',
    intro:
      'Dalla ricerca alla selezione, per mettere insieme la squadra della prossima stagione.',
    benefits: [
      'Profili pensati per il lavoro stagionale',
      'Candidature raccolte in un unico spazio',
      'Contatto diretto con i candidati',
    ],
    href: '/soluzioni/lavoro/',
    appHref: LAVORO_APP.url,
    icon: 'users',
  },
  {
    slug: 'procuro',
    name: 'Procuro',
    area: 'Acquisti',
    tagline: 'Fornitori, listini e ordini sotto controllo',
    description:
      'Il flusso degli acquisti per la struttura: elenco fornitori, listini, ordini e ricezione della merce in un percorso ordinato.',
    intro:
      'Un flusso ordinato per preparare gli acquisti, confrontare i fornitori e sapere cosa deve ancora arrivare.',
    benefits: [
      'Listini e fornitori organizzati',
      'Ordini condivisi tra i reparti',
      'Ricezione e difformità registrate',
    ],
    href: '/soluzioni/procuro/',
    icon: 'clipboard-list',
    status: 'in-sviluppo',
    statusNote:
      'In sviluppo: lo stiamo costruendo insieme alle prime strutture.',
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
