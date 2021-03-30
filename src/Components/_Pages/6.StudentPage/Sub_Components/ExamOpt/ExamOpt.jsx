import React, { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
//REDUX IMPORTS
import { useSelector } from "react-redux";

//VALUES IMPORTS
import { percentStyle } from "./values";

//PERSONAL COMPONENTS IMPORTS
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

//STYLE IMPORTS
import "./ExamOpt.scss";

export default function ExamOpt() {
  const examInfo = useSelector(
    (state) =>
      state.user.user.studentInfo.exams[
        state.user.user.studentInfo.exams.length - 1
      ]
  );
  const [examResult, setExamResult] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setExamResult((examInfo.points * 100) / examInfo.quests.length);
    }, 1000);
  }, []);

  return (
    <div id="exam-opt" className="student-menu-opt">
      <div className="bg-opt"></div>
      <p className="student-menu-opt-title">Last Benchmark</p>
      <div className="last-benchmark">
        <CircularProgressbar
          value={examResult}
          text={`${examResult}%`}
          styles={buildStyles({
            textSize: "20px",
            pathColor: percentStyle(examResult),
            pathTransitionDuration: 5,
            textColor: percentStyle(examResult),
          })}
        />
        <div className="exam-basic-info">
          <h5>{examInfo.examName}</h5>
          <p>{examInfo.examType}</p>
        </div>
        <div className="exam-info">
          <p>
            ID: <span>{examInfo.examId}</span>
          </p>
          <p>
            Time: <span>{examInfo.time}</span>
          </p>
          <p>
            Quests: <span>{examInfo.quests.length}</span>
          </p>
          <p>
            Result: <span>{examInfo.points}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
