import { DataStatus } from '../../../constants/status';
import * as BooksTypes from './books-types';

const initialState = {
  books: [],
  status: DataStatus.INIT,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BooksTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case BooksTypes.SET_BOOKS_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
    };
};

export default bookReducer;
