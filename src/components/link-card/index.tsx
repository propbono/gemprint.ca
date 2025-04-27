import { cn } from "@/utils/cn";
import Link from "next/link";
import type { ReactNode } from "react";
import { Heading } from "../heading";

type LinkCardProps = {
  className?: string;
  card: LinkCard;
};

export type LinkCard = {
  title: string;
  description: string;
  icon: ReactNode;
  to?: string;
};

export const LinkCard = ({ card, className }: LinkCardProps) => {
  const styles = {
    wrapper: cn(
      "relative select-none overflow-hidden rounded-lg border bg-white p-2 hover:shadow hover:shadow-primary/50",
      className
    ),
  };
  if (card.to) {
    return (
      <Link href={card.to} className={styles.wrapper}>
        <Card card={card} />
      </Link>
    );
  }
  return (
    <div className={styles.wrapper}>
      <Card card={card} />
    </div>
  );
};

const Card = ({ card }: { card: LinkCard }) => (
  <div className="flex flex-col space-y-2 rounded-md p-6">
    <div className="mb-2 flex items-center justify-start gap-2">
      {card.icon}
      <Heading as="h4" className="mb-0">
        {card.title}
      </Heading>
    </div>

    <p className="text-sm leading-relaxed text-muted-foreground">
      {card.description}{" "}
    </p>
  </div>
);
