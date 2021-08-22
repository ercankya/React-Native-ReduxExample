import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function fetchUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case actionTypes.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case actionTypes.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
