import React, { useState, useEffect } from "react";
import io from "socket.io-client";

//UTILITIES IMPORTS
import { getExamDetails } from "./utilities";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { setUserExam } from "../../../../../Store/admissionTest/actions";
//VALUES IMPORTS
import { examDetailsState, joinRoomState } from "./values";

//PERSONAL COMPONENTS IMPORTS
import BenchmarkLayer from "../BenchmarkLayer/BenchmarkLayer";
import ModalExam from "../ModalExam/ModalExam";
import Quests from "../Quests/Quests";

//STYLE IMPORTS
import "./StartingPage.scss";

const connOpt = { transports: ["websocket", "polling"] };
const socket = io(process.env.REACT_APP_SOCKET_BASE_URL, connOpt);

export default function StartingPage(props) {
  const [sideBar, setSideBar] = useState(false);
  const [examDetail, setExamDetail] = useState(examDetailsState);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const dispatch = useDispatch();

  //SOCKET STATES
  const [connect, setConnect] = useState(false);
  const [joinRoom, setJoinRoom] = useState(joinRoomState);

  useEffect(() => {
    //RULES ANIMATION
    setTimeout(() => {
      setSideBar(true);
      setShowModal(true);
    }, 4500);

    //GET EXAM DETAILS
    (async () => {
      let testId = props.match.params.testType;
      let examDetails = await getExamDetails(testId);
      setExamDetail(examDetails);

      //SET TIMER
      setTimer(60 * examDetails.time);

      //SOCKET
      setJoinRoom({ ...joinRoom, roomName: examDetails.roomName });
      console.log(socket.id);
    })();
  }, []);

  //JOIN THE ROOM
  useEffect(() => {
    if (connect) {
      socket.emit("joinRoom", joinRoom);
      console.log("connected", joinRoom);
      startTimer();
    }
  }, [connect]);

  //TIMER
  useEffect(() => {
    if (connect) {
      startTimer();
    }
  }, [timer]);

  //FILL MODAL
  const fillModal = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      setJoinRoom({ ...joinRoom, username: e.currentTarget.value });
      dispatch(setUserExam(e.currentTarget.value));
      setShowModal(false);
    } else {
      setJoinRoom({ ...joinRoom, username: e.currentTarget.value });
    }
  };

  const confirmEmail = () => {
    setJoinRoom({ ...joinRoom, username: joinRoom.username });
    dispatch(setUserExam(joinRoom.username));
    setShowModal(false);
  };

  //TIMER
  const startTimer = () => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  };

  //CLICK ANSWER
  const giveAnswers = (quest, answer, answerI) => {
    let isAnswered = userAnswer.filter((answer) => answer.quest === quest);
    let index = userAnswer.findIndex((answer) => answer.quest === quest);
    // console.log(answer);
    let saveAnswer = {
      question: quest,
      answer: answerI,
      isCorrect: answer.answer.isCorrect,
    };
    // console.log(saveAnswer);
    socket.emit("admissionTest", {
      userAnswer: saveAnswer,
      roomName: examDetail.roomName,
    });
    let answersArray = [];
    // console.log(answer);
    // console.log(isAnswered);
    // console.log(quest);
    if (isAnswered.length > 0) {
      index === 0
        ? (answersArray = [answer, ...userAnswer.slice(index + 1)])
        : (answersArray = [
            ...userAnswer.slice(0, index),
            answer,
            ...userAnswer.slice(index + 1),
          ]);
    } else {
      // console.log(answer);
      answersArray = [...userAnswer, answer];
      // console.log(answersArray);
    }
    setUserAnswer(answersArray);
  };

  return (
    <div id="starting-page">
      <ModalExam
        state={{ show: showModal, value: joinRoom.username }}
        functions={{ handleClose: () => confirmEmail(), fillModal }}
      />
      <BenchmarkLayer
        functions={{
          sideBar: () => setSideBar(true),
          showModal: () => setShowModal(true),
          sockets: {
            connectToSocket: () => setConnect(true),
          },
        }}
        state={{
          examDetail,
          sockets: { details: joinRoom },
          isStarted: connect,
        }}
      />
      <Quests
        state={{
          quests: examDetail.quests,
          isStarted: connect,
          time: timer,
          answerList: userAnswer,
        }}
        functions={{ clickAnswer: giveAnswers }}
      />
      <div className="side-bar" style={{ right: sideBar ? "0" : "-400px" }}>
        <h3>Please Follow the rules</h3>
        <ul>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            suscipit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            praesentium.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            quibusdam?
          </li>
        </ul>
        <button onClick={() => setSideBar(false)}>Got it</button>
      </div>
    </div>
  );
}
