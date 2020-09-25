import {hot} from 'react-hot-loader/root';
import React from 'react';
import {Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'reducers';
import App from 'components/App';
import history from '../../history';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  ),
);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

export default hot(AppContainer);
