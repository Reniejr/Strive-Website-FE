import React from "react";

//BOOTSTRAP IMPORTS
import { Container } from "react-bootstrap";

//STYLE IMPORTS
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-img" />
      <header>
        <img src="./assets/0.banner/strive_white.png" alt="" />
      </header>
      <Container>
        <h1>
          Learn to code <br /> <span>and pay once you get hired.</span>{" "}
        </h1>
        <div>
          <p>We help you become a Web or Artificial Intelligence Engineer</p>
          <p>and you pay nothing until you make it.</p>
        </div>
        <button>Apply now</button>
      </Container>
    </div>
  );
}
