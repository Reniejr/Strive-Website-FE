import React, { useState, useEffect } from "react";

//VALUES IMPORTS
import { lessonForm, activeDayKeys } from "../../values";

//BOOTSTRAP IMPORTS
import { Form, Row, Col } from "react-bootstrap";

//UTILITIES IMPORTS
import { uploadFile } from "Components/_Utilities";

//PERSONAL COMPONENTS IMPORTS
import AddFileInput from "../AddDayForm/AddFileInput/AddFileInput";

//STYLE IMPORTS
import "./LessonDetails.scss";

export default function LessonDetails({ state }) {
  const [info, setInfo] = useState(activeDayKeys);
  const [uploadConfirm, setUploadConfirm] = useState(false);

  //ONCHANGE
  const fillForm = (e) => {
    let newInfo = { ...info };
    let currentId = e.currentTarget.id;
    newInfo[currentId] = e.currentTarget.value;
    setInfo(newInfo);
  };

  useEffect(() => {
    let newInfo = { ...info };
    if (state.day !== undefined) {
      Object.keys(info).forEach((key) => {
        newInfo[key] = state.day[key];
      });
      console.log(newInfo);
      setInfo(newInfo);
    } else {
      setInfo(activeDayKeys);
    }
  }, [state.batch, state.day]);

  useEffect(() => {
    setUploadConfirm(true);
  }, [info.homework]);

  //CONFIRM FILE
  const fileConfirm = async (e) => {
    e.preventDefault();
    setUploadConfirm(false);
    await uploadFile(state.batch._id, { module: info.module, day: info.day });
  };

  return (
    <div
      className="lesson-details"
      style={{ marginLeft: state.show ? "200%" : "" }}
    >
      <Row>
        <Col xs={4}>{info.module}</Col>
        <Col xs={4}>{info.day}</Col>
        <Col xs={4}>
          <AddFileInput
            info={{ info, uploadConfirm }}
            functions={{ setInfo, fileConfirm }}
          />
        </Col>
      </Row>
      <Form>
        {lessonForm.slice(2, 7).map((l, lI) => {
          return (
            <Form.Group controlId={l.id}>
              <Form.Label>{l.label} :</Form.Label>
              <Form.Control
                type={l.type}
                placeholder={l.placeholder}
                onChange={fillForm}
                value={info[l.id]}
              />
            </Form.Group>
          );
        })}
      </Form>
    </div>
  );
}
