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

const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    title = book.title,
    price = book.price,
    count = 0,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    price: price,
    total: total + quantity*price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems}  = state;
  const book = books.find((book) => book.id === bookId); //find book by id
  const itemIdx = cartItems.findIndex(({id}) => id === bookId);
  const item = state.cartItems[itemIdx];

  const newItem = updateCartItem(book, item, quantity );

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
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVES_FROM_CART':
      return updateOrder(state, action.payload, -1);

    default:
      return state;
  }
};

export default reducer;
