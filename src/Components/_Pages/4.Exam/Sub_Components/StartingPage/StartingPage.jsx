import React, { useState, useEffect } from "react";
import io from "socket.io-client";

//UTILITIES IMPORTS
import { getExamDetails } from "./utilities";

//VALUES IMPORTS
import { examDetailsState, joinRoomState } from "./values";

//PERSONAL COMPONENTS IMPORTS
import BenchmarkLayer from "../BenchmarkLayer/BenchmarkLayer";
import ModalExam from "../ModalExam/ModalExam";

//STYLE IMPORTS
import "./StartingPage.scss";

const connOpt = { transports: ["websocket", "polling"] };
const socket = io(process.env.REACT_APP_SOCKET_BASE_URL, connOpt);

export default function StartingPage(props) {
  const [sideBar, setSideBar] = useState(false);
  const [examDetail, setExamDetail] = useState(examDetailsState);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(0);

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
      setShowModal(false);
    } else {
      setJoinRoom({ ...joinRoom, username: e.currentTarget.value });
    }
  };

  //TIMER
  const startTimer = () => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  };

  return (
    <div id="starting-page">
      <ModalExam
        state={{ show: showModal, value: joinRoom.username }}
        functions={{ handleClose: () => setShowModal(false), fillModal }}
      />
      <BenchmarkLayer
        functions={{
          sideBar: () => setSideBar(true),
          showModal: () => setShowModal(true),
          sockets: {
            connectToSocket: () => setConnect(true),
          },
        }}
        state={{ examDetail, sockets: { details: joinRoom } }}
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
