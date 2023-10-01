import { combineReducers } from 'redux';
import { positionsReducer } from './positions/position.reducer';
import { filterReducer } from 'UI/filters/filter-reducer';

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
});
