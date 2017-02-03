

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REQUEST_ALL_POSTS = "REQUEST_ALL_POSTS";

export const requestAllPosts = (posts) => ({
  type: REQUEST_ALL_POSTS,
  posts
});

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});
