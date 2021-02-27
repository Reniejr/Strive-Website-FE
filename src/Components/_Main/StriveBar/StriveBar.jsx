import React from "react";

//PERSONAL COMPONENTS IMPORTS
import Account from "./Sub_Components/Account/Account";
import MenuBar from "./Sub_Components/MenuBar/MenuBar";

//STYLE IMPORTS
import "./StriveBar.scss";

export default function StriveBar() {
  return (
    <nav id="strive-bar">
      <MenuBar />
      <Account />
    </nav>
  );
}
