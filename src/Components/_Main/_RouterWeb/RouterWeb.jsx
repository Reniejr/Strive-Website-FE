import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import LandingPage from "../../_Pages/0.LandingPage/LandingPage";

export default function RouterWeb() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <LandingPage {...props} />} />
      </Switch>
    </Router>
  );
}
