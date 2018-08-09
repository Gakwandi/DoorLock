import {
  GET_LOCK_STATE,
  GET_LOCK_STATE_SUCCESS,
  GET_LOCK_STATE_FAIL,
  DISMISS_LOCK_MESSAGE,
  LOCK,
  LOCK_FAIL,
  LOCK_SUCCESS,
} from '../actions/Constants';

const initialState = {
  loading: false,
  error: false,
  got_state: false,
  status: null,
  errors: {},
  message: '',
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCK_STATE:
      return {
        ...state,
        loading: true,
        error: false,
        status: null,
        got_state: false,
        errors: {},
        message: 'Getting the lock state ...',
      };
    case GET_LOCK_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        status: action.data.lock.status,
        got_state: true,
        errors: {},
        message: action.data.message,
      };
    case GET_LOCK_STATE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        status: null,
        got_state: false,
        errors: {},
        message: action.data.message,
      };
    case LOCK:
      return {
        ...state,
        loading: true,
        error: false,
        got_state: false,
        errors: {},
        message: "Locking ...",
      };
    case LOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        status: action.data.lock.status,
        got_state: true,
        errors: {},
        message: action.data.message,
      };
    case LOCK_FAIL:
      return {
        ...state,
        loading: false,
        error: false,
        status: null,
        got_state: true,
        errors: {},
        message: action.data.message,
      };

    case DISMISS_LOCK_MESSAGE:
      return {
        ...state,
        errors: {},
        message: ''
      };
    default:
      return state;
  }
}
