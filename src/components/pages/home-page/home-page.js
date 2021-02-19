import React from 'react';

import { BookList } from '../page-components';

const HomePage = () => {

  const books = [
    {
      title: 'Book1',
      author: 'Author'
    },
    {
      title: 'Book2',
      author: 'Author'
    }
  ];

  return (
    <div className="container-md">
      <h2 className="visually-hidden">HomePage</h2>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
