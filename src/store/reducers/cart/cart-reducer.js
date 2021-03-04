import updateOrder from './cart-selectors';

const cartReducer = (state, action) => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  };

  switch (action.type) {
    case 'BOOKS_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVES_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOKS_REMOVES_FROM_CART':
      const item = state.cartList.cartItems.find(({id}) =>id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.cartList;
  };
};

export default cartReducer;
