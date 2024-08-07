//  src/lib/db/index.ts

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DB_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

declare module global {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

let postgresSqlClient;

if (process.env.NODE_ENV !== "production") {
  if (!global.postgresSqlClient) {
    global.postgresSqlClient = postgres(connectionString);
  }
  postgresSqlClient = global.postgresSqlClient;
} else {
  postgresSqlClient = postgres(connectionString);
}

export const db = drizzle(postgresSqlClient, {
  schema,
});
