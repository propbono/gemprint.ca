"use client";

import { sendContactEmail } from "@/actions/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "../heading";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { formSchema, type ContactFormData } from "./types";

const INQUIRY_TYPES = [
  "Business Cards",
  "Flyers",
  "Postcards",
  "Brochures",
  "Real Estate Signs",
  "Election Signs",
  "Banners & Signage",
  "NCR Forms",
  "Promotional Products",
  "Website Design",
  "Other",
] as const;

export const ContactForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();
  const formMethods = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
      sendCopy: false,
      requiredInformation: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData
  ) => {
    const result = formSchema.safeParse(data);

    if (!result.success) {
      let errorMessage = "";
      result.error.format();
      for (const issue of result.error.issues) {
        errorMessage = `${errorMessage + issue.path[0]}: ${issue.message}. `;
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage || "Please check the form for errors.",
      });
      return;
    }

    const response = await sendContactEmail(result.data);

    if (response?.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
    }
    if (response.success) {
      toast({
        variant: "success",
        title: "Success",
        description: "Your message has been sent! We'll get back to you soon.",
      });
      formMethods.reset();
    }
  };

  return (
    <Form {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
        noValidate
      >
        <Heading as="h2">Contact Us</Heading>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <legend className="sr-only">Your Name</legend>
          <FormField
            control={formMethods.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formMethods.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full px-3 md:w-1/2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <legend className="sr-only">Contact Information</legend>
          <FormField
            control={formMethods.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="********@*****.**"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formMethods.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full px-3 md:w-1/2">
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 555-5555"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <legend className="sr-only">Inquiry Details</legend>
          <FormField
            control={formMethods.control}
            name="inquiryType"
            render={({ field }) => (
              <FormItem className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <FormLabel>Inquiry Type</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <option value="">Select what you're interested in…</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <legend className="sr-only">Your Message</legend>
          <FormField
            control={formMethods.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full px-3">
                <FormLabel>Your Message *</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Tell us about your project..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <legend className="sr-only">Submit</legend>
          <div className="flex w-full justify-between px-3">
            <FormField
              control={formMethods.control}
              name="sendCopy"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Send a copy to my email</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="default" type="submit">
              Send Message
            </Button>
          </div>
        </fieldset>
        <fieldset className="hidden" aria-hidden="true">
          <legend className="sr-only">Do not fill</legend>
          <FormField
            control={formMethods.control}
            name="requiredInformation"
            render={({ field }) => (
              <FormItem className="w-full px-3">
                <FormLabel>Required Information</FormLabel>
                <FormControl>
                  <Input tabIndex={-1} autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
      </form>
    </Form>
  );
};
