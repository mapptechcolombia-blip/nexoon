import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(1).max(2000),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;
    if (!user || !pass) {
      throw new Error("Gmail credentials are not configured");
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const escape = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await transporter.sendMail({
      from: `"${data.name}" <${user}>`,
      to: user,
      replyTo: data.email,
      subject: `Nuevo contacto — ${data.company}`,
      text: [
        `Nombre: ${data.name}`,
        `Empresa: ${data.company}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.phone || "—"}`,
        "",
        data.message,
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escape(data.name)}</p>
        <p><strong>Empresa:</strong> ${escape(data.company)}</p>
        <p><strong>Email:</strong> ${escape(data.email)}</p>
        <p><strong>Teléfono:</strong> ${escape(data.phone || "—")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escape(data.message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { ok: true as const };
  });
