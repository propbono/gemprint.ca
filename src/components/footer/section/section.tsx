import { cn } from "@/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export const Section = ({ children, title, className }: SectionProps) => {
  return (
    <section id={title} className={cn("relative", className)}>
      {children}
    </section>
  );
};
