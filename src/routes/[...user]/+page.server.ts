import { clerkClient } from '$lib/server/clerkClient.js';
import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { redirect } from '@sveltejs/kit';
import type { User } from '@clerk/clerk-sdk-node';
import prisma from '$lib/server/db';

export const load: PageServerLoad = async ({ params }) => {
	const getUser = (await clerkClient.users.getUserList({ username: [params.user] }))[0] as User | null;
	if (!getUser) throw redirect(302, '/404')

	return {
		imageUrl: getUser.imageUrl,
		username: getUser.username!,
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

			await prisma.question.create({
				data: {
					body: question as string,
					forUser: username as string
				}
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