import React from 'react';
import  {
  Route,
  Switch
} from 'react-router-dom';

import './app.css';

import Header from '../header';
import {
  HomePage,
 CartPage
} from '../pages';

const App = () => {
  return (
    <div>
      <Header currentPage={1} onPageChange={() => 2}/>
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

export default App;
