import React from "react";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//BOOTSTRAP COMPONENTS IMPORTS
import { Form, Alert } from "react-bootstrap";

//STYLE IMPORTS
import "./TokenValidation.scss";

export default function TokenValidation({ state, functions }) {
  return (
    <div
      className="token-validation"
      style={{ display: state.form ? "" : "none" }}
    >
      <h6>
        Before fill the form, confirm your email with the password we sent you,
        to get the access of your basic informations. (For security purposes){" "}
      </h6>
      <Alert variant="danger" style={{ display: state.alert ? "" : "none" }}>
        Something went wrong.
      </Alert>
      <Form
        noValidate
        validated={state.validated}
        onSubmit={functions.handleSubmit}
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
            handleChange: functions.fillTokenForm,
            handleKeyDown: functions.fillTokenForm,
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
            handleChange: functions.fillTokenForm,
            handleKeyDown: functions.fillTokenForm,
          }}
        />
        <p onClick={functions.changeForm}>Already registered?</p>
        <button type="submit">Check Email</button>
      </Form>
    </div>
  );
}
