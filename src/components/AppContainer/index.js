import {hot} from 'react-hot-loader/root';
import React from 'react';
import {Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'reducers/page1';
import App from 'components/App';
import history from '../../history';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  ),
);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App name="Jane" />
      </Router>
    </Provider>
  );
};

export default hot(AppContainer);
