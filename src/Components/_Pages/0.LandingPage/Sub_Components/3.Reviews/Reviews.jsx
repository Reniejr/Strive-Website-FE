import React from "react";

//PERSONAL COMPONENTS IMPORTS
import ReviewCard from "./Sub_components/ReviewCard/ReviewCard";
import SliderControls from "./Sub_components/Slider_Controls/SliderControls";

//BOOTSTRAP IMPORTS
import { Container, Row, Col, Card } from "react-bootstrap";

//STYLE IMPORTS
import "./Reviews.scss";

export default function Reviews() {
  return (
    <section id="reviews">
      <h3>
        <span>/</span>
        Reviews
      </h3>
      <Container>
        <div className="slider">
          <div className="slide-container">
            <ReviewCard />
          </div>
        </div>
      </Container>
      <SliderControls />
    </section>
  );
}
