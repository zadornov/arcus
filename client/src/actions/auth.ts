import { login, signup } from '../util/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const loginRequest = { type: LOGIN_REQUEST };
const loginSuccess = (token: any) => ({
  type: LOGIN_SUCCESS,
  token,
});
const loginError = (error: any) => ({
  type: LOGIN_ERROR,
  error,
});

export const attemptLogin =
  (username: any, password: any) => async (dispatch: any) => {
    dispatch(loginRequest);
    try {
      const token = await login(username, password);
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginError(error));
    }
  };

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const signupRequest = { type: SIGNUP_REQUEST };
const signupSuccess = (token: any) => ({
  type: SIGNUP_SUCCESS,
  token,
});
const signupError = (error: any) => ({
  type: SIGNUP_ERROR,
  error,
});

export const attemptSignup =
  (username: any, password: any) => async (dispatch: any) => {
    dispatch(signupRequest);
    try {
      const token = await signup(username, password);
      dispatch(signupSuccess(token));
    } catch (error) {
      dispatch(signupError(error));
    }
  };

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });
