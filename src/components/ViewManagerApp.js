/* eslint-disable */
import React from 'react';
import FirstComponentRender from '../containers/FirstContainer';
import SecondComponentRender from '../containers/SecondContainer';
import ThirdComponentRender from '../containers/ThirdContainer';


const ViewManagerApp =({localState}) => {
    if(localState ===  "First"){
     return (
      <FirstComponentRender />
     )
    } else if (localState===  "Second"){
      return (
        <SecondComponentRender />
      )
    }  else if (localState ===  "Third"){
      return (
        <ThirdComponentRender />
      )
    } else {
      return null;
    }
  }

export default ViewManagerApp;
