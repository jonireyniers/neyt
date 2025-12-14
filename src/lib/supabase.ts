import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Furniture = {
  id: number;
  name_nl: string;
  name_fr?: string;
  name_en?: string;
  category: string;
  categories: string[]; // Niet meer optional
  image_url: string;
  images: string[]; // Niet meer optional
  pdf_url?: string;
  created_at: string;
};

export async function getFurniture() {
  const { data, error } = await supabase
    .from('furniture')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching furniture:', error);
    return [];
  }

  return data as Furniture[];
}

export async function getFurnitureByCategory(category: string) {
  const { data, error } = await supabase
    .from('furniture')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching furniture:', error);
    return [];
  }

  // Filter in JavaScript - werkt perfect met JSONB
  const filtered = data.filter(item => 
    item.categories && item.categories.includes(category)
  );

  return filtered as Furniture[];
}