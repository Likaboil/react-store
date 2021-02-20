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

const fetchBooks = (bookstoreService, dispatch) => () => {

  dispatch(booksRequested()); // show spinner until get data

  bookstoreService.getBooks()  // recieve data
   .then((data) => dispatch(booksLoaded(data)))  // dispatch action to store
   .catch((error) => dispatch(booksError(error)));
}

export {
  fetchBooks,
};
