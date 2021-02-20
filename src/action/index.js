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
  }
};

const booksError = (error) => {
  return {
    type: actionTypes.FETCH_BOOKS_FAILURE,
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
