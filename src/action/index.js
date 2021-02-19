import actionTypes from './action-types';

const booksLoaded = (newBooks) => {
  return {
    type: actionTypes.BOOKS_LOADED,
    payload: newBooks
  };
};

export {
  booksLoaded
};
