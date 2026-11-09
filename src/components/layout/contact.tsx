'use client';

import { useState, type FormEvent } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { contactLimits, contactSchema } from '@/lib/contact';
import SectionWrapper from './section-wrapper';

const fields = [
	{ name: 'name', label: 'Name' },
	{ name: 'email', label: 'Email' },
	{ name: 'message', label: 'Message' }
] as const;

type FieldName = (typeof fields)[number]['name'];

export default function Contact() {
	const [errors, setErrors] = useState<Partial<Record<FieldName, string[]>>>({});
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const [failure, setFailure] = useState('');

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (sending) return;
		const form = event.currentTarget;
		const result = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
		setSent(false);
		setFailure('');
		setErrors(result.success ? {} : z.flattenError(result.error).fieldErrors);
		if (!result.success) return;

		setSending(true);
		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(result.data)
			});
			const payload = await response.json();
			if (!response.ok || payload.success !== true) {
				setFailure(typeof payload.error === 'string' ? payload.error : 'Unable to send your message.');
				return;
			}
			form.reset();
			setSent(true);
		} catch {
			setFailure('Unable to send your message. Please try again or email me directly.');
		} finally {
			setSending(false);
		}
	}

	return (
		<SectionWrapper id='contact'>
			<h2 className='text-3xl font-bold'>Contact</h2>
			<p className='text-muted-foreground'>
				Use the form below or <a className='underline' href='mailto:contact@derekholland.com'>email me directly</a>.
			</p>
			<form onSubmit={handleSubmit} noValidate className='w-full max-w-xl text-left'>
				<fieldset disabled={sending} className='space-y-4'>
					{fields.map(({ name, label }) => {
						const id = 'contact-' + name;
						const error = errors[name]?.[0];
						const props = {
							id,
							name,
							required: true,
							maxLength: contactLimits[name],
							'aria-invalid': Boolean(error),
							'aria-describedby': error ? id + '-error' : undefined,
							className: 'w-full rounded border border-border bg-background p-3 focus-visible:outline-2 focus-visible:outline-ring'
						};
						return (
							<div key={name} className='space-y-1'>
								<label htmlFor={id} className='block font-medium'>{label}</label>
								{name === 'message'
									? <textarea {...props} rows={5} />
									: <input {...props} type={name === 'email' ? 'email' : 'text'} autoComplete={name} />}
								{error && <p id={id + '-error'} role='alert' className='text-sm text-destructive'>{error}</p>}
							</div>
						);
					})}
					<Button type='submit'>{sending ? 'Sending…' : 'Send Message'}</Button>
				</fieldset>
				{failure && <p role='alert' className='mt-3 text-destructive'>{failure}</p>}
				<p role='status' className='mt-3'>{sent ? 'Thanks for reaching out. Your message was sent.' : ''}</p>
			</form>
		</SectionWrapper>
	);
}
