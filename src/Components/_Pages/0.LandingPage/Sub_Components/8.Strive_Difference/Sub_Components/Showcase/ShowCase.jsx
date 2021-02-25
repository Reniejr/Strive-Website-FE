import React, { useState } from "react";

//DATA IMPORTS
import icons from "./data.json";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./ShowCase.scss";

export default function ShowCase() {
  const [course, setCourse] = useState(0);

  return (
    <div className="showcase">
      <Row>
        <Col lg={3}>
          <h5>
            Small showcase of <br /> <span>our tech stack</span>
          </h5>
          <div className="buttons">
            <button
              onClick={() => setCourse(0)}
              style={
                course === 0
                  ? { backgroundColor: "#00ff84", fontWeight: "700" }
                  : {
                      backgroundColor: "transparent",
                      fontWeight: "400",
                      color: "#fff",
                    }
              }
            >
              AI
            </button>
            <button
              onClick={() => setCourse(1)}
              style={
                course === 1
                  ? { backgroundColor: "#00ff84", fontWeight: "700" }
                  : {
                      backgroundColor: "transparent",
                      fontWeight: "400",
                      color: "#fff",
                    }
              }
            >
              Full Stack
            </button>
          </div>
        </Col>
        <Col lg={9}>
          <div className="icons">
            {icons[course].icons.map((img, i) => {
              return <img src={img} alt="" key={i} />;
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}
