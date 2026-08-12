import type { RequestHandler } from './$types';

// This endpoint requires the RESEND_API_KEY environment variable.
// Set it in .env:  RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? import.meta.env.VITE_RESEND_API_KEY ?? '';
const TO_EMAIL = 'contact@ajeoluwasegun.com'; // where you want to receive messages
const FROM_EMAIL = 'onboarding@resend.dev';    // use your verified domain once set up

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { name, email, budget, message } = body;

		if (!name || !email || !message) {
			return new Response(JSON.stringify({ error: 'Missing required fields' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${RESEND_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: FROM_EMAIL,
				to: TO_EMAIL,
				reply_to: email,
				subject: `Portfolio inquiry from ${name}${budget ? ` — Budget: ${budget}` : ''}`,
				html: `
					<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
						<h2 style="color: #f46c38;">New Portfolio Inquiry</h2>
						<table style="width: 100%; border-collapse: collapse;">
							<tr>
								<td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td>
								<td style="padding: 8px 0;">${name}</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
								<td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
							</tr>
							${budget ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Budget</strong></td><td style="padding: 8px 0;">${budget}</td></tr>` : ''}
						</table>
						<hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
						<h3 style="color: #333;">Message</h3>
						<p style="color: #444; line-height: 1.7; white-space: pre-wrap;">${message}</p>
					</div>
				`
			})
		});

		if (!res.ok) {
			const err = await res.json();
			console.error('Resend error:', err);
			return new Response(JSON.stringify({ error: 'Failed to send email' }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('Server error:', err);
		return new Response(JSON.stringify({ error: 'Internal server error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
