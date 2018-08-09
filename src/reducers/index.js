import { combineReducers } from 'redux';
import auth from './AuthReducer';
import lock from './LockReducer';

export default combineReducers({
  auth,
  lock
});
