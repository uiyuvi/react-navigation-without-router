import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class Second extends Component {
  constructor(){
    super();
    this.state={}
  }
  goToThird() {
    var data = {};
    data.key = "current";
    data.val = 'Third';
     this.props.changeviewManager(data);
  }

  goToFirst() {
    var data = {};
    data.key = "current";
    data.val = 'First';
     this.props.changeviewManager(data);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          second view with 2 button
        </p>
        <button  className="existing-profile" onClick={()=>this.goToFirst()}>
                <span>
                 go to prev
                </span>
                <span className="fontcon-arrow-right"></span>
              </button>
        <button  className="existing-profile" onClick={()=>this.goToThird()}>
                <span>
                 go to Next
                </span>
                <span className="fontcon-arrow-right"></span>
              </button>
      </div>
    );
  }
}

export default Second;
Second.PropTypes = {
  changeviewManager: PropTypes.func.isRequired
}