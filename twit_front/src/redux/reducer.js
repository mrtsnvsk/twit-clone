import * as constant from './constants';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.AUTH_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case constant.LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: null,
      };
    case constant.GET_ALL_TWEETS:
      return {
        ...state,
        allTweets: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
