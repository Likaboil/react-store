import React from 'react';
import PropTypes from 'prop-types';
import './book-list.css';

import BookListItem from '../book-list-item';

const BookList = ({ books, odAddedtoCart }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        books.map((book) => {
          return (
            <li key={book.id}
                className="list-group-item">
              <BookListItem
                book={book}
                odAddedtoCart={() => odAddedtoCart(book.id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

BookList.propTypes = {
  odAddedtoCart: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookList;
