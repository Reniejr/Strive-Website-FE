import React, { useState } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORT
import "./StudentList.scss";
import StudentCard from "./StudentCard/StudentCard";

export default function StudentList({ state }) {
  const batchInfo = useSelector((state) => state.batchReducer.batch);

  const [student, setStudent] = useState(null);

  return (
    <div
      id="students-list"
      className="teacher-page"
      style={state.style(state.page === "students-list" ? true : false)}
    >
      {batchInfo !== null ? (
        <>
          <h1>Student List of {batchInfo.name}</h1>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <ul>
                  <li>
                    Total Students : <span>{batchInfo.studentList.length}</span>
                  </li>
                  {batchInfo.studentList.length > 0 ? (
                    batchInfo.studentList.map((s, sI) => {
                      return (
                        <li key={sI} onClick={() => setStudent(s)}>
                          {sI + 1}.{" "}
                          <span>
                            {s.firstName} {s.lastName}
                          </span>
                        </li>
                      );
                    })
                  ) : (
                    <p>No students found</p>
                  )}
                </ul>
              </Col>
              <Col xs={12} md={8}>
                {student !== null ? (
                  <StudentCard state={{ student }} />
                ) : (
                  <p className="no-result">No Student Selected</p>
                )}
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <h1>No Batch Selected</h1>
      )}
    </div>
  );
}
