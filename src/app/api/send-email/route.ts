import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/contact';

function failure(error: string, status: number) {
	return NextResponse.json({ success: false, error }, { status });
}

export async function POST(req: Request) {
	if (req.headers.get('sec-fetch-site') === 'cross-site') {
		return failure('Request not allowed.', 403);
	}

	const reader = req.body?.getReader();
	if (!reader) return failure('Message is required.', 400);

	const decoder = new TextDecoder();
	let body = '';
	let bytes = 0;
	let input: unknown;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			bytes += value.byteLength;
			if (bytes > 32_768) {
				void reader.cancel().catch(() => {});
				return failure('Message is too large.', 413);
			}
			body += decoder.decode(value, { stream: true });
		}
		input = JSON.parse(body + decoder.decode());
	} catch {
		return failure('Invalid request.', 400);
	}

	const result = contactSchema.safeParse(input);
	if (!result.success) return failure('Check your name, email, and message.', 400);
	if (!process.env.RESEND_API_KEY) {
		return failure('The form is temporarily unavailable. Please email me directly.', 503);
	}

	try {
		const { name, email, message } = result.data;
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data, error } = await resend.emails.send({
			from: 'Derek <contact@derekholland.com>',
			to: 'derekhollandwebdev@gmail.com',
			replyTo: email,
			subject: 'New portfolio contact message',
			text: 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
		});
		if (error || !data) {
			return failure('Unable to send your message. Please try again or email me directly.', 502);
		}
		return NextResponse.json({ success: true });
	} catch {
		return failure('Unable to send your message. Please try again or email me directly.', 502);
	}
}