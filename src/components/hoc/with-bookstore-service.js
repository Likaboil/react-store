import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-context';

const withBookstoreService = (props) => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props}
                        bookstoreService={bookstoreService}
              />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
};

export default withBookstoreService;
