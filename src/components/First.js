import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import {CHANGE_VIEW_MANAGER_CURRENT} from './../actions/changeViewManager';

class First extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <FirstComponentRender />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.viewManager.current
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: CHANGE_VIEW_MANAGER_CURRENT, text:'Second' })
    }
  }
}

const FirstComponent = ({ onClick, message }) => {
  return (
    <div>
      <h1>{ message } view with  next button</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

const FirstComponentRender = connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstComponent)


FirstComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default First;
