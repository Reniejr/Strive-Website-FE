import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//UTILITIES IMPORTS
import {
  checkValidityForm,
  checkCookies,
  tokenFormState,
  getFirstAccessToken,
} from "./utilities";
import { getFirstInfos } from "../3.SignInPage/Sub_Components/SignIn/utilities";

//PERSONAL COMPONENTS IMPORTS
import BG01 from "../../_Main/Backgrounds/BG01/BG01";
import Loader from "../../_Main/Loaders/MainLoader/Loader";
import LoginForm from "./Sub_Components/LoginForm/LoginForm";
import TokenValidation from "./Sub_Components/TokenValidation/TokenValidation";

//STYLE IMPORTS
import "./LoginPage.scss";

export default function LoginPage() {
  const [showLoader, setShowLoader] = useState(false);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState(false);
  const [isToken, setIsToken] = useState(true);
  const [tokenForm, setTokenForm] = useState(tokenFormState);
  const [alert, setAlert] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const { validate } = checkCookies();
    // console.log(checkIsLink);
    if (validate) {
      setForm(true);
    } else {
      setForm(false);
    }
  }, []);

  const handleSubmit = (e) => {
    checkValidityForm(e);
    setValidated(true);
  };

  const checkToken = (result) => {
    setShowLoader(true);
    if (result.status === 500) {
      setAlert(true);
      setTimeout(() => {
        setIsToken(false);
        setShowLoader(false);
      }, 8000);
    } else {
      setTimeout(() => {
        setIsToken(true);
        setShowLoader(false);
      }, 8000);
    }
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
    checkToken(result);
    if (result.status !== 500) {
      let infos = await getFirstInfos(result.access_token);
      setTimeout(() => {
        history.push(`/sign-in/${infos._id}`);
      }, 8100);
    }
  };

  return (
    <div id="login-page">
      <BG01 />
      <Loader state={showLoader} />
      <div id="login">
        <header>
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          <p>{form ? "" : "Welcome Back"}</p>
        </header>
        <LoginForm
          functions={{
            onSubmit: handleSubmit,
            showForm: () => setForm(true),
          }}
          state={{ isValid: validated, isForm: form }}
        />
        <TokenValidation
          state={{ form, validated, alert }}
          functions={{
            handleSubmit: (e) => submitTokenForm(e),
            fillTokenForm: (e) => fillTokenForm(e),
            changeForm: () => setForm(false),
          }}
        />
      </div>
    </div>
  );
}
