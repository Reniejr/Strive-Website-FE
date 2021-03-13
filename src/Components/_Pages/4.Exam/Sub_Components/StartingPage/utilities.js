//GET EXAM DETAILS
export const getExamDetails = async (testId) => {
  const response = await fetch(
    `${process.env.REACT_APP_SOCKET_BASE_URL}/socket-room/${testId}`
  );
  const result = await response.json();
  //   console.log("from utilities", result);
  return result;
};
