import React, { useState } from "react";
import MenuItem from "./MenuItem";

import { links } from "@/pages/links";

const Menu = () => {
  const [selected, setSelected] = useState("Ho");

  const renderNavList = links.map((item) => {
    return (
      <MenuItem
        key={item.text}
        link={item.link}
        text={item.text}
        onActiveTab={onActiveTab}
        isActive={(item) => isActive(item)}
      />
    );
  });
  console.log("🚀 LOG:  => renderNavList => renderNavList", renderNavList);

  const isActive = (item) => {
    return selected === item.text;
  };
  const onActiveTab = (text) => {
    console.log(text);
    setSelected(text);
  };
  console.log("Selected: ", selected);
  return <ul className="navbar-nav">{renderNavList}</ul>;
};

export default Menu;
