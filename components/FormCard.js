import React from "react";

const styles = {
  wrapper:
    "flex flex-col my-10 overflow-hidden transition duration-500 ease-in-out bg-white rounded-lg shadow-lg  lg:flex-row group lg:hover:scale-105",
  left: "items-center justify-center lg:justify-start lg:flex lg:w-1/3 lg:bg-secondary",
  title: "text-2xl font-bold text-secondary lg:text-gray-100",
  text: "mt-2 text-secondary lg:text-gray-400",
  right:
    "flex flex-col items-center justify-center w-full pb-6 transition duration-1000 ease-in-out lg:py-0 lg:w-2/3 lg:border-b-8 border-secondary lg:group-hover:border-primary",
 };

export const FormCard = ({ title, text, children }) => {
  return (
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className="px-6 py-6">
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.text}>{text}</p>
            </div>
          </div>
          <div className={styles.right}>{children}</div>
        </div>
  );
};
