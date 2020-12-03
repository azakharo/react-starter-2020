import {hot} from 'react-hot-loader/root';
import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from 'src/store';
import App from 'src/components/App';
import history from 'src/history';

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
