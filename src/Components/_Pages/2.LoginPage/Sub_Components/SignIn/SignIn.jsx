import React, { useState } from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import CheckedForm from "../CheckedForm/CheckedForm";

//BOOTSTRAP IMPORTS
import { Form, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./SignIn.scss";

export default function SignIn({ functions, state }) {
  const [isToken, setIsToken] = useState(false);

  const checkToken = () => {
    setIsToken(true);
    // await functions.isLoader(true);
    // setTimeout(() => {
    //   functions.isLoader(false);
    // }, 5000);
  };

  return (
    <div
      className="sign-in-form"
      style={{ display: state.isForm ? "" : "none" }}
    >
      <div
        className="token-validation"
        style={{ display: isToken ? "none" : "" }}
      >
        <p>
          Before fill the form, provide the token that Strive School sent to
          you. (For security purposes){" "}
        </p>
        <CheckedForm
          data={{
            id: "token",
            type: "password",
            placeholder: "Strive Token",
            feedback: {
              invalid: "Invalid Token - Contact Strive Staff",
              valid: "Seems a valid token",
            },
          }}
        />
        <p onClick={functions.showForm}>Already registered?</p>
        <button onClick={() => checkToken()}>Check Token</button>
      </div>
      <Form
        noValidate
        validated={state.isValid}
        onSubmit={functions.onSubmit}
        style={{ display: isToken ? "" : "none" }}
      >
        <Row>
          <Col md={6}>
            {data.slice(0, 3).map((input) => {
              return <CheckedForm data={input} key={input.id} />;
            })}
          </Col>
          <Col md={6}>
            {data.slice(3, 6).map((input) => {
              return <CheckedForm data={input} key={input.id} />;
            })}
          </Col>
        </Row>
        <Row className="socials">
          <Col md={6}>
            <p>Link your github account</p>
            <button className="github-btn social-btn">
              <i className="fab fa-github"></i>
              Github
            </button>
          </Col>
          <Col md={6}>
            <p>Share your LinkedIn profile</p>
            <button className="linkedin-btn social-btn">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </button>
          </Col>
        </Row>
        {/* <p onClick={functions.showForm}>Already registered?</p> */}
        {/* <button type="submit">Join the future</button> */}
        <button onClick={() => setIsToken(false)}>Join the future</button>
      </Form>
    </div>
  );
}
