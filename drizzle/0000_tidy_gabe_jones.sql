CREATE TABLE IF NOT EXISTS "bookmarks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"link" varchar NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
