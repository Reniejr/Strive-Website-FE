import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Store/user/actions";

//UTILITIES IMPORTS
import {
  uploadProfile,
  editProfile,
  getProfile,
} from "Components/_Main/PageSettings/utilities";

//VALUES IMPORTS
import { studentForm, userForm } from "./values";

//BOOTSTRAP IMPORTS
import { Form } from "react-bootstrap";

//STYLE IMPORT
import "./EditStudent.scss";

export default function EditStudent({ state, functions }) {
  //REDUX
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  //STATE
  const [pwd, setPwd] = useState("password");
  const [imgConfirm, setImgConfirm] = useState(false);
  const [user, setUser] = useState(userForm(userInfo));
  const [credentials, setCredentials] = useState(
    localStorage.getItem(`user-${userInfo.firstName}`)
  );

  //ONCHANGE
  const fillForm = (e) => {
    let newInfo = { ...user };
    let currentId = e.currentTarget.id;
    newInfo[currentId] = e.currentTarget.value;
    setUser(newInfo);
  };

  useEffect(() => {
    setImgConfirm(true);
  }, [user.profile]);

  //CONFIRM EDIT
  const confirmEdit = async (e) => {
    e.preventDefault();
    localStorage.removeItem(`user-${userInfo.firstName}`);
    await editProfile(user);
    const editedUser = await getProfile();
    const newCredentials = {
      profile: editedUser.profile,
      email: editedUser.email,
      password: user.password,
    };
    localStorage.setItem(
      `user-${editedUser.firstName}`,
      JSON.stringify(newCredentials)
    );
    dispatch(selectUser(editedUser));
    functions.flipFn();
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
    <div className="edit-student" style={{ zIndex: state.isFlip ? "10" : "" }}>
      <header>
        <i className="fas fa-arrow-left" onClick={functions.flipFn}></i>
        Edit Profile
      </header>
      <Form onSubmit={confirmEdit}>
        <div class="image-upload">
          <label for="profile">
            <img src={user.profile} alt="" />
            <div className="edit-icon">
              <i className="fas fa-pen"></i>
            </div>
          </label>
          <input
            className="profile-upload-img"
            id="profile"
            type="file"
            onChange={(e) =>
              setUser({
                ...userInfo,
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
        {studentForm.map((input, inputI) => {
          return (
            <Form.Group controlId={input.id} key={input.id}>
              <Form.Label>{input.label}</Form.Label>
              <Form.Control
                type={input.type === "password" ? pwd : input.type}
                placeholder={input.placeholder}
                value={user[input.id]}
                onChange={fillForm}
              />
              <i
                className={`fas ${
                  pwd === "password" ? "fa-eye-slash" : "fa-eye"
                }`}
                style={{
                  display: input.type === "password" ? "" : "none",
                }}
                onClick={() => {
                  pwd === "password" ? setPwd("text") : setPwd("password");
                }}
              ></i>
            </Form.Group>
          );
        })}
        <button type="submit">Confirm</button>
      </Form>
    </div>
  );
}
