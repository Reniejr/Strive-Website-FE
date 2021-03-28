import React from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle, setTitleDetail } from "Store/adminPage/actions";

//STYLE IMPORTS
import "./AdminHeader.scss";

export default function AdminHeader() {
  //REDUX
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  const firstOpt = () => {
    if (adminPage.main_option === "Course") {
      switch (adminPage.sub_option) {
        case "batch":
          return "batch-list";
        default:
          return "none";
      }
    }
  };

  const goBack = () => {
    dispatch(setSubTitle(firstOpt()));
    dispatch(setTitleDetail(""));
  };

  return (
    <header className="admin-header">
      <i className="fas fa-arrow-left" onClick={() => goBack()}></i>
      {adminPage.sub_option.replace("-", " ")} -{" "}
      {adminPage.sub_title.replace("-", " ")}{" "}
      {adminPage.title_detail !== "" ? `- ${adminPage.title_detail}` : null}
    </header>
  );
}
