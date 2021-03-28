import React from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setCourse, setSubOption } from "Store/adminPage/actions";

//DATA IMPORTS
import { toggleStyle } from "../../values";

//STYLE IMPORTS
import "./Course.scss";

export default function Course() {
  const options = ["Batch", "Admission-Tests"];

  //REDUX
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  return (
    <div
      className="course-menu"
      style={{ display: adminPage.main_option === "Course" ? "" : "none" }}
    >
      <div className="toggle-course">
        <span
          style={toggleStyle("Web", adminPage.course)}
          onClick={() => dispatch(setCourse("Web"))}
        >
          Web
        </span>
        <span
          style={toggleStyle("AI", adminPage.course)}
          onClick={() => dispatch(setCourse("AI"))}
        >
          AI
        </span>
      </div>
      <ul className="course-options">
        {options.map((o, oI) => {
          return (
            <li
              key={oI}
              onClick={() => dispatch(setSubOption(o.toLowerCase()))}
            >
              <span>{o.replace("-", " ")}</span>
              <i className="fas fa-arrow-right"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
