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

const updateOrder = (state, bookId, quantity) => {
  const { cartItems }  = state.cartList;
  const { books } = state.bookList;

  const book = books.find((book) => book.id === bookId);
  const itemIdx = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIdx];

  const newItem = updateCartItem(book, item, quantity);
  const newItems = updateCartItems(cartItems, newItem, itemIdx)

  return {
    orderTotal: newItems.reduce((totalSum, {total}) => totalSum + total, 0),
    cartItems: newItems
  };
};

const updateCartList = (state, action) => {
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

export default updateCartList;
