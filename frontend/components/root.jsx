

// react
import React from 'react';
import { Provider } from 'react-redux';

// react/Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// containers
import App from './app';
import PostsIndexContainer from './index/posts_index_container';
import PostContainer from './post/post_container';


// actions
import { requestAllPosts, requestPost } from '../actions/posts_actions';


  const Root = ({store}) => {

    const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }

  };
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const loadAllPosts = () => {
    store.dispatch(requestAllPosts());
  };

  const loadPost = (nextState) => {
    store.dispatch(requestPost(nextState.params.id));
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ="/" component={App}>
          <IndexRoute component={PostsIndexContainer} onEnter={loadAllPosts}/>

          <Route path="/posts/:id"
             component={PostContainer}
             onEnter={loadPost}/>

        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
