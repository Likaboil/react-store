import { setBooks, setBooksStatus } from './books-actions';
import { DataStatus } from '../../../constants/status';

export const fetchBooks = () => (dispatch, getState, api) => {

  return api.getBooks()  // recieve data
    .then((data) => {
      // show spinner until get data
      dispatch(setBooksStatus(DataStatus.LOADING));
      // dispatch data to store
      dispatch(setBooks(data));
      dispatch(setBooksStatus(DataStatus.SUCCESS));
    })
  .catch(() => {
    dispatch(setBooksStatus(DataStatus.ERROR));
  });
};
