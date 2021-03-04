import * as BooksTypes from './books-types';
import { makeActionCreator } from '../../../lib';

const booksLoaded = makeActionCreator(BooksTypes.FETCH_BOOKS_SUCCESS);
const booksRequested = makeActionCreator(BooksTypes.FETCH_BOOKS_REQUEST);
const booksError = makeActionCreator(BooksTypes.FETCH_BOOKS_ERROR);

export {
  booksLoaded,
  booksRequested,
  booksError
};
