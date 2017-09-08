/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';
import { connect } from 'react-redux';
class App extends Component {

  render() {
    return (
      <LocalApp />
    )

  }
}


const LocalApp = function ({onClick,localState}) {
  if(localState ===  "First"){
   return (
    <First />
   )
  } else if (localState===  "Second"){
    return (
      <Second />
    )
  }  else if (localState ===  "Third"){
    return (
      <Third />
    )
  } else {
    return null;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    localState: state.viewManager.current
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {

    }
  }
}

const ViewManagerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalApp)


App.propTypes = {
  localState: PropTypes.string
}

export default ViewManagerApp;
