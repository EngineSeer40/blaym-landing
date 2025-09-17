'use server'

import { Resend } from 'resend';

export async function submitWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  if (!email || !name) {
    return { success: false, message: 'Email and name are required' };
  }

  if (!process.env.RESEND_API_KEY) {
    console.log('Waitlist submission (no email sent - API key missing):', { name, email });
    return { success: true, message: 'Thanks for joining our waitlist! (Email will be sent when configured)' };
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
    return { success: true, message: 'Thanks for joining our waitlist!' };
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return { success: false, message: 'Failed to join waitlist. Please try again.' };
  }
}
