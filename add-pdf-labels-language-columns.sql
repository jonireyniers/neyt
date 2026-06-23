-- Rename existing pdf_labels to pdf_labels_nl (Dutch)
ALTER TABLE furniture RENAME COLUMN pdf_labels TO pdf_labels_nl;

-- Add English and French PDF labels
ALTER TABLE furniture ADD COLUMN IF NOT EXISTS pdf_labels_en TEXT[] DEFAULT '{}';
ALTER TABLE furniture ADD COLUMN IF NOT EXISTS pdf_labels_fr TEXT[] DEFAULT '{}';

COMMENT ON COLUMN furniture.pdf_labels_nl IS 'Dutch display labels for each PDF (parallel to pdf_urls)';
COMMENT ON COLUMN furniture.pdf_labels_en IS 'English display labels for each PDF (parallel to pdf_urls)';
COMMENT ON COLUMN furniture.pdf_labels_fr IS 'French display labels for each PDF (parallel to pdf_urls)';
