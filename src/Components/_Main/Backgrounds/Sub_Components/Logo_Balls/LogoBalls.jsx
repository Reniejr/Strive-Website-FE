import React from "react";

//STYLE IMPORTS
import "./LogoBalls.scss";

export default function LogoBalls(props) {
  let qty = [];
  const n = props.qty;
  for (let i = 0; i < n; i++) {
    qty.push("ball");
  }

  return (
    <>
      {qty.map((ball, i) => {
        return (
          <div className="logo-balls" key={i}>
            <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
            <div className="ball-ray"></div>
          </div>
        );
      })}
    </>
  );
}
export const StaticBalls = function (props) {
  let qty = [];
  const n = props.qty;
  for (let i = 0; i < n; i++) {
    qty.push("ball");
  }

  return (
    <>
      {qty.map((ball, i) => {
        return (
          <div className="logo-balls-static" key={i}>
            <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
          </div>
        );
      })}
    </>
  );
};
