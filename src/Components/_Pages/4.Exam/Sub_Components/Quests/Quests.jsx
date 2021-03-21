import React, { useState } from "react";

//PERSONAL COMPONENTS IMPORTS
import Results from "./Sub_Components/Results/Results";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORT
import "./Quests.scss";

export default function Quests({ state, functions }) {
  const [questSide, setQuestSide] = useState(false);
  const [actualQuest, setActualQuest] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuest = (i) => {
    setActualQuest(i);
    setQuestSide(false);
  };

  const handleAnswer = (i, answer, answerI) => {
    let givenAnswer = { quest: i, answer: answer };
    // console.log(givenAnswer);
    functions.clickAnswer(i, givenAnswer, answerI);
    if (actualQuest < state.quests.length - 1) {
      setActualQuest(actualQuest + 1);
    }
  };

  const checkIsAnswered = (i) => {
    const isAnswered = state.answerList.filter((answer) => answer.quest === i);
    if (isAnswered.length > 0) {
      return { backgroundColor: "#00ff84", color: "black" };
    } else {
      return {
        backgroundColor: "transparent",
        color: "#00ff84",
      };
    }
  };

  const checkWhichIsAnswered = (i, userAnswers, answerListQ, answer) => {
    const whichQuest = state.answerList.filter((answer) => answer.quest === i);
    const whichAnswer = answerListQ.filter((a) => a.text === answer);
    // console.log(selectedQuest);
    let style = {};
    if (whichQuest.length > 0) {
      userAnswers.forEach((userA) => {
        if (userA.answer.text === answer) {
          style = { backgroundColor: "#00ff84", color: "black" };
        } else {
          style = { backgroundColor: "black", color: "white" };
        }
      });
    }
    return style;
  };

  return (
    <div id="quests" style={{ display: state.isStarted ? "" : "none" }}>
      <div
        className="quests-map"
        style={{
          marginLeft: questSide ? "" : "-300px",
          display: showResult ? "none" : "",
        }}
      >
        <h4>Questions Map</h4>
        {state.quests.map((quest, i) => {
          return (
            <button
              onClick={() => changeQuest(i)}
              key={i}
              style={checkIsAnswered(i)}
            >
              {i + 1}
            </button>
          );
        })}
        <div className="toggler" onClick={() => setQuestSide(!questSide)}></div>
      </div>
      <Row
        className="quests-controls"
        style={{ display: showResult ? "none" : "" }}
      >
        <button
          onClick={() => {
            if (actualQuest > 0) {
              setActualQuest(actualQuest - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (actualQuest < state.quests.length - 1) {
              setActualQuest(actualQuest + 1);
            }
          }}
        >
          Next
        </button>
        <div className="timer">
          {Math.floor(state.time / 60)} :{" "}
          {state.time % 60 < 10 ? `0${state.time % 60}` : state.time % 60}
        </div>
      </Row>
      <div
        className="quest-container"
        style={{
          width:
            state.quests.length > 0 ? `${state.quests.length * 100}%` : "100%",
          marginLeft: `-${actualQuest * 100}%`,
          display: showResult ? "none" : "",
        }}
      >
        {state.quests
          ? state.quests.map((quest, index) => {
              return (
                <div
                  className="qA"
                  key={index}
                  style={{
                    width:
                      state.quests.length > 0
                        ? `${100 / state.quests.length}%`
                        : "100%",
                  }}
                >
                  <h2>Question n° {index + 1}</h2>
                  <div className="question">{quest.text}</div>
                  <Row className="answerList">
                    {quest.answers.map((answer, i) => {
                      return (
                        <Col xs={12} md={6} key={i}>
                          <button
                            onClick={() => handleAnswer(index, answer, i)}
                            style={checkWhichIsAnswered(
                              index,
                              state.answerList,
                              quest.answers,
                              answer.text
                            )}
                          >
                            {answer.text}
                          </button>
                        </Col>
                      );
                    })}
                  </Row>
                  <Row
                    style={{
                      display: index === state.quests.length - 1 ? "" : "none",
                    }}
                  >
                    <button
                      className="submit-test"
                      onClick={() => setShowResult(!showResult)}
                    >
                      Submit Test
                    </button>
                  </Row>
                </div>
              );
            })
          : null}
      </div>
      <Results
        state={{
          quests: state.quests,
          showResult: showResult,
          answerList: state.answerList,
        }}
      />
    </div>
  );
}
