import {configureStore} from '@reduxjs/toolkit';

import {loadState} from 'src/helpers/persistState';
import rootReducer from './rootReducer';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

export default store;
