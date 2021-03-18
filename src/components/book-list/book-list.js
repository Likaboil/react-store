import React from 'react';
import './book-list.css';

import BookCard from '../book-card';

const BookList = ({ books, odAddedtoCart }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        books.map((book) => {
          return (
            <li key={book.id}
                className="list-group-item">
              <BookCard
                book={book}
                odAddedtoCart={() => odAddedtoCart(book)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
