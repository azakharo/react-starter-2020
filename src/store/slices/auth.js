import {createSlice} from '@reduxjs/toolkit';

import api from 'src/services/ApiService';
import {saveState} from 'src/helpers/persistState';

const initialState = {
  isInProgress: false,
  isAuthenticated: false,
  user: {},
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart() {
      return {
        ...initialState,
        isInProgress: true,
      };
    },
    loginSuccess(state, action) {
      return {
        ...initialState,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    loginFail(state, action) {
      return {
        ...initialState,
        error: action.payload.message,
      };
    },
    logout() {
      return {
        ...initialState,
      };
    },
  },
});

export const {reducer} = slice;

export const login = (username, password) => dispatch => {
  dispatch(slice.actions.loginStart());

  return api.login(username, password).then(
    user => {
      saveState({
        auth: {
          isAuthenticated: true,
          user,
        },
      });

      dispatch(slice.actions.loginSuccess(user));
    },
    error => dispatch(slice.actions.loginFail(error)),
  );
};

export const logout = () => dispatch => {
  saveState({
    auth: {
      isAuthenticated: false,
      user: {},
    },
  });

  dispatch(slice.actions.logout());

  return api.logout();
};

export default slice;
