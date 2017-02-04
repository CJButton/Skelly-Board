

import {connect} from 'react-redux';
import PostIndex from './posts_index';

import {submitPost} from '../../actions/posts_actions';

import values from 'lodash/values';

// if user is logged in, then redirect them elsewhere
const mapStateToProps = ({posts, session}) => ({
  user: session.currentUser,
  posts: values(posts)
});

const mapDispatchToProps = dispatch => ({
  submitPost: (userId, title, text, username) =>
        dispatch(submitPost(userId, title, text, username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
