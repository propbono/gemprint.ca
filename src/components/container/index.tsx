import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container relative mx-auto w-full max-w-6xl px-4 py-6 lg:pt-32",
        className
      )}
    >
      {children}
    </div>
  );
};
