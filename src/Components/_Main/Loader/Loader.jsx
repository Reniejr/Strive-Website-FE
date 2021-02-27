import React from "react";

//STYLE IMPORTS
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <div className="strive-loader">
        <div className="circle"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <img src="https://i.ibb.co/vzCDJ2R/strive2-Inv.png" alt="" />
        <img src="https://i.ibb.co/SJJC3Bp/strive1-Inv.png" alt="" />
      </div>
    </div>
  );
}
