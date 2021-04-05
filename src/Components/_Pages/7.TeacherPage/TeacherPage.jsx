import React from "react";

//VALUES IMPORTS
import { sideBarValues } from "./values";

//PERSONAL COMPONENTS IMPORTS
import UserSideBar from "Components/_Main/UserSideBar/UserSideBar";
import TeacherInfo from "./TeacherInfo/TeacherInfo";

//STYLE IMPORT
import "./TeacherPage.scss";

export default function TeacherPage() {
  return (
    <div id="teacher-page">
      <TeacherInfo />
      <UserSideBar values={sideBarValues} />
    </div>
  );
}
