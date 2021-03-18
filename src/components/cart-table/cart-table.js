import React from 'react';
import { connect } from 'react-redux';

import './cart-table.css';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../store/reducers/cart/cart-actions';
import {
  getCartItems,
  getCartTotal
} from '../../store/reducers/cart/cart-selectors';
import Row from './row';

const CartTable = (props) => {
  const { items, orderTotal,  onIncrease, onDecrease, onDelete } = props;

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">

        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <Row
              key={`row-${item.id}`}
              item={item}
              index={++index}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>

      <div className="total">
        Total: ${orderTotal}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: getCartItems(state),
    orderTotal: getCartTotal(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (item) => dispatch(bookAddedToCart(item)),
    onDecrease: (item) => dispatch(bookRemovedFromCart(item)),
    onDelete: (item) => dispatch(allBooksRemovedFromCart(item)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
