import React from "react";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./Footer.scss";

export default function Footer() {
  return (
    <section id="footer">
      <img src="./assets/backgr03.png" alt="" className="bg-img" />
      <Container>
        <Row>
          <Col lg={4}>
            <img src="./assets/0.banner/strive_white.png" alt="" />
            Copyright 2021 Strive School
          </Col>
          <Col lg={4}>
            <span></span>
            <a href="">Privacy Policy | GDPR</a>
            <a href="">Impressum</a>
            <a href="">Blog</a>
            <a href="">Ignite</a>
          </Col>
          <Col lg={4}>
            <p>Backed by</p>
            <img src="./assets/y-combinator.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
