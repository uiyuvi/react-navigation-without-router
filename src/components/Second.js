import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import {CHANGE_VIEW_MANAGER_CURRENT} from './../actions/changeViewManager';

class Second extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SecondComponentRender />
      </div>
    );
  }
}
let SecondComponent = ({ onPrevClick, onNextClick , message }) => {
  return(
    <div>
      <p className="App-intro">
        {message} view with 2 button
      </p>
      <button  className="existing-profile" onClick={onPrevClick}>
              <span>
               go to prev
              </span>
              <span className="fontcon-arrow-right"></span>
      </button>
      <button  className="existing-profile" onClick={onNextClick}>
              <span>
               go to Next
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
    onPrevClick: () => {
      dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'First' })
    },
    onNextClick: () => {
      dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'Third' })
    }
  }
}
let SecondComponentRender = connect(
  mapStateToProps,
  mapDispatchToProps)(SecondComponent)

  SecondComponent.propTypes = {
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
  }

export default Second;
