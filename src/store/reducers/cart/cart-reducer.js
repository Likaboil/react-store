import updateOrder from './cart-selectors';
import * as CartTypes from './cart-types';

const initialState = {
    cartItems: [],
    orderTotal: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.BOOKS_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
    case CartTypes.BOOK_REMOVES_FROM_CART:
      return updateOrder(state, action.payload, -1);
    case CartTypes.ALL_BOOKS_REMOVES_FROM_CART:
      const item = state.cartItems.find(({id}) =>id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  };
};

export default cartReducer;
