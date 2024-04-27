import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/utils/cn";
import { FOOTER_LINKS, HEADER_MENU_ITEMS } from "@/utils/constants";
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
      <body className={cn("layout-grid", ubuntu.className)}>
        <Header menuItems={HEADER_MENU_ITEMS} className="header" />
        <main className="main">{children}</main>
        <Footer links={FOOTER_LINKS} className="footer" />
        <Toaster />
      </body>
    </html>
  );
}
