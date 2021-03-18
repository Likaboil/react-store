import React from 'react';
import PropTypes from 'prop-types';
import './cart-table.css';

const Row = (props) => {
  const { item, index, onIncrease, onDecrease, onDelete } = props;
  const { count, title, price, total } = item;

  return (
    <tr>

      <td>{index}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>{price}</td>
      <td>{total}</td>

      <td>
        <button
            onClick = {() => onIncrease(item)}
            className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
            onClick = {() => onDecrease(item)}
            className="btn btn-outline-warning btn-sm float-right"
        >
          <i className="fa fa-minus-circle" />
        </button>
        <button
            onClick = {() => onDelete(item)}
            className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  item: PropTypes.shape({
    id:PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
  onIncrease: PropTypes.func,
  onDelete: PropTypes.func,
  onDecrease: PropTypes.func,
};

export default Row;
