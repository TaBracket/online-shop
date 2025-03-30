import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/app/header/NavMenu.css";
import {
  AiFillAppstore,
  AiFillHome,
  AiFillTool,
  AiFillPhone,
} from "react-icons/ai";
import { MdCompare } from "react-icons/md";
export default function NavMenu() {
  const navMenuItems = [
    {
      id: "nav-item-1",
      title: "products",
      path: "/products",
      icon: <AiFillAppstore />,
      itemHandler: function () {
        console.log("products");
      },
    },
    {
      id: "nav-item-2",
      title: "home",
      path: "/",
      icon: <AiFillHome />,
      itemHandler: () => {},
    },
    {
      id: "nav-item-3",
      title: "compare",
      path: "/products/compare",
      icon: <MdCompare />,
      itemHandler: () => {},
    },
    {
      id: "nav-item-4",
      title: "assembly",
      path: "/products/assembly",
      icon: <AiFillTool />,
      itemHandler: () => {},
    },
    {
      id: "nav-item-5",
      title: "contact-us",
      path: "/contact",
      icon: <AiFillPhone />,
      itemHandler: () => {},
    },
  ];
  return (
    <ul className="navMenu">
      {navMenuItems.map((item) => {
        return (
          <li
            key={item.id}
            className="navMenu--items"
            onMouseOver={item.itemHandler}
          >
            <Link to={item.path}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
