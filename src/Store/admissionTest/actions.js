import { SET_USER_EXAM } from "./constants";

export const setUserExam = (email) => ({ type: SET_USER_EXAM, payload: email });
