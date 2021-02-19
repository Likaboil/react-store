import React from 'react';
import './book-list.css';

import BookListItem from '../book-list-item';

const BookList = ({books}) => {

  return (
    <ul className="list-group list-group-flush">
      {
        books.map((book) => {
          return (
            <li key={book.id}
                className="list-group-item">
              <BookListItem book={book}/>
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
