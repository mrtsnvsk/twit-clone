import axios from './axios';

export const registerUserReq = (regData) => {
  return axios.post('/api/registration', { ...regData });
};

export const loginUserReq = (loginData) => {
  return axios.post('/api/login', { ...loginData });
};
