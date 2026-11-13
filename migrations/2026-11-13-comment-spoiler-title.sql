-- Existing databases only: apply once, after the spoiler flag migration.
ALTER TABLE wl_Comment ADD COLUMN spoiler_title TEXT NOT NULL DEFAULT '' CHECK (length(spoiler_title) <= 60);
