import React from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";
import UserList from "../UserList/UserList";

//STYLE IMPORTS
import "./BatchDetail.scss";

export default function BatchDetail({ state, functions }) {
  const adminPage = useSelector((state) => state.adminPageReducer);

  return (
    <div
      className="batch-detail batch-opt"
      style={{
        marginLeft: adminPage.sub_title === "batch-detail" ? "" : "120%",
      }}
    >
      <Row>
        {state.infos.length > 0 ? (
          <>
            <Col xs={12} lg={6}>
              {state.infos.slice(0, 3).map((info, infoI) => {
                return (
                  <p key={infoI}>
                    {info.info} : <span>{info.value}</span>
                  </p>
                );
              })}
            </Col>
            <Col xs={12} lg={6}>
              {state.infos.slice(3, 6).map((info, infoI) => {
                return (
                  <p key={infoI}>
                    {info.info} : <span>{info.value}</span>
                  </p>
                );
              })}
            </Col>
          </>
        ) : null}
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <p>
            {state.infos.length > 0 ? (
              <>
                {state.infos[6].info} :{" "}
                <span>{state.infos[6].value.length}</span>
              </>
            ) : null}
          </p>
          <p
            onClick={() =>
              functions.setUserList(state.infos[6].value, state.infos[6].info)
            }
          >
            Show the list
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <p>
            {state.infos.length > 0 ? (
              <>
                {state.infos[7].info} :{" "}
                <span>{state.infos[7].value.length}</span>
              </>
            ) : null}
          </p>
          <p
            onClick={() =>
              functions.setUserList(state.infos[7].value, state.infos[7].info)
            }
          >
            Show the list
          </p>
        </Col>
      </Row>
      <UserList state={{ list: state.list, listName: state.listName }} />
    </div>
  );
}
