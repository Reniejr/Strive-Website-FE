import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import LandingPage from "../../_Pages/0.LandingPage/LandingPage";
import AboutPage from "../../_Pages/1.AboutPage/AboutPage";
import StriveBar from "../StriveBar/StriveBar";
import LoginPage from "../../_Pages/2.LoginPage/LoginPage";
import LoginLoader from "../Loader/OthersLoader/LoginLoader/LoginLoader";
import SignInPage from "../../_Pages/3.SignInPage/SignInPage";
import Exam from "../../_Pages/4.Exam/Exam";

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
        <Route
          path="/login"
          exact
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/sign-in/:userId"
          exact
          render={(props) => <SignInPage {...props} />}
        />
        <Route path="/benchmark" render={(props) => <Exam {...props} />} />
      </Switch>
    </Router>
  );
}
