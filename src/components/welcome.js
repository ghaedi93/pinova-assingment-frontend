import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeScreen: "",
    };
  }
  continue = () => {
    this.setState({
      ...this.state,
      welcomeScreen: true,
    });
  };
  render() {
    return (
      <div>
        <h1>Welcome ...</h1>
        <p>Its greet to have you here your balance is ...</p>
        <button onClick={this.continue}>continue</button>
      </div>
    );
  }
}
export default Welcome;
