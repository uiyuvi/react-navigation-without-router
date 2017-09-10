import React from 'react';
import PropTypes from 'prop-types';

let ThirdComponent = ({ onHomeClick , message }) => {
  return(
    <div>
      <p className="App-intro">
        {message} view with home button
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

ThirdComponent.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}
export default ThirdComponent;
