import db from '$lib/server/db';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { question } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

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