import * as CartTypes from './cart-types';
import { makeActionCreator } from '../../../lib';

const bookAddedToCart = makeActionCreator(CartTypes.BOOKS_ADDED_TO_CART);
const bookRemovedFromCart = makeActionCreator(CartTypes.BOOK_REMOVES_FROM_CART);
const allBooksRemovedFromCart = makeActionCreator(CartTypes.ALL_BOOKS_REMOVES_FROM_CART);

export {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
};
