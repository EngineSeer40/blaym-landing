'use server'

import { Resend } from 'resend';

export async function submitWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  if (!email || !name) {
    console.error('Waitlist submission failed: Email and name are required');
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Waitlist submission failed: RESEND_API_KEY not configured');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'noreply@blaym.io',
      to: 'blaym.app@gmail.com',
      subject: `🚀 New Waitlist Signup: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Waitlist Signup</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #666;">This person has joined the Blaym waitlist!</p>
        </div>
      `,
    });
    
    console.log('Waitlist submission successful:', { name, email });
  } catch (error) {
    console.error('Waitlist submission error:', error);
  }
}
