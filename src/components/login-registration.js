import { connect } from "react-redux";
import { Create_Login_User_Action } from "../actions/User_Actions";
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      userName: "",
    };
  }
  setUname = (e) => {
    const userName = e.target.value;
    this.setState({
      ...this.state,
      userName,
    });
  };
  setPassword = (e) => {
    const password = e.target.value;
    this.setState({
      ...this.state,
      password,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", this.state);
    this.props.Create_Login_User_Action(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="password">userName</label>
          <input
            onChange={this.setUname}
            type="text"
            id="userName"
            // value={userName}
            // onChange={this.handleChange}
          />
          <label htmlFor="password">password</label>
          <input
            onChange={this.setPassword}
            type="password"
            id="password"
            // value={password}
            // onChange={this.handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default connect(null, { Create_Login_User_Action })(Login);
