import { SELECT_USER, SET_USERLISTS } from "./constants";

export const selectUser = (user) => ({ type: SELECT_USER, payload: user });
export const setUserLists = (userList) => ({
  type: SET_USERLISTS,
  payload: userList,
});
