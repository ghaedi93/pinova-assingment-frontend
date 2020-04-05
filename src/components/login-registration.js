import { connect } from "react-redux";
import { Create_Login_User_Action } from "../actions/User_Actions";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    this.props.Create_Login_User_Action({
      userName,
      password,
    });
  };
  render() {
    return (
      <div>
        <Link to="/userInformation">Next</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="password">userName</label>
          <input type="text" id="userName" defaultValue={this.props.userName} />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            defaultValue={this.props.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userName: state.userName,
    password: state.password,
  }),
  { Create_Login_User_Action }
)(Login);
