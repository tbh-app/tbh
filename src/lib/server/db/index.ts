import { DATABASE_URL } from '$env/static/private'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
import ws from 'isomorphic-ws'

neonConfig.webSocketConstructor = ws
const connectionString = `${DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
export const prisma = new PrismaClient({ adapter })
export default prisma