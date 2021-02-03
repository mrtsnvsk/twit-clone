import axios from '../axios';

export const getAllTweetsReq = () => {
  return axios.get('/api/allTweets');
};
