import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

// BrowserRouter interacts with the history library, and decides what to do based on the change in the url. look at the entire url when
// deciding what to show on the screen

// Route -- component that we can render anywhere. provides the configuration: if the url looks like this it shows
// different things --> customization to react router

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>hello</div>
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>goodbye</div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route  path="/hello" component={Hello}/>
      <Route  path="/goodbye" component={Goodbye}/>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
