import React, { Component } from "react";
import { connect } from "react-redux";
import { Update_User_Action } from "../actions/User_Actions";

class UserInformation extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("countryCode").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const acceptMarketing = document.getElementById("acceptMarketing").checked;
    this.props.Update_User_Action({
      email,
      countryCode,
      phoneNumber,
      acceptMarketing,
      showEmailPhoneScreen: false,
      showTermsAndCondition: true,
      showWelcomeScreen: false,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="p-3">
          <div className="form-row">
            <div className="form-group col-md-8">
              <label>Email</label>
              <input
                defaultValue={this.props.email}
                placeholder="Enter your email"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>phoneNumber :</label>
              <select defaultValue={this.props.countryCode} id="countryCode">
                <option value="1">USA (+1)</option>
                <option value="98">Iran (+98)</option>
                <option value="49">Germany (+49)</option>
              </select>
            </div>
            <div className="form-group col-md-3 col-s-5">
              <input
                placeholder="Enter your phone number"
                type="text"
                className="form-control"
                id="phoneNumber"
                defaultValue={this.props.phoneNumber}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="acceptMarketing"
                defaultChecked={this.props.acceptMarketing}
              />
              <label className="form-check-label">
                I agree to recieve marketing emails
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </form>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    email: state.email,
    countryCode: state.countryCode,
    phoneNumber: state.phoneNumber,
    acceptMarketing: state.acceptMarketing,
  }),
  { Update_User_Action }
)(UserInformation);
