'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import SectionWrapper from './section-wrapper';
import { z } from 'zod';

// 1️⃣ Zod schema for validation
const contactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(1, 'Message is required')
});

export default function Contact() {
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [errors, setErrors] = useState<{
		name?: string;
		email?: string;
		message?: string;
	}>({});

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		// 2️⃣ Run Zod validation
		const result = contactSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors;
			setErrors({
				name: fieldErrors.name?.[0],
				email: fieldErrors.email?.[0],
				message: fieldErrors.message?.[0]
			});
			return;
		}

		// 3️⃣ Clear previous errors if validation passed
		setErrors({});

		try {
			const res = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (res.ok) {
				// alert('Message sent!');
				setShowSuccessModal(true);
				setFormData({ name: '', email: '', message: '' });
			} else {
				alert('Failed to send message. Try again later.');
			}
		} catch (error) {
			alert('Error sending message.');
			console.error(error);
		}
	}

	return (
		<SectionWrapper id='contact'>
			<h2 className='text-3xl font-bold mb-6 text-center'>Contact</h2>
			<p className='text-center text-muted-foreground mb-8'>
				Want to connect? Fill out the form or reach out via email.
			</p>
			<form onSubmit={handleSubmit} className='max-w-xl mx-auto space-y-4'>
				<input
					type='text'
					name='name'
					placeholder='Your Name'
					value={formData.name}
					onChange={handleChange}
					className='w-full p-3 rounded border border-border bg-background text-foreground'
				/>
				{errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}

				<input
					type='email'
					name='email'
					placeholder='Your Email'
					value={formData.email}
					onChange={handleChange}
					className='w-full p-3 rounded border border-border bg-background text-foreground'
				/>
				{errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

				<textarea
					name='message'
					placeholder='Your Message'
					value={formData.message}
					onChange={handleChange}
					className='w-full p-3 rounded border border-border bg-background text-foreground h-32 resize-none'
				/>
				{errors.message && (
					<p className='text-red-500 text-sm'>{errors.message}</p>
				)}

				<button
					type='submit'
					className='px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition'>
					Send Message
				</button>
			</form>
			<Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Message Sent</DialogTitle>
					</DialogHeader>
					<p>Thanks for reaching out. I’ll get back to you soon!</p>
					<DialogFooter>
						<Button onClick={() => setShowSuccessModal(false)}>Close</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</SectionWrapper>
	);
}
