import actionTypes from './action-types';

const booksLoaded = (newBooks) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: actionTypes.FETCH_BOOKS_REQUEST,
  };
};

const booksError = (error) => {
  return {
    type: actionTypes.FETCH_BOOKS_FAILURE,
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: actionTypes.BOOKS_ADDED_TO_CART,
    payload: bookId
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {

  dispatch(booksRequested()); // show spinner until get data

  bookstoreService.getBooks()  // recieve data
   .then((data) => dispatch(booksLoaded(data)))  // dispatch action to store
   .catch((error) => dispatch(booksError(error)));
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: actionTypes.BOOK_REMOVES_FROM_CART,
    payload: bookId,
  };
};

const allBooksRemovedFromCart = (bookId) => {
  return {
    type: actionTypes.ALL_BOOKS_REMOVES_FROM_CART,
    payload: bookId,
  };
};

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
};
