import Head from "next/head";

import { Hero, About, Services, Parallax, Subscribe } from "components";

import { PageLayout } from "layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Gemprint - Experts in Print</title>
        <meta
          key="description"
          name="description"
          content="Website for Gemprint customers showing services that Gemprint provides and blog posts about printing industry.."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Gemprint, print, printing, toronto printer, quality print, printing company Toronto, custom stickers, on demand printing toronto, printing services, brochure printing, brochure printing Toronto"
        />
      </Head>
      <Hero />
      <About />
      <Parallax />
      <Services />
      <Subscribe />
    </PageLayout>
  );
};

export default Home;
