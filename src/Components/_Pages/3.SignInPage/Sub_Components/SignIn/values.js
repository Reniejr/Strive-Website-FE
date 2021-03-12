//GITHUB INITIAL STATE
export const gitHubState = {
  title: "Link your GitHub account",
  style: {
    color: "",
    border: "",
    backgroundColor: "",
  },
};
//GITHUB INITIAL STATE
export const linkedInState = {
  title: "Share your LinkedIn account",
  style: {
    color: "",
    border: "",
    backgroundColor: "",
  },
};

//IS GITHUB LINKED
export const isGithubLinked = (isValid, isGithub) => {
  let gitHubInfo = {
    title: "Share your LinkedIn account",
    style: {
      color: "",
      border: "",
      backgroundColor: "",
    },
  };
  if (isValid) {
    if (isGithub) {
      gitHubInfo.title = "Successfully linked";
      gitHubInfo.style.color = "#01ff84";
      gitHubInfo.style.border = "2px solid #01ff84";
      gitHubInfo.style.backgroundColor = "black";
    } else {
      gitHubInfo.title = "Problems linking GitHub";
      gitHubInfo.style.color = "red";
      gitHubInfo.style.border = "2px solid red";
      gitHubInfo.style.backgroundColor = "black";
    }
  }
  return gitHubInfo;
};
//IS LINKEDIN LINKED
export const isLinkedInLinked = (isValid, isLinkedIn) => {
  let linkedInInfo = {
    title: "Share your LinkedIn account",
    style: {
      color: "",
      border: "",
      backgroundColor: "",
    },
  };
  if (isValid) {
    if (isLinkedIn) {
      linkedInInfo.title = "Successfully linked";
      linkedInInfo.style.color = "#01ff84";
      linkedInInfo.style.border = "2px solid #01ff84";
      linkedInInfo.style.backgroundColor = "black";
    } else {
      linkedInInfo.title = "Problems linking LinkedIn";
      linkedInInfo.style.color = "red";
      linkedInInfo.style.border = "2px solid red";
      linkedInInfo.style.backgroundColor = "black";
    }
  }
  return linkedInInfo;
};

//BASIC INFOS
export const basicInfoState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};
