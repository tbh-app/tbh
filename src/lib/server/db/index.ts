import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import Database from 'better-sqlite3';

const sqlite = new Database('db/database.db')
const db = drizzle(sqlite, { schema });

export default db;