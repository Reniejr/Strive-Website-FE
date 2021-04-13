import { SET_ACTIVE_BATCH, SET_BATCH_LIST } from "./constants";

export const setBatch = (batch) => ({
  type: SET_ACTIVE_BATCH,
  payload: batch,
});
export const setBatchList = (batchList) => ({
  type: SET_BATCH_LIST,
  payload: batchList,
});
