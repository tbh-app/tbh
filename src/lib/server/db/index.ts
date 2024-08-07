import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

/* const turso = createClient({
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
}); */
const pg = postgres(DATABASE_URL)
const db = drizzle(pg, { schema });

export default db;