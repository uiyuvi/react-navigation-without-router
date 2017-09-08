import {combineReducers} from 'redux';
import {CHANGE_VIEW_MANAGER_CURRENT,CHANGE_VIEW_MANAGER_PREVIOUS} from './../actions/changeViewManager';


const initialState = {
    current: "First",
    previous: ""
};

const viewManager =  function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW_MANAGER_CURRENT:
      return Object.assign({}, state, {
          current: action.text
      });
    case CHANGE_VIEW_MANAGER_PREVIOUS:
      return Object.assign({}, state, {
          previous: action.text
      });
    default:
      return state;
  }
}

const viewManagerReducer = combineReducers({viewManager});

export default viewManagerReducer;
