import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

import BookListItem from '../book-list-item';

class BookList  extends Component {

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

export default connect(mapStateToProps)(BookList);
