import React from 'react';

import { BookList } from '../page-components';
import ErrorBoundry from '../../error-boundry';

const HomePage = () => {

  const books = [
    {
      id: 1,
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      title: 'Book1',
      author: 'Author'
    },
    {
      id: 2,
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      title: 'Book2',
      author: 'Author'
    }
  ];

  return (
    <ErrorBoundry>
      <div className="container-md">
        <h2 className="visually-hidden">HomePage</h2>
        <BookList books={books} />
      </div>
    </ErrorBoundry>
  );
};

export default HomePage;
