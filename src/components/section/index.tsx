import { cn } from "@/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      {children}
    </section>
  );
};
