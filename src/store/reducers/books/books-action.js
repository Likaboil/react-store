import * as BooksTypes from './books-types';

const booksLoaded = (newBooks) => {
  return {
    type: BooksTypes.FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: BooksTypes.FETCH_BOOKS_REQUEST,
  };
};

const booksError = (error) => {
  return {
    type: BooksTypes.FETCH_BOOKS_ERROR,
    payload: error
  };
};

export {
  booksLoaded,
  booksRequested,
  booksError
};
