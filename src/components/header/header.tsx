"use client";

import { cn } from "@/utils/cn";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainMenu } from "./main-menu";
import type { MenuItems } from "./types";

// TODO: add framer motion animations.

type HeaderProps = MenuItems;

export const Header = ({ menuItems }: HeaderProps) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.45, damping: 15, ease: "easeInOut" }}
      className={cn(
        "ease-in-in z-50 flex h-24 w-full items-center bg-white shadow-lg lg:fixed lg:top-0 lg:mt-0 lg:shadow-2xl"
      )}
    >
      <nav className="container relative mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4">
        <Link href={"/"}>
          <Image
            alt="Logo of Gemprint - experts in print"
            src="/images/gemprint-logo.svg"
            title="Gemprint"
            width={200}
            height={40}
          />
        </Link>
        <MainMenu menuItems={menuItems} />
      </nav>
    </motion.header>
  );
};
