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
    data => console.log(data),
    err => console.error(err),
  );
};

export default makeRequest;
