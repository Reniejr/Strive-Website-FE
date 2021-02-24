import { SELECT_USER, SET_USERLISTS } from "./constants";

const initialState = {
  user: null,
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SELECT_USER:
      return { ...state, user: payload };
    case SET_USERLISTS:
      return { ...state, userList: payload };
    default:
      return state;
  }
};
