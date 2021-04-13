import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//VALUES IMPORTS
import { percentStyle } from "Components/_Utilities/values";

//PERSONAL COMPONENTS IMPORTS
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

//STYLE IMPORTS
import "./AttendanceOpt.scss";

export default function AttendanceOpt() {
  const studentInfo = useSelector((state) => state.user.user.studentInfo);

  const [lastLesson, setLastLesson] = useState(null);
  const [allLessons, setAllLessons] = useState([]);
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    const lessons = studentInfo.attendance;
    setAllLessons(lessons);
    const lastLesson = lessons[lessons.length - 1];
    setLastLesson(lastLesson);
    const attendance = lessons.filter((l) => l.present === true);
    const percentage = (attendance.length * 100) / lessons.length;
    setPercentage(percentage);
  }, []);

  return (
    <div className="attendance-opt student-menu-opt">
      <div className="bg-opt"></div>
      <p className="student-menu-opt-title">Attendance</p>
      <img
        src="https://i.ibb.co/q0rJxzc/zoom.png"
        alt=""
        className="logo-sub-opt"
      />
      {lastLesson && allLessons ? (
        <>
          <h6>
            Last lesson{" "}
            <span
              className="presence"
              style={{
                backgroundColor: lastLesson.present ? "#00ff84" : "red",
              }}
            ></span>
          </h6>
          <div className="last-lesson">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: "20px",
                pathColor: percentStyle(percentage),
                pathTransitionDuration: 5,
                textColor: percentStyle(percentage),
              })}
            />
            <div className="lesson-info">
              <div className="topic-day">
                <p>
                  Module : <span>{lastLesson.module}</span>
                </p>
                <p>
                  Day : <span>{lastLesson.day}</span>
                </p>
                <p>
                  Topic : <span>{lastLesson.topic}</span>
                </p>
              </div>
              <div className="lesson-links">
                <p>
                  LiveLink : <span>{lastLesson.liveLink}</span>
                </p>
                <p>
                  RecordedLink : <span>{lastLesson.recordedLink}</span>
                </p>
                <p>
                  CodeLink : <span>{lastLesson.codeLink}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="all-lessons">
            <p>Last 5 Lessons</p>
            <div className="attendance-list">
              {allLessons.length > 5
                ? allLessons.slice(-5).map((l, lI) => {
                    return (
                      <div
                        key={lI}
                        className="attendance-span"
                        style={{
                          backgroundColor: l.present ? "#00ff84" : "red",
                        }}
                      ></div>
                    );
                  })
                : allLessons.map((l, lI) => {
                    return (
                      <div
                        key={lI}
                        className="attendance-span"
                        style={{
                          backgroundColor: l.present ? "#00ff84" : "red",
                        }}
                      ></div>
                    );
                  })}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
