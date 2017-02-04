

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REQUEST_ALL_POSTS = "REQUEST_ALL_POSTS";
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";

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
