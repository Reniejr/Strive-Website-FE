import { SET_USER_EXAM } from "./constants";

const initialState = {
  userEmail: "",
};

export const admissionTestReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_USER_EXAM:
      return { ...state, userEmail: payload };
    default:
      return state;
  }
};
