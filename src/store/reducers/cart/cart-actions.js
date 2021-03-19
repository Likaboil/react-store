import * as CartTypes from './cart-types';
import { makeActionCreator } from '../../../lib';

const increaseItem = makeActionCreator(CartTypes.INC_ITEM_CART);
const decreaseItem = makeActionCreator(CartTypes.DEC_ITEM_CART);
const deleteItem = makeActionCreator(CartTypes.DEL_ITEM_CART);

export {
  increaseItem,
  decreaseItem,
  deleteItem
};
