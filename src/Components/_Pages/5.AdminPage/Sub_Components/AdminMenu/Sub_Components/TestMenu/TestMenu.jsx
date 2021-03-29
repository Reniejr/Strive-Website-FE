import React, { useState, useEffect } from "react";

//PERSONAL COMPONENTS IMPORTS
import TestList from "./Sub_Component/TestList/TestList";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle, setTitleDetail } from "Store/adminPage/actions";

//VALUES IMPORTS
import { testInfo } from "../../values";

//STYLE IMPORTS
import "./TestMenu.scss";
import TestDetail from "./Sub_Component/TestDetail/TestDetail";

export default function TestMenu() {
  //STATE
  const [test, setTest] = useState({});
  const [infos, setInfos] = useState({});

  //REDUX
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  const showTest = (test) => {
    dispatch(setSubTitle("test-detail"));
    dispatch(setTitleDetail(test.roomName));
    setInfos(testInfo(test));
    setTest(test);
  };

  return (
    <div
      className="test-menu subOpt"
      style={{
        marginLeft: adminPage.sub_option === "admission-tests" ? "" : "120%",
      }}
    >
      <TestList functions={{ showTest }} />
      <TestDetail state={{ infos, test }} />
    </div>
  );
}
