import React, { useContext, useEffect, useState } from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { AuthCtx } from "../../services/contexts/AuthCtx";
export default function Dev() {
  const authContext = useContext(AuthCtx);
  const [openDevPanel, setOpenDevPanel] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  const handleDarkMode = () => {
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    setIsDarkMode(false);
  };
  const handleLogin = () => {
    authContext.setIsLogin(true);
    console.log(authContext.isLogin);
  };
  const handleLogOut = () => {
    authContext.setIsLogin(false);
    console.log(authContext.isLogin);
  };
  return (
    <div
      className={`fixed top-[50%] ${openDevPanel ? "right-[0px]" : "right-[-200px]"} flex items-center justify-start`}
    >
      <button
        className="text-[24px] text-secondary"
        onClick={() => {
          setOpenDevPanel(!openDevPanel);
        }}
      >
        <FaConnectdevelop />
      </button>
      <div className="flex w-[200px] flex-col items-center justify-center gap-2 rounded-lg border-2 border-surf-2 p-2">
        <div className="flex w-full items-center justify-around">
          <button
            className="w-[40%] rounded-lg bg-primary p-2 text-surf-1"
            onClick={handleDarkMode}
          >
            dark
          </button>
          <button
            className="w-[40%] rounded-lg bg-primary p-2 text-surf-1"
            onClick={handleLightMode}
          >
            light
          </button>
        </div>
        <div className="p2 flex w-full items-center justify-around">
          <button
            className="w-[40%] rounded-lg bg-primary p-2 text-surf-1"
            onClick={handleLogin}
          >
            login
          </button>
          <button
            className="w-[40%] rounded-lg bg-primary p-2 text-surf-1"
            onClick={handleLogOut}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
