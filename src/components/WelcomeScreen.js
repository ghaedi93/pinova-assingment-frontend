import React, { Component } from "react";
import { connect } from "react-redux";
import { Logout_Action } from "../actions/User_Actions";
class Welcome extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={this.props.Logout_Action}
        >
          Logout
        </button>
        <div className="row">
          <div className="col-5 mx-auto">
            <h1 class="display-4">Hello,{this.props.userName}!</h1>
            <p class="lead">its greet to see you around!</p>
            <hr class="my-4" />
            <p>your account balance is {this.props.balance}</p>
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
