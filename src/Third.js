import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class Third extends Component {
  constructor(){
    super();
    this.state={}
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
          Third  view with Home button
        </p>
        <button  className="existing-profile" onClick={()=>this.goToFirst()}>
                <span>
                 go to Home
                </span>
                <span className="fontcon-arrow-right"></span>
              </button>
      </div>
    );
  }
}

export default Third;
Third.PropTypes = {
  changeviewManager: PropTypes.func.isRequired
}