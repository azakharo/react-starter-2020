import axios from 'axios';
import {ACTION__REQUEST_START} from '../constants/actions';

const makeRequest = () => (dispatch, getState) => {
  const state = getState();
  const {requestSent} = state.page1;

  if (requestSent) {
    return undefined;
  }

  dispatch({type: ACTION__REQUEST_START});

  return axios.get('https://reqres.in/api/users?page=2').then(
    data => {
      /* eslint-disable-next-line no-console */
      console.log(data);
    },
    err => {
      /* eslint-disable-next-line no-console */
      console.error(err);
    },
  );
};

export default makeRequest;
