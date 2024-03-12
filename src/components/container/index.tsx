import { cn } from "@/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("container relative mx-auto px-4", className)}>
      {children}
    </div>
  );
};
