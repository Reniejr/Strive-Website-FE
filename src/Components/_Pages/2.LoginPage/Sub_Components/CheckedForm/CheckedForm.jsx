import React, { useState } from "react";

//BOOTSTRAP IMPORTS
import { Form, InputGroup } from "react-bootstrap";

//STYLE IMPORTS
import "./CheckedForm.scss";

export default function CheckedForm({ data, functions }) {
  const [pwd, setPwd] = useState("password");
  return (
    <>
      <Form.Group controlId={data.id} key={data.id}>
        <Form.Label>{data.id}</Form.Label>
        <i
          class={`fas ${pwd === "password" ? "fa-eye-slash" : "fa-eye"}`}
          style={{
            display: data.type === "password" ? "" : "none",
          }}
          onClick={() => {
            pwd === "password" ? setPwd("text") : setPwd("password");
          }}
        ></i>
        <InputGroup hasValidation>
          <Form.Control
            type={data.type === "password" ? pwd : data.type}
            // id={props.data.id}
            placeholder={data.placeholder}
            required
            onChange={functions ? functions.handleChange : null}
            onKeyDown={functions ? functions.handleKeyDown : null}
            // value={data.value}
          />
          <Form.Control.Feedback type="invalid">
            {data.feedback.invalid}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            {data.feedback.valid}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
}
