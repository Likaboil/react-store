import React from 'react';

const BookList = ({books}) => {

  return (
    <ul className="list-group list-group-flush">
      {
        books.map((book) => {
          return (
            <li key={book.title}
                className="list-group-item">
              <span className="">{book.title}</span>
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
