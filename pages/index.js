import Head from "next/head";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Parallax from "@/components/Parallax";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gemprint - Experts in Print</title>
        <meta
          name="description"
          content="Website for Gemprint customers showing services that Gemprint provides and blog posts about printing industry.."
        />
        <meta
          name="keywords"
          content="Gemprint, print, printing, toronto printer, quality print, printing company Toronto, custom stickers, on demand printing toronto, printing services, brochure printing, brochure printing Toronto"
        />
      </Head>
      <Hero />
      <About />
      <Services />
      <Parallax />
      <Testimonials />
      <Products />
    </>
  );
}
