import * as BooksTypes from './books-types';
import { makeActionCreator } from '../../lib/actions';

export const setBooks = makeActionCreator(BooksTypes.SET_BOOKS);
export const setBooksStatus = makeActionCreator(BooksTypes.SET_BOOKS_STATUS);
