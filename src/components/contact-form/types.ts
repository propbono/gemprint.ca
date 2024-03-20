import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().optional(),
  email: z.string().min(1, { message: "Email is required." }).email(),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, { message: "Message is required." }),
  sendCopy: z.boolean().default(false).optional(),
  requiredInformation: z.string().optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;
