import React from "react";
import Link from "next/link";

const MenuItem = ({ link, text, isActive, onActiveTab }) => {
  return (
    <li className="nav-item">
      <Link href={link} onClick={() => onActiveTab(text)}>
        <a className={`nav-link ${isActive ? "active" : ""}`}>{text}</a>
      </Link>
    </li>
  );
};

export default MenuItem;
