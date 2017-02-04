


import {RECEIVE_POST,
        RECEIVE_ERRORS,
        RECEIVE_ALL_POSTS} from '../actions/posts_actions';

import { merge } from 'lodash';


const PostsReducer = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_POST:
    const newPost = merge({}, action.post);
      return merge(newPost);

    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);

    default:
      return state;
  }
};

export default PostsReducer;
