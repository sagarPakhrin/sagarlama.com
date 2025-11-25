//  src/db/index.ts

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { join } from "path";
import * as schema from "./schema";

// SQLite database file path
const dbPath = join(process.cwd(), "src", "db", "bookmarks.db");

// Create SQLite database connection
const sqlite = new Database(dbPath);

// Enable foreign keys
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, {
  schema,
});
