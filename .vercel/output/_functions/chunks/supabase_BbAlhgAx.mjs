import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dnshptxwwrungkyuiwhh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2hwdHh3d3J1bmdreXVpd2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODUzNjQsImV4cCI6MjA4MDY2MTM2NH0.-5UUMbHB0nUCH1_fan0X6FGqGnlzft101nfFrNoWI-g";
const supabase = createClient(supabaseUrl, supabaseKey);
async function getFurniture() {
  const { data, error } = await supabase.from("furniture").select("*").order("updated_at", { ascending: false });
  if (error) {
    console.error("Error fetching furniture:", error);
    return [];
  }
  return data || [];
}
async function getFurnitureByCategory(category) {
  const { data, error } = await supabase.from("furniture").select("*").eq("category", category).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching furniture by category:", error);
    return [];
  }
  return data || [];
}

export { getFurnitureByCategory as a, getFurniture as g };
