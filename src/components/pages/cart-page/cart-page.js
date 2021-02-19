import React from 'react';

import { CartTable } from '../page-components';
import ErrorBoundry from '../../error-boundry';

const CartPage = () => {
  return (
    <ErrorBoundry>
      <div className="container-md">
        <h2 className="visually-hidden">CartPage</h2>
        <CartTable />
      </div>
    </ErrorBoundry>
  );
};

export default CartPage;
