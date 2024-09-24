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
        html: `<section><h1>New Form Submission</h1><p>${JSON.stringify(params)}</p></section>`,
      });
      console.log('🤖 SSR EMAIL RESPONSE', res);

      return { params, ...res };
    },
  }),
};
