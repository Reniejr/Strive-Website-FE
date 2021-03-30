import React from "react";

//PERSONAL COMPONENTS IMPORTS
import StudentCard from "./Sub_Components/StudentCard/StudentCard";
import BG01 from "Components/_Main/Backgrounds/BG01/BG01";
import ExamOpt from "./Sub_Components/ExamOpt/ExamOpt";
import LinkedInOpt from "./Sub_Components/LinkedInOpt/LinkedInOpt";
import HomeWorkOpt from "./Sub_Components/HomeworkOpt/HomeWorkOpt";
import AttendanceOpt from "./Sub_Components/AttendanceOpt/AttendanceOpt";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./StudentPage.scss";

export default function StudentPage() {
  return (
    <div className="student-page">
      <BG01 />
      <StudentCard />
      <Row className="student-menu">
        <Col xs={12} md={6}>
          <ExamOpt />
        </Col>
        <Col xs={12} md={6}>
          <LinkedInOpt />
        </Col>
        <Col xs={12} md={6}>
          <HomeWorkOpt />
        </Col>
        <Col xs={12} md={6}>
          <AttendanceOpt />
        </Col>
      </Row>
    </div>
  );
}
