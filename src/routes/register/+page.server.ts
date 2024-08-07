import { lucia } from '$lib/server/auth'
import db from '$lib/server/db/index.js'
import { user } from '$lib/server/db/schema.js'
import { accountSchema } from '$lib/zod/auth.js'
import { redirect } from '@sveltejs/kit'
import { eq } from 'drizzle-orm'
import { generateId } from 'lucia'

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData()
		const parsed = accountSchema.safeParse(Object.fromEntries(formData.entries()))

        if (!parsed.success) {
            return {
                success: false,
                message: `From ${parsed.error.errors[0].path.join('.')}: ${parsed.error.errors[0].message}`
            }
        }

        if ((await db.select().from(user).where(eq(user.username, parsed.data.username)).execute())[0]) {
            return {
                success: false,
                message: 'Username already exists'
            }
        }

        const { username, password } = parsed.data
        const hashedPassword = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password)).then(buffer => Array.from(new Uint8Array(buffer)).map(byte => byte.toString(16).padStart(2, '0')).join(''))
        const userId = generateId(15);

        await db.insert(user).values({
            username,
            hashedPassword,
            id: userId
        })

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});

        return redirect(302, '/dashboard')
	}
}