import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import BookList from '../components/book-list';
import { selectBooks, selectStatus} from '../store/reducers/books/books-selectors';
import { increaseItem } from '../store/reducers/cart/cart-actions';
import { DataStatus } from '../constants/status';
import { fetchBooks } from '../store/reducers/books/books-operations';


class BookListContainer extends Component {

  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddtoCart: PropTypes.func,
    status: PropTypes.string,
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, status, onAddToCart} = this.props;

    if (status === DataStatus.LOADING) {
      return <Spinner />;
    };

    if (status === DataStatus.ERROR) {
      return <ErrorIndicator />;
    };

    if (!books.length) {
      return <p>No available books!</p>;
    };

    return <BookList
              books={books}
              onAddtoCart={onAddToCart}
           />
  }
};

// describes what data the component will receive from redax
const mapStateToProps = (state) => {
  return {
    books: selectBooks(state),
    status: selectStatus(state),
  };
};

// dispatch data changes
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    onAddToCart: (item) => dispatch(increaseItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
