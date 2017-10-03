import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';

// BrowserRouter interacts with the history library, and decides what to do based on the change in the url. look at the entire url when
// deciding what to show on the screen

// Route -- component that we can render anywhere. provides the configuration: if the url looks like this it shows
// different things --> customization to react router

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
// most specific routes at the top
// switch doesnt let multiple routes show
