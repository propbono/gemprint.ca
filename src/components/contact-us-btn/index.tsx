"use client"
import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "../ui";

export const ContactUsButton = () => {
  return (
    <Link href="/contact-us" onClick={() => posthog.capture("contact us click")}>
      <Button variant="default">Contact Us</Button>
    </Link>
  );
};
