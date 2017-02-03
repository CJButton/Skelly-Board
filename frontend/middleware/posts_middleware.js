


import {receivePost,
        REQUEST_POST,
        requestPosts,
        receiveErrors,
        receiveAllPosts,
        requestAllPosts,
        REQUEST_ALL_POSTS} from '../actions/posts_actions';

import { getAllPosts, getPosts } from '../util/posts_api_util';

const PostsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallBack = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case REQUEST_ALL_POSTS:
      success = posts => dispatch(receiveAllPosts(posts));
      getAllPosts(success, errorCallBack, action.shelf);
      return next(action);

    case REQUEST_POST:
      success = post => dispatch(receivePost(post));
      getPosts(action.id, success);
      return next(action);

    default:
      next(action);
  }
};

export default PostsMiddleware;
