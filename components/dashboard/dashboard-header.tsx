import { Container, Section } from "components";
import React from "react";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";

const styles = {
  section: "bg-secondary text-gray-100 text-lg",
  wrapper:
    "flex text-center md:text-left flex-col-reverse w-full md:w-auto md:justify-between md:flex-row py-3",
  signout:
    "hover:text-primary md:before:content-['|'] md:before:opacity-40 md:before:mr-4 my-2 mr-2 md:my-0",
  headerMenu:
    "flex flex-col md:flex-row items-center md:justify-end mb-3 md:mb-0",
};

export const DashboardHeader = () => {
  const { data } = useSession();

  return (
    <Section className={styles.section}>
      <Container>
        <footer className={styles.wrapper}>
          <div>
            <p>Gemprint Dashboard</p>
          </div>
          <div className={styles.headerMenu}>
            <button className={styles.signout} onClick={() => signOut()}>
              SignOut
            </button>
            <Image
              src={data?.user?.image}
              alt="logged in user picture"
              width={25}
              height={25}
              className="rounded-full"
            />
          </div>
        </footer>
      </Container>
    </Section>
  );
};

export default DashboardHeader;
