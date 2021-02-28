import React from "react";

//BOOTSTRAP IMPORTS
import { Form, InputGroup } from "react-bootstrap";

//STYLE IMPORTS
import "./CheckedForm.scss";

export default function CheckedForm(props) {
  return (
    <Form.Group controlId={props.data.id} key={props.data.id}>
      <Form.Label>{props.data.id}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          type={props.data.type}
          id={props.data.id}
          placeholder={props.data.placeholder}
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.data.feedback.invalid}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          {props.data.feedback.valid}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
