import axios from '../axios';

export const unlikeTweetReq = (id, tweetId, likedUser) => {
  return axios.post('/api/unlikeTweet', { id, tweetId, likedUser });
};
