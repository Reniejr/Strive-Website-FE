import React from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import StaffCard from "./StaffCard/StaffCard";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORT
import "./OurStaff.scss";

export default function OurStaff() {
  return (
    <section id="our-staff">
      <Container>
        <h3>
          <span>/</span>Strive Staff
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          deleniti?
        </p>
        <Row>
          {data[0].map((user, i) => {
            return (
              <Col lg={6} key={i} className="school-staff">
                <StaffCard flexibility={50} />
              </Col>
            );
          })}
        </Row>
        <h3>
          <span>/</span>Our Teacher
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          corrupti animi asperiores. Illum maiores facilis recusandae
          blanditiis, ea dolores officia.
        </p>
        <Row>
          <Col lg={6}>
            <h3>
              <span>/</span>Full Stack
            </h3>
            <Row>
              {data[1].map((user, i) => {
                return (
                  <Col xs={12} key={i} className="school-staff">
                    <StaffCard flexibility={50} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg={6}>
            <h3>
              <span>/</span>AI
            </h3>
            <Row>
              {data[2].map((user, i) => {
                return (
                  <Col xs={12} key={i} className="school-staff">
                    <StaffCard flexibility={50} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
