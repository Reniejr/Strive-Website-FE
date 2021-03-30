import { SET_USER_EXAM, SET_EXAM } from "./constants";

const initialState = {
  userEmail: "",
  exam: null,
};

export const admissionTestReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_USER_EXAM:
      return { ...state, userEmail: payload };
    case SET_EXAM:
      return { ...state, exam: payload };
    default:
      return state;
  }
};
