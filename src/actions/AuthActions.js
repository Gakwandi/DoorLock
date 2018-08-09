import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { request, auth_request, login_url, logout_url, register_url } from '../api';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  DISMISS_LOGIN_MESSAGE,
  SET_AUTH,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER
} from './Constants';

export const login = data => {
  return dispatch => {
    dispatch({ type: LOGIN });
    const { email, password } = data;
    return request
      .post(login_url, { email, password })
      .then(response => {
        const user_details = {
          user: response.data.user,
          access_token: response.data.access_token
        };
        storeData('user_details', JSON.stringify(user_details))
          .then(() => {
            dispatch({ type: LOGIN_SUCCESS, data: response.data });
            Actions.account();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        dispatch({ type: LOGIN_FAIL, data: error.response.data });
      });
  };
};

export const register = data => {
  return dispatch => {
    dispatch({ type: REGISTER });
    const { username, email, password } = data;
    return request
      .post(register_url, { username, email, password })
      .then(response => {
        dispatch({type: REGISTER_SUCCESS, data: response.data});
        return true;
      })
      .catch(error => {
        dispatch({ type: REGISTER_FAIL, data: error.response.data });
        return false;
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
    return auth_request()
      .post(logout_url, {})
      .then(response => {
        AsyncStorage.removeItem('user_details');
        dispatch({ type: LOGOUT_SUCCESS, data: response.data });
        Actions.login();
      })
      .catch(error => {
        dispatch({ type: LOGOUT_FAIL, data: error.response.data });
      });
  };
};

export const dismissLoginMessage = () => {
  return dispatch => {
    dispatch({ type: DISMISS_LOGIN_MESSAGE });
  };
};

export const checkToken = () => {
  return dispatch => {
    return async () => {
      retrieveData('user_details')
        .then(details => {
          if (details !== null) {
            const data = JSON.parse(details);
            dispatch({ type: SET_AUTH, data: data });
            Actions.account();
          } else {
            Actions.login();
          }
        })
        .catch(error => {
          dispatch({ type: LOGIN_FAIL, data: error });
          Actions.login();
        });
    };
  };
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    return error;
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return error;
  }
};
