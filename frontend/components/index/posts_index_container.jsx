

import {connect} from 'react-redux';
import PostIndex from './posts_index';

import values from 'lodash/values';

// if user is logged in, then redirect them elsewhere
const mapStateToProps = ({posts}) => ({
  posts: values(posts)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
