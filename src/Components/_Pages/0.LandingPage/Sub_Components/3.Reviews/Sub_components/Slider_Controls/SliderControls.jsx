import React from "react";

//STYLE IMPORTS
import "./SliderControls.scss";

export default function SliderControls({ data }) {
  return (
    <div className="slider-controls">
      {data.map((user, i) => {
        return <div className="indicator" key={i}></div>;
      })}
    </div>
  );
}
