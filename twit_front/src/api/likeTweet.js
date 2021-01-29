import axios from './axios';

export const likeTweetReq = (id, tweetId, likedUser) => {
  return axios.post('/api/likeTweet', { id, tweetId, likedUser });
};
