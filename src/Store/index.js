//MAIN IMPORTS
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//REDUCERS IMPORTS
import { userReducer } from "./user/reducers";
import { admissionTestReducer } from "./admissionTest/reducers";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  user: userReducer,
  admissionTest: admissionTestReducer,
});

export const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);
