import React from "react";

import "./App.css";

import { connect } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <h1>Full Stack Developer</h1>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("State", state);
  return state;
};

export default connect(mapStateToProps)(App);
