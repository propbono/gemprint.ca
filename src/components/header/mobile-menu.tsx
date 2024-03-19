import { cn } from "@/utils/cn";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { HamburgerMenu } from "./hamburger-menu";
import { MenuItemsProps } from "./types";

export const MobileMenu = ({ menuItems, path }: MenuItemsProps) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <HamburgerMenu />
      </DrawerTrigger>
      <DrawerContent>
        <div
          className={cn(
            "mt-10 flex flex-col items-center justify-center gap-4"
          )}
        >
          {menuItems &&
            menuItems.map((menuItem) => {
              const isActive = menuItem.href === path;

              return (
                <Link
                  href={menuItem.href}
                  key={menuItem.href}
                  className={cn(
                    "w-full border-b-2 border-primary-foreground px-6 py-4 text-xl font-bold transition  duration-500 ease-in-out hover:border-primary/50 hover:text-primary",
                    {
                      "border-primary/80 text-primary": isActive,
                    }
                  )}
                >
                  {menuItem.title}
                </Link>
              );
            })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
