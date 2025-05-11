import { PostHogProvider } from "@/components/posthog-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { DEFAULT_LD_SCHEMA } from "@/utils/constants";
import Script from "next/script";
import type { ReactNode } from "react";
import { defaultMetadata } from "./metadata";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("layout-grid", ubuntu.className)}>
        <PostHogProvider>
          {children}
          <Toaster />
        </PostHogProvider>
        <Script
          type="application/ld+json"
          id="schema-default"
          suppressHydrationWarning
          content={JSON.stringify(DEFAULT_LD_SCHEMA)}
        />
      </body>
    </html>
  );
}
