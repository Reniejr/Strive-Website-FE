import React, { useState, useEffect } from "react";

//UTILITIES IMPORTS
import { getBenchmarkList } from "../../utilities";

//STYLE IMPORTS
import "./SideBar.scss";

export default function SideBar({ state, functions }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let list = await getBenchmarkList();
      setList(list);
    })();
  }, []);

  return (
    <div
      className="admin-exam-sidebar"
      style={{ marginLeft: state.sideBar ? "" : "-400px" }}
    >
      <div className="toggler" onClick={functions.showSide}></div>
      <div className="benchmark-list">
        <h2>Choose which exam</h2>
        <div className="search-container">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="search-options">
          <span>Filters</span>
          <span>Sort</span>
        </div>
        <ul>
          {list.map((exam) => {
            return (
              <li key={exam._id} onClick={() => functions.getExam(exam._id)}>
                {exam.roomName}
                <span
                  style={{
                    borderColor:
                      exam.status === "Completed" ? "#00ff84" : "red",
                  }}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="participants-list"></div>
    </div>
  );
}
