import axios from 'axios';
import store from '../store/ConfigureStore';

export const api_url = 'http://192.168.56.1:8000';
export const login_url = api_url + '/api/login';
export const logout_url = api_url + '/api/logout';

export const request = axios.create({
  baseURL: api_url,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export const auth_request = () =>
  axios.create({
    baseURL: api_url,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + store.getState().auth.access_token,
      Accept: 'application/json'
    }
  });
export const get_state_url = lock_id => api_url + '/api/lock/' + lock_id;
export const lock_url = api_url + '/api/lock';
