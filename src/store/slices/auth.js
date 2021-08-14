import {createSlice} from '@reduxjs/toolkit';

import api from 'src/services/ApiService';
import {saveState} from 'src/helpers/persistState.ts';

const initialState = {
  isInProgress: false,
  isAuthenticated: false,
  user: {},
  error: null,
};

//* ********************************************************
// Selectors

const selectAuth = wholeState => wholeState.auth;
export const selectError = state => selectAuth(state).error;
export const selectIsInProgress = state => selectAuth(state).isInProgress;
export const selectIsAuthenticated = state => selectAuth(state).isAuthenticated;
export const selectUser = state => selectAuth(state).user;
export const selectUsername = state => {
  const user = selectUser(state);

  if (!user) {
    return '';
  }

  return user.name;
};

// Selectors
//* ********************************************************

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
        error: action.payload,
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
    error => {
      dispatch(slice.actions.loginFail(error.message));
    },
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
