import React, { useState, useEffect } from "react";

//REDUX IMPORT
import { useDispatch, useSelector } from "react-redux";
import {
  setMainOption,
  setCourse,
  setSubOption,
  setSubTitle,
} from "Store/adminPage/actions";

//DATA IMPORTS
import { dropDownValues } from "./values";

//PERSONAL COMPONENTS IMPORTS
import Course from "./Sub_Components/Course/Course";
import Batch from "./Sub_Components/Batch/Batch";
import TestMenu from "./Sub_Components/TestMenu/TestMenu";

//BOOTSTRAP IMPORTS
import { Row, Col, Dropdown } from "react-bootstrap";

//STYLE IMPORTS
import "./AdminMenu.scss";
import AdminHeader from "./Sub_Components/AdminHeader/AdminHeader";

export default function AdminMenu() {
  //REDUX
  const main_option = useSelector(
    (state) => state.adminPageReducer.main_option
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMainOption("Course"));
    dispatch(setCourse("Web"));
    dispatch(setSubOption("batch"));
    dispatch(setSubTitle("batch-list"));
  }, []);

  return (
    <div className="admin-menu">
      <Row>
        <Col xs={4}>
          <h3>
            <span>/</span>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {main_option}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {dropDownValues.map((v, vI) => {
                  return (
                    <Dropdown.Item
                      key={vI}
                      style={{ display: main_option === v ? "none" : "" }}
                      onClick={() => dispatch(setMainOption(v))}
                    >
                      {v}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </h3>
          <div className="options">
            <Course />
          </div>
        </Col>
        <Col xs={12} md={8}>
          <AdminHeader />
          <Batch />
          <TestMenu />
        </Col>
      </Row>
    </div>
  );
}
