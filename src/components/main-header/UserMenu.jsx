import React, { useContext } from "react";
import "./../../styles/main-header/user-menu.css";
import { AppCtx } from "../../services/contexts/AppCtx";
import { Link } from "react-router-dom";
import {
  FaUserCog,
  FaList,
  FaHeart,
  FaDollarSign,
  FaComments,
} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";

export default function UserMenu() {
  const appContext = useContext(AppCtx);
  const { users } = appContext;
  const userMenuLinks = [
    {
      id: "item1",
      title: "profile",
      icon: <FaUserCog />,
      path: "/",
    },
    {
      id: "item2",
      title: "orders",
      icon: <FaList />,
      path: "/",
    },
    {
      id: "item3",
      title: "favorite lists",
      icon: <FaHeart />,
      path: "/",
    },
    {
      id: "item4",
      title: "transactions",
      icon: <FaDollarSign />,
      path: "/",
    },
    {
      id: "item5",
      title: "comments",
      icon: <FaComments />,
      path: "/",
    },
  ];
  const { openUserMenu } = appContext;
  return (
    <div
      className={`userMenu ${openUserMenu ? "openUserMenu" : "closeUserMenu"}`}
    >
      <div className="userMenu--infos">
        <div className="userMenu_infos--items userMenu_infos--name">
          <span>name : </span>
          <span>{users[0].userName}</span>
        </div>
        <div className="userMenu_infos--items userMenu_infos--status">
          <span>status : </span>
          <span>{users[0].status()}</span>
        </div>
        <div className="userMenu_infos--items userMenu_infos--score">
          <span>score : </span>
          <span>{users[0].score()}</span>
        </div>
        <div className="userMenu_infos--items userMenu_infos--rank">
          <span>rank : </span>
          <span>{users[0].rank()}</span>
        </div>
        <div className="userMenu_infos--items userMenu_infos--wallet">
          <span>wallet : </span>
          <span>{users[0].wallet} $</span>
        </div>
      </div>
      <div className="userMenu--interactions">
        {userMenuLinks.map((link) => (
          <>
            <Link key={link.id} to={link.path}>
              <span>{link.icon}</span>
              <span>{link.title}</span>
              <span>
                <IoMdArrowDropright />
              </span>
            </Link>
          </>
        ))}
        <button className="userMenu_interactions--logOutBtn">
          logout <IoLogOut />
        </button>
      </div>
    </div>
  );
}
