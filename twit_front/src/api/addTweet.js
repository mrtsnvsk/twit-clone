import axios from './axios';

export const addTweetReq = (id, newTwit) => {
  return axios.post('/api/newTweet', { id, newTwit });
};
