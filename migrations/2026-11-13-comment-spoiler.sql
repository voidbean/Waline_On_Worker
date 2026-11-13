-- Existing databases only: run once before deploying the updated Worker.
ALTER TABLE wl_Comment ADD COLUMN spoiler INTEGER NOT NULL DEFAULT 0 CHECK (spoiler IN (0, 1));
