


import {receivePost,
        REQUEST_POST,
        receiveAllPosts,
        requestAllPosts,
        REQUEST_ALL_POSTS,
        receiveErrors} from '../actions/posts_actions';

import { getAllPosts, getPost } from '../util/posts_api_util';

const PostsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallBack = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case REQUEST_ALL_POSTS:
      success = posts => dispatch(receiveAllPosts(posts));
      getAllPosts(success, errorCallBack);
      return next(action);

    case REQUEST_POST:
      success = post => dispatch(receivePost(post));
      getPost(action.id, success);
      return next(action);

    default:
      next(action);
  }
};

export default PostsMiddleware;
