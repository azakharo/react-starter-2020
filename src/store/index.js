import {configureStore} from '@reduxjs/toolkit';

import {loadState} from 'src/helpers/persistState.ts';
import rootReducer from './rootReducer';

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

export default store;
