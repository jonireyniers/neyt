ALTER TABLE furniture ADD COLUMN IF NOT EXISTS pdf_urls TEXT[] DEFAULT '{}';
COMMENT ON COLUMN furniture.pdf_urls IS 'Array of PDF URLs for technical drawings';
