import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().optional(),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[\d\s+\-().]{7,20}$/, {
      message: "Please enter a valid phone number",
    }),
  inquiryType: z.string().optional(),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, { message: "Message is required" })
    .max(5000, { message: "Message must be under 5,000 characters" }),
  sendCopy: z.boolean().default(false).optional(),
  requiredInformation: z
    .string()
    .max(0, { message: "Invalid submission" })
    .optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;
