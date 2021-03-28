import React from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle } from "Store/adminPage/actions";

//DATA IMPORTS
import { batchStatus } from "../../../../values";

//STYLE IMPORTS
import "./BatchList.scss";

export default function BatchList({ state, functions }) {
  //REDUX
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  return (
    <div
      className="batch-list batch-opt"
      style={{ marginLeft: adminPage.sub_title === "batch-list" ? "" : "120%" }}
    >
      <ul>
        <li onClick={() => dispatch(setSubTitle("add-batch"))}>
          <i className="fas fa-plus-circle"></i>
          Add Another Batch
        </li>
        {state.batchList.map((batch, batchI) => {
          return (
            <li key={batch._id} onClick={() => functions.showBatch(batch)}>
              <div className="batch-info">
                <span style={batchStatus(batch.status)}></span>
                <span>{batch.name}</span>
              </div>
              <i className="fas fa-arrow-right"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
