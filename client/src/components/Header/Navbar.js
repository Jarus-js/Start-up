import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "../Payments";

class Navbar extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="765">
            <Payments />
          </li>,
          <li key="741" className="font-weight-bold mr-2">
            Credits:{this.props.auth.credits}
          </li>,
          <li key="118">
            <a href="/api/logout" className="btn btn-primary">
              Logout
            </a>
          </li>
        ];
    }
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-light bg-success">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="navbar-brand"
          >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);
