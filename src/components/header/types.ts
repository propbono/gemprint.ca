export type MenuItems = {
  menuItems: {
    title: string;
    href: string;
    asButton?: boolean;
  }[];
};

export type MenuItemsProps = MenuItems & {
  path: string;
};
