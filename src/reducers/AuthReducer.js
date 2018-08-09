import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  DISMISS_LOGIN_MESSAGE,
  SET_AUTH,
  LOGOUT_SUCCESS,
  UNSET_AUTH,
  DISMISS_REG_MESSAGE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/Constants';

const initialState = {
  logging: false,
  error: false,
  logged_in: false,
  errors: {},
  message: '',
  access_token: '',
  user: {}
};

const regInitialState = {
  logging: false,
  error: false,
  logged_in: false,
  errors: {},
  message: ''
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: false,
        logged_in: false,
        errors: {},
        message: 'Logging in ...',
        user: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        logged_in: true,
        errors: {},
        message: action.data.message,
        access_token: action.data.access_token,
        user: action.data.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        logged_in: false,
        errors: action.data.errors,
        message: action.data.message,
        access_token: '',
        user: {}
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        logged_in: false,
        errors: {},
        message: action.data.message,
        access_token: '',
        user: {}
      };
    case SET_AUTH:
      return {
        ...state,
        access_token: action.data.access_token,
        user: action.data.user
      };
    case UNSET_AUTH:
      return {
        ...state,
        logged_in: false,
        access_token: '',
        user: ''
      };
    case DISMISS_LOGIN_MESSAGE:
      return {
        ...state,
        errors: {},
        message: ''
      };
    default:
      return state;
  }
}

export function RegReducer(state = regInitialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
        error: false,
        errors: {},
        message: 'Registering ...',
        user: {},
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errors: {},
        message: action.data.message,
        user: action.data.user
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        logged_in: false,
        errors: action.data.errors,
        message: action.data.message,
        user: {}
      };
    case DISMISS_REG_MESSAGE:
      return {
        ...state,
        errors: {},
        message: ''
      };
    default:
      return state;
  }
}