import {GET_LIST_POST, GET_LIST_POST_SUCCESS} from './constant';

const INITIAL_STATE = {
  posts: [],
  load: false,
};


const postsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_LIST_POST:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        load: true,
      };
    default:
      return state;
  }

}

export default postsReducer;