import api from 'src/services/ApiService';
import {
  ACTION__LOGIN,
  ACTION__LOGIN_FAIL,
  ACTION__LOGIN_SUCCESS,
  ACTION__LOGOUT,
  ACTION__LOGOUT_FAIL,
  ACTION__LOGOUT_SUCCESS,
} from 'src/constants/actions';
import {saveState} from 'src/helpers/persistState';

export const login = (username, password) => dispatch => {
  dispatch({
    type: ACTION__LOGIN,
    payload: {username},
  });

  return api.login(username, password).then(
    user => {
      saveState({
        auth: {
          isAuthenticated: true,
          user,
        },
      });

      dispatch({
        type: ACTION__LOGIN_SUCCESS,
        payload: user,
      });
    },
    error =>
      dispatch({
        type: ACTION__LOGIN_FAIL,
        error,
        meta: {username},
      }),
  );
};

export const logout = () => dispatch => {
  dispatch({
    type: ACTION__LOGOUT,
  });

  return api.logout().then(
    () =>
      dispatch({
        type: ACTION__LOGOUT_SUCCESS,
      }),
    error =>
      dispatch({
        type: ACTION__LOGOUT_FAIL,
        error,
      }),
  );
};
