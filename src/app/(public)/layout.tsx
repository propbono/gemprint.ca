import { Header } from "@/components/header/header";
import { HEADER_MENU_ITEMS } from "@/utils/constants";
import type { Metadata } from "next";

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
    <>
      <Header menuItems={HEADER_MENU_ITEMS} />
      {children}
    </>
  );
}