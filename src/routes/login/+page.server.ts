import { lucia } from '$lib/server/auth'
import db from '$lib/server/db/index.js'
import { user } from '$lib/server/db/schema.js'
import { accountSchema } from '$lib/zod/auth.js'
import { redirect } from '@sveltejs/kit'
import { eq } from 'drizzle-orm'

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

        const existingUser = (await db.select().from(user).where(eq(user.username, parsed.data.username)).execute())[0]
        if (!existingUser) {
            return {
                success: false,
                message: 'Incorrect username or password'
            };
        }

        const hashedPassword = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parsed.data.password)).then(buffer => Array.from(new Uint8Array(buffer)).map(byte => byte.toString(16).padStart(2, '0')).join(''))
        const validPassword = hashedPassword === existingUser.hashedPassword
        if (!validPassword) {
            return {
                error: "Incorrect username or password",
                success: false,
            };
        }

        const session = await lucia.createSession(existingUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        return redirect(302, '/dashboard')
    }
}
            