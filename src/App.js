import React from "react";
import LoginAndRegistrationScreen from "./components/LoginAndRegistrationScreen";
import EmailPhoneScreen from "./components/EmailPhoneScreen";
import TermsAndCondition from "./components/TermsAndCondition";
import WelcomeScreen from "./components/WelcomeScreen";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <main>
        {console.log(props)}
        {props.showEmailPhoneScreen ||
          props.showTermsAndCondition ||
          props.showWelcomeScreen || <LoginAndRegistrationScreen />}
        {props.showEmailPhoneScreen && <EmailPhoneScreen />}
        {props.showTermsAndCondition && <TermsAndCondition />}
        {props.showWelcomeScreen && <WelcomeScreen />}
      </main>
    </div>
  );
}
export default connect((state) => ({
  showEmailPhoneScreen: state.showEmailPhoneScreen,
  showTermsAndCondition: state.showTermsAndCondition,
  showWelcomeScreen: state.showWelcomeScreen,
}))(App);
