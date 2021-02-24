import React from 'react';
import './book-list-item.css';

import ErrorBoundry from '../error-boundry';

const BookListItem = ({book, odAddedtoCart}) => {

  const {title, author, price, coverImage} = book;

  return (
    <ErrorBoundry>
      <div className="book-list-item">
        <div className="book-cover">
          <img src={coverImage} alt="cover" />
        </div>
        <div className="book-details">
          <span className="book-title">{title}</span>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button
              onClick={odAddedtoCart}
              className="btn btn-info add-to-cart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </ErrorBoundry>
  )
};

export default BookListItem;
