import * as constant from '../constants';
import { registerUserReq, loginUserReq } from '../../api/auth';

export const registerUser = (data) => {
  return async () => {
    await registerUserReq(data);
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    const response = await loginUserReq(data);

    localStorage.setItem('token', response.data.token);

    const t = response.data.token.split('.');
    const currentUser = JSON.parse(window.atob(t[1]));
    dispatch({
      type: constant.LOGIN_USER,
      payload: currentUser,
    });
  };
};
