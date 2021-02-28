import React, { useState, useEffect } from "react";

//UTILITIES IMPORTS
import { checkValidityForm } from "./utilities";

//PERSONAL COMPONENTS IMPORTS
import Loader from "../../_Main/Loader/Loader";
import LoginForm from "./Sub_Components/LoginForm/LoginForm";
import SignIn from "./Sub_Components/SignIn/SignIn";
import BG01 from "../../_Main/Backgrounds/BG01/BG01";

//STYLE IMPORTS
import "./LoginPage.scss";

export default function LoginPage() {
  const [showLoader, setShowLoader] = useState(true);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState(false);

  const handleSubmit = (e) => {
    checkValidityForm(e);
    setValidated(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 8000);
  }, []);

  return (
    <div id="login-page">
      <BG01 />
      {showLoader ? (
        <Loader />
      ) : (
        <div id="login">
          <header>
            <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
            <p>{form ? "Join Strive School" : "Student, back to work now"}</p>
          </header>
          <LoginForm
            functions={{
              onSubmit: handleSubmit,
              showForm: () => setForm(true),
            }}
            state={{ isValid: validated, isForm: form }}
          />
          <SignIn
            functions={{
              onSubmit: handleSubmit,
              showForm: () => setForm(false),
              isLoader: setShowLoader,
            }}
            state={{ isValid: validated, isForm: form }}
          />
        </div>
      )}
    </div>
  );
}
