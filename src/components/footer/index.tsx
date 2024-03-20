import { cn } from "@/utils/cn";
import { Container } from "../container";

type FooterProps = {
  links?: {
    title: string;
    href: string;
  }[];
  className?: string;
};

export const Footer = ({ links, className }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={cn("bg-foreground text-lg text-primary-foreground", className)}
    >
      <Container className="flex flex-col-reverse items-center py-6 md:flex-row  md:justify-between lg:py-6 ">
        <div>© 2017-{year} Gemprint</div>
        {links && (
          <div>
            <ul className="mb-3 flex flex-col items-center md:mb-0 md:flex-row md:justify-end">
              {links.map((link) => (
                <li
                  key={link.href}
                  className="text-decoration-none my-2 hover:text-primary md:my-0 md:ml-4 md:before:mr-4 md:before:opacity-40 md:before:content-['/']"
                >
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </footer>
  );
};
