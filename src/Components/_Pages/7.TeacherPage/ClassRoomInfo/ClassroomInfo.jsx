import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//UTILITIES IMPORTS
import { classRoomListFetch } from "Components/_Utilities";

//VALUES IMPORTS
import { activeBatchKeys, activeDayKeys } from "../values";

//PERSONAL COMPONENTS IMPORTS
import BG01 from "Components/_Main/Backgrounds/BG01/BG01";
import AddDayForm from "./AddDayForm/AddDayForm";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./ClassRoomInfo.scss";

export default function ClassroomInfo({ state }) {
  const userInfo = useSelector((state) => state.user.user);

  const [classList, setClassList] = useState([]);
  const [activeBatch, setActiveBatch] = useState(activeBatchKeys);
  const [activeDay, setActiveDay] = useState(activeDayKeys);
  const [addLesson, setAddLesson] = useState(false);

  useEffect(() => {
    (async () => {
      let list = await classRoomListFetch();
      console.log(list);
      list = list.filter((batch) => batch.course === userInfo.course);
      setClassList(list);
      const lastBatch = list[list.length - 1];
      setActiveBatch(lastBatch);
    })();
  }, []);

  return (
    <div
      className="classroom-info teacher-page"
      style={state.style(state.page === "classroom" ? true : false)}
    >
      <BG01 />
      <Row>
        <Col xs={12} md={3} className="batch-detail">
          <h5>Batch Detail :</h5>
          <ul>
            <li>
              ID: <span>{activeBatch._id}</span>
            </li>
            <li>
              Name: <span>{activeBatch.name}</span>
            </li>
            <li>
              Students: <span>{activeBatch.studentList.length}</span>
            </li>
            <li>
              Status: <span>{activeBatch.status}</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={3} className="day-list">
          <h5>Modules & Days</h5>
          <ul>
            <li onClick={() => setAddLesson(true)}>
              <i className="fas fa-plus-circle"></i>
            </li>
            {activeBatch.lessons.map((l, lI) => {
              return (
                <li key={lI}>
                  <span>
                    Module: <span>{l.module}</span>
                  </span>
                  <span>
                    Day: <span>{l.day}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col xs={12} md={6} className="day-detail">
          <h5>Lesson Details</h5>
          <AddDayForm
            state={{ batch: activeBatch, show: addLesson }}
            functions={{ show: setAddLesson }}
          />
        </Col>
      </Row>
      <div className="batch-list">
        Batch List
        <ul>
          {classList.map((cl, clI) => {
            return <li key={clI}>Batch</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
