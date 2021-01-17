import axios from './axios';

export const registerUserReq = (regData) => {
  return axios.post('/api/registration', { ...regData });
};

export const loginUserReq = (loginData) => {
  return axios.post('/api/login', { ...loginData });
};

export const checkAuthReq = () => {
  const config = {
    url: 'http://localhost:8080/api/reload',
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return axios(config);
};
