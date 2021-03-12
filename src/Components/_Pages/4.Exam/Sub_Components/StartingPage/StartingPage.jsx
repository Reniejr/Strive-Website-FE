import React from "react";

//PERSONAL COMPONENTS IMPORTS
import BenchmarkLayer from "../BenchmarkLayer/BenchmarkLayer";

//STYLE IMPORTS
import "./StartingPage.scss";

export default function StartingPage() {
  return (
    <div id="starting-page">
      <h2>Admission Test</h2>
      <BenchmarkLayer />
    </div>
  );
}
