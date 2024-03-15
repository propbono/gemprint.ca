import { cn } from "@/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container relative mx-auto max-w-6xl px-4 py-6 md:pt-24",
        className
      )}
    >
      {children}
    </div>
  );
};
