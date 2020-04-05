import React, { Component } from "react";

class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      countryCode: "",
      phoneNumber: "",
      acceptMarketing: false,
    };
  }
  setEmail = (e) => {
    const email = e.target.value;
    this.setState({
      ...this.state,
      email,
    });
  };
  setCountryCode = (e) => {
    const countryCode = e.target.value;
    this.setState({
      ...this.state,
      countryCode,
    });
  };
  setPhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    this.setState({
      ...this.state,
      phoneNumber,
    });
  };
  setAcceptMarketing = (e) => {
    const acceptMarketing = e.target.checked;
    this.setState({
      ...this.state,
      acceptMarketing,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">email</label>
          <input
            type="text"
            id="email"
            // value={userName}
            onChange={this.setEmail}
          />
          <label htmlFor="title">countryCode</label>
          <input
            type="text"
            id="countryCode"
            // value={password}
            onChange={this.setCountryCode}
          />
          <label htmlFor="title">phoneNumber</label>
          <input
            type="text"
            id="phoneNumber"
            // value={password}
            onChange={this.setPhoneNumber}
          />
          <p>do you agree to getting ads ?</p>
          <input
            type="checkbox"
            id="acceptMarketing"
            onChange={this.setAcceptMarketing}
          />
        </div>
        <button type="submit">continue</button>
      </form>
    );
  }
}
export default UserInformation;
