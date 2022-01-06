import React from "react";

export const Section = ({ children }) => {
  return (
    <section className="relative min-h-screen pt-4 sm:pt-10 md:pt-32 lg:pt-36">
      {children}
    </section>
  );
};
