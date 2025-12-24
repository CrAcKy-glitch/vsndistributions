// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { fullname, email, company, message } = req.body;

    if (!fullname || !email || !company || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_FROM}>`,
      to: "Admin@vsndistribution.com",
      replyTo: email,
      subject: `New contact form: ${fullname} (${company})`,
      text: `
New contact form submission:

Name: ${fullname}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}
