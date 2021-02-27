import React, { useState } from "react";

//STYLE IMPORTS
import "./StaffCard.scss";

export default function StaffCard(props) {
  // INITIAL STATE
  const moveState = {
    xAxis: null,
    yAxis: null,
    enter: null,
  };

  const [move, setMove] = useState(moveState);

  const rotateEffect = (state) => {
    let style;
    state.enter
      ? (style = {
          transform: `rotateY(${state.xAxis}deg) rotateX(${state.yAxis}deg)`,
          transition: "",
        })
      : (style = { transform: "", transition: "all 0.5s ease" });
    return style;
  };

  const onMove = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / props.flexibility;
    const yAxis = (window.innerHeight / 2 - e.pageY) / props.flexibility;
    setMove({ ...move, xAxis: xAxis, yAxis: yAxis });
  };

  return (
    <div
      className="staff-card-container"
      onMouseMove={onMove}
      onMouseEnter={() => setMove({ ...move, enter: true })}
      onMouseLeave={() => setMove({ ...move, enter: false })}
      style={rotateEffect(move)}
    >
      <div className="staff-card">
        <div className="shine" />
        <div className="shine" />
        <header>
          <div className="profile-img">
            <img src="" alt="" />
          </div>
          <div className="info">
            <p>Name</p>
            <span>Role</span>
          </div>
        </header>
        <div className="staff-card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            assumenda nulla maiores eos nobis reprehenderit temporibus veritatis
            eveniet tempore iusto.
          </p>
        </div>
      </div>
    </div>
  );
}
