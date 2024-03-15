"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainMenu } from "./main-menu";
import type { MenuItems } from "./types";

// TODO: add framer motion animations.

type HeaderProps = MenuItems;

export const Header = ({ menuItems }: HeaderProps) => {
  const [headerClass, setHeaderClass] = useState("bg-opacity-75");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setHeaderClass("bg-opacity-100");
      } else {
        setHeaderClass("bg-opacity-75");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "ease-in-in z-50 w-full bg-white shadow-lg transition delay-150 duration-700 hover:bg-opacity-100 lg:fixed lg:top-0 lg:mt-0 lg:shadow-2xl",
        headerClass
      )}
    >
      <nav className="container relative mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-6">
        <Link href={"/"}>
          <Image
            alt="Logo of Gemprint - experts in print"
            src="/images/Gemprint-vector-logo.svg"
            title="Gemprint"
            width={200}
            height={40}
          />
        </Link>
        <MainMenu menuItems={menuItems} />
      </nav>
    </header>
  );
};
