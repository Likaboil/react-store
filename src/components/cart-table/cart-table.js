import React from 'react';
import './cart-table.css';

const CartTable = () => {

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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr key={1}>
            <td>title</td>
            <td>count</td>
            <td>$total</td>
            <td>price</td>
            <td>
              <button
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
              <button
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button
                className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
        </table>

      <div className="total">
        Total: $ total
      </div>
    </div>
  );
};

export default CartTable;
