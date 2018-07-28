import { LOGIN } from '../actions/Constants';

const initialState = {
  logging: false,
  error: false,
  logged_in: false,
  errors: {},
  message: 'Logging in ...'
};
export default function AuthReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logging: true,
        error: false,
        logged_in: false,
        errors: {},
        message: 'Logging in ...'
      };
    default:
      return state;
  }
}
