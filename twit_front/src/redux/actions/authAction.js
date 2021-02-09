import * as constant from '../constants';
import { registerUserReq, loginUserReq } from '../../api/auth';
import { getResponse } from './getResponse';
import { authUser } from './authUserAction';

export const registerUser = (data) => {
  return async (dispatch) => {
    const response = await registerUserReq(data);
    if (response.data.error) {
      return dispatch(onRegError(response.data.error));
    }
    dispatch(onSuccessReg(response.data.message));
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    const response = await loginUserReq(data);
    if (response.data.error) {
      return dispatch(onLoginError(response.data.error));
    }
    const currentUser = getResponse(response.data.token);
    dispatch(authUser(currentUser));
  };
};

export const checkAuthUser = () => {
  const token = localStorage.getItem('token');
  const currentUser = getResponse(token);
  return {
    type: constant.CHECK_AUTH,
    payload: currentUser,
  };
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: constant.LOG_OUT,
  };
};

export const onLoginError = (error) => {
  return {
    type: constant.LOGIN_ERROR,
    payload: error,
  };
};

export const onRegError = (error) => {
  return {
    type: constant.REG_ERROR,
    payload: error,
  };
};

export const onSuccessReg = (message) => {
  return {
    type: constant.SUCCESS_REG,
    payload: message,
  };
};
