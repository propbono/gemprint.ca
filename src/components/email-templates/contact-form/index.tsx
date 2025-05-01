import { Heading } from "@/components/heading";

export const ContactFormEmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
}: {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}) => {
  return (
    <html lang="en">
      <body>
        <Heading as="h1">New Form Submission</Heading>
        <p>You just submitted a form. Here are the details:</p>
        <p>Name:·{`${firstName}·${lastName}`}</p>
        <p>Email: {email}</p>
        <p>Message: {message}</p>
      </body>
    </html>
  );
};
export default ContactFormEmailTemplate;
