import React from "react";
import Login from "./components/login-registration";
import UserInformation from "./components/userInformation";
import Terms from "./components/termsAndConditions";
import Welcome from "./components/welcome";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <main>
        {console.log(props)}
        {props.showEmailPhoneScreen ||
          props.showTermsAndCondition ||
          props.showWelcomeScreen || <Login />}
        {props.showEmailPhoneScreen && <UserInformation />}
        {props.showTermsAndCondition && <Terms />}
        {props.showWelcomeScreen && <Welcome />}
      </main>
    </div>
  );
}
export default connect((state) => ({
  showEmailPhoneScreen: state.showEmailPhoneScreen,
  showTermsAndCondition: state.showTermsAndCondition,
  showWelcomeScreen: state.showWelcomeScreen,
}))(App);
