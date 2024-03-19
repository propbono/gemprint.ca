"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import { MenuItems } from "../types";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

// TODO: replace with navigation menu from shadcn
export const MainMenu = ({ menuItems }: MenuItems) => {
  const isDesktop = useMediaQuery("(min-width:768px)"); // md: breakpoint in tailwind
  const pathname = usePathname();

  return isDesktop ? (
    <DesktopMenu menuItems={menuItems} path={pathname} />
  ) : (
    <MobileMenu menuItems={menuItems} path={pathname} />
  );
};
