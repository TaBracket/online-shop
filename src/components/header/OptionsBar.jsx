import React, { useContext, useEffect } from "react";

import { AppCtx } from "../../services/contexts/AppCtx";
import Logo from "./Logo";
import Theme from "./Theme";
import Search from "./Search";

export default function OptionsBar() {
  const appContext = useContext(AppCtx);

  return (
    <div className="optionBar">
      <Logo />
      <Search />
      <Theme />
    </div>
  );
}
