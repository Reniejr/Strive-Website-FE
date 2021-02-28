import React from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS

//STYLE IMPORTS
import "./SignIn.scss";

export default function SignIn({ functions, state }) {
  return (
    <div
      className="sign-in-form"
      style={{ display: state.isForm ? "" : "none" }}
    >
      <CheckedForm
        formDetails={data}
        functions={{
          buttonMsg: "Join the Future",
          submitLogin: functions.onSubmit,
          changeFormText: "Already registered?",
          changeForm: functions.showForm,
        }}
        state={state.isValid}
      />
    </div>
  );
}
