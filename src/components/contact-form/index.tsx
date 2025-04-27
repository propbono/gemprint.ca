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

export const ContactForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();
  const formMethods = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
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
        description: errorMessage,
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
        description: "Message sent",
      });
      formMethods.reset();
    }
  };

  return (
    <Form {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
        <Heading as="h2">Contact Us</Heading>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <FormField
            control={formMethods.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <FormLabel>First Name</FormLabel>
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
          <FormField
            control={formMethods.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full px-3">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="********@*****.**"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
          <FormField
            control={formMethods.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full px-3">
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea rows={10} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="-mx-3 mb-6 flex flex-wrap">
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
                    <FormLabel>Send a copy of an email to yourself.</FormLabel>
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
        <fieldset className="hidden">
          <FormField
            control={formMethods.control}
            name="requiredInformation"
            render={({ field }) => (
              <FormItem className="w-full px-3">
                <FormControl>
                  <Input {...field} />
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
