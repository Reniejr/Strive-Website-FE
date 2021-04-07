export const getTest = async (body, testId) => {
  console.log(testId);
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/get-test/${testId}`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );
  const result = await response;
  return response;
};
