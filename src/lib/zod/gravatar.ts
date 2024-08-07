import { z } from 'zod'

export const gravatarSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
})