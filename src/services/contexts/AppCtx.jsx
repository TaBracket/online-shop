import React, { useState } from "react";
export const AppCtx = React.createContext();

export default function AppCtxProvider({ children }) {
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeThemeHandler = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };
  // dark mode
  //main drawer
  const [openMainDrawer, setOpenMainDrawer] = useState(false);
  const openMainDrawerHandler = () => {
    setOpenMainDrawer(true);
    console.log("openDrawer");
  };
  const closeMainDrawerHandler = () => {
    setOpenMainDrawer(false);
    console.log("close drawer");
  };
  //main drawer
  //   userMenu
  const [openUserMenu, setOpenUserMenu] = useState(false);
  //   userMenu
  //   basket
  const [basketItems, setBasketItems] = useState([]);
  const [openBasketMenu, setOpenBasketMenu] = useState(false);
  //   basket
  //   users
  const users = [
    {
      id: "user-1",
      firstName: "majid",
      lastName: "hatami maleki",
      userName: "tabracket",
      birthDate: "1101989",
      email: "majidhatamimaleki@outlook.com",
      password: "123456",
      phoneNumber: "09218063950",
      isAdmin: false,
      accCreationDate: [1, 8, 2023],
      purchasedItemsAmount: 20,
      allPayedAmount: 200,
      isVip: true,
      vipDegree: 2,
      wallet: 500,
      fullName: function () {
        return `${this.firstName} ${this.lastName}`;
      },
      score: function () {
        if (this.purchasedItemsAmount > 10 || this.allPayedAmount > 100) {
          return 5;
        } else if (
          this.purchasedItemsAmount > 20 ||
          this.allPayedAmount > 200
        ) {
          return 10;
        } else if (
          this.purchasedItemsAmount > 50 &&
          this.allPayedAmount > 500
        ) {
          return 20;
        } else {
          return 1;
        }
      },
      rank: function () {
        const creationYear = this.accCreationDate[2];
        const presentYear = new Date().getFullYear();
        if (presentYear - creationYear == 0) {
          return "silver";
        } else if (presentYear - creationYear == 1) {
          return "gold";
        } else if (presentYear - creationYear == 2) {
          return "platinum";
        } else if (presentYear - creationYear > 3) {
          return "diamond";
        }
      },
      status: function () {
        if (this.isAdmin) {
          return "admin";
        } else if (this.isVip && this.vipDegree == 1) {
          return "vip";
        } else if (this.isVip && this.vipDegree == 2) {
          return "vip+";
        } else if (this.isVip && this.vipDegree === 3) {
          return "vip++";
        } else {
          return "normal";
        }
      },
    },
  ];
  //   users
  return (
    <AppCtx.Provider
      value={{
        isDarkMode,
        changeThemeHandler,
        // dark mode
        openMainDrawer,
        openMainDrawerHandler,
        closeMainDrawerHandler,
        // main drawer
        openUserMenu,
        setOpenUserMenu,
        // user menu
        basketItems,
        setBasketItems,
        openBasketMenu,
        setOpenBasketMenu,
        // basket
        users,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}
