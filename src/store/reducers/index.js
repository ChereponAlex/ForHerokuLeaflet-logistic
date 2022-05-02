import { combineReducers } from 'redux';
import routeReducer from './routeReducer';

const reducersSpec = {
  route: routeReducer,
};

const rootReducer = combineReducers(reducersSpec);
export default rootReducer;
