import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/components";

const styles = {
  navSection:
    "bg-white shadow-lg md:shadow-2xl md:mt-0 md:top-0 w-full md:fixed z-50",
  navContainer: "container flex flex-wrap items-center justify-between py-6",
  navMenuContainer: "w-full block flex-grow lg:w-auto lg:flex lg:items-center",
  hamburger:
    "flex items-center px-2 py-2 border rounded text-primary hover:border-primary",
  logo: "",
};

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navSection}>
    <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <a>
              <Image
                alt="Logo of Gemprint - experts in print"
                src="/images/Gemprint-vector-logo.svg"
                title="Gemprint"
                width={170}
                height={30}
              />
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className={styles.hamburger} onClick={()=> {setIsOpen(!isOpen)}}>
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={styles.navMenuContainer}>
          <Menu show={isOpen}/>
        </div>
    </div>
    </nav>
  );
};
