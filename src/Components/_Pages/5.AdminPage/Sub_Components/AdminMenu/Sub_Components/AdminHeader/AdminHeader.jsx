import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle, setTitleDetail } from "Store/adminPage/actions";

//STYLE IMPORTS
import "./AdminHeader.scss";

export default function AdminHeader() {
  const [headTitle, setHeadTitle] = useState("");

  //REDUX
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  const firstOpt = () => {
    if (adminPage.main_option === "Course") {
      switch (adminPage.sub_option) {
        case "batch":
          return "batch-list";
        case "admission-tests":
          return "admission-test-list";
        default:
          return "none";
      }
    }
  };

  useEffect(() => {
    setHeadTitle(firstOpt());
    dispatch(setSubTitle(firstOpt()));
  }, [adminPage.sub_option]);

  const goBack = () => {
    dispatch(setSubTitle(firstOpt()));
    dispatch(setTitleDetail(""));
  };

  return (
    <header className="admin-header">
      <i
        className="fas fa-arrow-left"
        onClick={() => goBack()}
        style={{ display: adminPage.sub_title === headTitle ? "none" : "" }}
      ></i>
      {adminPage.sub_option.replace("-", " ")} -{" "}
      {adminPage.sub_title.replaceAll("-", " ")}{" "}
      {adminPage.title_detail !== "" ? `- ${adminPage.title_detail}` : null}
    </header>
  );
}
