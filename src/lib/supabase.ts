import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Furniture {
  id: string;
  name_en: string;
  name_fr?: string;
  name_nl: string;
  category: string;
  categories?: string[];
  image_url: string;
  images?: string[];
  pdf_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ClosingDate {
  id: string;
  year: number;
  period_start: string;
  period_end: string;
  description_en?: string;
  description_fr?: string;
  description_nl?: string;
  created_at: string;
  updated_at: string;
}

export async function getFurniture(): Promise<Furniture[]> {
  const { data, error } = await supabase
    .from('furniture')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching furniture:', error);
    return [];
  }

  return data || [];
}

export async function getClosingDates(year?: number): Promise<ClosingDate[]> {
  let query = supabase
    .from('closing_dates')
    .select('*')
    .order('period_start', { ascending: true });

  if (year) {
    query = query.eq('year', year);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching closing dates:', error);
    return [];
  }

  return data || [];
}
export async function getFurnitureByCategory(category: string): Promise<Furniture[]> {
  const { data, error } = await supabase
    .from('furniture')
    .select('*')
    .eq('category', category) // Filter op de categorie die uit de URL komt
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching furniture by category:', error);
    return [];
  }

  return data || [];
}
