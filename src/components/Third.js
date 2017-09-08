import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import {CHANGE_VIEW_MANAGER_CURRENT} from './../actions/changeViewManager';

class Third extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ThirdComponentRender />
      </div>
    );
  }
}
let ThirdComponent = ({ onHomeClick , message }) => {
  return(
    <div>
      <p className="App-intro">
        {message} view with 2 button
      </p>
      <button  className="existing-profile" onClick={onHomeClick}>
              <span>
               go to Home
              </span>
              <span className="fontcon-arrow-right"></span>
      </button>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    message: state.viewManager.current
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHomeClick: () => {
      dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'First' })
    }
  }
}
let ThirdComponentRender = connect(
  mapStateToProps,
  mapDispatchToProps)(ThirdComponent)

  ThirdComponent.propTypes = {
    onHomeClick: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
  }
export default Third;
