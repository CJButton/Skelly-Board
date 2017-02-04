


import {connect} from 'react-redux';
import PostComponent from './post';

import values from 'lodash/values';

const mapStateToProps = ({post, session}) => ({
  user: session.currentUser,
  post: post
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent);
