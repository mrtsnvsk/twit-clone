import axios from '../axios';

export const getAvatarReq = (id, avatar) => {
  return axios.post('/api/uploadAvatar', { id, avatar });
};
