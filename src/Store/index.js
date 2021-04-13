//MAIN IMPORTS
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//REDUCERS IMPORTS
import { userReducer } from "./user/reducers";
import { admissionTestReducer } from "./admissionTest/reducers";
import { adminPageReducer } from "./adminPage/reducers";
import { batchReducer } from "./classRoom/reducers";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  user: userReducer,
  admissionTest: admissionTestReducer,
  adminPageReducer,
  batchReducer,
});

export const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);
