

import {connect} from 'react-redux';
import PostIndex from './posts_index';

// if user is logged in, then redirect them elsewhere
const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
