import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FOOTER_LINKS, HEADER_MENU_ITEMS } from "@/utils/constants";
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
      <main className="flex flex-grow  flex-col items-center justify-between bg-pink-100 pb-6 pt-24">
        {children}
      </main>
      <Footer links={FOOTER_LINKS} />
    </>
  );
}
