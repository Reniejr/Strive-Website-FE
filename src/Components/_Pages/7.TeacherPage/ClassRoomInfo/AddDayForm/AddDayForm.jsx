import React, { useState } from "react";

//VALUES IMPORTS
import { lessonForm, activeDayKeys } from "../../values";

//BOOTSTRAP IMPORTS
import { Form, Row, Col } from "react-bootstrap";

//UTILITIES IMPORTS
import { newLesson } from "Components/_Utilities";

//STYLE IMPORTS
import "./AddDayForm.scss";

export default function AddDayForm({ state, functions }) {
  const [info, setInfo] = useState(activeDayKeys);

  //ONCHANGE
  const fillForm = (e) => {
    let newInfo = { ...info };
    let currentId = e.currentTarget.id;
    newInfo[currentId] = e.currentTarget.value;
    setInfo(newInfo);
  };

  const postLesson = async (e) => {
    e.preventDefault();
    functions.show(false);
    const lesson = await newLesson(info, state.batch._id);
  };

  return (
    <div
      className="add-day-form"
      style={{ marginLeft: state.show ? "" : "200%" }}
    >
      <button className="close-btn" onClick={() => functions.show(false)}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <Form onSubmit={postLesson}>
        <Row>
          {lessonForm.slice(0, 2).map((l, lI) => {
            return (
              <Col xs={4}>
                <Form.Group controlId={l.id} key={lI}>
                  <Form.Label>{l.label}</Form.Label>
                  <Form.Control
                    type={l.type}
                    placeholder={l.placeholder}
                    min={l.type === "number" ? l.min : null}
                    max={l.type === "number" ? l.max : null}
                    onChange={fillForm}
                  />
                </Form.Group>
              </Col>
            );
          })}
        </Row>
        {lessonForm.slice(2, 7).map((l, lI) => {
          return (
            <Form.Group controlId={l.id}>
              <Form.Label>{l.label}</Form.Label>
              <Form.Control
                type={l.type}
                placeholder={l.placeholder}
                onChange={fillForm}
              />
            </Form.Group>
          );
        })}
        <button type="submit">Confirm</button>
      </Form>
    </div>
  );
}
