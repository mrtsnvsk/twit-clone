import axios from '../axios';

export const deleteTweetReq = (id, tweetId) => {
  return axios.post('/api/deleteTweet', { id, tweetId });
};
