

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REQUEST_ALL_POSTS = "REQUEST_ALL_POSTS";
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";
export const SUBMIT_POST = "SUBMIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";


export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const submitPost = (userId, title, text, username) => ({
  type: SUBMIT_POST,
  userId,
  title,
  text,
  username
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
