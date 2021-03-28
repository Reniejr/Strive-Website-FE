import React from "react";

//DATA IMPORTS
import { batchForm } from "../../../../values";

//PERSONAL COMPONENTS IMPORTS
import { CircLogo } from "../../../../../../../../_Main/Assets/Assets";

//BOOTSTRAP IMPORTS
import { Form, Button } from "react-bootstrap";

//STYLE IMPORT
import "./AddBatchForm.scss";

export default function AddBatchForm({ state, functions }) {
  return (
    <div className="batch-form">
      <CircLogo />
      <Form onSubmit={functions.handleSubmit}>
        {batchForm.map((form, formI) => {
          return (
            <Form.Group controlId={form.id} key={form.id}>
              <Form.Label>{form.label}</Form.Label>
              <Form.Control
                type={form.type}
                placeholder={form.placeholder}
                onChange={functions.fillForm}
                onKeyDown={functions.fillForm}
              />
            </Form.Group>
          );
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
