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
    console.log("changed Userame", userName);
  };
  setPassword = (e) => {
    const password = e.target.value;
    this.setState({
      ...this.state,
      password,
    });
    console.log("changed pass", password);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", this.state);
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
export default Login;
