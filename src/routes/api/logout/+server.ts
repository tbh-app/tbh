import { error, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';

export const GET = async ({ locals, cookies }) => {
	if (!locals.session) return error(401, 'Unauthorized');

    await lucia.invalidateSession(locals.session.id)

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies.set(sessionCookie.name, sessionCookie.value, {
        path: '.',
        ...sessionCookie.attributes
    });
    return redirect(302, '/')
};