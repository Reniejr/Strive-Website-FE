//POST NEW USER
export const newStudent = async (email) => {
  let body = {
    email,
    role: "student",
  };
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  const result = await response.json();
  // console.log(result);
  return result;
};
