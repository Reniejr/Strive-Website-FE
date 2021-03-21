import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import BG01 from "../../_Main/Backgrounds/BG01/BG01";
import StartingPage from "./Sub_Components/StartingPage/StartingPage";
import AdminExam from "./Sub_Components/AdminExam/AdminExam";

//STYLE IMPORTS
import "./Exam.scss";

export default function Exam() {
  return (
    <div className="benchmark">
      <BG01 />
    </div>
  );
}
