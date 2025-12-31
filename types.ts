
export type ViewState = 'home' | 'atlas' | 'collections' | 'oracle' | 'product';
export type Category = 'yuan' | 'he' | 'jing';

export interface ScentItem {
  id: string;
  category: Category;
  name: string;
  location?: string;
  x?: number;
  y?: number;
  visited: boolean;
  accent: string;
  hero: string;
  herb: string;
  herbEn: string;
  shortDesc: string;
  narrative: string;
  benefits: string[];
  isPopular?: boolean;
  gcmsReport?: string; // GC/MS report preview image
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
