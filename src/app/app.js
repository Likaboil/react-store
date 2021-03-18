import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';

import Header from '../components/header';
import {
  HomePage,
  CartPage
} from '../components/pages';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <h1 className="visually-hidden">Book-Store</h1>
        <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />

        </Switch>
      </main>
    </Router>
  );
};

export default App;
