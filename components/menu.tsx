import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  { src: "/", text: "Home" },
  { src: "/#about", text: "About" },
  { src: "/faqs", text: "FAQs" },
];

const styles = {
  navMenu: "text-sm lg:ml-auto",
  navMenuItem:
    "block mt-4 lg:inline-block lg:mt-0 hover:text-primary font-bold text-xl  mr-6 transition duration-500 ease-in-out",
  navMenuContact:
    "block mt-4 lg:inline-block btn btn-primary lg:leading-none lg:ml-4 lg:mt-0",
};

export const Menu = ({ show }) => {
  const router = useRouter();
  const visible = show ? "block" : "hidden lg:block";

  return (
    <div className={`${styles.navMenu} ${visible}`}>
      {menu.map((item, index) => {
        const active = router.asPath === item.src ? "text-primary" : "";
        return (
          <Link key={index} href={item.src}>
            <a className={`${styles.navMenuItem} ${active}`}>{item.text}</a>
          </Link>
        );
      })}
      <Link href="/contact">
        <a className={styles.navMenuContact}>Contact Us</a>
      </Link>
    </div>
  );
};

export default Menu;
