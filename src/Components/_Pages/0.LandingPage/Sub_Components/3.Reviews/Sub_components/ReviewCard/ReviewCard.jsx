import React from "react";

//PERSONAL COMPONENTS IMPORTS
import { Card } from "dev.jr-library";

//STYLE IMPORTS
import "./ReviewCard.scss";

export default function ReviewCard() {
  return (
    <Card style={{ style: "BLACK_STYLE" }} flexibility={70}>
      <Card.Front>
        <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
      </Card.Front>
      <Card.Back>
        <img src="./assets/1.ReviewCard/backgr02.2.png" alt="" />
      </Card.Back>
    </Card>
  );
}
