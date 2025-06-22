// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Store API key in .env

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		const data = await resend.emails.send({
			from: 'Your Name <derekhollandwebdev@gmail.com>', // must match your Resend domain
			to: 'derekhollandwebdev@gmail.com', // where you want to receive the emails
			subject: `New message from ${name}`,
			html: `
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
			`
		});

		return NextResponse.json({ success: true, data });
	} catch (error) {
		console.error('Email send error:', error);
		return NextResponse.json({ success: false, error }, { status: 500 });
	}
}
