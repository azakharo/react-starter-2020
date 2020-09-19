import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/page1';
import App from "./App";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
)

const mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App name="Jane"/>
  </Provider>,
  mountNode);
