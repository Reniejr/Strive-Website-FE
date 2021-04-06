import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Store/user/actions";

//PERSONAL COMPONENTS IMPORTS
import HeaderCard from "Components/_Main/HeaderCard/HeaderCard";
import BG01 from "Components/_Main/Backgrounds/BG01/BG01";
import EditPic from "Components/_Main/EditPic/EditPic";

//VALUES IMPORTS
import {
  editProfileForm,
  initialInfo,
} from "Components/_Main/PageSettings/Sub_Components/EditProfile/values";

//UTILITIES IMPORTS
import {
  uploadProfile,
  editProfile,
  getProfile,
} from "Components/_Main/PageSettings/utilities";

//BOOTSTRAP IMPORTS
import { Container, Form, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./TeacherInfo.scss";

export default function TeacherInfo({ state }) {
  const userState = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  //STATE
  const [info, setInfo] = useState(initialInfo(userState));
  const [pwd, setPwd] = useState("password");
  const [imgConfirm, setImgConfirm] = useState(false);

  //ONCHANGE
  const fillForm = (e) => {
    let newInfo = { ...info };
    let currentId = e.currentTarget.id;
    newInfo[currentId] = e.currentTarget.value;
    setInfo(newInfo);
  };

  useEffect(() => {
    setImgConfirm(true);
  }, [info.profile]);

  //CONFIRM EDIT
  const confirmEdit = async (e) => {
    e.preventDefault();
    await editProfile(info);
    const editedUser = await getProfile();
    dispatch(selectUser(editedUser));
  };

  //CONFIRM PHOTO
  const photoConfirm = async (e) => {
    e.preventDefault();
    setImgConfirm(false);
    await uploadProfile();
    const edited = await getProfile();
    dispatch(selectUser(edited));
  };

  return (
    <div
      className="teacher-info teacher-page"
      style={state.style(state.page === "edit-user" ? true : false)}
    >
      <div className="header">
        <HeaderCard />
        <BG01 />
      </div>
      <Container>
        <Form>
          <EditPic
            info={{ info, imgConfirm }}
            functions={{ setInfo, photoConfirm }}
          />
          <Row>
            <Col xs={12} sm={6}>
              {editProfileForm.slice(0, 3).map((form, formI) => {
                return (
                  <Form.Group controlId={form.id} key={form.id}>
                    <Form.Label>{form.label}</Form.Label>
                    <Form.Control
                      type={form.type}
                      placeholder={form.placeholder}
                      value={info[form.id]}
                      onChange={fillForm}
                    />
                  </Form.Group>
                );
              })}
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId={editProfileForm[3].id}>
                <Form.Label>{editProfileForm[3].label}</Form.Label>
                <Form.Control
                  type={pwd}
                  placeholder={editProfileForm[3].placeholder}
                  value={info.password}
                  onChange={fillForm}
                />
                <i
                  className={`fas ${
                    pwd === "password" ? "fa-eye-slash" : "fa-eye"
                  }`}
                  style={{
                    display:
                      editProfileForm[3].type === "password" ? "" : "none",
                  }}
                  onClick={() => {
                    pwd === "password" ? setPwd("text") : setPwd("password");
                  }}
                ></i>
              </Form.Group>
              <Form.Group controlId="occupation">
                <Form.Label>Occupation</Form.Label>
                <textarea
                  id="occupation"
                  cols="40"
                  rows="5"
                  placeholder="Occupation"
                  onChange={fillForm}
                  value={info.occupation}
                ></textarea>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <button onClick={() => setInfo(initialInfo(userState))}>
              Cancel
            </button>
            <button onClick={() => confirmEdit()}>Confirm</button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
