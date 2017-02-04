

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REQUEST_ALL_POSTS = "REQUEST_ALL_POSTS";
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";
export const SUBMIT_POST = "SUBMIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const REQUEST_POST = "RECEIVE_POST";



export const requestPost = (id) => ({
  type: REQUEST_POST,
  id
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const submitPost = (postInfo) => ({
  type: SUBMIT_POST,
  postInfo
});

export const requestAllPosts = (posts) => ({
  type: REQUEST_ALL_POSTS,
  posts
});

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_POSTS_ERRORS,
  errors
});
