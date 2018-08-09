// import { AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import store from '../store/ConfigureStore';
import { request, get_state_url, auth_request, lock_url } from '../api';
import {
  GET_LOCK_STATE,
  GET_LOCK_STATE_SUCCESS,
  GET_LOCK_STATE_FAIL,
  DISMISS_LOCK_MESSAGE,
  LOCK,
  LOCK_FAIL,
  LOCK_SUCCESS
} from './Constants';

export const getLockState = () => {
  return dispatch => {
    dispatch({ type: GET_LOCK_STATE });
    return request
      .get(get_state_url(store.getState().auth.user.lock_id))
      .then(response => {
        dispatch({ type: GET_LOCK_STATE_SUCCESS, data: response.data });
      })
      .catch(error => {
        dispatch({ type: GET_LOCK_STATE_FAIL, data: error.response.data });
      });
  };
};

export const lockUnlock = () => {
  return dispatch => {
    dispatch({ type: LOCK });
    let toState = store.getState().lock.status == 'closed'?'false':'true';
    return auth_request()
      .post(lock_url, {
        lock_id: store.getState().auth.user.lock_id,
        lock: toState
      })
      .then(response => {
        dispatch({ type: LOCK_SUCCESS, data: response.data });
      })
      .catch(error => {
        dispatch({ type: LOCK_FAIL, data: error.response });
      });
  };
};

export const dismissLockMessage = () => {
  return dispatch => {
    dispatch({ type: DISMISS_LOCK_MESSAGE });
  };
};
