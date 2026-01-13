export type CategoryKey = 'adult-bedrooms' | 'baby-bedrooms' | 'youth-bedrooms' | 'dining' | 'office';

export interface FurnitureItem {
  id: string;
  category: CategoryKey;
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

export interface FurnitureData {
  furniture: FurnitureItem[];
  categories: Record<CategoryKey, Category>;
}