

import {connect} from 'react-redux';
import PostIndex from './posts_index';

// if user is logged in, then redirect them elsewhere
const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);

//
//
// import React from 'react';
// import { connect } from 'react-redux';
//
// import Home from './home';
//
// const mapStateToProps = ({manga}) => ({
//   manga: Object.keys(manga).map(key => manga[key])
// });
