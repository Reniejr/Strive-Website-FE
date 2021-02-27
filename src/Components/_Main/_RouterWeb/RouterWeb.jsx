import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import LandingPage from "../../_Pages/0.LandingPage/LandingPage";
import AboutPage from "../../_Pages/1.AboutPage/AboutPage";
import StriveBar from "../StriveBar/StriveBar";

export default function RouterWeb() {
  return (
    <Router>
      <StriveBar />
      <Switch>
        <Route path="/" exact render={(props) => <LandingPage {...props} />} />
        <Route
          path="/about"
          exact
          render={(props) => <AboutPage {...props} />}
        />
      </Switch>
    </Router>
  );
}
