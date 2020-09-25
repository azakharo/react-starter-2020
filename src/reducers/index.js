import {combineReducers} from 'redux';

import auth from './auth';
import page1 from './page1';

export default combineReducers({
  auth,
  page1,
});
