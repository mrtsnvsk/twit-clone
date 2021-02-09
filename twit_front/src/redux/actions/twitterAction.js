import { getResponse } from './getResponse';
import { authUser } from './authUserAction';
import {
  addTweetReq,
  deleteTweetReq,
  getAllTweetsReq,
  getAvatarReq,
  likeTweetReq,
  unlikeTweetReq,
  currentTweetReq,
  newReplyReq,
} from '../../api/tweetReq';
import * as constant from '../constants';

export const getAvatar = (file, id) => {
  return async (dispatch) => {
    const response = await getAvatarReq(file, id);
    const currentUser = getResponse(response.data.token);
    dispatch(authUser(currentUser));
  };
};

export const getAllTweets = () => {
  return async (dispatch) => {
    const response = await getAllTweetsReq();
    dispatch({
      type: constant.GET_ALL_TWEETS,
      payload: response.data,
    });
  };
};

export const getCurrentTweet = (id) => {
  return async (dispatch) => {
    const response = await currentTweetReq(id);
    dispatch({
      type: constant.GET_CUR_TWEET,
      payload: response.data,
    });
  };
};

export const addNewTweet = (tweet) => {
  return async (dispatch, getState) => {
    await addTweetReq(tweet);
    const oldTweets = getState();
    let allTweets = [...oldTweets.allTweets, tweet];
    allTweets.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    dispatch({
      type: constant.ADD_NEW_TWEET,
      payload: allTweets,
    });
  };
};

export const newReply = (reply) => {
  return async (dispatch, getState) => {
    const response = await newReplyReq(reply);
    let currentTweet = getState().currentTweet;

    currentTweet.replyes.push(response.data);

    dispatch({
      type: constant.GET_CUR_TWEET,
      payload: currentTweet,
    });

    const allTweets = getState().allTweets;
    const before = allTweets.filter(
      (el) => el.tweetId !== response.data.tweetIdOwner.toString()
    );
    let after = allTweets.filter(
      (el) => el.tweetId === response.data.tweetIdOwner.toString()
    );

    after.map((el) => el.replyes.push(response.data));

    let tweets = [...before, ...after];

    tweets.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

    dispatch({
      type: constant.GET_ALL_TWEETS,
      payload: tweets,
    });
  };
};

export const deleteTweet = (userId, tweetId) => {
  return async (dispatch) => {
    await deleteTweetReq(userId, tweetId);
    dispatch(getAllTweets());
  };
};

export const likeTweet = (tweetId, likedUser) => {
  return async (dispatch) => {
    await likeTweetReq(tweetId, likedUser);
    dispatch(getAllTweets());
  };
};

export const unlikeTweet = (tweetId, likedUser) => {
  return async (dispatch) => {
    await unlikeTweetReq(tweetId, likedUser);
    dispatch(getAllTweets());
  };
};
