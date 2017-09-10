import React from 'react';
import PropTypes from 'prop-types';

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


  SecondComponent.propTypes = {
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
  }

export default SecondComponent;
