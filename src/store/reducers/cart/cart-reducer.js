import * as CartTypes from './cart-types';
import { increaseItem, decreaseItem, deleteItem,  } from './lib';

const initialState = {
    items: [],
    total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.INC_ITEM_CART:
      const { items, total } = increaseItem(state.items, action.payload);
      return {
        ...state,
        items,
        total,
      };
    case CartTypes.DEC_ITEM_CART:
            return {
        ...state,
        items: decreaseItem(state.items, action.payload),
        total: state.total - action.payload.price,
      };
    case CartTypes.DEL_ITEM_CART:
      return {
        ...state,
        items: deleteItem(state.items, action.payload),
        total: state.total - action.payload.total,
      };
    default:
      return state;
  };
};

export default cartReducer;
