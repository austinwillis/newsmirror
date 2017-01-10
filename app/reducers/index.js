import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { topStories } from './stories';

const rootReducer = combineReducers({topStories, routing: routerReducer })
export default rootReducer
