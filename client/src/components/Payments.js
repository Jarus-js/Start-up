import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout"; //shows credit card form to user & recieves token,send token back to server

import { connect } from "react-redux";

//Action generator
import { handleToken } from "../actions/authAction";
class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout //it's form
          name="Email"
          description="$5 for 5 email credits"
          amount={500} //in cents i.e 100 cents = 1 dollar
          token={token => {
            console.log("Please", token);
            this.props.handleToken(token); //handleToken lai token pass garyo ani yoh action ma backend ma post req pathako xa
          }}
          stripeKey={process.env.REACT_APP_STRIPE_KEY} //in create-react-app process.env  actually get replaced by actual stripe key
        >
          <button className="btn btn-primary mr-4">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(
  null,
  { handleToken }
)(Payments);
