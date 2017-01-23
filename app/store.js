import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { fetchTopStories } from './actions/actionCreators'

const loggerMiddleware = createLogger()

import { rootReducer } from './reducers/index'

import data from './data/stories.json'

const defaultState = {
  stories: data.stories
}

export const store = createStore(rootReducer, { stories: { data: [] }},
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(fetchTopStories()).then(() =>
  console.log(store.getState())
).catch(error => error)