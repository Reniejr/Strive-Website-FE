import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//REDUX IMPORTS
import { useDispatch } from "react-redux";
import { selectUser } from "Store/user/actions";

//UTILITIES IMPORTS
import { loginFn, getProfile, dashboardRedirect } from "../../utilities";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS
import { Form } from "react-bootstrap";

//STYLE IMPORTS
import "./LoginForm.scss";

export default function LoginForm({ functions, state }) {
  //STATE
  const [loginFill, setLoginFill] = useState({ email: "", password: "" });
  const [savedAcc, setSavedAcc] = useState([]);
  const history = useHistory();

  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    const users = Object.keys(localStorage);
    users.forEach((key) => {
      if (key.includes("user")) {
        setSavedAcc([...savedAcc, JSON.parse(localStorage.getItem(key))]);
      }
    });
  }, []);

  const handleLogin = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      e.preventDefault();
      const token = await loginFn(loginFill);
      const profile = await getProfile(token.access_token);
      if (profile) {
        const credentials = {
          profile: profile.profile,
          email: loginFill.email,
          password: loginFill.password,
        };
        localStorage.setItem(
          `user-${profile.firstName}`,
          JSON.stringify(credentials)
        );
        dispatch(selectUser(profile));
        await dashboardRedirect(profile.role, profile._id, history);
      }
    } else {
      let fill = { ...loginFill };
      let currentId = e.currentTarget.id;
      fill[currentId] = e.currentTarget.value;
      setLoginFill(fill);
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const token = await loginFn(loginFill);
    const profile = await getProfile(token.access_token);
    if (profile) {
      const credentials = {
        profile: profile.profile,
        email: loginFill.email,
        password: loginFill.password,
      };
      localStorage.setItem(
        `user-${profile.firstName}`,
        JSON.stringify(credentials)
      );
      dispatch(selectUser(profile));
      await dashboardRedirect(profile.role, profile._id, history);
    }
  };

  const reLogin = async (credentials) => {
    const token = await loginFn(credentials);
    const profile = await getProfile(token.access_token);
    if (profile) {
      dispatch(selectUser(profile));
      await dashboardRedirect(profile.role, profile._id, history);
    }
  };

  return (
    <div className="login-form" style={{ display: state.isForm ? "none" : "" }}>
      <div
        className="saved-account"
        style={{ display: savedAcc.length > 0 ? "" : "none" }}
      >
        <span>Recently logged as</span>
        {savedAcc.length > 0 ? (
          <button
            onClick={() =>
              reLogin({
                email: savedAcc[savedAcc.length - 1].email,
                password: savedAcc[savedAcc.length - 1].password,
              })
            }
          >
            <img src={savedAcc[savedAcc.length - 1].profile} alt="" />
            {savedAcc[savedAcc.length - 1].email}
          </button>
        ) : null}
      </div>
      <div className="login-form-container">
        <Form noValidate validated={state.isValid} onSubmit={submitLogin}>
          {data.map((input) => {
            return (
              <CheckedForm
                data={input}
                key={input.id}
                functions={{
                  handleChange: handleLogin,
                  handleKeyDown: handleLogin,
                }}
              />
            );
          })}
          <p onClick={functions.showForm}>Not registered yet?</p>
          <button type="submit">Back to work</button>
        </Form>
      </div>
    </div>
  );
}
