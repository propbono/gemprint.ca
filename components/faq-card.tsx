import React from "react";

const styles = {
  wrapper:
    "flex flex-col mb-10 overflow-hidden transition duration-500 ease-in-out bg-white rounded-lg shadow-lg  lg:flex-row group lg:hover:scale-105",
  left: "items-center lg:flex lg:w-1/3 lg:bg-secondary",
  title: "text-2xl font-bold text-secondary lg:text-gray-100",
  mixedTitle: "text-4xl font-extrabold text-secondary lg:text-gray-100 mb-5 lg:mb-10 leading-tight",
  mixedTitlePrimary: "text-primary",
  text: "mt-2 text-secondary lg:text-gray-400 p-6 leading-relaxed text-lg",
  right:
    "flex flex-col items-center justify-center w-full pb-6 transition duration-1000 ease-in-out lg:py-0 lg:w-2/3 lg:border-b-8 border-secondary lg:group-hover:border-primary",
};

export interface IFAQCardProps {
  title: string;
  content: string;
}

export const FAQCard: React.FC<IFAQCardProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className="px-12 py-6">
          <h2 className={styles.title}>{props.title}</h2>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.text}>{props.content}</p>
      </div>
    </div>
  );
};

export default FAQCard;
