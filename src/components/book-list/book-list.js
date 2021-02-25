import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../action';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, odAddedtoCart }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        books.map((book) => {
          return (
            <li key={book.id}
                className="list-group-item">
              <BookListItem
                book={book}
                odAddedtoCart={() => odAddedtoCart(book.id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

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
  const { books, loading, error } = state.bookList;
  return {
    books: books,
    loading: loading,
    error: error
  };
};

// dispatch data changes
// fetchBooks is action-creator from 'src/action/

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    odAddedtoCart: (id) => dispatch(bookAddedToCart(id))
  }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);
