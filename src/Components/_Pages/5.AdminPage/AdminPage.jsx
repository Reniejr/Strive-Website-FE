import React from "react";
//REDUX IMPORT
import { Provider, connect } from "react-redux";

//PERSONAL COMPONENTS IMPORTS
import HeaderCard from "../../_Main/HeaderCard/HeaderCard";
import AdminMenu from "./Sub_Components/AdminMenu/AdminMenu";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./AdminPage.scss";

export default function AdminPage() {
  return (
    <div id="admin-page">
      <div className="page-header">
        <HeaderCard
          state={{
            user: {
              firstName: "Strive",
              lastName: "School",
              _id: "0000 1234 5678 0000",
              role: "COO",
            },
          }}
        />
      </div>
      <AdminMenu />
    </div>
  );
}
