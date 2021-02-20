import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../action';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books}) => {
  return (
    <ul className="list-group list-group-flush">
      {
        books.map((book) => {
          return (
            <li key={book.id}
                className="list-group-item">
              <BookListItem book={book} />
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
    const {books, loading, error} = this.props;

    if (loading) {
      return <Spinner />;
    };

    if (error) {
      return <ErrorIndicator />;
    };

    return <BookList books={books} />
  }
};

// describes what data the component will receive from redax
const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  };
}

// dispatch data changes
// fetchBooks is action-creator from 'src/action/

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);
