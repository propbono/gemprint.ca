import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FOOTER_LINKS, HEADER_MENU_ITEMS } from "@/utils/constants";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultMetadata } from "../metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header menuItems={HEADER_MENU_ITEMS} className="header" />
      <main className="main">{children}</main>
      <Footer links={FOOTER_LINKS} className="footer" />
    </>
  );
}
