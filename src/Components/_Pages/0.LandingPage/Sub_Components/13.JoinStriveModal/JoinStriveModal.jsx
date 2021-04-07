import React, { useState, useEffect } from "react";

//UTILITIES IMPORTS
import { getTest } from "../utilities";

//PERSONAL COMPONENTS IMPORTS
import {
  UpperTemplate,
  LowerTemplate,
} from "Components/_Main/Templates/Strive01/Strive01";

//BOOTSTRAP IMPORT
import { Modal, Form, Alert } from "react-bootstrap";

//STYLE IMPORTS
import "./JoinStriveModal.scss";

export default function JoinStriveModal({ state, functions }) {
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("Web");
  const [test, setTest] = useState("");
  const [success, setSuccess] = useState(false);

  const fillEmail = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      handleSubmit();
    } else {
      setEmail(e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (course === "Web") {
      setTest(state.webTest);
    }
    if (course === "AI") {
      setTest(state.aiTest);
    }
  }, [course]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(test);
    let result = await getTest({ email }, test);
    console.log(result);
    if (result.status === 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        functions.handleClose();
      }, 1000);
    }
  };

  return (
    <Modal
      show={state.show}
      onHide={functions.handleClose}
      className="get-test-modal"
    >
      <Modal.Header>
        <Modal.Title>Get Test</Modal.Title>
        <UpperTemplate />
      </Modal.Header>
      <Modal.Body>
        <Alert variant="success" style={{ display: success ? "" : "none" }}>
          <i className="fas fa-check-circle"></i>
          <p>Admission Test has been sent</p>
        </Alert>
        <h5>Type your Email to get the admission test link</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={fillEmail}
              onKeyDown={fillEmail}
            />
          </Form.Group>
          <Form.Group controlId="course">
            <Form.Label>Which Course</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCourse(e.currentTarget.value)}
            >
              <option>Web</option>
              <option>AI</option>
            </Form.Control>
          </Form.Group>
          <Modal.Footer>
            <LowerTemplate />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                functions.handleClose();
              }}
            >
              Close
            </button>
            <button type="submit">Save Changes</button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
