import { combineReducers } from 'redux';
import bookReducer from './books/books-reducer';
import cartReducer from './cart';

export default combineReducers({
  bookList: bookReducer,
  cartList: cartReducer
});
