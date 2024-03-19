export type HeaderProps = {
  menuItems: MenuItem[];
  className?: string;
};

export type MainMenuItemProps = {
  menuItems: MenuItem[];
  isDesktop: boolean;
};
export type MenuItem = {
  title: string;
  href: string;
  asButton?: boolean;
};

export type MenuItemsProps = {
  menuItems: MenuItem[];
  path: string;
};
