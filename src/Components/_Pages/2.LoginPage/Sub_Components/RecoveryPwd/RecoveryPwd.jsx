import React from "react";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//STYLE IMPORTS
import "./RecoveryPwd.scss";

export default function RecoveryPwd() {
  return (
    <div id="recovery-pwd">
      <h3>
        We will send you an email with the link for recovering your password.{" "}
        <br /> Please confirm your email first
      </h3>
      <CheckedForm
        data={{
          id: "email",
          type: "email",
          placeholder: "Confirm your email",
          feedback: {
            invalid: "Invalid Email",
            valid: "Seems ok",
          },
        }}
      />
    </div>
  );
}
