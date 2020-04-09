import { connect } from "react-redux";
import { Create_Login_User_Action } from "../actions/User_Actions";
import React, { Component } from "react";
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
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col-s-12 mx-auto p-5">
            <div className="form-group">
              <label>username</label>
              <input
                placeholder="Enter userName"
                defaultValue={this.props.userName}
                className="form-control"
                id="userName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                placeholder="Enter Password"
                defaultValue={this.props.password}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
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
