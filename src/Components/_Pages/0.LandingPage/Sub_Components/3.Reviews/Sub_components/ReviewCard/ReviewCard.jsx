import React from "react";

//PERSONAL COMPONENTS IMPORTS
import { Card } from "dev.jr-library";

//STYLE IMPORTS
import "./ReviewCard.scss";

export default function ReviewCard({ data }) {
  const array = [];
  for (let i = 0; i < data.stars; i++) {
    array.push("star");
  }
  return (
    // <div
    //   className="review-card"
    //   // style={{ width: `${100 / data.length}%`, height: "500px" }}
    // >
    <Card cardStyle={{ style: "BLACK_STYLE" }} flexibility={70}>
      <Card.Front>
        <div className="front-review">
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          <div className="stars">
            {array.map((star, i) => {
              return <i className="fas fa-star" key={i}></i>;
            })}
          </div>
        </div>
      </Card.Front>
      <Card.Back>
        <img src="./assets/1.ReviewCard/backgr02.2.png" alt="" />
        <div className="review">
          <img src={data.photo} alt="" />
          <p>{data.name}</p>
          <span>
            <a href={data.link}>{data.reviews}</a>
          </span>
        </div>
      </Card.Back>
    </Card>
    // </div>
  );
}
