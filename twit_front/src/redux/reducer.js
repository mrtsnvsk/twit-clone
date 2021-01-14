import * as constant from './constants';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return {
        state,
      };
    default:
      return state;
  }
};

export default reducer;
