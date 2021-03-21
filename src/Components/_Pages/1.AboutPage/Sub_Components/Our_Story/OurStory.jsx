import React from "react";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./OurStory.scss";

export default function OurStory() {
  return (
    <section id="our-story">
      {/* <img src="./assets/backgr02.2.png" alt="" className="bg-img" /> */}
      <h3 id="our-story-title">
        <span>/</span>Strive Story
      </h3>
      <div className="strive-anim">
        <img src="https://i.ibb.co/vzCDJ2R/strive2-Inv.png" alt="" />
        <img src="https://i.ibb.co/SJJC3Bp/strive1-Inv.png" alt="" />
      </div>
      <Container>
        <Row>
          <Col>
            <div className="entrance-anim">
              <img src="https://i.ibb.co/vzCDJ2R/strive2-Inv.png" alt="" />
              <div className="our-story-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  nulla sed numquam earum debitis quod deleniti consectetur
                  commodi mollitia repudiandae, iste facere in esse aspernatur
                  quas tempora fugit natus aliquam quos soluta minima voluptatum
                  suscipit id? Eveniet rem similique dolorem aliquid maxime
                  cumque, numquam tempore non quo veniam atque ex! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ab nulla sed
                  numquam earum debitis quod deleniti consectetur commodi
                  mollitia repudiandae, iste facere in esse aspernatur quas
                  tempora fugit natus aliquam quos soluta minima voluptatum
                  suscipit id? Eveniet rem similique dolorem aliquid maxime
                  cumque, numquam tempore non quo veniam atque ex! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. suscipit id?
                  Eveniet rem similique dolorem aliquid maxime cumque, numquam
                  tempore non quo veniam atque ex! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </div>
              <img src="https://i.ibb.co/SJJC3Bp/strive1-Inv.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
