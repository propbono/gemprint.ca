import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { src: "/", text: "Home" },
  { src: "/#about", text: "About" },
  { src: "/quote", text: "Request a Quote" },
  { src: "/faqs", text: "FAQs" },
  { src: "/blog", text: "Blog" },
];

const styles = {
  navMenu: "text-sm lg:ml-auto",
  navMenuItem:
    "block mt-4 lg:inline-block lg:mt-0 hover:text-primary font-bold text-lg  mr-4",
};

export const Menu = () => {
  const router = useRouter();

  return (
    <div className={styles.navMenu}>
      {menu.map((item, index) => {
        const active = router.asPath === item.src ? "text-primary" : "";
        return (
          <Link key={index} href={item.src}>
            <a className={`${styles.navMenuItem} ${active}`}>{item.text}</a>
          </Link>
        );
      })}
    </div>
  );
};
