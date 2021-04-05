import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//PERSONAL COMPONENTS IMPORTS
import Task from "./Task/Task";
import AllHw from "./AllHw/AllHw";

//ASSETS IMPORTS
import { CircLogo } from "Components/_Main/Assets/Assets";

//STYLE IMPORTS
import "./HomeWorkOpt.scss";

export default function HomeWorkOpt() {
  const homeInfo = useSelector((state) =>
    state.user.user.studentInfo.homeworks.reverse()
  );
  const [hwInfo, setHwInfo] = useState(homeInfo);
  const [show, setShow] = useState(false);
  const [hw, setHw] = useState(hwInfo[0]);
  const [hwTitle, setHwTitle] = useState("Last HomeWork");
  const [showAllHw, setShowAllHw] = useState(false);

  useEffect(() => {
    setHwTitle(hw === hwInfo[0] ? "Last HomeWork" : `${hw.module} - ${hw.day}`);
  }, [hw]);

  useEffect(() => {
    setHwInfo(homeInfo);
  }, [homeInfo]);

  const viewTask = (homework) => {
    setHw(homework);
    setShow(true);
  };

  return (
    <div className="hw-opt student-menu-opt">
      <Task state={{ show, hw }} functions={{ handleClose: setShow }} />
      <AllHw
        state={{ show: showAllHw }}
        functions={{ handleClose: setShowAllHw, viewTask }}
      />
      <p className="student-menu-opt-title">HomeWorks</p>
      <div className="bg-opt">
        <CircLogo />
        <div className="logo-ray"></div>
        <div className="logo-ray"></div>
      </div>
      <div className="last-hw">
        <h6>{hwTitle}</h6>
        <div className="last-hw-container">
          <div className="task">
            <i className="fas fa-book-open"></i>
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              View Task
            </button>
          </div>
          <div className="last-hw-info">
            <div className="info">
              <p>
                Module : <span>{hw.module}</span>{" "}
              </p>
              <p>
                Day : <span>{hw.day}</span>{" "}
              </p>
            </div>
            <div className="info">
              <p>
                <i
                  class="fas fa-circle"
                  style={{ color: hw.completed ? "#00ff84" : "red" }}
                ></i>
                Completed : <span>{hw.completed ? "Yes" : "No"}</span>
              </p>
              <p>
                <i
                  class="fas fa-circle"
                  style={{ color: hw.githubRepo ? "#00ff84" : "red" }}
                ></i>
                Github :{" "}
                <span>
                  <a href={hw.githubRepo} target="_blank">
                    {hw.githubRepo ? hw.githubRepo : "No"}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="all-hw-show" onClick={() => setShowAllHw(true)}>
        View All HomewWorks
      </p>
      <div className="last5-hw">
        <p>Last 5 homeworks</p>
        <div className="hw-bars">
          {hwInfo.length > 5 ? (
            [...hwInfo]
              .slice(-5)
              .reverse()
              .map((how, howI) => {
                return (
                  <div
                    className="hw-bar"
                    key={howI}
                    style={{
                      backgroundColor: how.completed ? "#00ff84" : "red",
                    }}
                    onClick={() => setHw(how)}
                  ></div>
                );
              })
          ) : hwInfo.length > 0 && hwInfo.length < 5 ? (
            [...hwInfo].reverse().map((how, howI) => {
              return (
                <div
                  className="hw-bar"
                  key={howI}
                  style={{ backgroundColor: how.completed ? "#00ff84" : "red" }}
                  onClick={() => setHw(how)}
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
