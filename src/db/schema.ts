import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const bookmarks = sqliteTable("bookmarks", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  link: text("link").notNull(),
  category_id: integer("category_id")
    .notNull()
    .references(() => categories.id),
  description: text("description"),
  created_at: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export type Bookmark = typeof bookmarks.$inferSelect;
