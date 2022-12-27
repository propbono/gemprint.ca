import React from "react";

export interface IContactCardProps {
  children: Array<React.ReactElement> | React.ReactElement;
  title: React.ReactElement;
  text: string;
}

const styles = {
  wrapper:
    "flex flex-col mb-10 overflow-hidden transition duration-500 ease-in-out bg-white rounded-lg shadow-lg  lg:flex-row group lg:hover:scale-105",
  left: "items-center justify-center lg:justify-start lg:flex lg:w-1/3 lg:bg-secondary",
  text: "mt-2 text-secondary lg:text-gray-400",
  right:
    "flex flex-col items-center justify-center w-full pb-6 transition duration-1000 ease-in-out lg:py-0 lg:w-2/3 lg:border-b-8 border-secondary lg:group-hover:border-primary",
};

export const ContactCard: React.FC<IContactCardProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className="px-6 py-3">
          {props.title}
          <p className={styles.text}>{props.text}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className="w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] lg:py-16">{props.children}</div>
      </div>
    </div>
  );
};

export default ContactCard;
