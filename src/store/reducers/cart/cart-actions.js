import * as CartTypes from './cart-types';

const bookAddedToCart = (bookId) => {
  return {
    type: CartTypes.BOOKS_ADDED_TO_CART,
    payload: bookId
  };
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: CartTypes.BOOK_REMOVES_FROM_CART,
    payload: bookId,
  };
};

const allBooksRemovedFromCart = (bookId) => {
  return {
    type: CartTypes.ALL_BOOKS_REMOVES_FROM_CART,
    payload: bookId,
  };
};

export {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
};
