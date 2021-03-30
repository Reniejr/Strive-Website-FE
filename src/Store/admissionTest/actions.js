import { SET_USER_EXAM, SET_EXAM } from "./constants";

export const setUserExam = (email) => ({ type: SET_USER_EXAM, payload: email });
export const setExam = (exam) => ({ type: SET_EXAM, payload: exam });
