import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//BOOTSTRAP IMPORTS
import { Modal } from "react-bootstrap";

//STYLE IMPORTS
import "./AllHw.scss";

export default function AllHw({ state, functions }) {
  const hwListInfo = useSelector(
    (state) => state.user.user.studentInfo.homeworks
  );

  const [hwList, setHwList] = useState(hwListInfo);
  const [modList, setModList] = useState([]);
  const [showMod, setShowMod] = useState(null);

  useEffect(() => {
    const array = [];
    hwListInfo.map((v) => {
      if (!array.includes(v.module)) {
        array.push(v.module);
      }
    });
    setModList(array);
  }, []);

  return (
    <Modal
      show={state.show}
      onHide={functions.handleClose}
      className="all-hw-list"
    >
      <Modal.Body>
        <h5>Homeworks List</h5>
        <button
          className="close-btn"
          onClick={() => functions.handleClose(false)}
        >
          x
        </button>
        <ul>
          {modList.map((mod, modI) => {
            return (
              <li key={modI}>
                <p
                  onClick={() => {
                    showMod === mod ? setShowMod(null) : setShowMod(mod);
                  }}
                >
                  Module : {mod}
                </p>
                <ul style={{ maxHeight: showMod === mod ? "100%" : "0px" }}>
                  {hwList
                    .filter((hw) => hw.module === mod)
                    .map((day, dayI) => {
                      return (
                        <li key={dayI}>
                          <div className="hw-info">
                            <span
                              className="complete-tag"
                              style={{
                                backgroundColor: day.completed
                                  ? "#00ff84"
                                  : "red",
                              }}
                            ></span>
                            {day.module} - {day.day}
                          </div>
                          <div className="repo-url">
                            <a
                              href={day.githubRepo ? day.githubRepo : "No repo"}
                              target="_blank"
                            >
                              {day.githubRepo ? day.githubRepo : "No repo"}
                            </a>
                          </div>
                          <button onClick={() => functions.viewTask(day)}>
                            View Task
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Modal.Body>
    </Modal>
  );
}
