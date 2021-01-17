import * as constant from '../constants';

export const authUser = (data) => {
  return {
    type: constant.AUTH_USER,
    payload: data,
  };
};