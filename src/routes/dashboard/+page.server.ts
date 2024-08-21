import db from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { question, user } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { gravatarSchema } from '$lib/zod/gravatar';

export const load: PageServerLoad = async (event) => {
  // @ts-ignore
  const user = event.locals.user;
  if (!user) return redirect(302, '/login')
  const questions = await db.select().from(question).where(eq(question.forUsername, user.username)).orderBy(desc(question.createdAt)).execute();

  return {
    questions,
    user
  }
};

export const actions = {
  gravatar: async ({ request }) => {
    const formData = await request.formData()
    const parsed = gravatarSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!parsed.success) {
        return {
            success: false,
            message: `From ${parsed.error.errors[0].path.join('.')}: ${parsed.error.errors[0].message}`
        }
    }

    const email = parsed.data.email.toLowerCase();

    const hashedEmail = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(email)).then(buffer => Array.from(new Uint8Array(buffer)).map(byte => byte.toString(16).padStart(2, '0')).join(''))
    await db.update(user).set({
      imageUrl: `https://www.gravatar.com/avatar/${hashedEmail}`
    })
  }
} satisfies Actions;