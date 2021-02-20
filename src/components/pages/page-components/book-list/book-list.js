import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

import BookListItem from '../book-list-item';
import {withBookstoreService} from '../../../hoc';
import { booksLoaded } from '../index';

class BookList  extends Component {

  componentDidMount() {
    // recieve data
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();

    // dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {

    const { books } = this.props;

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
    books: state.books
  };
}

// dispatch data changes
// booksLoaded is action-creator from 'src/action/

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBoks) => {
      dispatch(booksLoaded(newBoks));
    }
  };
}

export default withBookstoreService()(
            connect(mapStateToProps, mapDispatchToProps)(BookList)
            );
