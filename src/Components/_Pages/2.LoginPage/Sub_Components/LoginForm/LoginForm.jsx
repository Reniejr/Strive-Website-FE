import React, { useState, useEffect } from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS
import { Form } from "react-bootstrap";

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
        <Form
          noValidate
          validated={state.isValid}
          onSubmit={functions.onSubmit}
        >
          {data.map((input) => {
            return <CheckedForm data={input} key={input.id} />;
          })}
          <p onClick={functions.showForm}>Not registered yet?</p>
          <button type="submit">Back to work</button>
        </Form>
      </div>
    </div>
  );
}
