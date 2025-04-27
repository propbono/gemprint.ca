"use server";

import { formSchema } from "@/components/contact-form/types";
import ContactFormEmailTemplate from "@/components/email-templates/contact-form";
import type { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendContactEmail = async (
  newContactFormData: unknown
): Promise<{ error: string | null; success: boolean }> => {
  const result = formSchema.safeParse(newContactFormData);

  if (!result.success) {
    let errorMessage = "";
    result.error.format();
    for (const issue of result.error.issues) {
      errorMessage = `${errorMessage + issue.path[0]}: ${issue.message}. `;
    }

    return {
      error: errorMessage,
      success: false,
    };
  }

  const { requiredInformation, sendCopy, email, firstName, lastName, message } =
    result.data;

  // Honeypot to ignore bot submissions
  if (requiredInformation && requiredInformation?.length > 0) Promise.resolve();

  if (!process.env.EMAIL_FROM)
    throw new Error("Missing environment variables: EMAIL_FROM");
  if (!process.env.EMAIL_TO)
    throw new Error("Missing environment variables: EMAIL_TO");

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      cc: sendCopy ? email : undefined,
      subject: "New Contact Form Submission",
      react: ContactFormEmailTemplate({
        firstName,
        lastName,
        email,
        message,
      }) as ReactElement,
    });
    if (error) return { error: error.message, success: false };

    return { error: null, success: true };
  } catch (error) {
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
