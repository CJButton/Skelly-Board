


import {connect} from 'react-redux';

import PostComponent from './post';

import values from 'lodash/values';

const mapStateToProps = ({posts, session}) => ({
  user: session.currentUser,
  post: posts
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent);
