import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setSubTitle, setTitleDetail } from "Store/adminPage/actions";

//DATA IMPORTS
import { newBatchState, batchInfo } from "../../values";

//UTILITIES IMPORTS
import { getBatchList, getBatch, postBatch } from "../../utilities";

//STYLE IMPORTS
import "./Batch.scss";
import BatchList from "./Sub_Components/BatchList/BatchList";
import BatchDetail from "./Sub_Components/BatchDetail/BatchDetail";
import AddBatchForm from "./Sub_Components/AddBatchForm/AddBatchForm";

export default function Batch({ functions }) {
  const [batchList, setBatchList] = useState([]);
  const [batch, setBatch] = useState({});
  const [infos, setInfos] = useState([]);
  const [list, setList] = useState([]);
  const [listName, setListName] = useState("");

  //STATE BATCH
  const [newBatch, setNewBatch] = useState(newBatchState);

  //REDUX
  const adminPage = useSelector((state) => state.adminPageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (adminPage.sub_option === "batch") {
      (async () => {
        const list = await getBatchList(adminPage.course);
        setBatchList(list);
      })();
    }
  }, [adminPage.course]);

  const showBatch = async (batch) => {
    const selBatch = await getBatch(batch._id);
    dispatch(setSubTitle("batch-detail"));
    dispatch(setTitleDetail(batch.name));
    setBatch(selBatch);
    setInfos(batchInfo(selBatch));
  };

  const submitBatch = async (e) => {
    e.preventDefault();
    let postNewBatch = await postBatch(newBatch, adminPage.course);
  };

  const fillBatchForm = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      await submitBatch(e);
    } else {
      let batchFill = { ...newBatch };
      let currentId = e.currentTarget.id;
      batchFill[currentId] = e.currentTarget.value;
      setNewBatch(batchFill);
    }
  };

  const setUserList = (userList, userListName) => {
    setList(userList);
    setListName(userListName);
  };

  return (
    <div
      className="batch subOpt"
      style={{ marginLeft: adminPage.sub_option === "batch" ? "" : "120%" }}
    >
      <BatchList state={{ batchList }} functions={{ showBatch }} />
      <BatchDetail
        state={{ infos, list, listName }}
        functions={{ setUserList }}
      />
      <div
        className="add-batch batch-opt"
        style={{
          marginLeft: adminPage.sub_title === "add-batch" ? "" : "120%",
        }}
      >
        <AddBatchForm
          functions={{
            handleSubmit: (e) => submitBatch(e),
            fillForm: fillBatchForm,
          }}
        />
      </div>
    </div>
  );
}
