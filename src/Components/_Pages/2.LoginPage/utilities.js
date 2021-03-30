import Cookies from "js-cookie";

//CHECK COOKIES
export const checkCookies = () => {
  return {
    validate: Cookies.get("validate") !== undefined ? true : false,
    github: Cookies.get("github") !== undefined ? true : false,
    linkedIn: Cookies.get("linkedin") !== undefined ? true : false,
  };
};

//TOKEN FORM STATE
export const tokenFormState = {
  email: "",
  password: "",
};

//GET FIRST ACCESS_TOKEN
export const getFirstAccessToken = async (body) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/first-authorize`,
    {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
  );
  const result = await response.json();
  localStorage.setItem("access_token", result.access_token);
  console.log(result);
  return result;
};

//SUBMIT
export const checkValidityForm = (e) => {
  e.preventDefault();
  const input = e.currentTarget;
  if (input.checkValidity() === false) {
    e.stopPropagation();
  }
};

//LOGIN
export const loginFn = async (bodyLogin) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/authorize`,
    {
      method: "POST",
      body: JSON.stringify(bodyLogin),
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );
  const result = await response.json();
  console.log(result);
  localStorage.setItem("access_token", result.access_token);
  localStorage.setItem("refresh_token", result.refresh_token);
  return result;
};

//GET PROFILE
export const getProfile = async (token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};

//EXPORT DASHBOARD REDIRECT
export const dashboardRedirect = async (role, id, history) => {
  switch (role) {
    case "admin":
      return history.push(`/admin-page/${id}`);
    case "student":
      return history.push(`/student-page/${id}`);
    default:
  }
};
