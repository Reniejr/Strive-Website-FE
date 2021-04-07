import React from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import ShowCase from "./Sub_Components/Showcase/ShowCase";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./StriveDifference.scss";

export default function StriveDifference({ functions }) {
  return (
    <section id="strive-difference">
      <img src="./assets/backgr03.png" alt="" className="bg-img"></img>
      <Container>
        <Row>
          <Col lg={4}>
            <h3>
              <span>/</span>Strive School VS Alternatives
            </h3>
          </Col>
          <Col lg={8}>
            <table>
              <tr>
                <th></th>
                <th>
                  <img
                    src="./assets/4.StriveDifference/strive_logo02.png"
                    alt=""
                  />
                </th>
                <th>
                  <img
                    src="./assets/4.StriveDifference/university.png"
                    alt=""
                  />
                </th>
                <th>
                  <img src="./assets/4.StriveDifference/bootcamp.png" alt="" />
                </th>
              </tr>
              {data.map((school, index) => {
                return (
                  <tr key={index}>
                    <td>{school.title}</td>
                    <td>
                      <p>{school.strive.n}</p>
                      {school.strive.s !== null ? (
                        <p>{school.strive.s}</p>
                      ) : null}
                    </td>
                    <td>
                      <p>{school.university.n}</p>
                      {school.university.s !== null ? (
                        <p>{school.university.s}</p>
                      ) : null}
                    </td>
                    <td>
                      <p>{school.bootcamp.n}</p>
                      {school.bootcamp.s !== null ? (
                        <p>{school.bootcamp.s}</p>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </table>
          </Col>
        </Row>
        <ShowCase />
        <button className="strive-btn" onClick={functions.setShow}>
          Apply Now
        </button>
      </Container>
    </section>
  );
}
