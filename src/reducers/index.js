import { combineReducers } from 'redux';
import auth,{RegReducer} from './AuthReducer';
import lock from './LockReducer';

export default combineReducers({
  auth,
  lock,
  reg: RegReducer
});
