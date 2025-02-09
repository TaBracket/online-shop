import React from "react";
import "./../../styles/components/nav-menu.css";
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdCompare } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function NavMenu() {
  const items = [
    { id: "item1", title: "home", icon: <IoMdHome />, path: "/" },
    { id: "item2", title: "products", icon: <AiFillProduct />, path: "/" },
    {
      id: "item3",
      title: "smart assembly",
      icon: <HiMiniWrenchScrewdriver />,
      path: "/",
    },
    { id: "item4", title: "compare", icon: <MdCompare />, path: "/" },
    { id: "item5", title: "about", icon: <FaQuestionCircle />, path: "/" },
    { id: "item5", title: "support", icon: <BiSupport />, path: "/" },
  ];

  return (
    <div className="navMenu">
      {items.map((item) => (
        <>
          <div key={item.id} className="navMenu--items">
            <div className="navMenu_items--icon">{item.icon}</div>
            <h2 className="navMenu_items--title">{item.title}</h2>
          </div>
        </>
      ))}
    </div>
  );
}
