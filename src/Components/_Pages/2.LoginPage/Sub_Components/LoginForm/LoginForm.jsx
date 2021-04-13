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
  const [savedAcc, setSavedAcc] = useState(null);
  const history = useHistory();

  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    setSavedAcc(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogin = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      e.preventDefault();
      functions.showLoader(true);
      const token = await loginFn(loginFill);
      const profile = await getProfile(token.access_token);
      if (profile) {
        const credentials = {
          profile: profile.profile,
          email: loginFill.email,
          password: loginFill.password,
        };
        localStorage.setItem(`user`, JSON.stringify(credentials));
        dispatch(selectUser(profile));
        setTimeout(async () => {
          await dashboardRedirect(profile.role, profile._id, history);
          functions.showLoader(false);
        }, 6500);
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
    functions.showLoader(true);
    const token = await loginFn(loginFill);
    const profile = await getProfile(token.access_token);
    if (profile) {
      const credentials = {
        profile: profile.profile,
        email: loginFill.email,
        password: loginFill.password,
      };
      localStorage.setItem(`user`, JSON.stringify(credentials));
      dispatch(selectUser(profile));
      setTimeout(async () => {
        await dashboardRedirect(profile.role, profile._id, history);
        functions.showLoader(false);
      }, 6500);
    }
  };

  const reLogin = async (credentials) => {
    functions.showLoader(true);
    const token = await loginFn(credentials);
    const profile = await getProfile(token.access_token);
    if (profile) {
      dispatch(selectUser(profile));
      setTimeout(async () => {
        await dashboardRedirect(profile.role, profile._id, history);
        functions.showLoader(false);
      }, 6500);
    }
  };

  return (
    <div className="login-form" style={{ display: state.isForm ? "none" : "" }}>
      <div
        className="saved-account"
        style={{ display: savedAcc !== null ? "" : "none" }}
      >
        <span>Recently logged as</span>
        {savedAcc !== null ? (
          <button
            onClick={() =>
              reLogin({
                email: savedAcc.email,
                password: savedAcc.password,
              })
            }
          >
            <img src={savedAcc.profile} alt="" />
            {savedAcc.email}
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
