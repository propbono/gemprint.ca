import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

const styles = {
  card: "relative flex flex-col w-full overflow-hidden transition duration-500 ease-linear bg-white rounded shadow-lg group lg:hover:scale-105",
  img: "w-full transition duration-500 ease-in-out rounded shadow-md opacity-80 group-hover:opacity-100",
  content: "h-full px-6 py-4",
  title: "mb-2 text-xl font-bold text-primary",
  text: "text-lg leading-relaxed text-secondary",
};

export interface IServiceCardProps {
  image: StaticImageData;
  alt: string;
  title: React.ReactElement | string;
  content: React.ReactElement | string;
}

export const ServiceCard: React.FC<IServiceCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={props.image}
        alt={props.alt}
        placeholder="blur"
        objectFit="cover"
        width={300}
        height={300}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
