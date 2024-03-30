import { clerkClient } from '$lib/server/clerkClient.js';
import prisma from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  // @ts-ignore
  const user = event.locals.session;

  const questions = await prisma.question.findMany({
    where: {
      forUser: (await clerkClient.users.getUserList({ userId: user.userId }))[0].username!
    }
  })

  return {
    questions
  }
};