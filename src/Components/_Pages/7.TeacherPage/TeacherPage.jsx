import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector } from "react-redux";

//VALUES IMPORTS
import { sideBarValues } from "./values";

//PERSONAL COMPONENTS IMPORTS
import UserSideBar from "Components/_Main/UserSideBar/UserSideBar";
import TeacherInfo from "./TeacherInfo/TeacherInfo";
import Loader from "Components/_Main/Loaders/MainLoader/Loader";
import ClassroomInfo from "./ClassRoomInfo/ClassroomInfo";
import StudentList from "./StudentList/StudentList";

//GENERAL UTILITIES
import { isLogged } from "Components/_Utilities";

//STYLE IMPORT
import "./TeacherPage.scss";
import BG01 from "Components/_Main/Backgrounds/BG01/BG01";

export default function TeacherPage() {
  const [page, setPage] = useState("classroom");
  const [isLog, setIsLog] = useState(false);

  const userInfo = useSelector((state) => state.user.user);

  const style = (show) => (show ? { marginLeft: "" } : { marginLeft: "-200%" });

  useEffect(() => {
    (async () => {
      const isLog = await isLogged(userInfo);
      // console.log(isLog);
      setIsLog(isLog);
    })();
  }, [isLog]);

  return (
    <div id="teacher-page">
      {isLog ? (
        <>
          <BG01 />
          <TeacherInfo state={{ page, style }} />
          <ClassroomInfo state={{ page, style }} />
          <StudentList state={{ page, style }} />
          <UserSideBar
            values={sideBarValues}
            state={{ page }}
            functions={{ setPage }}
          />
        </>
      ) : (
        <Loader state={isLog ? false : true} />
      )}
    </div>
  );
}
