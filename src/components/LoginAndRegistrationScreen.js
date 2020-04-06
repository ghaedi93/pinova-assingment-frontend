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
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col-4 mx-auto p-2">
          <div className="form-group">
            <label for="exampleInputEmail1">username</label>
            <input
              defaultValue={this.props.userName}
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              defaultValue={this.props.password}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
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
