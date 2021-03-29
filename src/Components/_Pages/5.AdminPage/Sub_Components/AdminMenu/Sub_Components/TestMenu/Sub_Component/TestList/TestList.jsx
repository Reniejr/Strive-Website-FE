import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle } from "Store/adminPage/actions";

//UTILITIES IMPORTS
import { getTestsList } from "../../../../utilities";

//DATA IMPORTS
import { testStatus } from "../../../../values";

export default function TestList({ functions }) {
  //STATE
  const [list, setList] = useState([]);

  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setList(await getTestsList());
    })();
  }, []);

  return (
    <div className="test-list opt">
      <ul className="menu-list">
        <li onClick={() => dispatch(setSubTitle("add-batch"))}>
          <i className="fas fa-plus-circle"></i>
          Add Admission Test
        </li>
        {list.map((test, testI) => {
          return (
            <li key={test._id} onClick={() => functions.showTest(test)}>
              <div className="batch-info">
                <span style={testStatus(test.status)}></span>
                <span>{test.roomName}</span>
              </div>
              <i className="fas fa-arrow-right"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
