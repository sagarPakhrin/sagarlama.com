import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  link: varchar("link").notNull(),
  category_id: serial("category_id")
    .notNull()
    .references(() => categories.id),
  description: text("description"),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export type Bookmark = typeof bookmarks.$inferSelect;
