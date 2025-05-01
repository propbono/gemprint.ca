import { Toaster } from "@/components/ui/toaster";
import { PostHogProvider } from "@/components/posthog-provider";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gemprint - Experts in Print",
  description: "Gemprint website listing all our services and products",
};

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
      </body>
    </html>
  );
}
