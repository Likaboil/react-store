import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import ErrorBoundry from '../error-boundry';
const Header = () => {

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
                  Cart
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </ErrorBoundry>
  )
}

export default Header;
