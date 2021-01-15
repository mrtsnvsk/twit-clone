import * as constant from './constants';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.LOGIN_USER:
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
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
