import * as constant from '../constants';
import { registerUserReq, loginUserReq } from '../../api/auth';
import { getResponse } from './getResponse';
import { authUser } from './authUserAction';
import { checkAuthReq } from '../../api/auth';

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
    const response = await checkAuthReq();
    const currentUser = getResponse(response);
    dispatch(authUser(currentUser));
    localStorage.setItem('token', response.data.token);
  };
};

export const logoutUser = () => {
  return {
    type: constant.LOG_OUT,
  };
};
