import { getAvatarReq } from '../../api/getFile';
import { addTweetReq } from '../../api/addTweet';
import { deleteTweetReq } from '../../api/deleteTweet';
import { getAllTweetsReq } from '../../api/getAllTweets';
import { likeTweetReq } from '../../api/likeTweet';
import { getResponse } from './getResponse';
import { authUser } from './authUserAction';
import * as constant from '../constants';

export const getAllTweets = () => {
  return async (dispatch) => {
    const response = await getAllTweetsReq();
    dispatch({
      type: constant.GET_ALL_TWEETS,
      payload: response.data,
    });
  };
};

export const getAvatar = (id, data) => {
  return async (dispatch) => {
    const response = await getAvatarReq(id, data);
    const currentUser = getResponse(response);
    dispatch(authUser(currentUser));
  };
};

export const addNewTweet = (id, tweet) => {
  return async (dispatch) => {
    const response = await addTweetReq(id, tweet);
    const currentUser = getResponse(response);
    dispatch(authUser(currentUser));
    dispatch(getAllTweets());
  };
};

export const deleteTweet = (id, tweetId) => {
  return async (dispatch) => {
    const response = await deleteTweetReq(id, tweetId);
    const currentUser = getResponse(response);
    dispatch(authUser(currentUser));
    dispatch(getAllTweets());
  };
};

export const likeTweet = (id, tweetId, likedUser) => {
  return async (dispatch) => {
    const response = await likeTweetReq(id, tweetId, likedUser);
    const currentUser = getResponse(response);
    dispatch(getAllTweets());
  };
};
