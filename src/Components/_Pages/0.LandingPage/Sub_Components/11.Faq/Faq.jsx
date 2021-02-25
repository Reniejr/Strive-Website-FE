import React, { useState } from "react";

//DATA IMPORTS
import qAndAs from "./data.json";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./Faq.scss";

export default function Faq() {
  const [quest, setQuest] = useState(null);

  const selectQuest = (i) => {
    quest === i ? setQuest(null) : setQuest(i);
  };

  return (
    <section id="faq">
      <Container>
        <Row>
          <Col lg={4}>
            <h3>
              <span>/</span>FAQ?
            </h3>
          </Col>
          <Col lg={8}>
            {qAndAs.map((qA, i) => {
              return (
                <>
                  <div
                    className="q_a"
                    key={i}
                    style={{ maxHeight: quest === i ? "20rem" : "3rem" }}
                  >
                    <span
                      onClick={() => selectQuest(i)}
                      style={{ fontWeight: quest === i ? "700" : "" }}
                    >
                      <i
                        className={`fas fa-chevron-${
                          quest === i ? "right" : "down"
                        }`}
                        style={{ color: quest === i ? "black" : "#00ff84" }}
                      ></i>
                      {qA.q}
                    </span>
                    <div className="answer">{qA.a}</div>
                  </div>
                  <hr />
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
