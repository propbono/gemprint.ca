import React from "react";
import Image from "next/image";

const styles = {
  card: "relative flex flex-col w-full overflow-hidden transition duration-500 ease-linear bg-white rounded shadow-lg lg:w-1/3 group lg:hover:scale-105",
  img: "w-full transition duration-500 ease-in-out rounded shadow-md opacity-80 group-hover:opacity-100",
  content: "h-full px-6 py-4",
  title: "mb-2 text-xl font-bold text-primary",
  text: "text-lg leading-relaxed text-secondary",
  button:
    "inline-flex items-center w-full px-4 py-2 font-bold bg-gray-200 rounded text-secondary hover:bg-primary hover:text-gray-100",
};

export const ServiceCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={card.img.path}
        alt={card.img.alt}
        placeholder="blur"
        objectFit="cover"
        width={300}
        height={300}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{card.title}</h2>
        <p className={styles.text}>{card.content}</p>
      </div>
      <button className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Read more...</span>
      </button>
    </div>
  );
};

export default ServiceCard;
