import axios from 'axios';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';
const url = "http://localhost:8000"
// CHECK TOKEN & LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });
  await axios
    .get(url+'/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};



// LOGIN USER
export const login = (user) => async (dispatch) => {

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify(user);

  await axios 
    .post(url+'/api/auth/login', body, config)
    .then((res) => {
      
       dispatch({
        type: LOGIN_SUCCESS,
        payload:res.data
      });
      localStorage.setItem('token', res.data.token)
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => async (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  await axios
    .post(url+'/api/auth/register', body, config)
    .then((res) => {
       dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      localStorage.setItem('token', res.data.token)
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
  await axios
    .post(url+'/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: 'CLEAR_LEADS' });
       dispatch({
        type: LOGOUT_SUCCESS,
      });
      localStorage.removeItem('token')
    })
    .catch((err) => {
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  
  const token = getState().authReducer.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};