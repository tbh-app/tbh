import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { redirect } from '@sveltejs/kit';
import db from '$lib/server/db';
import * as schema from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const getUser = await db.select().from(schema.user).where(eq(schema.user.username, params.user)).execute().then(res => res[0]);
	if (!getUser) throw redirect(302, '/404')

	return {
		imageUrl: getUser.imageUrl,
		username: getUser.username,
	};
};

const formSchema = z.object({
	question: z.string().min(1).max(280),
	username: z.string().min(1)
})

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const question = formData.get('question')
		const username = formData.get('username')
		try {
			formSchema.parse({ question, username })

			await db.insert(schema.question).values({
				body: question as string,
				forUsername: username as string,
				id: crypto.randomUUID()
			})
			return {
				success: true,
				question: question!
			}
		} catch (e) {
			return {
				success: false,
				errors: JSON.stringify(e)
			}
		}
	}
}