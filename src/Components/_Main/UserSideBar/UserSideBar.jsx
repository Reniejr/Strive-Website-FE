import React from "react";

//STYLE IMPORTS
import "./UserSideBar.scss";

export default function UserSideBar({ values }) {
  const upperList = values.filter((v, vI) => v.id !== "logout");
  const logoutValue = values.filter((v, vI) => v.id === "logout")[0];

  return (
    <nav className="user-sidebar">
      <ul>
        {upperList.map((v, vI) => {
          return (
            <li key={vI}>
              <div className={`menu-icon ${v.id}`}>
                {v.icon} <span>{v.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={`menu-icon ${logoutValue.id}`}>
        {logoutValue.icon} <span>{logoutValue.name}</span>
      </div>
    </nav>
  );
}
