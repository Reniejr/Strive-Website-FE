import React, { useState, useEffect } from "react";

//STYLE IMPORT
import "./Assets.scss";

export const CircLogo = function () {
  return (
    <img
      src="https://i.ibb.co/SXFJKwD/strive.png"
      alt=""
      className="circular-logo"
    />
  );
};

export const CircGraphics = function ({ result, max }) {
  useEffect(() => {
    let circle = document.querySelector(".progress-ring__circle");
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    const progress = function (percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    };
    let percent = (max * 100) / result;
    progress(percent);
  }, [result, max]);

  return (
    <svg className="progress-ring" width="120" height="120">
      <circle className="progress-ring__circle" r="4" cx="60" cy="60" />
    </svg>
  );
};
