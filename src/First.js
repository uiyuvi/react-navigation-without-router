import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class First extends Component {
  constructor(){
    super();
    this.state={}
  }
  goToSecond () {
    var data = {};
    data.key = "current";
    data.val = 'Second';
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
          First view has one button next
        </p>
        <button  className="existing-profile" onClick={()=>this.goToSecond()}>
                <span>
                 go to second
                </span>
                <span className="fontcon-arrow-right"></span>
              </button>
      </div>
    );
  }
}

export default First;
First.PropTypes = {
  changeviewManager: PropTypes.func.isRequired
}