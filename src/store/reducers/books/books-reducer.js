import * as BooksTypes from './books-types';

const initialState = {
    books: [],
    loading: true,
    error: null,
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BooksTypes.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case BooksTypes.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case BooksTypes.FETCH_BOOKS_ERROR:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
    };
};

export default bookReducer;
