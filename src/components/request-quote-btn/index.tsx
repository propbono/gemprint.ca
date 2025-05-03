"use client";
import posthog from "posthog-js";
import { Button, type ButtonProps } from "../ui";

type RequestQuoteButtonProps = ButtonProps & {
  text: string;
};

export const RequestQuoteButton = ({
  text,
  className,
  ...rest
}: RequestQuoteButtonProps) => {
  return (
    <Button
      {...rest}
      asChild
      size="link"
      className={className}
      onClick={() => posthog.capture("request a quote click")}
    >
      <a href="mailto:maimuna.gabeyre@gemprint.ca">{text}</a>
    </Button>
  );
};
