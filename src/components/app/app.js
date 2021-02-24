import React from 'react';
import  {
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';


import './app.css';

import Header from '../header';
import {
  HomePage,
 CartPage
} from '../pages';

const App = ({numItems, total}) => {
  return (
    <div>
      <Header numItems={numItems} total={total}/>
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

const mapStateToProps = (state) => {
  const { cartItems, orderTotal } = state.cartList;

  return {
    numItems: cartItems.reduce((totalCount, {count}) => totalCount + count, 0),
    total: orderTotal
  };
}

export default connect(mapStateToProps)(App);
