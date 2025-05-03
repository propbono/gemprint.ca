import { cn } from "@/utils/cn";
import Link from "next/link";
import { Button } from "../../ui/button";
import type { MenuItemsProps } from "../types";

export const DesktopMenu = ({ menuItems, path }: MenuItemsProps) => {
  return (
    <div
      className={cn("flex flex-row items-center justify-center gap-4 lg:gap-6")}
    >
      {menuItems?.map((menuItem) => {
        const isActive =
          menuItem.href === path ||
          (menuItem.href !== "/" && path.includes(menuItem.href));

        // TODO: add a mega menu for items with children
        if (menuItem.asButton) {
          return (
            <Button
              asChild
              key={menuItem.href}
              variant="default"
              className={cn("bg-foreground py-6 text-xl font-bold", {
                "bg-primary text-primary-foreground": isActive,
              })}
            >
              <Link href={menuItem.href}>{menuItem.title}</Link>
            </Button>
          );
        }

        return (
          <Link
            href={menuItem.href}
            key={menuItem.href}
            className={cn(
              "block text-xl font-bold transition  duration-500 ease-in-out hover:text-primary mr-0",
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
  );
};
