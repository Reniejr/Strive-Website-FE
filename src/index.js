import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "dev.jr-library/dist/index.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//REDUX IMPORTS
import { Provider } from "react-redux";
import { store } from "./Store";

//PERSONAL COMPONENTS IMPORTS
import RouterWeb from "./Components/_Main/_RouterWeb/RouterWeb";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterWeb />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
