import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string().optional(),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please provide correct email address." }),
  message: z.string({ required_error: "Message is required" }),
  sendCopy: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;
