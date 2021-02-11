import axios from './axios';

export const addTweetReq = (newTweet) => {
  return axios.post('/api/newTweet', newTweet);
};

export const currentTweetReq = (id) => {
  return axios.post(`/api/tweets/${id}`);
};

export const deleteTweetReq = (userId, tweetId) => {
  console.log(userId, tweetId);
  return axios.post('/api/deleteTweet', { userId, tweetId });
};

export const getAllTweetsReq = () => {
  return axios.get('/api/tweets');
};

// export const getAvatarReq = (id, avatar) => {
//   return axios.put('/api/uploadAvatar', { id, avatar });
// };

export const getAvatarReq = (data) => {
  console.log('put', data);
  return axios.put('/api/uploadAvatar', data);
};

export const likeTweetReq = (tweetId, likedUser) => {
  return axios.post('/api/likeTweet', { tweetId, likedUser });
};

export const unlikeTweetReq = (tweetId, likedUser) => {
  return axios.post('/api/unlikeTweet', { tweetId, likedUser });
};

export const newReplyReq = (reply) => {
  return axios.post('/api/newReply', reply);
};

export const userProfileReq = (login) => {
  return axios.post(`/api/profile/${login}`);
};
