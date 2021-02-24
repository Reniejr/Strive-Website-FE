import React from "react";

//DATA IMPORTS
import data from "./data.json";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./StriveDifference.scss";

export default function StriveDifference() {
  return (
    <section id="strive-difference">
      <Container>
        <Row>
          <Col lg={4}>
            <h3>
              <span>/</span>Strive School VS Alternatives
            </h3>
          </Col>
          <Col lg={8}>
            <table>
              <tr>
                <th></th>
                <th>strive</th>
                <th>university</th>
                <th>bootcamp</th>
              </tr>
              {data.map((school, index) => {
                return (
                  <tr key={index}>
                    <td>{school.title}</td>
                    <td>
                      <p>{school.strive.n}</p>
                      {school.strive.s !== null ? (
                        <p>{school.strive.s}</p>
                      ) : null}
                    </td>
                    <td>
                      <p>{school.university.n}</p>
                      {school.university.s !== null ? (
                        <p>{school.university.s}</p>
                      ) : null}
                    </td>
                    <td>
                      <p>{school.bootcamp.n}</p>
                      {school.bootcamp.s !== null ? (
                        <p>{school.bootcamp.s}</p>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
