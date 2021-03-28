import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//UTILITIES IMPORTS
import { newStudent } from "./utilities";

//PERSONAL COMPONENTS IMPORTS
import ModalExam from "../../../ModalExam/ModalExam";

//STYLE IMPORTS
import "./Results.scss";

export default function Results({ state, functions }) {
  const [showModal, setShowModal] = useState(false);
  const [requiredResult, setRequiredResult] = useState(0);
  const [actual, setActual] = useState(0);
  const admissionState = useSelector((state) => state.admissionTest);

  useEffect(() => {
    if (state.showResult) {
      setShowModal(true);
      let minimum = (state.answerList.length * 60) / 100;
      setRequiredResult(minimum);
      let userResult = state.answerList.filter(
        (li) => li.answer.isCorrect === true
      ).length;
      setActual(userResult);
      if (userResult >= minimum) {
        // console.log("success", admissionState);
        (async () => {
          await newStudent(admissionState.userEmail);
        })();
      }
    }
  }, [state.showResult]);

  return (
    <div id="results" style={{ display: state.showResult ? "" : "none" }}>
      <ModalExam
        state={{ show: showModal }}
        functions={{
          handleClose: () => setShowModal(false),
        }}
        content={{
          title: "Strive School",
          button: "Check Results",
        }}
      >
        {actual >= requiredResult ? (
          <>
            <h4>Congratulations!</h4>
            <br />
            <p>
              Welcome on Strive School. <br /> You will receive an email with
              instructions to follow in order to start your journey with us.
            </p>
          </>
        ) : (
          <>
            <p>
              We are sorry, you did not pass the admission test. We advice you
              to try to learn the basic stuff of the IT sector and try again to
              join us. <br /> Strive and do not let this exam stop you
            </p>
          </>
        )}
      </ModalExam>
      <ul>
        <li>
          Total Score :{" "}
          {state.answerList.filter((li) => li.answer.isCorrect === true).length}
        </li>
        {state.quests.map((quest, i) => {
          return (
            <li
              key={i}
              style={{
                borderBottom: i === state.quests.length - 1 ? "none" : "",
              }}
            >
              <h6>Question n°{i + 1}</h6>
              <p>{quest.text}</p>
              <div className="answers">
                <span>
                  Your Answer:{" "}
                  <span
                    style={{
                      color:
                        state.showResult && state.answerList[i].answer.isCorrect
                          ? "#00ff84"
                          : "red",
                    }}
                  >
                    {state.showResult ? state.answerList[i].answer.text : null}
                  </span>{" "}
                </span>{" "}
                <span>
                  Correct Answer:{" "}
                  <span>
                    {
                      quest.answers.filter((answ) => answ.isCorrect === true)[0]
                        .text
                    }
                  </span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
