import React from "react";

//DATA IMPORTS
import stages from "./data.json";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./AdmissionProcess.scss";

export default function AdmissionProcess() {
  return (
    <section id="admission-process">
      <Container>
        <Row>
          <Col lg={4}>
            <h3>
              <span>/</span>Admission process
            </h3>
          </Col>
          {stages.map((stage, i) => {
            return (
              <Col key={i}>
                <p>Stage</p>
                <h3>{stage.n}</h3>
                <p>{stage.title}</p>
                <p>{stage.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
