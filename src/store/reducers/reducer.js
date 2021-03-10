import { combineReducers } from 'redux';
import bookReducer from './books/books-reducer';
import cartReducer from './cart';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.BOOKS]: bookReducer,
  [NameSpace.CART]: cartReducer
});
