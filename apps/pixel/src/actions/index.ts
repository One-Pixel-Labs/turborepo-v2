import { defineAction } from 'astro:actions';
import { sendEmail } from './email-client';

export const server = {
  submitEmail: defineAction({
    handler: async ({ params }) => {
      const res = await sendEmail({
        // from: 'Name <info@onepixellabs.com>',
        from: 'Pixel <onboarding@resend.dev>',
        to: 'lookatemail@gmail.com',
        subject: 'New Form Submission',
        html: `
          <section style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
            <h1 style="color: #fff; margin-bottom: 12px;">One Pixel Labs! New Form Submission</h1>
            <p><strong>First Name:</strong> ${params['first-name']}</p>
            <p><strong>Last Name:</strong> ${params['last-name']}</p>
            <p><strong>Email:</strong> ${params['email'].toLowerCase()}</p>
            <p><strong>Company:</strong> ${params['company']}</p>
            <p><strong>Phone:</strong> ${params['phone']}</p>
            <p><strong>Message:</strong> ${params['message']}</p>
            <p><strong>Budget:</strong> ${params['budget']}</p>
          </section>
        `,
      });
      console.log('🤖 SSR EMAIL RESPONSE', res);

      return { params, ...res };
    },
  }),
};
