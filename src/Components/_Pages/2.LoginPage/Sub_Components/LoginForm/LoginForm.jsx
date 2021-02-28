import React, { useState, useEffect } from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//STYLE IMPORTS
import "./LoginForm.scss";

export default function LoginForm({ functions, state }) {
  const [savedAcc, setSavedAcc] = useState([]);

  return (
    <div className="login-form" style={{ display: state.isForm ? "none" : "" }}>
      <div
        className="saved-account"
        style={{ display: savedAcc.length > 0 ? "" : "none" }}
      >
        <span>Recently logged as</span>
        {savedAcc.length > 0 ? (
          <button>
            <img src="" alt="" />
            name
          </button>
        ) : null}
      </div>
      <div className="login-form-container">
        <CheckedForm
          formDetails={data}
          functions={{
            buttonMsg: "Back to work",
            submitLogin: functions.onSubmit,
            changeFormText: "Not registered yet?",
            changeForm: functions.showForm,
          }}
          state={state.isValid}
        />
      </div>
    </div>
  );
}
