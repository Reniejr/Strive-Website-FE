import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { selectUser } from "Store/user/actions";

//UTILITIES IMPORTS
import { checkCookies } from "../../../2.LoginPage/utilities";
import { getFirstInfos, editProfile } from "./utilities";
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
import CheckedForm from "../../../2.LoginPage/Sub_Components/CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS
import { Form, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./SignIn.scss";

export default function SignIn() {
  const [isLink, setIsLink] = useState({
    validated: false,
    github: gitHubState,
    linkedin: linkedInState,
  });
  const [basicInfo, setBasicInfo] = useState(basicInfoState);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let infos = await getFirstInfos(localStorage.getItem("access_token"));
      setBasicInfo({ ...basicInfo, email: infos.email });
      const checkSocials = await checkCookies();
      let { validate, github, linkedIn } = await checkCookies();
      if (validate) {
        setIsLink({
          validated: true,
          github: isGithubLinked(validate, github),
          linkedin: isLinkedInLinked(validate, linkedIn),
        });
        if (!github) {
          localStorage.removeItem("github");
        }
        if (!linkedIn) {
          localStorage.removeItem("linkedin");
        }
        if (isLink.linkedin) {
          const url = history.location.search.replace("?access_token=", "");
          // console.log("history", url);
          localStorage.setItem("linkedIn_access", url);
        }
      }
    })();
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
    // console.log("basicInfo", basicInfo);
    let result = await editProfile(access_token, basicInfo);
    // console.log("edit from comp", result);
    if (result) {
      const credentials = {
        profile: result.profile,
        email: result.email,
        password: result.password,
      };
      localStorage.setItem(
        `user-${result.firstName}`,
        JSON.stringify(credentials)
      );
      localStorage.removeItem("validate");
      localStorage.removeItem("github");
      localStorage.removeItem("linkedin");
      dispatch(selectUser(result));
      history.push(`/student-page/${result._id}`);
    }
  };

  return (
    <div className="sign-in-form">
      <div className="form-container">
        <header>
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          <p>Join Strive School</p>
        </header>
        <Form noValidate validated={false} onSubmit={submitSignup}>
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
                    isLink.linkedin.style.color === "#01ff84"
                      ? "check"
                      : "times"
                  }`}
                  style={{ display: isLink.validated ? "" : "none" }}
                ></i>
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              {data.map((input) => {
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

          {/* <p onClick={functions.showForm}>Already registered?</p> */}
          {/* <button type="submit">Join the future</button> */}
          <button type="submit">Join the future</button>
        </Form>
      </div>
    </div>
  );
}
