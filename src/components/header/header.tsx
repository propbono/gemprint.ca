"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/utils/cn";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DesktopMenu } from "./menu/desktop-menu";
import { MobileMenu } from "./menu/mobile-menu";
import type { HeaderProps } from "./types";

export const Header = ({ menuItems }: HeaderProps) => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const isMediumBreakpoint = useMediaQuery("(min-width:768px)"); // md: breakpoint in tailwind
  const isLargeBreakpoint = useMediaQuery("(min-width:1024px)"); // lg: breakpoint in tailwind

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 50 && isLargeBreakpoint) {
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
        {isMediumBreakpoint ? (
          <DesktopMenu menuItems={menuItems} path={pathname} />
        ) : (
          <MobileMenu menuItems={menuItems} path={pathname} />
        )}
      </nav>
    </motion.header>
  );
};
