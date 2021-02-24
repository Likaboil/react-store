import React from 'react';
import { connect } from 'react-redux';

import './cart-table.css';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../action';

const CartTable = ({ items, orderTotal,
                      onIncrease, onDecrease, onDelete}) => {

  const renderRow = (item, idx) => {
    const {id, count, title, price, total} = item;

    return (
      <tr key={id}>

        <td>{++idx}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{price}</td>
        <td>{total}</td>

        <td>
          <button
              onClick = {() => onIncrease(id)}
              className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
              onClick = {() => onDecrease(id)}
              className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
              onClick = {() => onDelete (id)}
              className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

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
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: ${orderTotal}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cartItems, orderTotal } = state.cartList;

  return {
    items: cartItems,
    orderTotal: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
