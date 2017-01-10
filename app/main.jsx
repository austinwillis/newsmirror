import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import List from './components/List';

import './main.scss';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import { store, history } from './store';

var data = require('./data/stories.json');

console.log(data);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={List} />
      </Route>
    </Router>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
