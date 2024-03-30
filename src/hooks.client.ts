import type { HandleClientError } from '@sveltejs/kit'
import { initializeClerkClient } from 'clerk-sveltekit/client'
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public'
import { dark } from '@clerk/themes'

initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
	afterSignInUrl: '/dashboard',
	afterSignUpUrl: '/dashboard',
	signInUrl: '/signIn',
	signUpUrl: '/signUp',
	appearance: {
		baseTheme: dark,
		variables: {
			colorBackground: '#15191E',
			colorPrimary: '#7582ff',
			colorSuccess: '#69fec3'
		}
	}
})

export const handleError: HandleClientError = async ({ error, event }) => {
	console.error(error, event)
}