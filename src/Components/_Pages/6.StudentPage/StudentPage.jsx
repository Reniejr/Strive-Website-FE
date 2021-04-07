import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";
//PERSONAL COMPONENTS IMPORTS
import StudentCard from "./Sub_Components/StudentCard/StudentCard";
import BG01 from "Components/_Main/Backgrounds/BG01/BG01";
import ExamOpt from "./Sub_Components/ExamOpt/ExamOpt";
import LinkedInOpt from "./Sub_Components/LinkedInOpt/LinkedInOpt";
import HomeWorkOpt from "./Sub_Components/HomeworkOpt/HomeWorkOpt";
import AttendanceOpt from "./Sub_Components/AttendanceOpt/AttendanceOpt";
import Loader from "Components/_Main/Loaders/MainLoader/Loader";

//GENERAL UTILITIES
import { isLogged } from "Components/_Utilities";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./StudentPage.scss";

export default function StudentPage() {
  const [isLog, setIsLog] = useState(false);

  const userInfo = useSelector((state) => state.user.user);

  useEffect(() => {
    (async () => {
      const isLog = await isLogged(userInfo);
      console.log(isLog);
      setIsLog(isLog);
    })();
  }, [isLog]);

  return (
    <div className="student-page">
      {isLog ? (
        <>
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
        </>
      ) : (
        <Loader state={isLog ? false : true} />
      )}
    </div>
  );
}
