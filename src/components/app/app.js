import React from 'react';
import './app.css';

import {
  HomePage,
 CartPage
} from '../pages';

const App = () => {
  return (
    <main>
      <h1>Store</h1>
      <HomePage />
      <CartPage />
    </main>
  );
};

export default App;
