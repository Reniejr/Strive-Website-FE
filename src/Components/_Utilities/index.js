import { store } from "Store";
import { selectUser } from "Store/user/actions";

//TOKEN
const token = localStorage.getItem("access_token");

export const isLogged = async (user) => {
  let isLogin = false;
  if (user !== null) {
    isLogin = true;
  } else {
    const user = await getUser();
    if (user) {
      store.dispatch(selectUser(user));
      isLogin = true;
    }
  }
  return isLogin;
};

//FETCH USER
export const getUser = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

//FETCH CLASSROOM LIST
export const classRoomListFetch = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/batch`);
  const result = await response.json();
  // console.log(result);
  return result;
};

export const uploadProfile = async () => {
  const inputFile = document.querySelector(".profile-upload-img");
  let formData = new FormData();
  formData.append("user", inputFile.files[0]);
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile-pic`,
    {
      method: "POST",
      body: formData,
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      }),
    }
  );
  // console.log(response);
  //   const result = await response.json();
  //   console.log(result);
};
export const uploadFile = async (id, lesson) => {
  const inputFile = document.querySelector("#homework");
  let formData = new FormData();
  formData.append("file", inputFile.files[0]);
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/file-upload/${id}?module=${lesson.module}&day=${lesson.day}`,
    {
      method: "POST",
      body: formData,
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      }),
    }
  );
  // console.log(response);
  //   const result = await response.json();
  //   console.log(result);
};

export const editProfile = async (body) => {
  let editBody = {
    ...body,
  };
  delete editBody.profile;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      }),
    }
  );
  const result = await response.json();
  //   console.log(result);
  return result;
};

export const logoutFetch = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/logoutAll`,
    {
      method: "POST",
      //   body: JSON.stringify({}),
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      }),
    }
  );
  const result = await response.json();
  //   console.log(result);
};

//POST LESSON
export const newLesson = async (body, id) => {
  body.module = `M${body.module}`;
  body.day = `D${body.day}`;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/batch/lessons/${id}`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
  );
  const result = await response.json();
  // console.log(result);
  return result;
};

export const createRoom = async (body) => {
  const response = await fetch(
    `${process.env.REACT_APP_SOCKET_BASE_URL}/socket-room`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
  );
  const result = await response.json();
  // console.log(result);
  return result;
};
//GET BENCHMARK LIST
export const getBenchmarkList = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_SOCKET_BASE_URL}/socket-room`
  );
  const result = await response.json();
  //   console.log("from utils", result);
  return result;
};

//DIVIDE BY CHUNKS
export const chunkArray = (array, value) => {
  let chunkContainer = [],
    times = array.length / value,
    arrayRest = array;
  for (let i = 0; i < times; i++) {
    let chunk = [];
    chunk = arrayRest.splice(0, value);
    chunkContainer.push(chunk);
  }
  // console.log(chunkContainer);
  return chunkContainer;
};
