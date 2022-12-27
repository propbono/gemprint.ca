import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  let { email, message, name, phone, subject } = req.body;

  if (!email || !email.trim().length) {
    return res.status(400).json({ error: "Please provide an email address." });
  }
  if (!message || !message.trim().length) {
    return res.status(400).json({ error: "Please provide a message." });
  }

  email = email.trim();
  message = `Message From: ${name}
  Email: ${email}
  Phone: ${phone}
  Subject: ${subject}
  Message: ${message}`;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
    },
  });

  const mail = {
    to: process.env.MAIL_TO,
    from: process.env.MAIL_FROM,
    replyTo: email,
    subject: `Message from: ${name} - ${subject}`,
    text: message,
    html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, "<br>")}</p>`,
  };

  try {
    await transporter.sendMail(mail);

    return res.status(200).json({ error: null });
  } catch (error) {
    // log the error
    return res.status(500).json({
      error:
        "Something went wrong. Please try again later. If this issue continues please contact us.",
    });
  }
};

export default contact;
