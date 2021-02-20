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

export {
  booksLoaded,
  booksRequested,
};
