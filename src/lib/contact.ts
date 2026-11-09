import { z } from 'zod';

export const contactLimits = { name: 100, email: 254, message: 5000 };

export const contactSchema = z.object({
	name: z.string().trim().min(1, 'Enter your name').max(contactLimits.name),
	email: z.string().trim().max(contactLimits.email).pipe(z.email('Enter a valid email address')),
	message: z.string().trim().min(1, 'Enter a message').max(contactLimits.message)
});
