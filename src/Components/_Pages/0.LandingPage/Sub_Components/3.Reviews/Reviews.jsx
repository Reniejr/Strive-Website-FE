import React, { useState } from "react";

//DATA IMPORTS
import data from "./data.json";

//PERSONAL COMPONENTS IMPORTS
import ReviewCard from "./Sub_components/ReviewCard/ReviewCard";
import SliderControls from "./Sub_components/Slider_Controls/SliderControls";

//BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./Reviews.scss";

export default function Reviews() {
  const [slide, setSlide] = useState("-10rem");
  const [index, setIndex] = useState(1);

  const slider = (i) => {
    if (i !== 0) {
      const slideFor = `${350 * i}px`;
      setSlide(`calc(10rem - ${slideFor})`);
    } else {
      setSlide("10rem");
    }
  };

  return (
    <section id="reviews">
      <h3>
        <span>/</span>
        Reviews
      </h3>
      <Container>
        <div className="slider">
          <div
            className="slide-container"
            style={{ width: `${data.length * 100}%`, marginLeft: slide }}
          >
            {data.map((user, i) => {
              return <ReviewCard data={user} key={i} />;
            })}
          </div>
        </div>
      </Container>
      <div className="slider-controls">
        {data.map((user, i) => {
          return (
            <div className="indicator" key={i} onClick={() => slider(i)}></div>
          );
        })}
      </div>
    </section>
  );
}
