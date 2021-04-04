export const convertText = (content) => {
  const text = content.split("\n").map((str) => <p>{str}</p>);
  return text;
};
//FETCH GITHUB REPOS
export const getGithubRepos = async (name) => {
  let response = await fetch(`https://api.github.com/users/${name}/repos`);
  let result = await response.json();
  // console.log(result);
  return result;
};

//DONE HW
export const doneHw = async (body, id) => {
  console.log(body);
  let response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/file-upload/profile/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      }),
    }
  );
  let result = await response.json();
  console.log(result);
  return result;
};
