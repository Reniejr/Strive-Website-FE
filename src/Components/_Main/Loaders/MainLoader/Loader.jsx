import React from "react";

//STYLE IMPORTS
import "./Loader.scss";

export default function Loader({ state }) {
  return (
    <div className="loader" style={{ display: state ? "" : "none" }}>
      <div className="strive-loader">
        <div className="circle-loader"></div>
        <div className="ray-loader"></div>
        <div className="ray-loader"></div>
        <img
          src="https://i.ibb.co/vzCDJ2R/strive2-Inv.png"
          alt=""
          className="loader-img"
        />
        <img
          src="https://i.ibb.co/SJJC3Bp/strive1-Inv.png"
          alt=""
          className="loader-img"
        />
      </div>
    </div>
  );
}
