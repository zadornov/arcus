import jwtDecode from 'jwt-decode';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT,
} from '../actions/auth';

const token = localStorage.getItem('token');
// @ts-expect-error TS(2571) FIXME: Object is of type 'unknown'.
const user = token && jwtDecode(token).user;

const initialState = {
  ...(token && { token }),
  ...(user && { user }),
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      // @ts-expect-error TS(2571) FIXME: Object is of type 'unknown'.
      const user = jwtDecode(action.token).user;
      return {
        ...state,
        loading: false,
        token: action.token,
        user,
      };

    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return { ...state, loading: false };

    case LOGOUT:
      return { ...state, token: null, user: null };

    default:
      return state;
  }
};
