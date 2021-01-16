import axios from './axios';

export const getAvatarFile = (id, avatar) => {
  return axios.post('/api/uploadAvatar', { id, avatar });
};
