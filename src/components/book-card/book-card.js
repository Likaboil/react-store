import React from 'react';
import './book-card.css';

import ErrorBoundry from '../error-boundry';

const BookCard = (props) => {
  const { book, onAddtoCart } = props;
  const { title, author, price, coverImage } = book;

  return (
    <ErrorBoundry>
      <div className="book-card">
        <div className="book-cover">
          <img src={coverImage} alt="cover" />
        </div>
        <div className="book-details">
          <span className="book-title">{title}</span>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button
            onClick={onAddtoCart}
            className="btn btn-info add-to-cart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </ErrorBoundry>
  );
};

export default BookCard;
