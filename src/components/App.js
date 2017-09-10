/* eslint-disable */

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ViewManagerContainer from '../containers/AppContainer'
const App = function() {

    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <ViewManagerContainer />
      </div>
    )

}

export default App;
