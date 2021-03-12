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
import Loader from "../../_Main/Loader/Loader";
import LoginForm from "./Sub_Components/LoginForm/LoginForm";
import CheckedForm from "./Sub_Components/CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS
import { Form } from "react-bootstrap";

//STYLE IMPORTS
import "./LoginPage.scss";

export default function LoginPage() {
  const [showLoader, setShowLoader] = useState(false);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState(false);
  const [isToken, setIsToken] = useState(true);
  const [tokenForm, setTokenForm] = useState(tokenFormState);

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

  const checkToken = () => {
    setShowLoader(true);
    setTimeout(() => {
      setIsToken(true);
      setShowLoader(false);
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
    checkToken();
    setTimeout(() => {
      history.push(`/sign-in/${infos._id}`);
    }, 8100);
  };

  return (
    <div id="login-page">
      <BG01 />
      <Loader state={showLoader} />
      <div id="login">
        <header>
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          <p>Student, back to work now</p>
        </header>
        <LoginForm
          functions={{
            onSubmit: handleSubmit,
            showForm: () => setForm(true),
          }}
          state={{ isValid: validated, isForm: form }}
        />
        {/* <SignIn
          functions={{
            onSubmit: handleSubmit,
            showForm: () => setForm(false),
            isLoader: setShowLoader,
          }}
          state={{ isValid: validated, isForm: form }}
        /> */}
        <div
          className="token-validation"
          style={{ display: form ? "" : "none" }}
        >
          <h6>
            Before fill the form, confirm your email with the password we sent
            you, to get the access of your basic informations. (For security
            purposes){" "}
          </h6>
          <Form
            noValidate
            validated={validated}
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
            <p onClick={() => setForm(false)}>Already registered?</p>
            <button type="submit">Check Email</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
