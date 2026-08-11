import { Heading } from "@/components/heading";

export const ContactFormEmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
  phone,
  inquiryType,
  sendCopy,
}: {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
  phone?: string;
  inquiryType?: string;
  sendCopy?: boolean;
}) => {
  return (
    <html lang="en">
      <body>
        <Heading as="h1">New Contact Form Submission — Gemprint.ca</Heading>
        <p>
          A new inquiry has been submitted via the Gemprint.ca contact form:
        </p>
        <p>
          <strong>Name:</strong> {firstName}
          {lastName ? ` ${lastName}` : ""}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        {phone ? (
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        ) : null}
        {inquiryType ? (
          <p>
            <strong>Inquiry Type:</strong> {inquiryType}
          </p>
        ) : null}
        <p>
          <strong>Message:</strong>
        </p>
        <p>{message}</p>
        {sendCopy ? (
          <p>
            <em>A copy was sent to {email}.</em>
          </p>
        ) : null}
      </body>
    </html>
  );
};
export default ContactFormEmailTemplate;
