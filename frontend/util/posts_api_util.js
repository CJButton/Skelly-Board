


export const getPost = (id, success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/posts/${id}`,
    success,
    error
  });
};

export const getAllPosts = (success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/posts`,
    success,
    error
  });
};
