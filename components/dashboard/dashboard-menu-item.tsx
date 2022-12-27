import Link from "next/link";
import { useRouter } from "next/router";

export interface IDashboardMenuItemProps {
  children: React.ReactElement | Array<React.ReactElement | string>;
  href: string;
}
export const DashboardMenuItem: React.FC<IDashboardMenuItemProps> = (props) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href ? "text-primary" : "text-secondary";

  return (
    <li className="items-center">
      <Link href={props.href}>
        <a className={`text-xs uppercase py-3 font-bold flex items-center gap-2 ${isActive} hover:text-primary`}>
          {props.children}
        </a>
      </Link>
    </li>
  );
};
