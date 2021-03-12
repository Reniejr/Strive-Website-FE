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
  // console.log(body);
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
