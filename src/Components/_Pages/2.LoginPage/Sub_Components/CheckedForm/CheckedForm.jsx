import React from "react";

//BOOTSTRAP IMPORTS
import { Form, InputGroup } from "react-bootstrap";

//STYLE IMPORTS
import "./CheckedForm.scss";

export default function CheckedForm({ formDetails, functions, state }) {
  return (
    <Form noValidate validated={state} onSubmit={functions.submitLogin}>
      {formDetails.map((input) => {
        return (
          <Form.Group controlId={input.id} key={input.id}>
            <Form.Label>{input.id}</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                required
              />
              <Form.Control.Feedback type="invalid">
                {input.feedback.invalid}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                {input.feedback.valid}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        );
      })}
      <p onClick={functions.changeForm}>{functions.changeFormText}</p>
      <button type="submit">{functions.buttonMsg}</button>
    </Form>
  );
}
