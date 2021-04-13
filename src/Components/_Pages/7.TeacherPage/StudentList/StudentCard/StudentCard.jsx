import React, { useState, useEffect } from "react";

//STYLE IMPORTS
import "./StudentCard.scss";

export default function StudentCard({ state }) {
  const [lastExam, setLastExam] = useState(null);
  const [lastHw, setLastHw] = useState(null);
  const [lastLesson, setLastLesson] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    setStudent(state.student);
    setLastExam(
      state.student.studentInfo.exams[
        state.student.studentInfo.exams.length - 1
      ]
    );
    setLastHw(
      state.student.studentInfo.homeworks[
        state.student.studentInfo.homeworks.length - 1
      ]
    );
    setLastLesson(
      state.student.studentInfo.attendance[
        state.student.studentInfo.attendance.length - 1
      ]
    );
  }, [state.student]);

  return (
    <div className="student-card-teacher">
      {student !== null ? (
        <>
          <div className="basic-info">
            <img src={student.profile} alt="" />
            <div className="infos">
              <p>
                {student.firstName} {student.lastName}
              </p>
              <p>
                Github :{" "}
                <a
                  href={`https://github.com/${student.githubUsername}`}
                  target="_blank"
                >
                  https://github.com/{student.githubUsername}
                </a>
              </p>
            </div>
          </div>
          <div className="status">
            <p>Last Benchmark</p>
            <table>
              <tr>
                <th>Benchmark Name</th>
                <th>Benchmark Type</th>
                <th>Results</th>
              </tr>
              <tr>
                <td>{lastExam.examName}</td>
                <td>{lastExam.examType}</td>
                <td>{(lastExam.points * 100) / lastExam.quests.length}%</td>
              </tr>
            </table>
            <p>Last Lesson</p>
            <table>
              <tr>
                <th>Module - Day</th>
                <th>Topic</th>
                <th>Present</th>
              </tr>
              <tr>
                <td>
                  {lastLesson.module} - {lastLesson.day}
                </td>
                <td>{lastLesson.topic}</td>
                <td>
                  <div
                    className="presence-span"
                    style={{
                      backgroundColor: lastLesson.present ? "#00ff84" : "red",
                    }}
                  ></div>
                </td>
              </tr>
            </table>
            <p>Last Homework</p>
            <table>
              <tr>
                <th>Module - Day</th>
                <th>Task</th>
                <th>Completed</th>
              </tr>
              <tr>
                <td>
                  {lastHw.module} - {lastHw.day}
                </td>
                <td>{lastHw.githubLink ? lastHw.githubLink : "No Repo"}</td>
                <td>
                  <div
                    className="hw-completed"
                    style={{
                      backgroundColor: lastHw.complete ? "#00ff84" : "red",
                    }}
                  ></div>
                </td>
              </tr>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
}
