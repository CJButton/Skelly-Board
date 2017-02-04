

// react
import React from 'react';
import { Provider } from 'react-redux';

// react/Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// containers
import App from './app';
import PostsIndexContainer from './index/posts_index_container';


// actions
import { requestAllPosts } from '../actions/posts_actions';


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

  // this will load all posts for the index page
  // will fill out after we have written the loop for it
  const loadAllPosts = () => {
    store.dispatch(requestAllPosts());
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ="/" component={App}>
          <IndexRoute component={PostsIndexContainer} onEnter={loadAllPosts}/>

        </Route>
      </Router>
    </Provider>
  );

};
// <IndexRoute component={MainContainer} onEnter={loadAllPosts}/>
//

// <Route path ="/" component={App} onEnter={_ensureLoggedIn}>
//


// <Route path="/login" component={MainContainer}
  // onEnter={_redirectIfLoggedIn}/>


// <Route path="/my-Manga"
//        component={BookshelfContainer}
//        onEnter={loadAllShelves}/>
//
// <Route path="/manga/:id"
//        component={MangaContainer}
//        onEnter={loadSingleManga}/>
export default Root;
