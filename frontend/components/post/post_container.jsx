


import {connect} from 'react-redux';

import PostComponent from './post';

import values from 'lodash/values';
import { deletePost }
         from '../../actions/posts_actions';

const mapStateToProps = ({posts, session}) => ({
  user: session.currentUser,
  post: posts
});

const mapDispatchToProps = dispatch => ({
  deletePost: (postId) =>
          dispatch(deletePost(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent);
