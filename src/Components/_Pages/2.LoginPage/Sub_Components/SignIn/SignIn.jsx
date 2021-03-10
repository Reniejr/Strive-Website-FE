import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
//UTILITIES IMPORTS
import { isLinked } from "../../utilities";
import {
  checkCookies,
  tokenFormState,
  getFirstAccessToken,
  getFirstInfos,
  editProfile,
} from "./utilities";
import {
  isGithubLinked,
  gitHubState,
  isLinkedInLinked,
  linkedInState,
  basicInfoState,
} from "./values";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS
import { Form, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./SignIn.scss";

export default function SignIn({ functions, state }) {
  const [isToken, setIsToken] = useState(true);
  const [isLink, setIsLink] = useState({
    validated: false,
    github: gitHubState,
    linkedin: linkedInState,
  });
  const [tokenForm, setTokenForm] = useState(tokenFormState);
  const [basicInfo, setBasicInfo] = useState(basicInfoState);

  useEffect(() => {
    const { validate, github, linkedIn } = checkCookies();
    // console.log(cookiesResult);
    // console.log(validate, github, linkedIn);
    if (validate) {
      setIsToken(true);
      setIsLink({
        validated: true,
        github: isGithubLinked(validate, github),
        linkedin: isLinkedInLinked(validate, linkedIn),
      });
      // console.log(isLinkedInLinked(validate, linkedIn));
    } else {
      setIsToken(false);
    }
  }, []);

  // useEffect(() => {
  //   data.map((input) => {
  //     Object.keys(basicInfo).forEach((key) => {
  //       if (input.id === key) {
  //         input.value = basicInfo[key];
  //       }
  //     });
  //   });
  // }, [basicInfo]);

  const checkToken = () => {
    functions.isLoader(true);
    setTimeout(() => {
      setIsToken(true);
      functions.isLoader(false);
    }, 8000);
  };

  const fillTokenForm = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      await submitTokenForm(e);
    } else {
      let infos = { ...tokenForm };
      let currentId = e.currentTarget.id;
      infos[currentId] = e.currentTarget.value;
      setTokenForm(infos);
    }
  };

  const submitTokenForm = async (e) => {
    e.preventDefault();
    let result = await getFirstAccessToken(tokenForm);
    let infos = await getFirstInfos(result.access_token);
    // console.log(infos);
    setBasicInfo({ ...basicInfo, email: infos.email, password: "" });
    checkToken();
  };

  const fillSignupForm = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      await submitSignup(e);
    } else {
      let infos = { ...basicInfo };
      let currentId = e.currentTarget.id;
      infos[currentId] = e.currentTarget.value;
      setBasicInfo(infos);
    }
  };

  const submitSignup = async (e) => {
    e.preventDefault();
    let access_token = localStorage.getItem("access_token");
    console.log("basicInfo", basicInfo);
    let result = await editProfile(access_token, basicInfo);
    // console.log("edit from comp", result);
  };

  return (
    <div
      className="sign-in-form"
      style={{ display: state.isForm ? "" : "none" }}
    >
      <div
        className="token-validation"
        style={{ display: isToken ? "none" : "" }}
      >
        <h6>
          Before fill the form, confirm your email with the password we sent
          you, to get the access of your basic informations. (For security
          purposes){" "}
        </h6>
        <Form
          noValidate
          validated={state.isValid}
          onSubmit={(e) => submitTokenForm(e)}
        >
          <CheckedForm
            data={{
              id: "email",
              type: "email",
              placeholder: "Confirm your email",
              feedback: {
                invalid: "Invalid Email - Contact Strive Staff",
                valid: "Seems a valid email",
              },
            }}
            functions={{
              handleChange: (e) => fillTokenForm(e),
              handleKeyDown: (e) => fillTokenForm(e),
            }}
          />
          <CheckedForm
            data={{
              id: "password",
              type: "password",
              placeholder: "Password we provide",
              feedback: {
                invalid: "Invalid Password - Contact Strive Staff",
                valid: "Seems Ok",
              },
            }}
            functions={{
              handleChange: (e) => fillTokenForm(e),
              handleKeyDown: (e) => fillTokenForm(e),
            }}
          />
          <p onClick={functions.showForm}>Already registered?</p>
          <button type="submit">Check Email</button>
        </Form>
      </div>
      <Form
        noValidate
        validated={state.isValid}
        onSubmit={submitSignup}
        style={{ display: isToken ? "" : "none" }}
      >
        <Row>
          <Col md={6}>
            {data.slice(0, 2).map((input) => {
              return (
                <CheckedForm
                  data={input}
                  key={input.id}
                  functions={{
                    handleChange: (e) => fillSignupForm(e),
                    handleKeyDown: (e) => fillSignupForm(e),
                  }}
                />
              );
            })}
          </Col>
          <Col md={6}>
            {data.slice(2, 4).map((input) => {
              return (
                <CheckedForm
                  data={input}
                  key={input.id}
                  functions={{
                    handleChange: (e) => fillSignupForm(e),
                    handleKeyDown: (e) => fillSignupForm(e),
                  }}
                />
              );
            })}
          </Col>
        </Row>
        <Row className="socials">
          <Col md={6}>
            <p style={{ color: isLink.github.style.color }}>
              {isLink.github.title}
            </p>
            <button
              type="button"
              className="github-btn social-btn"
              onClick={() =>
                window.location.replace(
                  "http://localhost:5000/users/gitHubLogin"
                )
              }
              style={isLink.github.style}
            >
              <i className="fab fa-github"></i>
              Github
              <i
                className={`fas fa-${
                  isLink.github.style.color === "#01ff84" ? "check" : "times"
                }`}
                style={{ display: isLink.validated ? "" : "none" }}
              ></i>
            </button>
          </Col>
          <Col md={6}>
            <p style={{ color: isLink.linkedin.style.color }}>
              {isLink.linkedin.title}
            </p>
            <button
              className="linkedin-btn social-btn"
              type="button"
              onClick={() =>
                window.location.replace(
                  "http://localhost:5000/users/linkedInLogin"
                )
              }
              style={isLink.linkedin.style}
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
              <i
                className={`fas fa-${
                  isLink.linkedin.style.color === "#01ff84" ? "check" : "times"
                }`}
                style={{ display: isLink.validated ? "" : "none" }}
              ></i>
            </button>
          </Col>
        </Row>
        {/* <p onClick={functions.showForm}>Already registered?</p> */}
        {/* <button type="submit">Join the future</button> */}
        <button type="submit">Join the future</button>
      </Form>
    </div>
  );
}
