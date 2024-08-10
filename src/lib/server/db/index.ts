import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';
import { Pool } from '@neondatabase/serverless'
import { DATABASE_URL } from '$env/static/private';

const pool = new Pool({ connectionString: DATABASE_URL });
const db = drizzle(pool, { schema });

export default db;