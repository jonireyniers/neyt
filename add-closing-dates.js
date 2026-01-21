import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dnshptxwwrungkyuiwhh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2hwdHh3d3J1bmdreXVpd2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODUzNjQsImV4cCI6MjA4MDY2MTM2NH0.-5UUMbHB0nUCH1_fan0X6FGqGnlzft101nfFrNoWI-g";

const supabase = createClient(supabaseUrl, supabaseKey);

const closingDates2026 = [
  { period_start: '2026-04-06', period_end: '2026-04-06', description_nl: 'Paasmaandag' },
  { period_start: '2026-05-01', period_end: '2026-05-01', description_nl: 'Dag van de Arbeid' },
  { period_start: '2026-05-14', period_end: '2026-05-15', description_nl: 'O.H. Hemelvaart weekend' },
  { period_start: '2026-05-25', period_end: '2026-05-25', description_nl: 'Pinkstermaandag' },
  { period_start: '2026-07-13', period_end: '2026-07-31', description_nl: 'Zomervakantie' },
  { period_start: '2026-08-15', period_end: '2026-08-21', description_nl: 'O.L.V. Hemelvaart week' },
  { period_start: '2026-11-11', period_end: '2026-11-11', description_nl: 'Wapenstilstand' },
  { period_start: '2026-12-24', period_end: '2026-12-31', description_nl: 'Kerstvakantie' },
];

async function addClosingDates() {
  console.log('Adding closing dates for 2026...');
  
  for (const date of closingDates2026) {
    const { data, error } = await supabase
      .from('closing_dates')
      .insert([
        {
          year: 2026,
          period_start: date.period_start,
          period_end: date.period_end,
          description_nl: date.description_nl,
          description_en: date.description_nl, // You can translate these later
          description_fr: date.description_nl,
        }
      ]);
    
    if (error) {
      console.error('Error adding date:', date, error);
    } else {
      console.log('✓ Added:', date.description_nl);
    }
  }
  
  console.log('Done!');
}

addClosingDates();
