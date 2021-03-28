import {
  SET_SUB_OPTION,
  SET_SUB_TITLE,
  SET_MAIN_OPTION,
  SET_COURSE,
  SET_TITLE_DETAIL,
} from "./constants";

const initialState = {
  sub_option: "",
  sub_title: "",
  main_option: "",
  course: "",
  title_detail: "",
};

export const adminPageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SUB_OPTION:
      return { ...state, sub_option: payload };
    case SET_SUB_TITLE:
      return { ...state, sub_title: payload };
    case SET_MAIN_OPTION:
      return { ...state, main_option: payload };
    case SET_COURSE:
      return { ...state, course: payload };
    case SET_TITLE_DETAIL:
      return { ...state, title_detail: payload };
    default:
      return state;
  }
};
