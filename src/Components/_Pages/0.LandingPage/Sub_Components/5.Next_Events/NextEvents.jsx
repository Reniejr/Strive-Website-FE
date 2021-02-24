import React from "react";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./NextEvents.scss";

export default function NextEvents() {
  return (
    <section id="next-events">
      <h3>
        <span>/</span>Next Events
      </h3>
      <br />
      <hr />
      <br />
      <div className="event">
        <Row>
          <Col md={3} className="event-name">
            <div className="header">Monday to Friday</div>
            <div className="title">Meet our CEO</div>
            <div className="sub-title">Time: 17.00 CET</div>
          </Col>
          <Col md={6} className="event-description">
            Learn about what does it mean to join Strive School from Tobia, our
            CEO. You can ask anything about the program, pricing, schedule,
            career support and more. We'll help you learn if Strive School is
            the right choice for you.
          </Col>
          <Col md={3}>
            <button>Register</button>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="event">
        <Row>
          <Col md={3} className="event-name">
            <div className="header">Monday & Wednesday</div>
            <div className="title">Meet our Faculty</div>
            <div className="sub-title">Time: 11.30 CET</div>
          </Col>
          <Col md={6} className="event-description">
            Meet our Faculty and ask all the questions you like about the
            program, the syllabus, the content, or the projects. How a day in
            Strive School looks like? What is the role of a Full Stack, AI or
            Frontend engineer looks like? Just join and ask about it!
          </Col>
          <Col md={3}>
            <button>Register</button>
          </Col>
        </Row>
      </div>
      <hr />
    </section>
  );
}
