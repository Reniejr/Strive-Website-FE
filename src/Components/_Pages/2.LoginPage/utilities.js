//CHECK COOKIES
export const checkCookies = () => {
  const url = new URL(window.location.href);
  const validate = url.searchParams.get("validate");
  const github = url.searchParams.get("github");
  const linkedIn = url.searchParams.get("linkedin");

  if (validate !== null) {
    if (localStorage.getItem("validate") === null) {
      localStorage.setItem("validate", validate);
    }
  }
  if (github !== null) {
    if (localStorage.getItem("github") === null) {
      localStorage.setItem("github", github);
    }
  }
  if (linkedIn !== null && localStorage.getItem("linkedin") === null) {
    localStorage.setItem("linkedin", linkedIn);
  }

  return {
    validate:
      localStorage.getItem("validate") !== null &&
      localStorage.getItem("validate") === "true"
        ? true
        : false,
    github:
      localStorage.getItem("github") !== null &&
      localStorage.getItem("github") === "true"
        ? true
        : false,
    linkedIn:
      localStorage.getItem("linkedin") !== null &&
      localStorage.getItem("linkedin") === "true"
        ? true
        : false,
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
