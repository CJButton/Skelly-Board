

import React from 'react';
import { connect } from 'react-redux';

import {logout, login, signup} from '../../actions/session_actions';

import TopBar from './topbar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
