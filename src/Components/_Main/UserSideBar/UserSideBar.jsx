import React from "react";
import { useHistory } from "react-router-dom";

//UTILITIES IMPORTS
import { logoutFetch } from "../PageSettings/utilities";

//STYLE IMPORTS
import "./UserSideBar.scss";

export default function UserSideBar({ values, functions, state }) {
  const upperList = values.filter((v, vI) => v.id !== "logout");
  const logoutValue = values.filter((v, vI) => v.id === "logout")[0];

  const history = useHistory();

  const logout = async () => {
    history.push("/");
    await logoutFetch();
  };

  return (
    <nav className="user-sidebar">
      <ul>
        {upperList.map((v, vI) => {
          return (
            <li key={vI}>
              <div
                className={`menu-icon ${v.id}`}
                onClick={() => functions.setPage(v.id)}
                style={{
                  backgroundColor:
                    state.page === v.id ? "#00ff84" : "transparent",
                  fill: state.page === v.id ? "black" : "white",
                }}
              >
                {v.icon}{" "}
                <span style={{ color: state.page === v.id ? "black" : "" }}>
                  {v.name}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={`menu-icon ${logoutValue.id}`} onClick={() => logout()}>
        {logoutValue.icon} <span>{logoutValue.name}</span>
      </div>
    </nav>
  );
}
