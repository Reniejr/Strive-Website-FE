//POST NEW USER
export const newStudent = async (email, batch, exam, batchId) => {
  let body = {
    email,
    role: "student",
    studentInfo: {
      course: batch.course,
      batch: batch.batch,
      exams: [{ ...exam }],
      homeworks: [],
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/new-user/${batchId}`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );
  const result = await response.json();
  // console.log(result);
  return result;
};
