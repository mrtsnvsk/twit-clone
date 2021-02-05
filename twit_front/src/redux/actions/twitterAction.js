import { getResponse } from './getResponse';
import { authUser } from './authUserAction';
import {
  addTweetReq,
  deleteTweetReq,
  getAllTweetsReq,
  getAvatarReq,
  likeTweetReq,
  unlikeTweetReq,
} from '../../api/index';
import * as constant from '../constants';

export const getAllTweets = () => {
  return async (dispatch) => {
    try {
      const response = await getAllTweetsReq();
      return dispatch({
        type: constant.GET_ALL_TWEETS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e.message);
    }
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
    // const response = await addTweetReq(id, tweet);
    // const currentUser = getResponse(response);
    // dispatch(authUser(currentUser));
    await addTweetReq(id, tweet);
    dispatch(getAllTweets());
  };
};

export const deleteTweet = (id, tweetId) => {
  return async (dispatch) => {
    // const response = await deleteTweetReq(id, tweetId);
    // const currentUser = getResponse(response);
    // dispatch(authUser(currentUser));
    await deleteTweetReq(id, tweetId);
    dispatch(getAllTweets());
  };
};

export const likeTweet = (id, tweetId, likedUser) => {
  return async (dispatch) => {
    await likeTweetReq(id, tweetId, likedUser);
    dispatch(getAllTweets());
  };
};

export const unlikeTweet = (id, tweetId, likedUser) => {
  return async (dispatch) => {
    await unlikeTweetReq(id, tweetId, likedUser);
    dispatch(getAllTweets());
  };
};
