import React from "react";


const styles = {
  footerSection: "bg-secondary text-gray-100 text-lg",
  footerWrapper: "flex text-center md:text-left flex-col-reverse w-full md:w-auto md:justify-between md:flex-row",
  socialLinks:
    "hover:text-primary md:before:content-['/'] md:before:opacity-40 md:before:mr-4 text-decoration-none my-2 md:my-0 md:ml-4",
  socialMenu:
    "flex flex-col md:flex-row items-center md:justify-end mb-3 md:mb-0",
};


export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container py-6">
        <div className={styles.footerWrapper}>
          <div>
            <p>© 2017-2021 Gemprint</p>
          </div>
          <div>
            <ul className={styles.socialMenu}>
              <li className={styles.socialLinks}>
                <a href="https://www.facebook.com/GemprintGTA">Facebook</a>
              </li>
              <li className={styles.socialLinks}>
                <a href="https://www.instagram.com/gemprint_gta/">Instagram</a>
              </li>
              <li className={styles.socialLinks}>
                <a href="https://twitter.com/GemprintTheSix">Twitter</a>
              </li>
              <li className={styles.socialLinks}>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
