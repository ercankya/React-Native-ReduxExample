import {combineReducers} from 'redux';
import fetchUserReducer from './fetchUserReducer';

const rootReducers = combineReducers({
  fetchUserReducer,
});
export default rootReducers;
