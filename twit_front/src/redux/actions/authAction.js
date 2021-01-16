import * as constant from '../constants';
import { registerUserReq, loginUserReq } from '../../api/auth';
import { getAvatarFile } from '../../api/getFile';

const getResponse = (response) => {
  localStorage.setItem('token', response.data.token);
  const t = response.data.token.split('.');
  return JSON.parse(window.atob(t[1]));
};

export const getAvatar = (id, data) => {
  return async (dispatch) => {
    const response = await getAvatarFile(id, data);
    const currentUser = getResponse(response);
    dispatch(authUser(currentUser));
  };
};

export const registerUser = (data) => {
  return async () => {
    await registerUserReq(data);
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    const response = await loginUserReq(data);
    const currentUser = getResponse(response);
    dispatch(authUser(currentUser));
  };
};

export const checkAuthUser = () => {
  return async (dispatch) => {
    if (localStorage.getItem('token')) {
      const items = localStorage.getItem('token').split('.');
      const tokenParse = JSON.parse(window.atob(items[1]));

      dispatch(authUser(tokenParse));
    }
  };
};

export const authUser = (data) => {
  return {
    type: constant.AUTH_USER,
    payload: data,
  };
};

export const logoutUser = () => {
  return {
    type: constant.LOG_OUT,
  };
};
