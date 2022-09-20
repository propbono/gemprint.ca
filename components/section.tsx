import React, { ReactElement } from "react";

interface ISectionProps {
  children: ReactElement | Array<ReactElement>;
  title?: string;
  className?: string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  return (
    <section id={props.title} className={`relative ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
