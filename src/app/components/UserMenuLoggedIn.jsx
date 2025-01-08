import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../../styles/user-menu-logged-in.module.css";
import {
  IoMdPerson,
  IoMdArrowDropdown,
  IoMdSettings,
  IoMdStar,
} from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import { MdOutlineShoppingBag, MdLogout } from "react-icons/md";

export default function UserMenuLoggedIn() {
  const userName = "majidneo";
  const wallet = 100;
  const TPoints = 10;
  const menuItems = [
    { id: "item-1", title: "profile", icon: <IoMdPerson />, path: "/" },
    {
      id: "item-2",
      title: "orders",
      icon: <MdOutlineShoppingBag />,
      path: "/",
    },
    { id: "item-3", title: "lists", icon: <IoListSharp />, path: "/" },
    { id: "item-4", title: "settings", icon: <IoMdSettings />, path: "/" },
    { id: "item-5", title: "sign out", icon: <MdLogout />, path: "/" },
  ];
  const [openUserMenu, setOpenUserMenu] = useState(false);
  return (
    <div className={`${styles["container"]} `}>
      <button
        onClick={() => {
          setOpenUserMenu((prevState) => !prevState);
        }}
        className={`${styles["user-button"]}`}
      >
        <IoMdPerson />
        <IoMdArrowDropdown />
      </button>
      {/* `${styles["user-menu"]} ${styles["display-hidden"]}` */}
      <div
        className={
          openUserMenu
            ? `${styles["user-menu"]}`
            : `${styles["display-hidden"]}`
        }
      >
        <div className={`${styles["user-infos"]}`}>
          <h2 className={`${styles["user-name"]}`}>
            <span>user : </span>
            <span>{userName}</span>
          </h2>
          <h2 className={`${styles["wallet"]}`}>
            <span>wallet :</span>
            <span>$ {wallet}</span>
          </h2>
          <h2 className={`${styles["t-points"]}`}>
            <span>t-points : </span>
            <span>
              {TPoints} <IoMdStar className="text-[16px]" />
            </span>
          </h2>
        </div>
        <div className={`${styles["menu-options"]} `}>
          {menuItems.map((item) => (
            <>
              <Link to={"/"} key={item.id}>
                <div className={`${styles["item-values"]}`}>
                  <span className={`${styles["items-icon"]}`}>{item.icon}</span>
                  <span className={`${styles["items-title"]}`}>
                    {item.title}
                  </span>
                </div>
                <div className={`${styles["arrow-icon"]}`}>
                  <RiArrowRightSLine />
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
