import React, { useState } from "react";

//DATA IMPORTS
import { settingsValues } from "./values";
import texture from "../HeaderCard/assets/wood-texture.jpg";

//STYLE IMPORTS
import "./PageSettings.scss";

export default function PageSettings() {
  const [icon, setIcon] = useState("");
  return (
    <div className="page-settings">
      {settingsValues.map((set, setI) => {
        return (
          <div
            className="setting"
            onMouseOver={() => setIcon(setI)}
            onMouseLeave={() => setIcon("")}
            style={{
              border: icon === setI ? `3px solid ${set.color}` : "",
            }}
          >
            <p>{set.id.replaceAll("-", " ")}</p>
            <i
              className={`${icon === setI && icon !== 3 ? "far" : "fas"} ${
                set.icon
              }`}
              style={{
                color: set.color,
              }}
            ></i>
            <img src={texture} alt="" />
          </div>
        );
      })}
    </div>
  );
}
