export interface FurnitureItem {
  id: string;
  category: 'adult-bedrooms' | 'baby-bedrooms' | 'youth-bedrooms' | 'dining' | 'office';
  names: {
    en: string;
    fr: string;
    nl: string;
  };
  descriptions?: {
    en?: string;
    fr?: string;
    nl?: string;
  };
  images: string[];
  year: number;
  month: number;
}

export interface Category {
  en: string;
  fr: string;
  nl: string;
}

export type Locale = 'en' | 'fr' | 'nl';

export interface ClosingPeriod {
  year: number;
  periods: string[];
}