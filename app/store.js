import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import data from './data/stories.json';

const defaultState = {
  topStories: data.stories
}

export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
