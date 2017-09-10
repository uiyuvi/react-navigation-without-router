import React from 'react';
import PropTypes from 'prop-types';

const FirstComponent = ({ onClick, message }) => {
  return (
    <div>
      <p>{ message } view with  next button</p>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

FirstComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default FirstComponent;
