"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { HamburgerMenu } from "./hamburger-menu";

// TODO: add framer motion animations.

type HeaderProps = {
  menuItems: {
    title: string;
    href: string;
    asButton?: boolean;
  }[];
};

export const Header = ({ menuItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("bg-opacity-75");
  const pathname = usePathname();

  console.log("PATHNAME: ", pathname);

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
        "ease-in-in z-50 w-full bg-white shadow-lg transition delay-150 duration-700 hover:bg-opacity-100 md:fixed md:top-0 md:mt-0 md:shadow-2xl",
        headerClass
      )}
    >
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between px-4 py-6">
        <Link href={"/"}>
          <Image
            alt="Logo of Gemprint - experts in print"
            src="/images/Gemprint-vector-logo.svg"
            title="Gemprint"
            width={200}
            height={40}
          />
        </Link>
        <HamburgerMenu onChange={() => setIsMenuOpen(!isMenuOpen)} />
        <div
          className={cn(
            "flex flex-row items-center justify-center gap-4",
            isMenuOpen ? "block" : "hidden lg:flex"
          )}
        >
          {menuItems &&
            menuItems.map((menuItem) => {
              const isActive = menuItem.href === pathname;

              if (menuItem.asButton) {
                return (
                  <Button asChild key={menuItem.href} variant="default"
                  className={cn("text-xl font-bold py-6",{
                    "bg-primary text-secondary-foreground": isActive,
                  })}
                  >
                    <Link
                      href={menuItem.href}
                    >
                      {menuItem.title}
                    </Link>
                  </Button>
                );
              }

              return (
                <Link
                  href={menuItem.href}
                  key={menuItem.href}
                  className={cn(
                    "mr-6 mt-4 block text-xl font-bold transition  duration-500 ease-in-out hover:text-primary lg:mt-0",
                    {
                      "text-primary": isActive,
                    }
                  )}
                >
                  {menuItem.title}
                </Link>
              );
            })}
        </div>
      </nav>
    </header>
  );
};
