import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
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
