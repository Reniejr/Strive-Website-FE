import React from "react";

//PERSONAL COMPONENTS IMPORTS
import LogoBalls from "../Sub_Components/Logo_Balls/LogoBalls";

//STYLE IMPORTS
import "./BG01.scss";

export default function BG01() {
  return (
    <div className="bg-01">
      <LogoBalls qty={5} />
    </div>
  );
}
