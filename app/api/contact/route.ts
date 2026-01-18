import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, title, topic, message } = await req.json();

  await resend.emails.send({
    from: "contact@orionics.co.uk",
    to: "contact@orionics.co.uk",
    replyTo: email,
    subject: `[Orionics] ${topic} — ${title}`,
    text: message,
  });

  return Response.json({ ok: true });
}
