import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import viewManagerReducer from './reducers/changeViewManager'
import App from './components/App'

let store = createStore(viewManagerReducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);
