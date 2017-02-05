

import React from 'react';
import { connect } from 'react-redux';

import { submitComment, deleteComment, editComment }
         from '../../actions/comments_actions';

import values from 'lodash/values';
import Comments from './comments';

const mapStateToProps = ( {comments, session, posts} ) => ({
  user: session.currentUser,
  post: posts
});
// allComments: values(comments)[0],
// userComment: comments.userComments

const mapDispatchToProps = dispatch => ({
  submitComment: (userId, title, text, username) =>
          dispatch(submitComment(userId, title, text, username)),
  deleteComment: (commentId) =>
          dispatch(deleteComment(commentId)),
  editComment: (commentId, title, text, username) =>
          dispatch(editComment(commentId, title, text, username))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
