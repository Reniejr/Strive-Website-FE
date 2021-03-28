import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PERSONAL COMPONENTS IMPORTS
import LandingPage from "../../_Pages/0.LandingPage/LandingPage";
import AboutPage from "../../_Pages/1.AboutPage/AboutPage";
import StriveBar from "../StriveBar/StriveBar";
import LoginPage from "../../_Pages/2.LoginPage/LoginPage";
import SignInPage from "../../_Pages/3.SignInPage/SignInPage";
import Exam from "../../_Pages/4.Exam/Exam";
import StartingPage from "../../_Pages/4.Exam/Sub_Components/StartingPage/StartingPage";
import AdminExam from "../../_Pages/4.Exam/Sub_Components/AdminExam/AdminExam";
import AdminPage from "../../_Pages/5.AdminPage/AdminPage";

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
        <Route
          path="/admin-page/:userId"
          exact
          render={(props) => <AdminPage {...props} />}
        />
        <Route
          path="/benchmark"
          render={(props) => (
            <>
              <Exam {...props} />
              <Route
                path={`${props.match.url}/exam/:testType`}
                exact
                render={(props) => <StartingPage {...props} />}
              />
              <Route
                path={`${props.match.url}/admin`}
                exact
                render={(props) => <AdminExam {...props} />}
              />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}
