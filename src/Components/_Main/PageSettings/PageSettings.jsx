import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//DATA IMPORTS
import { settingsValues } from "./values";
import texture from "../HeaderCard/assets/wood-texture.jpg";

//UTILITIES IMPORTS
import { settingFn, logoutFetch } from "./utilities";

//PERSONAL COMPONENTS IMPORTS
import EditProfile from "./Sub_Components/EditProfile/EditProfile";

//STYLE IMPORTS
import "./PageSettings.scss";

export default function PageSettings() {
  const [icon, setIcon] = useState("");
  const [show, setShow] = useState(false);

  const history = useHistory();

  const logout = async () => {
    history.push("/");
    await logoutFetch();
  };

  return (
    <div className="page-settings">
      <EditProfile
        state={{ show }}
        functions={{ handleClose: () => setShow(false) }}
      />
      {settingsValues.map((set, setI) => {
        return (
          <div
            key={setI}
            className="setting"
            onMouseOver={() => setIcon(setI)}
            onMouseLeave={() => setIcon("")}
            onClick={() => settingFn(set.id, setShow, null, null, logout)}
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
