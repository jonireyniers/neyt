-- Add featured_order column to furniture table
-- This allows manual control over which 6 items appear on the home page

ALTER TABLE furniture 
ADD COLUMN IF NOT EXISTS featured_order INTEGER;

-- Add constraint to only allow values 1-6 or NULL
ALTER TABLE furniture
ADD CONSTRAINT featured_order_range CHECK (featured_order IS NULL OR (featured_order >= 1 AND featured_order <= 6));

-- Add unique constraint so each position 1-6 can only be used once
CREATE UNIQUE INDEX IF NOT EXISTS furniture_featured_order_unique 
ON furniture (featured_order) 
WHERE featured_order IS NOT NULL;

-- Add comment
COMMENT ON COLUMN furniture.featured_order IS 
'Position on home page (1-6). NULL means not featured. Each position can only be used once.';
