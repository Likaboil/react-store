import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.BOOKS;

const getBooks = (state) => state[NAME_SPACE].books;
const getBooksLoading = (state) => state[NAME_SPACE].loading;
const getBooksError = (state) => state[NAME_SPACE].error

export {
  getBooks,
  getBooksLoading,
  getBooksError
};
