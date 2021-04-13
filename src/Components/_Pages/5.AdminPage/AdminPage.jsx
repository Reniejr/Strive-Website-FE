import React, { useState, useEffect } from "react";
//REDUX IMPORT
import { useSelector } from "react-redux";

//PERSONAL COMPONENTS IMPORTS
import HeaderCard from "../../_Main/HeaderCard/HeaderCard";
import AdminMenu from "./Sub_Components/AdminMenu/AdminMenu";
import BG01 from "Components/_Main/Backgrounds/BG01/BG01";
import EditProfile from "./EditProfile/EditProfile";
import Loader from "Components/_Main/Loaders/MainLoader/Loader";

//GENERAL UTILITIES
import { isLogged } from "Components/_Utilities";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./AdminPage.scss";

export default function AdminPage() {
  const [show, setShow] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const userInfo = useSelector((state) => state.user.user);

  useEffect(() => {
    (async () => {
      const isLog = await isLogged(userInfo);
      // console.log(isLog);
      setIsLog(isLog);
    })();
  }, [isLog]);

  return (
    <div id="admin-page">
      {isLog ? (
        <>
          <EditProfile
            state={{ show }}
            functions={{ handleClose: () => setShow(false) }}
          />
          <Row className="page-header">
            <BG01 />
            <HeaderCard functions={{ showModal: setShow }} />
          </Row>
          <AdminMenu />
        </>
      ) : (
        <Loader state={isLog ? false : true} />
      )}
    </div>
  );
}
