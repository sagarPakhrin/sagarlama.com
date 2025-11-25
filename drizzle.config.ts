// drizzle.config.ts

import type { Config } from "drizzle-kit";
import { join } from "path";

const drizzleConfig: Config = {
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: join(process.cwd(), "src", "db", "bookmarks.db"),
  },
};

export default drizzleConfig;
