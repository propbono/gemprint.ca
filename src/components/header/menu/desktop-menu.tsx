import { cn } from "@/utils/cn";
import Link from "next/link";
import { Button } from "../../ui/button";
import type { MenuItemsProps } from "../types";

export const DesktopMenu = ({ menuItems, path }: MenuItemsProps) => {
  return (
    <div className={cn("flex flex-row items-center justify-center gap-4")}>
      {menuItems?.map((menuItem) => {
        const isActive = menuItem.href === path;

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
              "mr-6 block text-xl font-bold transition  duration-500 ease-in-out hover:text-primary",
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
