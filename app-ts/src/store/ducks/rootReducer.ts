import { combineReducers } from 'redux';

import auht from './auth';
import project from './project'
export default combineReducers({
  auht,
  project
});
