import bookReducer from './books/books-reducer';
import cartReducer from './cart';

const reducer = (state, action) => {
  return {
    bookList: bookReducer(state, action),
    cartList: cartReducer(state, action)
  };
};

export default reducer;
