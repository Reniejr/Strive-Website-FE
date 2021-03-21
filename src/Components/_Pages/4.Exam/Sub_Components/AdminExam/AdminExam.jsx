import React, { useState, useEffect } from "react";
import io from "socket.io-client";

//DATA IMPORTS
import examInfo from "./data.json";
import { examDetails, answersObj } from "./values";

//UTILITIES IMPORTS
import { getExamDetails, getAnswerState } from "./utilities";

//PERSONAL COMPONENTS IMPORTS
import SideBar from "./Sub_Components/SideBar/SideBar";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./AdminExam.scss";

const connOpt = { transports: ["websocket", "polling"] };
const socket = io(process.env.REACT_APP_SOCKET_BASE_URL, connOpt);

export default function AdminExam() {
  const [exam, setExam] = useState(examDetails);
  const [sideBar, setSideBar] = useState(false);
  // const [answers, setAnswers] = useState([answersObj]);
  const [socketMsg, setSocketMsg] = useState([]);

  const setExamDetail = async (id) => {
    let result = await getExamDetails(id);
    let newExam = { ...exam };
    newExam.examName = result.roomName;
    newExam.examId = result._id;
    newExam.examType = result.roomType;
    newExam.questions = result.quests;
    newExam.time = result.time;
    newExam.maxResults = result.quests.length;
    newExam.requiredResults = (result.quests.length / 100) * 60;
    newExam.participants = result.membersList.length - 1;
    setExam(newExam);
    console.log(result.membersList);
    // let answerState = getAnswerState(result);
    // setAnswers(answerState);
    socket.emit("joinRoom", { username: "admin", roomName: result.roomName });
  };

  useEffect(() => {
    socket.on("message", (msg) => {
      setSocketMsg(msg);
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (exam.examId !== "") {
        let result = await getExamDetails(exam.examId);
        let updateScore = { ...exam };
        updateScore.questions = result.quests;
        setExam(updateScore);
      }
    })();
  }, [socketMsg]);

  return (
    <div id="admin-exam">
      <SideBar
        functions={{
          getExam: setExamDetail,
          showSide: () => setSideBar(!sideBar),
        }}
        state={{ sideBar: sideBar }}
      />
      <h2>Exam Monitoring</h2>
      <Row className="exam-detail">
        {examInfo.map((info, i) => {
          return (
            <Col xs={12} md={4} key={i}>
              <p>{info.info} :</p>
              <p>
                {Object.keys(exam).map((key, i) => {
                  let value = Object.values(exam);
                  if (key === info.id) {
                    if (key === "questions") {
                      // console.log(value);
                      return value[i].length;
                    } else {
                      return value[i];
                    }
                  }
                })}
              </p>
            </Col>
          );
        })}
      </Row>
      {exam.questions.length > 0
        ? exam.questions.map((quest, i) => {
            return (
              <Row key={i} className="monitor-quests">
                <p>Question n°{i + 1}</p>
                <p>{quest.text}</p>
                <div className="answerList">
                  {quest.answers.map((answer, index) => {
                    // let quest = answers.find((quest) => quest.question === i);
                    let counter = Math.floor(
                      (answer.score * 100) / exam.participants
                    );
                    // if (quest) {
                    //   let counterArray = quest.answers.filter(
                    //     (answer) => answer.answer === index
                    //   );
                    //   console.log(quest.answers.length);
                    //   counter = Math.floor(
                    //     (counterArray.length * 100) / quest.answers.length
                    //   );
                    // }
                    return (
                      <p
                        key={index}
                        style={{ color: answer.isCorrect ? "#00ff84" : "red" }}
                      >
                        {counter && counter > 0 ? `${counter}%` : "0%"}
                        <br />
                        {answer.text}
                      </p>
                    );
                  })}
                </div>
              </Row>
            );
          })
        : null}
    </div>
  );
}
