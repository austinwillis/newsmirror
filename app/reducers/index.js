import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { stories } from './stories'
import { combineEpics } from 'redux-observable'

export const rootReducer = combineReducers({stories, routing: routerReducer })