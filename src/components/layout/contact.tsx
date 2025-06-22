// components/contact.tsx
'use client';

import { useState } from 'react';
import SectionWrapper from './section-wrapper';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		try {
			const res = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (res.ok) {
				alert('Message sent!');
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
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Your Email'
					value={formData.email}
					onChange={handleChange}
					className='w-full p-3 rounded border border-border bg-background text-foreground'
					required
				/>
				<textarea
					name='message'
					placeholder='Your Message'
					value={formData.message}
					onChange={handleChange}
					className='w-full p-3 rounded border border-border bg-background text-foreground h-32 resize-none'
					required
				/>
				<button
					type='submit'
					className='px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition'>
					Send Message
				</button>
			</form>
		</SectionWrapper>
	);
}
