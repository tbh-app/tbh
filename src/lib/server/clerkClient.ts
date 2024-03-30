import { createClerkClient } from '@clerk/clerk-sdk-node';
import { CLERK_SECRET_KEY } from '$env/static/private';

export const clerkClient = createClerkClient({ secretKey: CLERK_SECRET_KEY })