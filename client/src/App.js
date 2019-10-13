import React, { Component } from "react";

import "./App.css";

//React-router
import { BrowserRouter, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

//Components
import Navbar from "./components/Header/Navbar";
import Surveys from "./components/Surveys";
import Landing from "./components/Landing";

//Action generator
import { fetchUser } from "./actions/authAction";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    //console.log("Propy", this.props);
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Surveys} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State", state);
  return state;
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App); //App ma as props pass hunxa
