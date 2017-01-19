import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import List from './components/List.jsx'

import './main.scss'

import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'

import { store, history } from './store'

let data = require('./data/stories.json')

console.log(data)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={List} />
      </Route>
    </Router>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
