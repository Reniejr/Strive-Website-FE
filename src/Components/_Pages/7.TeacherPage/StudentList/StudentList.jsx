import React from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORT
import "./StudentList.scss";

export default function StudentList({ state }) {
  const batchInfo = useSelector((state) => state.batchReducer.batch);

  return (
    <div
      id="students-list"
      className="teacher-page"
      style={state.style(state.page === "students-list" ? true : false)}
    >
      <h1>Student List of {batchInfo.name}</h1>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <ul>
              {batchInfo.studentList.length > 0 ? (
                batchInfo.studentList.map((s, sI) => {
                  return (
                    <li key={sI}>
                      {s.firstName} {s.lastName}
                    </li>
                  );
                })
              ) : (
                <p>No students found</p>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
