
import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from "next/server"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { email } = body;
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    // if (data?.status === "success") {
    //   return NextResponse.json({message: "Email successfuly sent" });
    // }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
