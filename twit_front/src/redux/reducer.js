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
    default:
      return state;
  }
};

export default reducer;
