"use client";
import Link from "next/link";
import posthog from "posthog-js";
import { Button, type ButtonProps } from "../ui";

type PostHogEvent = "contact us click" | "see the products click";

type PostHogButtonProps = ButtonProps & {
  url: string;
  eventName: PostHogEvent;
  text: string;
};

export const PostHogButton = ({
  text,
  url,
  eventName,
  ...rest
}: PostHogButtonProps) => {
  return (
    <Button {...rest} asChild onClick={() => posthog.capture(eventName)}>
      <Link href={url}>{text}</Link>
    </Button>
  );
};
