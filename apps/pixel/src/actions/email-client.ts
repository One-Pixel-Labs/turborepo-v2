import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

type EmailProps = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ from, to, subject, html }: EmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { success: false, error: (err as Error).message };
  }
}
