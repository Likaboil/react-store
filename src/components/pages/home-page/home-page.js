import React from 'react';

import BookListContainer from '../../../containers';
import ErrorBoundry from '../../error-boundry';

const HomePage = () => {

  return (
    <ErrorBoundry>
      <div className="container-md">
        <h2 className="visually-hidden">HomePage</h2>
        <BookListContainer />
      </div>
    </ErrorBoundry>
  );
};

export default HomePage;
