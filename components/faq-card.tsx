import React from "react";

const styles = {
  text: "p-6 leading-relaxed text-lg",
};

export const FAQCard = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default FAQCard;
