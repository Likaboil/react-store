import actionTypes from './action-types';

const booksLoaded = (newBooks) => {
  return {
    type: actionTypes.BOOKS_LOADED,
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: actionTypes.BOOKS_REQUESTED,
  }
};

const booksError = (error) => {
  return {
    type: actionTypes.BOOKS_ERROR,
    payload: error
  }
};

export {
  booksLoaded,
  booksRequested,
  booksError,
};
