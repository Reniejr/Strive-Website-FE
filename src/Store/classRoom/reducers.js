import { SET_ACTIVE_BATCH, SET_BATCH_LIST } from "./constants";

const initialState = {
  batch: null,
  batch_list: [],
};

export const batchReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_ACTIVE_BATCH:
      return { ...state, batch: payload };
    case SET_BATCH_LIST:
      return { ...state, batch_list: payload };
    default:
      return state;
  }
};
