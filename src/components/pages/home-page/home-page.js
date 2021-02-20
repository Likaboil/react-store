import React from 'react';

import BookList from '../../book-list';
import ErrorBoundry from '../../error-boundry';

const HomePage = () => {

  return (
    <ErrorBoundry>
      <div className="container-md">
        <h2 className="visually-hidden">HomePage</h2>
        <BookList />
      </div>
    </ErrorBoundry>
  );
};

export default HomePage;
