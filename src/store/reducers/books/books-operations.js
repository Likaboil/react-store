import {
  booksLoaded,
  booksRequested,
  booksError
} from './books-action';

const fetchBooks = (bookstoreService, dispatch) => () => {

  dispatch(booksRequested()); // show spinner until get data

  bookstoreService.getBooks()  // recieve data
   .then((data) => dispatch(booksLoaded(data)))  // dispatch action to store
   .catch((error) => dispatch(booksError(error)));
};

export default fetchBooks;
