import { getAvatarReq } from '../../api/getFile';
import { addTweetReq } from '../../api/addTweet';
import { getResponse } from './getResponse';
import { authUser } from './authUserAction';

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
  };
};
