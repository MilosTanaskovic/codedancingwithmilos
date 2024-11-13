import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { fullName, email } = body;
    const { data, error } = await resend.emails.send({
      from: "CodeDancing with Milos <milos@codedancingwithmilos.com>",
      to: email,
      subject: "Welcome to CodeDancing with Milos! Let’s Elevate Your Engineering Journey 🚀",
      react: EmailTemplate({ firstName: fullName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    // if (data?.status === "success") {
    //   return NextResponse.json({message: "Email successfuly sent" });
    // }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
