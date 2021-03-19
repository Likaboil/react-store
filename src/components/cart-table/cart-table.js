import React from 'react';
import { connect } from 'react-redux';
import './cart-table.css';

import Row from './row';
import { cartActions, cartSelectors } from '../../store/reducers/cart';

const CartTable = (props) => {
  const { items, total, increaseItem, decreaseItem, deleteItem } = props;

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
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: cartSelectors.selectItems(state),
    total: cartSelectors.selectTotal(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseItem: (item) => dispatch(cartActions.increaseItem(item)),
    decreaseItem: (item) => dispatch(cartActions.decreaseItem(item)),
    deleteItem: (item) => dispatch(cartActions.deleteItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
