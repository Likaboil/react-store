import { createSelector } from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.CART;

const getCartItems = (state) =>  state[NAME_SPACE].cartItems;
const getCartTotal = (state) => state[NAME_SPACE].orderTotal;

const getCartItemsAmount = createSelector(
  getCartItems,
  (cartItems) => cartItems.reduce((totalCount, {count}) => totalCount + count, 0)
);

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  };

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  };

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    title = book.title,
    price = book.price,
    count = 0,
    total = 0
   }  = item;

  return {
    id,
    title,
    count: count + quantity,
    price: price,
    total: total + quantity*price
  };
};

const updateOrder = (state, book, quantity) => {
  const { cartItems } = state;

  const itemIdx = cartItems.findIndex(({id}) => id === book.id);
  const item = cartItems[itemIdx];

  const newItem = updateCartItem(book, item, quantity);
  const newItems = updateCartItems(cartItems, newItem, itemIdx)

  return {
    orderTotal: newItems.reduce((totalSum, {total}) => totalSum + total, 0),
    cartItems: newItems
  };
};


export {
  getCartItems,
  getCartTotal,
  getCartItemsAmount
};
export default updateOrder;
