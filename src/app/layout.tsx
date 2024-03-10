import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-off-white",
          ubuntu.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
