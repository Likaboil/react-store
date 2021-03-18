import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './header.css';

import ErrorBoundry from '../error-boundry';
import {
  getCartItemsAmount,
  getCartTotal
} from '../../store/reducers/cart/cart-selectors';

const Header = ({ amountItems, total }) => {

  return (
    <ErrorBoundry>
      <header className="shop-header row">
        <h3 className="visually-hidden">Store Header</h3>
        <nav className="navbar">
          <div className="container-md">
            <Link to="/"
                  className="nav-link">
              <span className="logo text-dark">Store</span>
            </Link>
            <Link to="/cart"
                  className="nav-link">
              <span className="shopping-cart text-dark">
                <i className="cart-icon fa fa-shopping-cart" />
                {amountItems} items (${total})
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </ErrorBoundry>
  );
};

Header.propTypes = {
  amountItems: PropTypes.number,
  total: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    amountItems: getCartItemsAmount(state),
    total: getCartTotal(state)
  };
};

export default connect(mapStateToProps)(Header);
