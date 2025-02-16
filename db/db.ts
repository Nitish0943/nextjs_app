import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { chatTable } from "./schema";

// For Vercel serverless deployment
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

// Different configuration for production vs development
const client = postgres(connectionString, {
  prepare: false,
  // Keep the connection alive in production
  idle_timeout: process.env.NODE_ENV === "production" ? 2 : 20,
  max_lifetime: process.env.NODE_ENV === "production" ? 60 * 30 : undefined
});

export const db = drizzle(client, { schema: { chatTable } }); 