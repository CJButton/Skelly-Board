
import { browserHistory } from 'react-router';

import {receivePost,
        REQUEST_POST,
        receiveAllPosts,
        requestAllPosts,
        REQUEST_ALL_POSTS,
        SUBMIT_POST,
        receiveErrors} from '../actions/posts_actions';

import { getAllPosts, getPost, sendPost } from '../util/posts_api_util';

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

    case SUBMIT_POST:
      success = (post) => browserHistory.push(`api/posts/${post.id}`);
      sendPost(action.userId, action.title, action.text,
                action.username, success, errorCallBack);
      return next(action);

    default:
      next(action);
  }
};

export default PostsMiddleware;
