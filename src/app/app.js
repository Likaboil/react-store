import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './app.css';

import Header from '../components/header';
import {
  HomePage,
  CartPage
} from '../components/pages';
import {
  getCartItemsAmount,
  getCartTotal
} from '../store/reducers/cart/cart-selectors';

const App = ({ amountItems, total }) => {
  return (
    <div>
      <Header amountItems={amountItems} total={total}/>
      <main>
        <h1 className="visually-hidden">Book-Store</h1>
        <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />

        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {
  amountItems: PropTypes.number,
  total: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    amountItems: getCartItemsAmount(state),
    total: getCartTotal(state)
  };
}

export default connect(mapStateToProps)(App);
