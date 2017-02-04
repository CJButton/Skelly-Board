

import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { hashHistory } from 'react-router';

import { login, signup, logout } from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  const logoutSuccess = () => hashHistory.replace("/");

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);

    case LOGOUT:
      logout(logoutSuccess);
      next(action);
      break;

    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};
