"use client"
import posthog from "posthog-js";
import { Button } from "../ui";

export const RequestQuoteButton = () => {
  return (
    <Button asChild variant="default" onClick={() => posthog.capture("request a quote click")}>
      <a href="mailto:maimuna.gabeyre@gemprint.ca">Request a Quote</a>
    </Button>
  );
}