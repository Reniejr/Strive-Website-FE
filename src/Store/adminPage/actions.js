import {
  SET_SUB_OPTION,
  SET_SUB_TITLE,
  SET_MAIN_OPTION,
  SET_COURSE,
  SET_TITLE_DETAIL,
} from "./constants";

export const setSubOption = (option) => ({
  type: SET_SUB_OPTION,
  payload: option,
});
export const setSubTitle = (subTitle) => ({
  type: SET_SUB_TITLE,
  payload: subTitle,
});
export const setMainOption = (mainOption) => ({
  type: SET_MAIN_OPTION,
  payload: mainOption,
});
export const setCourse = (course) => ({
  type: SET_COURSE,
  payload: course,
});
export const setTitleDetail = (title) => ({
  type: SET_TITLE_DETAIL,
  payload: title,
});
