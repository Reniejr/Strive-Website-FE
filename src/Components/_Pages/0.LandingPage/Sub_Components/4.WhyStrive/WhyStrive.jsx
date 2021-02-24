import React from "react";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./WhyStrive.scss";

export default function WhyStrive() {
  return (
    <section id="why-strive">
      <Container>
        <div className="section-description">
          <h3>
            <span>/</span>Why Strive School{" "}
          </h3>
          <p>
            An online remote program, taught by experienced teachers, where
            you'll get to work with a flock of great talents from all over
            Europe.
          </p>
        </div>
        <Row>
          <Col sm={6} lg={3}>
            <img src="./assets/2.WhyStrive/flag.png" alt="" />
            <h3>Pay the tuition after getting hired</h3>
            <p>
              There's no upfront cost for the program! Focus on mastering
              full-stack Software Engineering and start paying after you get
              hired, 10% of your gross salary a month, up to 30 months maximum.
              <br />
              <br />
              For UK students there's a small processing fee of 250£, which is
              refundable in case of dropping out within the first 4 weeks.
            </p>
          </Col>
          <Col sm={6} lg={3}>
            <img src="./assets/2.WhyStrive/flag.png" alt="" />
            <h3>LIVE, Online Learning</h3>
            <p>
              Our courses are deisgned to give you the best chance of learning
              any topic quickly. You'll be able to ask questions live if
              something is unclear or re-watch the recorded video as many times
              as you want for a more in-depth look.
            </p>
          </Col>
          <Col sm={6} lg={3}>
            <img src="./assets/2.WhyStrive/flag.png" alt="" />
            <h3>Learn by building real world projects</h3>
            <p>
              Highly interactive and fully remote program - gives you the
              freedom you've always wanted by learning from anywhere you want.
            </p>
          </Col>
          <Col sm={6} lg={3}>
            <img src="./assets/2.WhyStrive/flag.png" alt="" />
            <h3>1-1 and group Mentorship</h3>
            <p>
              The success of our programs is a result of our world class
              instructors, our talented students, and their ability to help each
              other through pair programming, coaching and code reviews.
            </p>
          </Col>
        </Row>
      </Container>
      <button>Apply Now</button>
    </section>
  );
}
