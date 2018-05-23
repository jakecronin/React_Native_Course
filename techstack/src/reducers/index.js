import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  items: ItemReducer,
  selectedItemID: SelectionReducer,
});
