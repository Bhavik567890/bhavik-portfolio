"use server";

import { Resend } from "resend";

export type ContactState = {
  success?: boolean;
  error?: string;
};

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { error: "Please fill in your name, email, and message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return { error: "One of the fields is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "Email delivery isn't configured. Please contact me at bhavikvasani7777@gmail.com.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.NEXT_PUBLIC_CONTACT_TO ?? "bhavikvasani7777@gmail.com";
    const { error } = await resend.emails.send({
      from: "Bhavik Maheta <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}${subject ? ` — ${subject}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return { error: "Couldn't send your message. Please email me directly at bhavikvasani7777@gmail.com." };
    }
  } catch (err) {
    console.error("[contact] send failed:", err);
    return { error: "Couldn't send your message. Please email me directly at bhavikvasani7777@gmail.com." };
  }

  console.info(`[contact] delivered message from ${name} <${email}>`);

  return { success: true };
}
