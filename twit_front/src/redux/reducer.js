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
      return {
        ...state,
        currentUser: {},
        isAuth: null,
      };
    case constant.CHECK_AUTH:
      return {
        ...state,
        isAuth: true,
        currentUser: action.payload,
      };
    case constant.GET_ALL_TWEETS:
      return {
        ...state,
        allTweets: action.payload,
      };
    case constant.SUCCESS_REG:
      return {
        ...state,
        successReg: action.payload,
      };
    case constant.REG_ERROR:
      return {
        ...state,
        regError: action.payload,
      };
    case constant.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
