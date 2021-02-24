import React, { useState } from "react";

//DATA IMPORTS
import schedules from "./data.json";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./DailySchedule.scss";

export default function DailySchdeule() {
  const [course, setCourse] = useState(1);

  return (
    <section id="daily-schdeule">
      <Container>
        <Row>
          <Col md={3}>
            <h3>
              <span>/</span>Daily Schedule
            </h3>
            <button
              onClick={() => setCourse(1)}
              style={
                course === 1
                  ? { backgroundColor: "#00ff84", fontWeight: "700" }
                  : { backgroundColor: "transparent", fontWeight: "400" }
              }
            >
              AI
            </button>
            <button
              onClick={() => setCourse(0)}
              style={
                course === 0
                  ? { backgroundColor: "#00ff84", fontWeight: "700" }
                  : { backgroundColor: "transparent", fontWeight: "400" }
              }
            >
              Web
            </button>
          </Col>
          <Col md={9}>
            {schedules[course].schedule.map((schedule) => {
              return (
                <div className="schedule">
                  <Row>
                    <Col xs={2}>{schedule.time}</Col>
                    <Col xs={3}>{schedule.title}</Col>
                    <Col xs={7}>{schedule.topic}</Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
        <div className="shade"></div>
      </Container>
      <Row>
        <Col lg={4}>
          <h5>Learn more about our AI & Web programs</h5>
          <h5>Enter your email to get the syllabus</h5>
        </Col>
        <Col lg={8}>
          <input type="text" placeholder="What's your name?" />
          <input type="text" placeholder="Your email here" />
          <button>Get syllabus</button>
        </Col>
      </Row>
    </section>
  );
}
