const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {

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

const updateCartItem = (book, item = {}) => {

  const {
    id = book.id,
    title = book.title,
    price = book.price,
    count = 0,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    price: price,
    total: total + price
  };
};

const updateOrder = (state, bookId) => {
  const { books, cartItems}  = state;
  const book = books.find((book) => book.id === bookId); //find book by id
  const itemIdx = cartItems.findIndex(({id}) => id === bookId);
  const item = state.cartItems[itemIdx];

  const newItem = updateCartItem(book, item);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIdx)
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'BOOKS_ADDED_TO_CART':
      return updateOrder(state, action.payload)

    default:
      return state;
  }
};

export default reducer;
