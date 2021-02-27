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
          <span>/</span>Our Staff
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          deleniti?
        </p>
        <Row>
          {data.map((user, i) => {
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
          </Col>
          <Col lg={6}>
            <h3>
              <span>/</span>AI
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
