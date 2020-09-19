import {ACTION__REQUEST_START} from '../constants/actions';

const initialState = {
  requestSent: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION__REQUEST_START:
      return {...state, requestSent: true};
    default:
      return state;
  }
}
