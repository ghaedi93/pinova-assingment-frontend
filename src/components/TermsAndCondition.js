import React, { Component } from "react";
import { connect } from "react-redux";
import { Update_User_Action } from "../actions/User_Actions";
import { Link } from "react-router-dom";

class Terms extends Component {
  countiue = () => {
    this.setState({
      ...this.state,
      termsAndConditions: true,
    });
    this.props.Update_User_Action({
      showEmailPhoneScreen: false,
      showTermsAndCondition: false,
      showWelcomeScreen: true,
    });
  };
  render() {
    return (
      <div className="container">
        <Link to="/EmailPhoneScreen">Back</Link>
        <br />
        <div className="row">
          <div className="col-m-6">
            <h1 className="entry-title">Terms and Conditions</h1>
            <p>
              <span>
                The bootstrap themes shall not be held accountable for any
                direct, indirect, special, accidental or considerable damages
                that includes but not bound to, loss of data or profit caused
                due to use or inability to use the products that we provide
                under any circumstances, even if the bootstrap themes or legit
                representative has been considered the possibility of such
                damages. You are soley held responsible of any costs caused, if
                your use of materials from this site results in the need for
                servicing, repair or correction of equipment or data.
              </span>
            </p>
            <h3>
              <span>Licensing Policy</span>
            </h3>
            <span>
              Any kind of information related to your purchased product(s) will
              be emailed to the email address that you have provided once we
              receive your payment. This process usually takes few minutes, but
              for some issue might get extended to 24 hours. In case you do not
              receive your email up to the allocated time period, you can
              contact us through our contact page. Also, you can access the
              products that you have purchased from your account in the
              bootstrap theme after logging in.
            </span>
            <button className="btn btn-success d-block" onClick={this.countiue}>
              continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { Update_User_Action })(Terms);
