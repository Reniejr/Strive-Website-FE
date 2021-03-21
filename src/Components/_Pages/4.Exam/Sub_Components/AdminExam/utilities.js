import { answersObj } from "./values";

//GET BENCHMARK LIST
export const getBenchmarkList = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_SOCKET_BASE_URL}/socket-room`
  );
  const result = await response.json();
  //   console.log("from utils", result);
  return result;
};

//GET EXAM DETAILS
export const getExamDetails = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_SOCKET_BASE_URL}/socket-room/${id}`
  );
  const result = await response.json();
  //   console.log("from utils", result);
  return result;
};

//GET ANSWERSTATE
export const getAnswerState = (array) => {
  let answerState = array.quests.map((question, i) => {
    let state = { ...answersObj };
    state.question = i;
    state.answers = array.membersList.map((member, index) => {
      let userAnswer = { userId: member.username, answer: 0 };
      let findAnswer = member.userAnswerList.find(
        (answer) => answer.question === i
      );
      if (findAnswer) {
        userAnswer.answer = findAnswer.answer;
      } else {
        userAnswer.answer = null;
      }
      return userAnswer;
    });
    return state;
  });
  return answerState;
};
