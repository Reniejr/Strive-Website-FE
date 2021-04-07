import React from "react";
import { useHistory } from "react-router-dom";

//UTILITIES IMPORTS
import { logoutFetch } from "Components/_Utilities";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//ASSETS IMPORTS
import texture from "./assets/wood-texture.jpg";

//STYLE IMPORTS
import "./HeaderCard.scss";

export default function HeaderCard({ functions }) {
  const userState = useSelector((state) => state.user.user);
  const history = useHistory();

  const logout = async () => {
    history.push("/");
    await logoutFetch();
  };

  return (
    <div className="header-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600.01 800"
        className="bg-logo"
      >
        <g id="Livello_2" data-name="Livello 2">
          <g id="Livello_1-2" data-name="Livello 1">
            <path d="M536.55.21c27.17,0,53.92,21.32,63.45,50.43,0,67.18,0,128.42-.54,194.74.42,0-.42,0,0,0-79-.19-155.74-2.17-234.74,2.83-18,1-36,10-45,27l-3,3c-4,7-8,13-12,20-2,3-2,5-4,8-3,4-5,8-8,12-1,1-1,3-2,5-2,3-4,5-6,8-30,52-59.25,96.32-90.25,146.32-13,7-27.62,5.59-37.75-9.32-2.34-3.44-3.79-6.82-7-12-15.79-25.53-28-50-42-76-6-12-12-22-18-34-7-11-13-22-20-33-8-15-20-29-20-47,42-80,90-158,133-238A93.37,93.37,0,0,1,235.62,0Z" />
            <path d="M600,437.45V623.32L495.74,800H134.21L0,578.38c.77-2.78-3.4-24.76,18.81-23.74,1.11.05,2.28-.32,3.57-.26l306.9.26c17.68-4.1,36-6.38,54.12-36a12.56,12.56,0,0,0,1-2.81L507,313.62c.95-.43,10.21-15.32,24.51,0a13.87,13.87,0,0,1,2.3,3.06Z" />
          </g>
        </g>
      </svg>
      <img src={texture} alt="" className="card-texture" />
      <header>
        <img src={userState.profile} alt="" className="profile" />
        <div className="basic-info">
          <h3>
            {userState.lastName} {userState.firstName}
          </h3>
          <p>id: {userState._id}</p>
        </div>
      </header>
      <div className="info">
        <h4>{userState.occupation}</h4>
      </div>
      {userState.role === "admin" || userState.role === "teacher" ? (
        <div className="controls">
          <i
            className="fas fa-user-edit"
            onClick={() => functions.showModal(true)}
          ></i>
          <i className="fas fa-sign-out-alt" onClick={() => logout()}></i>
        </div>
      ) : null}
    </div>
  );
}
