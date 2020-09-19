import axios from 'axios';
import {ACTION__REQUEST_START} from '../constants/actions';

const makeRequest = () => (dispatch, getState) => {
  const state = getState();
  const {requestSent} = state;

  if (requestSent) {
    return undefined;
  }

  dispatch({type: ACTION__REQUEST_START});

  return axios.get('https://reqres.in/api/users?page=2').then(
    data => {
      /* eslint-disable-next-line import/prefer-default-export */
      console.log(data);
    },
    err => {
      /* eslint-disable-next-line import/prefer-default-export */
      console.error(err);
    },
  );
};

export default makeRequest;
