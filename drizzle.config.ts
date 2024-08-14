import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  out: './src/drizzle',
  schema: './src/lib/server/db/schema.ts',
  dbCredentials: {
    url: 'db/database.db'
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  strict: true,
});