


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

export const sendPost =
      (userId, title, text, username, success, error) => {
  $.ajax({
    type: 'POST',
    url: `api/posts`,
    data: {userId, title, text, username},
    success,
    error
  });
};