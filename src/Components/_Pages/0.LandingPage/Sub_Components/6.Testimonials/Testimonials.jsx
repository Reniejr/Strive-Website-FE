import React from "react";

//DATA IMPORTS
import testimonials from "./data.json";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <Container>
        <Row>
          <Col md={4}>
            <h3>
              <span>/</span>More from our Graduates
            </h3>
            <p>
              Some of these reviews refer to the experience with Akademy.ai,
              which recently became part of Strive School family
            </p>
          </Col>
          <Col md={8}>
            {testimonials.map((person) => {
              return (
                <div className="testimonial">
                  <Row>
                    <Col xs={2}>
                      <img src={person.photo} alt="" />
                    </Col>
                    <Col xs={10}>
                      <p>{person.review}</p>
                      <p>
                        -{person.name} ({person.job})
                      </p>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
