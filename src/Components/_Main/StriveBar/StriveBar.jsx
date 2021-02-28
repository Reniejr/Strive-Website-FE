import React from "react";
import { withRouter } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import Account from "./Sub_Components/Account/Account";
import MenuBar from "./Sub_Components/MenuBar/MenuBar";

//STYLE IMPORTS
import "./StriveBar.scss";

function StriveBar(props) {
  const style = () => {
    let isDisplay;
    if (
      props.location.pathname === "/" ||
      props.location.pathname === "/about/"
    ) {
      isDisplay = {
        display: "",
      };
    } else {
      isDisplay = {
        display: "none",
      };
    }
    return isDisplay;
  };

  return (
    <nav id="strive-bar" style={style()}>
      <MenuBar />
      <Account />
    </nav>
  );
}
export default withRouter(StriveBar);
