import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Store/user/actions";
//UTILITIES IMPORTS
import { uploadProfile, editProfile, getProfile } from "../../utilities";

//VALUES IMPORTS
import { editProfileForm, initialInfo } from "./values";

//BOOTSTRAP IMPORT
import { Modal, Form, Row, Col } from "react-bootstrap";

//PERSONAL COMPONENTS IMPORTS
import {
  UpperTemplate,
  LowerTemplate,
} from "../../../Templates/Strive01/Strive01";

//STYLE IMPORTS
import "./EditProfile.scss";

export default function EditProfile({ state, functions }) {
  //REDUX
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  //STATE
  const [modalInfo, setModalInfo] = useState(initialInfo(userInfo));
  const [pwd, setPwd] = useState("password");
  const [imgConfirm, setImgConfirm] = useState(false);

  //ONCHANGE
  const fillForm = (e) => {
    let newInfo = { ...modalInfo };
    let currentId = e.currentTarget.id;
    newInfo[currentId] = e.currentTarget.value;
    setModalInfo(newInfo);
  };

  useEffect(() => {
    if (state.show) {
      setImgConfirm(true);
    }
  }, [modalInfo.profile]);

  //CONFIRM EDIT
  const confirmEdit = async (e) => {
    e.preventDefault();
    await editProfile(modalInfo);
    const editedUser = await getProfile();
    dispatch(selectUser(editedUser));
    functions.handleClose();
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
    <Modal
      show={state.show}
      onHide={functions.handleClose}
      className="edit-profile"
    >
      <Modal.Header>
        <Modal.Title>Edit Profile</Modal.Title>
        <UpperTemplate />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={confirmEdit}>
          <div class="image-upload">
            <label for="profile">
              <img src={modalInfo.profile} alt="" />
              <div className="edit-icon">
                <i className="fas fa-pen"></i>
              </div>
            </label>
            <input
              className="profile-upload-img"
              id="profile"
              type="file"
              onChange={(e) =>
                setModalInfo({
                  ...modalInfo,
                  profile: URL.createObjectURL(e.currentTarget.files[0]),
                })
              }
            />
            <button
              type="button"
              style={{ display: imgConfirm ? "" : "none" }}
              onClick={(e) => photoConfirm(e)}
            >
              Confirm
            </button>
          </div>
          <Row>
            <Col xs={12} md={6}>
              {editProfileForm.slice(0, 3).map((input, inputI) => {
                return (
                  <Form.Group controlId={input.id} key={input.id}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control
                      type={input.type}
                      placeholder={input.placeholder}
                      value={modalInfo[input.id]}
                      onChange={fillForm}
                    />
                  </Form.Group>
                );
              })}
            </Col>
            <Col xs={12} md={6}>
              <Form.Group
                controlId={editProfileForm[3].id}
                key={editProfileForm[3].id}
              >
                <Form.Label>{editProfileForm[3].label}</Form.Label>
                <Form.Control
                  type={pwd}
                  placeholder={editProfileForm[3].placeholder}
                  value={modalInfo[editProfileForm[3].id]}
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
              <Form.Group
                controlId="occupation"
                style={{
                  display:
                    userInfo.role === "admin" || userInfo.role === "teacher"
                      ? ""
                      : "none",
                }}
              >
                <Form.Label>Occupation</Form.Label>
                <textarea
                  id="occupation"
                  cols="20"
                  rows="5"
                  placeholder="Occupation"
                  value={modalInfo.occupation}
                  onChange={fillForm}
                ></textarea>
              </Form.Group>
            </Col>
          </Row>
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
