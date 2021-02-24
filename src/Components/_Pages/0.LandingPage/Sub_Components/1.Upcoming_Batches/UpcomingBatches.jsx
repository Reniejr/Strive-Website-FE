import React from "react";

//BOOTSTRAP IMPORTS
import { Container, Row, Col, Card } from "react-bootstrap";

//STYLE IMPORTS
import "./UpcomingBatches.scss";

export default function UpcomingBatches() {
  return (
    <section id="upcomingBatches">
      <Container>
        <Row>
          <Col md={4}>
            <h3>
              <span>/</span>
              Upcoming Batches
            </h3>
          </Col>
          <Col md={4}>
            <Card
              className="mx-auto mx-md-0 py-3 shadow border-0 dark"
              style={{ backgroundColor: "#010d0e", color: "#fff" }}
            >
              <p>Mar</p>
              <h2>08</h2>
            </Card>
            <h5>Web Engineering</h5>
            <p>
              Learn how to be a great engineer and build complex apps in 6
              months.
            </p>
            <p>Full Time (Mon to Fri), all day.</p>
            <h5>Application deadline: Feb, 28th</h5>
          </Col>
          <Col md={4}>
            <Card className="mx-auto mx-md-0 py-3 shadow border-0 light">
              <p>Mar</p>
              <h2>15</h2>
            </Card>
            <h5>AI Engineering</h5>
            <p>
              Go beyond data science and launch your career in AI in 6 months.
            </p>
            <p>Full Time (Mon to Fri), all day.</p>
            <h5>Application deadline: Mar, 7th</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
