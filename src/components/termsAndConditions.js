import React, { Component } from "react";

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsAndConditions: "",
    };
  }
  countiue = () => {
    this.setState({
      ...this.state,
      termsAndConditions: true,
    });
  };
  render() {
    return (
      <div>
        <p>terms and conditions are this and that i hope you are agreed</p>
        <button onClick={this.countiue}>continue</button>
      </div>
    );
  }
}
export default Terms;
