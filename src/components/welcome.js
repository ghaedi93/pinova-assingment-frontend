import React, { Component } from "react";
import { connect } from "react-redux";
import { Logout_Action } from "../actions/User_Actions";
class Welcome extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.Logout_Action}>Logout</button>
        <h1>Welcome dear {this.props.userName}</h1>
        <p>Its greet to have you here your balance is {this.props.balance}</p>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userName: state.userName,
    balance: state.balance,
  }),
  { Logout_Action }
)(Welcome);
