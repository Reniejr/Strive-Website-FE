import React from "react";

//DATA IMPORTS
import events from "./data.json";

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
      {events.map((event, index) => {
        return (
          <div className="event" key={index}>
            <Row>
              <Col md={3} className="event-name">
                <div className="header">{event.days}</div>
                <div className="title">{event.title}</div>
                <div className="sub-title">Time: {event.time}</div>
              </Col>
              <Col md={6} className="event-description">
                {event.description}
              </Col>
              <Col md={3}>
                <button>Register</button>
              </Col>
            </Row>
            <hr />
          </div>
        );
      })}
    </section>
  );
}
