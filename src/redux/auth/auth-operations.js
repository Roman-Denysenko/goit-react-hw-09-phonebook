import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';
import axios from 'axios';
import store from '../store';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = user => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', user);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const logIn = user => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    const response = await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async dispatch => {
  const tokenFromLocalStorage = store.store.getState().auth.token;

  if (!tokenFromLocalStorage) {
    return;
  }

  token.set(tokenFromLocalStorage);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
