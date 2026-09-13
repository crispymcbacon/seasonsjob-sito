/**
 * Lucide icon set, inlined at build time.
 *
 * Only the icons actually used by the site are imported, so the SVGs are
 * bundled into the rendered HTML and no icon font or runtime JS is shipped.
 * Add new entries here when a component needs another icon.
 */
import arrowLeft from 'lucide-static/icons/arrow-left.svg?raw';
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import building2 from 'lucide-static/icons/building-2.svg?raw';
import image from 'lucide-static/icons/image.svg?raw';
import clipboardList from 'lucide-static/icons/clipboard-list.svg?raw';
import mail from 'lucide-static/icons/mail.svg?raw';
import menu from 'lucide-static/icons/menu.svg?raw';
import receiptText from 'lucide-static/icons/receipt-text.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import wine from 'lucide-static/icons/wine.svg?raw';
import x from 'lucide-static/icons/x.svg?raw';

export const ICONS = {
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  'building-2': building2,
  image,
  'clipboard-list': clipboardList,
  mail,
  menu,
  'receipt-text': receiptText,
  users,
  wine,
  x,
} as const;

export type IconName = keyof typeof ICONS;
