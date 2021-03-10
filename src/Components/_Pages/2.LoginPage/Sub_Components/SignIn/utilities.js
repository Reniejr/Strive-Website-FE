import Cookies from "js-cookie";
import axios from "axios";

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
  // console.log(result);
  return result;
};

//GET FIRST INFOS
export const getFirstInfos = async (access_token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const result = await response.json();
  // console.log(result);
  return result;
};

//EDIT PROFILE
export const editProfile = async (access_token, body) => {
  console.log(body);
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  // console.log("edit from utils", result);
  return result;
};

//FETCH GITHUB REPOS
// export const getGithubRepos = async (LoginName) => {
//   let response = await fetch(`https://api.github.com/users/WaliWalo/repos`);
//   let result = await response.json();
//   return result;
// };
