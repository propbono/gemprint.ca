import { cn } from "@/utils/cn";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ as = "h2", children, className }: HeadingProps) => {
  if (as === "h1") {
    return (
      <h1
        className={cn(
          "mb-2 text-pretty text-center text-2xl font-bold text-primary lg:mb-4 lg:text-left lg:text-4xl",
          className
        )}
      >
        {children}
      </h1>
    );
  }
  if (as === "h2") {
    return (
      <h2
        className={cn(
          "mb-2 text-pretty text-center text-xl font-bold text-secondary-foreground lg:mb-4 lg:text-left lg:text-3xl",
          className
        )}
      >
        {children}
      </h2>
    );
  }
  if (as === "h3") {
    return (
      <h3
        className={cn(
          "mb-5 text-pretty text-center text-lg font-bold text-secondary-foreground lg:text-left lg:text-2xl",
          className
        )}
      >
        {children}
      </h3>
    );
  }
  if (as === "h4") {
    return (
      <h4
        className={cn(
          "mb-5 text-pretty text-center text-base font-semibold text-secondary-foreground lg:text-left lg:text-lg",
          className
        )}
      >
        {children}
      </h4>
    );
  }
};
