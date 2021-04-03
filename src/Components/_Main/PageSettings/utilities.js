export const settingFn = async (id, profileFn, notFn, todoFn, logoutFn) => {
  if (id === "profile") {
    profileFn(true);
  }
  if (id === "logout") {
    await logoutFn();
  }
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
  console.log(response);
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

export const getProfile = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/profile`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
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
