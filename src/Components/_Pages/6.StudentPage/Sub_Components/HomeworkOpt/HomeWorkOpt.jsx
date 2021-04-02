import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//ASSETS IMPORTS
import { CircLogo } from "Components/_Main/Assets/Assets";

//STYLE IMPORTS
import "./HomeWorkOpt.scss";

export default function HomeWorkOpt() {
  const hwInfo = useSelector((state) => state.user.user.studentInfo.homeworks);

  return (
    <div className="hw-opt student-menu-opt">
      <p className="student-menu-opt-title">HomeWorks</p>
      <div className="bg-opt">
        <CircLogo />
        <div className="logo-ray"></div>
        <div className="logo-ray"></div>
      </div>
      <div className="last-hw">
        <h6>Last HomeWork</h6>
        <div className="last-hw-container">
          <div className="task">
            <i className="fas fa-book-open"></i>
            <button>View Task</button>
          </div>
          <div className="last-hw-info">
            <p>Module: {hwInfo[hwInfo.length - 1].module}</p>
            <p>Day : {hwInfo[hwInfo.length - 1].day}</p>
            <p>
              Completed ? {hwInfo[hwInfo.length - 1].completed ? "yes" : "no"}
            </p>
          </div>
        </div>
      </div>
      <div className="last5-hw">
        <p>Last 5 homeworks</p>
        <div className="hw-bars">
          {hwInfo.length > 5 ? (
            hwInfo.slice(-5).map((hw, hwI) => {
              return (
                <div
                  className="hw-bar"
                  key={hwI}
                  style={{ backgroundColor: hw.completed ? "#00ff84" : "red" }}
                ></div>
              );
            })
          ) : hwInfo.length > 0 && hwInfo.length < 5 ? (
            hwInfo.map((hw, hwI) => {
              return (
                <div
                  className="hw-bar"
                  key={hwI}
                  style={{ backgroundColor: hw.completed ? "#00ff84" : "red" }}
                ></div>
              );
            })
          ) : (
            <p>No homeworks</p>
          )}
        </div>
      </div>
    </div>
  );
}
