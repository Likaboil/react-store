import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withBookstoreService } from '../components/hoc';
import { booksOperations } from '../store/reducers/books/';
import { bookAddedToCart } from '../store/reducers/cart/cart-actions';
import { compose } from '../lib';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import BookList from '../components/book-list';
import {
  getBooks,
  getBooksLoading,
  getBooksError
} from '../store/reducers/books/books-selectors';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, odAddedtoCart} = this.props;

    if (loading) {
      return <Spinner />;
    };

    if (error) {
      return <ErrorIndicator />;
    };

    return <BookList
              books={books}
              odAddedtoCart={odAddedtoCart}
           />
  }
};

// describes what data the component will receive from redax
const mapStateToProps = (state) => {

  return {
    books: getBooks(state),
    loading: getBooksLoading(state),
    error: getBooksError(state)
  };
};

// dispatch data changes
const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return bindActionCreators(
    {
      fetchBooks: booksOperations(bookstoreService),
      odAddedtoCart: bookAddedToCart
  }, dispatch)
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);
