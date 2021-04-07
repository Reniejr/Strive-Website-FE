import React, { useState, useEffect } from "react";

//REDUX IMPORT
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle } from "Store/adminPage/actions";

//PERSONAL COMPONENTS IMPORTS
import { CircLogo } from "Components/_Main/Assets/Assets";

//VALUES IMPORTS
import { testForm, testFormState } from "./values";

//BOOTSTRAP IMPORTS
import { Form, Button } from "react-bootstrap";

//UTLITIES IMPORTS
import { getBatchList } from "../../../../utilities";
import { createRoom } from "Components/_Utilities";

//STYLE IMPORTS
import "./AddTestForm.scss";

export default function AddTestForm({ state, functions }) {
  const [batchList, setBatchList] = useState([]);
  const [testState, setTestState] = useState(testFormState);
  const [option, setOption] = useState({});
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (adminPage.sub_title === "add-test") {
      (async () => {
        const list = await getBatchList(adminPage.course);
        // console.log(list);
        setBatchList(list);
        setOption(list[list.length - 1]);
      })();
    }
    setTestState({ ...testState, course: adminPage.course });
  }, [adminPage.sub_title]);

  useEffect(() => {
    setTestState({ ...testState, batch: option.name, batchId: option._id });
  }, [option]);

  const fillForm = (e) => {
    let newTest = { ...testState };
    let currentId = e.currentTarget.id;
    if (currentId === "time") {
      newTest.time = `${e.currentTarget.value}`;
    } else {
      newTest[currentId] = e.currentTarget.value;
    }
    setTestState(newTest);
  };

  const newRoom = async (e) => {
    e.preventDefault();
    await createRoom(testState);
    dispatch(setSubTitle("admission-test-list"));
  };

  return (
    <div
      className="add-test opt"
      style={{
        marginLeft: adminPage.sub_title === "add-test" ? "" : "120%",
      }}
    >
      <div className="test-form">
        <CircLogo />
        <Form onSubmit={newRoom}>
          {testForm.slice(0, 2).map((form, formI) => {
            return (
              <Form.Group controlId={form.id} key={form.id}>
                <Form.Label>{form.label}</Form.Label>
                <Form.Control
                  type={form.type}
                  placeholder={form.placeholder}
                  min={form.type === "number" ? form.min : null}
                  onChange={fillForm}
                  // onKeyDown={functions.fillForm}
                />
              </Form.Group>
            );
          })}
          <Form.Group controlId="batchId">
            <Form.Label>{testForm[2].label}</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => console.log(e.currentTarget.value)}
              value={option}
            >
              {batchList.map((batch) => {
                return <option key={batch._id}>{batch.name}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
