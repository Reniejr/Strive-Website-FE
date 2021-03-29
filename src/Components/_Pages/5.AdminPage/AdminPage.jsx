import React from "react";
//REDUX IMPORT
import { Provider, connect } from "react-redux";

//PERSONAL COMPONENTS IMPORTS
import HeaderCard from "../../_Main/HeaderCard/HeaderCard";
import AdminMenu from "./Sub_Components/AdminMenu/AdminMenu";
import PageSettings from "Components/_Main/PageSettings/PageSettings";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./AdminPage.scss";

export default function AdminPage() {
  return (
    <div id="admin-page">
      <Row className="page-header">
        <Col xs={12} md={8} lg={6}>
          <HeaderCard />
        </Col>
        <Col xs={12} md={4} lg={6}>
          <PageSettings />
        </Col>
      </Row>
      <AdminMenu />
    </div>
  );
}
