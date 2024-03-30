import { CLERK_SECRET_KEY } from '$env/static/private';
import prisma from '$lib/server/db';
import type { User } from '$lib/types/User';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  // @ts-ignore
  const user = event.locals.session;
  const getUsername = (await fetch(`https://api.clerk.com/v1/users?user_id=${user.userId}`, { headers: { 'Authorization': `Bearer ${CLERK_SECRET_KEY}` } }).then(res => res.json()))[0] as User;
  const questions = await prisma.question.findMany({
    where: {
      forUser: getUsername.username!
    }
  })

  return {
    questions
  }
};