import { Locale } from '../services/locale.service';

export type StickerVariant = 'feature' | 'logo';

export const STICKER_TEXTS: Record<Locale, Record<StickerVariant, { top: string; bottom: string }>> = {
  de: {
    logo: {
      top: '- Marc Odermatt - Frontend Entwickler -',
      bottom: 'Marc Odermatt - Frontend Entwickler',
    },
    feature: {
      top: 'Featured Projekt',
      bottom: 'Alle Details ansehen',
    },
  },
  en: {
    logo: {
      top: '- Marc Odermatt - Frontend Developer -',
      bottom: 'Marc Odermatt - Frontend Developer',
    },
    feature: {
      top: 'Featured Project',
      bottom: 'Check all details',
    },
  },
};
