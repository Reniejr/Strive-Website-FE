import React from "react";

//BOOTSTRAP IMPORTS
import { Toast } from "react-bootstrap";

//STYLE IMPORTS
import "./BenchmarkLayer.scss";

export default function BenchmarkLayer({ functions, state }) {
  return (
    <div className="starting-layer">
      <header>
        <h2>{state.examDetail.roomName}</h2>
        <p>{state.examDetail.roomType}</p>
        <button onClick={functions.sideBar}>Rules</button>
      </header>
      <div className="benchmark-detail">
        <span>User</span>
        <svg
          id="Livello_1"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1189.89 330.82"
        >
          <defs></defs>
          <polyline
            className="cls-1"
            points="0.39 330.5 270.39 0.5 1189.89 0.5"
          />
        </svg>
        <span onClick={functions.showModal}>
          {state.sockets.details.username}
          <Toast>
            <i className="fas fa-caret-up"></i>
            <Toast.Body>Click here to change</Toast.Body>
          </Toast>
        </span>
      </div>
      <div className="benchmark-detail">
        <span>Exam</span>
        <svg
          id="Livello_1"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1189.89 330.82"
        >
          <defs></defs>
          <polyline
            className="cls-1"
            points="0.39 330.5 270.39 0.5 1189.89 0.5"
          />
        </svg>
        <span>{state.examDetail._id}</span>
      </div>
      <div className="benchmark-detail">
        <span>Time</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1189.89 330.82">
          <defs></defs>
          <g id="Livello_2" data-name="Livello 2">
            <g id="Down">
              <polyline
                className="cls-1"
                points="0.39 0.32 270.39 330.32 1189.89 330.32"
              />
            </g>
          </g>
        </svg>
        <span>{state.examDetail.time} min</span>
      </div>
      <div className="benchmark-detail">
        <span>Questions</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1189.89 330.82">
          <defs></defs>
          <g id="Livello_2" data-name="Livello 2">
            <g id="Down">
              <polyline
                className="cls-1"
                points="0.39 0.32 270.39 330.32 1189.89 330.32"
              />
            </g>
          </g>
        </svg>
        <span>{state.examDetail.quests.length}</span>
      </div>
      <div className="central-logo">
        <div className="logo-container">
          <div className="front-logo">
            <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          </div>
          <div className="back-logo">
            <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          </div>
          <div
            className="start-exam"
            onClick={functions.sockets.connectToSocket}
          >
            <p>Start</p>
          </div>
        </div>
      </div>
    </div>
  );
}
