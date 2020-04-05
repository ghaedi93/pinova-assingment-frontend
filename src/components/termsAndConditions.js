import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Update_User_Action } from "../actions/User_Actions";

class Terms extends Component {
  countiue = () => {
    this.setState({
      ...this.state,
      termsAndConditions: true,
    });
    this.props.Update_User_Action({
      showEmailPhoneScreen: false,
      showTermsAndCondition: false,
      showWelcomeScreen: true,
    });
  };
  render() {
    return (
      <div>
        <Link to="/welcome">Next</Link>
        <Link to="/userInformation">back</Link>
        <p>terms and conditions are this and that i hope you are agreed</p>
        <button onClick={this.countiue}>continue</button>
      </div>
    );
  }
}

export default connect(null, { Update_User_Action })(Terms);
