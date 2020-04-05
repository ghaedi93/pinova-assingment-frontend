import React, { Component } from "react";

class UserInformation extends Component {
  render() {
    return (
      <form
      //    onSubmit={this.handleSubmit}
      >
        <div>
          <label htmlFor="title">email</label>
          <input
            type="text"
            id="email"
            // value={userName}
            // onChange={this.handleChange}
          />
          <label htmlFor="title">countryCode</label>
          <input
            type="text"
            id="countryCode"
            // value={password}
            // onChange={this.handleChange}
          />
          <label htmlFor="title">phoneNumber</label>
          <input
            type="text"
            id="phoneNumber"
            // value={password}
            // onChange={this.handleChange}
          />
          <p>do you agree to getting ads ?</p>
          <input type="checkbox" id="acceptMarketing" />
        </div>
        <button type="submit">continue</button>
      </form>
    );
  }
}
export default UserInformation;
