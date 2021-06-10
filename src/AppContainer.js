import {hot} from 'react-hot-loader/root';
import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from 'src/store';
import history from 'src/history';
import GlobalStyles from 'src/components/GlobalStyles';
import Routes from './Routes';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </Provider>
  );
};

export default hot(AppContainer);
