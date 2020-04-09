import React from "react";
import { Route } from "react-router-dom";
import { Router, Redirect, Switch } from "react-router";
import history from "./history";
import store from "./store";
import { checkStatus } from "./lib";
//importing components
import LoginAndRegistrationScreen from "./components/LoginAndRegistrationScreen";
import EmailPhoneScreen from "./components/EmailPhoneScreen";
import TermsAndCondition from "./components/TermsAndCondition";
import WelcomeScreen from "./components/WelcomeScreen";
import PageNotFound from "./components/PageNotFound";

function App(props) {
  //fetchs data from redux to see which screen has the value true .
  let status = checkStatus(store.getState());
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          {status ? <Redirect to={status} /> : <LoginAndRegistrationScreen />}
        </Route>
        <Route path="/EmailPhoneScreen" component={EmailPhoneScreen} />
        <Route path="/TermsAndCondition" component={TermsAndCondition} />
        <Route path="/WelcomeScreen" component={WelcomeScreen} />
        <Route path="/404" component={PageNotFound} />
        <Redirect path="*" to="/404" />
      </Switch>
    </Router>
  );
}
export default App;
