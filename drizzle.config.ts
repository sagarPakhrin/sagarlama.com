// drizzle.config.ts

import type { Config } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const drizzleConfig: Config = {
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DB_URL || "",
  },
};

export default drizzleConfig;
