import React, { Component } from "react";
import { connect } from "react-redux";
import { Logout_Action } from "../actions/User_Actions";

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-l-6 mx-auto">
            <h1 className="display-5 display-m-4 display-l-3 diplay-xl-1">
              Hello,{this.props.userName}!
            </h1>
            <p className="lead">its greet to see you around!</p>
            <hr className="my-4" />
            <p>your account balance is {this.props.balance}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.Logout_Action}
            >
              Logout
            </button>
          </div>
        </div>
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
