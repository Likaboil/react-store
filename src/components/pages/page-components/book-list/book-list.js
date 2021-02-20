import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

import BookListItem from '../book-list-item';
import {withBookstoreService} from '../../../hoc';
import {
  booksLoaded,
  booksRequested,
  booksError
} from '../../../../action';
import { bindActionCreators } from 'redux';
import { compose } from '../../../../utils';
import Spinner from '../../../spinner';
import ErrorIndicator from '../../../error-indicator';


class BookList  extends Component {

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

    return (
      <ul className="list-group list-group-flush">
        {
          books.map((book) => {
            return (
              <li key={book.id}
                  className="list-group-item">
                <BookListItem book={book}/>
              </li>
            );
          })
        }
      </ul>
    );
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
// booksLoaded, booksRequested is action-creator from 'src/action/

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: () => {
      dispatch(booksRequested()); // show spinner until get data

      bookstoreService.getBooks()  // recieve data
       .then((data) => dispatch(booksLoaded(data)))  // dispatch action to store
       .catch((error) => dispatch(booksError(error)));
    }
  }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);
